# HellmouthCon Gemini Notes

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

## Rules
- Keep content in `src/data/` and UI in `src/components/`.
- Reuse `useMySchedule` for device-local saved events.
- Preserve the existing dark crimson aesthetic unless told otherwise.
- Do not invent guests, schedule sessions, or venue facts.
- If the best approach is unclear or you are unsure, ask Emily before proceeding.

## Validation
- `npm run build`
- `npm run lint`
- `npx tsc --noEmit`
- `npm audit --audit-level=high` after dependency changes
