# Aptixon — Next.js project

This is a Next.js 14 App Router project for the Aptixon unified web platform prototype.

## Run locally

Requirements: Node.js 18.17+ (Node.js 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Project structure

```text
aptixon/
├── app/                 # App Router routes and shared page styles
├── components/pages/    # Reusable React page components
├── components/legacy/   # Legacy prototype bridge components
├── lib/
│   ├── config/          # Shared application configuration
│   ├── http/            # Route-level domain helpers
│   ├── dal.ts           # Server data-access boundary
│   ├── env.ts           # Environment variable access
│   ├── errors.ts        # Shared application errors
│   └── validations.ts   # Zod request schemas
├── prisma/              # Database schema and migrations
├── public/legacy/       # Existing UI migration bridge
└── tests/               # Vitest and Playwright coverage
```

## Validation commands

```bash
npm run typecheck
npm test
npm run build
```

## Important implementation note

The Next.js App Router is the project entry point. To preserve the complete interactions from the first HTML prototype without silently dropping features, the existing UI is temporarily served from `public/legacy/index.html` inside a same-origin iframe.

This is a migration bridge, not the final component architecture. For production, refactor the legacy screens into React components under `app/` (or feature folders), replace demo state with API calls, and implement the backend integrations specified by the Aptixon SRS. Authentication, OTP delivery, Aadhaar/face verification, file storage, approvals, and payout processing are not production-connected in this prototype.

## Suggested next migration steps

1. Move the corporate homepage into reusable React components.
2. Create App Router routes for `/login`, `/admin`, `/employee`, and `/worker`.
3. Add typed API clients and server-side authorization.
4. Connect PostgreSQL, Redis, email/SMS providers, and secure file storage.
5. Add automated tests for role permissions, contract expiry, reimbursement approvals, and timesheet payout eligibility.
