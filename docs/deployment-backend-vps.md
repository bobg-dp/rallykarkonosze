# Backend Deployment On VPS

This project can run with the static frontend deployed separately and the backend hosted on a VPS.

The current assumed production setup is:

- Frontend: `https://rallykarkonosze.pl`
- Backend API: `https://rallykarkonosze.rallydevil.com`

## What Changes In This Model

- The frontend is built statically from `dist/`.
- The backend runs as a long-lived Node process from `server/index.js`.
- The frontend should call the backend through an absolute `VITE_API_BASE_URL`, here `https://rallykarkonosze.rallydevil.com`.
- The backend must explicitly allow the frontend origin through `CORS_ALLOWED_ORIGINS`.

## Backend Environment

The backend now uses two repo-level runtime files:

- `backend.env` for production-like backend execution
- `backend.local.env` for local testing and development

By default:

- `npm run dev:backend` loads `backend.env` and then overrides it with `backend.local.env`
- `npm run start:backend` loads `backend.env` only

If you prefer to keep secrets outside the repo on the VPS, set `BACKEND_ENV_FILE` or use `systemd` `EnvironmentFile` as before.

Example `backend.env` values for VPS:

```env
PORT=8787
CORS_ALLOWED_ORIGINS=https://rallykarkonosze.pl
NOTICE_BOARD_API_URL=https://example.com/api/notices
NOTICE_BOARD_API_KEY=
NOTICE_BOARD_AUTH_HEADER=x-api-key
```

If the frontend will also be available under `https://www.rallykarkonosze.pl`, append that origin as well.

Example `backend.local.env` values for local tests:

```env
PORT=8787
CORS_ALLOWED_ORIGINS=http://localhost:5173
NOTICE_BOARD_API_URL=
NOTICE_BOARD_API_KEY=
NOTICE_BOARD_AUTH_HEADER=x-api-key
```

## Frontend Build Environment

When building the frontend for production, set:

```env
VITE_API_BASE_URL=https://rallykarkonosze.rallydevil.com
```

If the frontend is built in CI or on a different machine than the VPS, this variable must be present there during `npm run build`.

## Suggested VPS Layout

- Application directory: `/var/www/rallykarkonosze`
- Backend process working directory: `/var/www/rallykarkonosze`
- Backend service user: dedicated non-root user such as `rally`
- Backend data file: `server/data/visits.json`

## Install And Run

1. Upload the repository to the VPS.
2. Run `npm ci --omit=dev` in the project root.
3. Create `/etc/rallykarkonosze/backend.env`.
4. Install the systemd unit from `server/deploy/systemd/rallykarkonosze-backend.service.example`.
5. Install the nginx config from `server/deploy/nginx/rallykarkonosze-api.conf.example`.
6. Start the service and test `https://rallykarkonosze.rallydevil.com/api/health`.

## Important Operational Notes

- `server/data/visits.json` must be writable by the service user.
- The current visit counter is file-based. It works on a single VPS instance, but it is not the right persistence model for multiple backend instances.
- Do not expose the Node process directly to the internet. Put nginx in front of it and terminate TLS there.
- Add an HTTPS certificate for `rallykarkonosze.rallydevil.com`, for example with Let's Encrypt.
