#!/usr/bin/env node
const path = require('path');

const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  let input;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    process.exit(0);
  }

  const filePath = input?.tool_input?.file_path || '';
  const baseName = path.basename(filePath);

  if (baseName === '.env' || baseName.startsWith('.env.')) {
    process.stdout.write(
      JSON.stringify({
        continue: false,
        stopReason: '.env files are off-limits. If you need a value, ask the user or check .env.example instead.',
      })
    );
    process.exit(2);
  }

  process.exit(0);
});
