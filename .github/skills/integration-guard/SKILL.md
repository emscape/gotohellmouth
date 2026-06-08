---
name: integration-guard
description: "Use when: connecting two modules for the first time, replacing a stub with a real implementation, or verifying that two independently-developed pieces are compatible."
argument-hint: "Optional: producer module path, consumer module path"
user-invocable: true
---

# Integration Guard Skill

## What This Skill Does

Checks runtime wiring compatibility between two modules before they are connected or before a stub is replaced with a real implementation.

## When to Use

- Before connecting two independently-developed modules
- When replacing a mock or stub with a real implementation
- When integration tests are failing and the cause is unclear
- After two separate work streams merge

## Output

An interface audit, assumption gaps, missing tests, and a readiness verdict.
