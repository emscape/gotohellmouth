---
name: performance-audit
description: "Use when: reviewing code for structural performance problems before shipping, investigating user-reported slowness, or checking that a new data-processing feature won't degrade at scale."
argument-hint: "Optional: file path or feature name to audit"
user-invocable: true
---

# Performance Audit Skill

## What This Skill Does

Identifies structural performance problems in code before they ship. Focuses on patterns that cause noticeable degradation with real data.

## When to Use

- Before shipping a feature that processes collections, files, or unbounded data
- When users report the app is slow or unresponsive
- After implementing a new data-loading or rendering path
- When a function is called on every render, tick, or event

## Output

A report of P1/P2/P3 findings with worst-case estimates and specific fixes.
