# HellmouthCon Claude Notes

## Platform
This project runs on **Windows**. Use standard Windows path conventions in commands and file references.

## Project Context
- **Project**: HellmouthCon
- **Tech stack**: Next.js 15 / React 19 / TypeScript / Tailwind CSS
- **Primary language**: TypeScript
- **Non-goals**: No backend service, no mobile app, no auth system, no realtime collaboration, and no invented 2026 schedule data.

## Key Files
- `src/app/page.tsx`
- `src/app/schedule/page.tsx`
- `src/app/map/page.tsx`
- `src/app/my-schedule/page.tsx`
- `src/components/map/*`
- `src/components/schedule/*`
- `src/data/*`
- `src/hooks/useMySchedule.ts`

## Terminal Discipline
Before running a terminal command, state why it is needed and what it will do.

## Working Rules
- Keep the app-router structure intact.
- Reuse `useMySchedule` for saved events on the local device.
- Do not invent schedule or guest data.
- Preserve the existing visual language unless a change explicitly asks for a redesign.
- Prefer small, focused changes.
- If the best approach is unclear or you are unsure, ask Emily before proceeding.

## Validation
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npx tsc --noEmit`
- Audit: `npm audit --audit-level=high` after dependency changes
