#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = resolve(SCRIPT_DIR, 'config.json');
const CWD = process.cwd();

function log(msg) {
  process.stderr.write(`[script-guard] ${msg}\n`);
}

let config;
try {
  config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
} catch {
  log(`WARN: config.json not found at ${CONFIG_PATH} — skipping script guard`);
  process.exit(0);
}

if (!config.script_guard?.enabled) {
  process.exit(0);
}

const { package_json_paths = ['package.json'], on_missing = 'warn' } = config.script_guard;
const availableScripts = new Set();

for (const pkgPath of package_json_paths) {
  const fullPath = resolve(CWD, pkgPath);
  if (!existsSync(fullPath)) continue;
  try {
    const pkg = JSON.parse(readFileSync(fullPath, 'utf8'));
    for (const name of Object.keys(pkg.scripts ?? {})) {
      availableScripts.add(name);
    }
  } catch {
    log(`WARN: Could not parse ${fullPath} — skipping`);
  }
}

const NOOP_PATTERNS = [
  /^\s*true\s*$/,
  /^\s*exit\s+0\s*$/,
  /^\s*:\s*$/,
  /^\s*echo\s*""\s*$/,
  /^\s*echo\s*''\s*$/,
];

function isNoOp(command) {
  return NOOP_PATTERNS.some(pattern => pattern.test(command));
}

function extractScriptName(command) {
  const runMatch = command.match(/\b(?:npm|pnpm|yarn)\s+run\s+([^\s;&|]+)/);
  if (runMatch) return runMatch[1];
  return null;
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

  const command = payload?.tool_input?.command ?? '';
  if (!command) process.exit(0);

  if (isNoOp(command.trim())) {
    process.stderr.write(`⚠️  SCRIPT-GUARD: Command appears to be a no-op: ${command.trim()}\n`);
    process.exit(0);
  }

  if (availableScripts.size === 0) {
    process.exit(0);
  }

  const scriptName = extractScriptName(command);
  if (!scriptName) {
    process.exit(0);
  }

  if (!availableScripts.has(scriptName)) {
    const severity = on_missing === 'block' ? '❌' : '⚠️ ';
    process.stderr.write(`\n${severity} SCRIPT-GUARD: Script "${scriptName}" not found in package.json\n`);
    process.stderr.write(`   Command  : ${command}\n`);
    process.stderr.write(`   Available: ${[...availableScripts].sort().join(', ') || '(none found)'}\n\n`);
    if (on_missing === 'block') {
      process.exit(1);
    }
  }

  process.exit(0);
});
