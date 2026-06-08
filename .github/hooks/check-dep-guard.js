#!/usr/bin/env node
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = resolve(SCRIPT_DIR, 'config.json');

let config;
try {
  config = JSON.parse(readFileSync(CONFIG_PATH, 'utf8'));
} catch {
  process.stderr.write('[dep-guard] WARN: config.json not found or invalid — skipping dep guard\n');
  process.exit(0);
}

if (!config.dep_guard?.enabled) {
  process.exit(0);
}

const patterns = config.dep_guard.warn_patterns ?? [];
if (patterns.length === 0) {
  process.exit(0);
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

  const matched = patterns.some(pattern =>
    command.toLowerCase().includes(pattern.toLowerCase())
  );

  if (matched) {
    process.stderr.write(`⚠️  DEP-GUARD: ${config.dep_guard.custom_message || 'A dependency install was detected.'}\n`);
    process.stderr.write(`   Command : ${command}\n`);
  }

  process.exit(0);
});
