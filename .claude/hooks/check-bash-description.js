#!/usr/bin/env node
const chunks = [];
process.stdin.on('data', chunk => chunks.push(chunk));
process.stdin.on('end', () => {
  let input;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    process.exit(0);
  }

  const description = (input?.tool_input?.description || '').trim();

  if (!description) {
    process.stdout.write(
      JSON.stringify({
        continue: false,
        stopReason:
          'Terminal command discipline: every Bash call requires a description explaining WHY (what question it answers or state it changes) and WHAT (what the command does).',
      })
    );
    process.exit(2);
  }

  process.exit(0);
});
