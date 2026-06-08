---
name: release-readiness
description: "Use when: about to tag a release, cut a branch, or ship a distributable. Runs all required gates and emits a PASS/FAIL checklist."
argument-hint: "Optional: release type (alpha | beta | stable)"
user-invocable: true
---

# Release Readiness Skill

## What This Skill Does

Validates that the project is in a shippable state by running through the gates before a release is tagged or a build is distributed.

## Gates

### Gate 1: Test / Smoke Suite
- All tests or smoke checks pass (`npm run build` is the current repo gate)
- No skipped tests without documented reason

### Gate 2: Type Safety / Static Analysis
- Type checker exits 0 (`npx tsc --noEmit`)
- No linting errors in production code

### Gate 3: Security
- No hardcoded secrets or credentials
- Dependency audit clean (`npm audit --audit-level=high`)

### Gate 4: Architecture
- No boundary violations
- No business logic in UI layer
- No circular dependencies

### Gate 5: Build
- Build exits 0 (`npm run build`)
- No console errors in production build

### Gate 6: Completeness
- Acceptance criteria met
- No stubs or placeholder TODOs in production code

## Output

Produce a markdown checklist with PASS/FAIL per gate and a final verdict.
