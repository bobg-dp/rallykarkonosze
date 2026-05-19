function createError(message, statusCode) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}

function normalizeItems(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload.items)) {
    return payload.items;
  }

  if (Array.isArray(payload.results)) {
    return payload.results;
  }

  if (Array.isArray(payload.data)) {
    return payload.data;
  }

  return [];
}

export class NoticeBoardClient {
  constructor({ apiUrl, apiKey, authHeader }) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.authHeader = authHeader || "x-api-key";
  }

  async fetchItems(query = {}) {
    if (!this.apiUrl) {
      throw createError("NOTICE_BOARD_API_URL is not configured.", 503);
    }

    const upstreamUrl = new URL(this.apiUrl);

    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach((item) => upstreamUrl.searchParams.append(key, item));
        return;
      }

      upstreamUrl.searchParams.set(key, value);
    });

    const headers = {
      Accept: "application/json",
    };

    if (this.apiKey) {
      headers[this.authHeader] = this.apiKey;
    }

    const response = await fetch(upstreamUrl, { headers });

    if (!response.ok) {
      throw createError(
        `Notice board upstream request failed with status ${response.status}.`,
        502,
      );
    }

    const payload = await response.json();

    return {
      fetchedAt: new Date().toISOString(),
      source: upstreamUrl.toString(),
      items: normalizeItems(payload),
      raw: payload,
    };
  }
}
