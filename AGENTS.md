# HellmouthCon Repo Guidance

## Project
- **Name**: HellmouthCon
- **Stack**: Next.js 15 / React 19 / TypeScript / Tailwind CSS
- **Primary language**: TypeScript

## Non-goals
- No backend service
- No mobile app
- No auth system
- No realtime collaboration
- No invented 2026 schedule data

## Key Files
- `src/app/page.tsx`
- `src/app/schedule/page.tsx`
- `src/app/map/page.tsx`
- `src/app/my-schedule/page.tsx`
- `src/components/map/*`
- `src/components/schedule/*`
- `src/data/*`
- `src/hooks/useMySchedule.ts`

## Working Rules
- Keep UI in `src/components/` and data in `src/data/`.
- Reuse `useMySchedule` for local-device saved events.
- Preserve the existing dark crimson visual style unless explicitly asked to redesign it.
- Do not invent guests, schedule sessions, or venue facts.
- Prefer small, focused edits.
- If the best approach is unclear or you are unsure, ask Emily before proceeding.

## Validation
- `npm run build`
- `npm run lint`
- `npx tsc --noEmit`
- `npm audit --audit-level=high` after dependency changes

## Commit Standards

- Use a concise subject line with a scope when useful.
- Include a `WHY:` section that explains the rationale.
- Include an `EXPECTED:` section that names the observable outcome.
- Do not add tool attribution or co-authorship signatures.
