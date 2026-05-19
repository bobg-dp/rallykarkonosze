import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_STATE = {
  totalVisits: 0,
  updatedAt: null,
};

export class VisitCounterStore {
  constructor(filePath) {
    this.filePath = filePath;
    this.state = { ...DEFAULT_STATE };
    this.writeQueue = Promise.resolve();
    this.ready = this.load();
  }

  async load() {
    await fs.mkdir(path.dirname(this.filePath), { recursive: true });

    try {
      const fileContent = await fs.readFile(this.filePath, "utf8");
      const parsedState = JSON.parse(fileContent);

      this.state = {
        totalVisits: Number(parsedState.totalVisits ?? 0),
        updatedAt: parsedState.updatedAt ?? null,
      };
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }

      await this.persist();
    }
  }

  async getSnapshot() {
    await this.ready;
    return { ...this.state };
  }

  async increment(metadata = {}) {
    await this.ready;

    this.writeQueue = this.writeQueue.then(async () => {
      this.state = {
        totalVisits: this.state.totalVisits + 1,
        updatedAt: new Date().toISOString(),
        lastVisit: {
          path: metadata.path,
          userAgent: metadata.userAgent,
        },
      };

      await this.persist();

      return { ...this.state };
    });

    return this.writeQueue;
  }

  async persist() {
    await fs.writeFile(
      this.filePath,
      `${JSON.stringify(this.state, null, 2)}\n`,
      "utf8",
    );
  }
}
