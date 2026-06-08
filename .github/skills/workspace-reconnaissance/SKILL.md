---
name: workspace-reconnaissance
description: "Use when: asking questions about your repos, onboarding to a large workspace, or planning cross-project changes. Scans all projects to detect tech stacks, dependencies, and inter-service relationships. Generates a comprehensive markdown landscape report."
argument-hint: "Optional: focus area (e.g., 'tech debt', 'modernization', 'dependencies', or leave blank for full scan)"
user-invocable: true
---

# Workspace Reconnaissance

## What This Skill Does

Performs a comprehensive scan of your entire workspace to generate a technology landscape report. Discovers:
- All projects and their locations
- Tech stacks and languages
- Key frameworks and libraries
- Project dependencies and inter-service relationships
- Build systems and deployment targets
- Modernization opportunities and tech debt indicators

## When to Use

- Onboarding to a new workspace
- Asking project questions
- Planning cross-project changes
- Architecture planning
- Modernization assessment
- Technology inventory

## Procedure

1. Discover projects in the workspace
2. Extract metadata for each project
3. Map dependencies between projects
4. Generate a markdown landscape report
5. Identify hotspots and modernization opportunities

## Output

A comprehensive markdown report saved to `.github/reports/workspace-landscape-{timestamp}.md`.
