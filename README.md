# Abigail's Cheesecakes

Full-stack platform for a homemade cheesecake business — public storefront, admin panel, and (in a future phase) a mobile app.

Built as a portfolio piece exploring modern full-stack TypeScript in a monorepo: Next.js App Router with Server Components and Server Actions, Supabase Postgres with Row Level Security, and Turborepo for task orchestration across a future web + mobile split.

## Status

**Block 0 — Foundation Setup.** Monorepo scaffolded and wired end-to-end. Blocks 1–5 still to come; see `PROJECT_BLUEPRINT.md` for the roadmap.

## Tech stack

- **Frontend:** Next.js 16 (App Router), TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Supabase (Postgres, Auth, Storage, Row Level Security) — added in Block 1
- **Monorepo:** Turborepo + pnpm workspaces
- **Deployment:** Vercel (planned for Block 4)

## Repository structure

```
abigail-cheesecakes/
├── apps/
│ └── web/ # Next.js storefront + admin
├── packages/
│ ├── database/ # Supabase client, generated types, queries
│ ├── validation/ # Zod schemas shared across apps
│ └── shared/ # Domain constants and utilities
└── supabase/ # SQL migrations, RLS policies (Block 1)
```

## Local development

**Prerequisites:** Node.js 20+, pnpm 11+.

```bash
pnpm install
pnpm dev          # runs apps/web at http://localhost:3000
pnpm build        # production build across the monorepo
pnpm typecheck    # strict typecheck across all packages
pnpm lint         # ESLint across all packages
pnpm format       # Prettier auto-format
```

## Governance

Development follows a block-by-block plan documented in `PROJECT_BLUEPRINT.md` and `CHAT_WORKFLOW.md`. Each block has a Definition of Done that must be met before starting the next.
