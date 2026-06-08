#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = resolve(SCRIPT_DIR, 'config.json');

function log(msg) {
  process.stderr.write(`[empty-test-guard] ${msg}\n`);
}

let config;
try {
  config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
} catch {
  log(`WARN: config.json not found at ${CONFIG_PATH} — skipping empty test check`);
  process.exit(0);
}

if (!config.empty_test_guard?.enabled) {
  process.exit(0);
}

const {
  test_file_patterns = ['*.test.*', '*.spec.*'],
  block_empty_describe = true,
  block_empty_it = true,
  block_todo_tests = false,
} = config.empty_test_guard;

function matchesPattern(filename, pattern) {
  const regex = new RegExp('^' + pattern.replace(/\./g, '\\.') .replace(/\*/g, '[^/]*') + '$');
  return regex.test(filename);
}

function isTestFile(filePath) {
  const name = basename(filePath);
  return test_file_patterns.some(pattern => matchesPattern(name, pattern));
}

const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  let payload;
  try {
    payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    process.exit(0);
  }

  const filePath = (payload?.tool_input?.file_path ?? '').replace(/\\/g, '/');
  const content = payload?.tool_input?.content ?? '';

  if (!filePath || !content) process.exit(0);
  if (!isTestFile(filePath)) process.exit(0);

  const violations = [];

  if (block_empty_describe) {
    const emptyDescribe = /\b(?:describe|suite)\s*\([^)]*\)\s*,\s*\(\s*\)\s*=>\s*\{\s*\}/g;
    const matches = content.match(emptyDescribe);
    if (matches) {
      violations.push(`Empty describe/suite block (${matches.length} found)`);
    }
  }

  if (block_empty_it) {
    const emptyIt = /\b(?:it|test)\s*\([^)]*\)\s*,\s*(?:async\s*)?\(\s*\)\s*=>\s*\{\s*\}/g;
    const matches = content.match(emptyIt);
    if (matches) {
      violations.push(`Empty it/test block (${matches.length} found)`);
    }
  }

  if (block_todo_tests) {
    const todoTest = /\b(?:it|test)\.todo\s*\(/g;
    const matches = content.match(todoTest);
    if (matches) {
      violations.push(`it.todo/test.todo (${matches.length} found)`);
    }
  }

  const hasAssertions = /\b(?:expect|assert)\s*\(/.test(content);
  const hasTestBlocks = /\b(?:it|test)\s*\(/.test(content);
  if (hasTestBlocks && !hasAssertions) {
    violations.push('Test file contains test blocks but no expect/assert calls');
  }

  if (violations.length > 0) {
    process.stderr.write('\n❌ EMPTY TEST GUARD — theater testing detected\n\n');
    violations.forEach(v => process.stderr.write(`   • ${v}\n`));
    process.stderr.write('\n');
    process.exit(1);
  }

  process.exit(0);
});
