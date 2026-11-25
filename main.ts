import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, an AI agent's excuse after failing a task —
// it claims success in a parallel universe instead of admitting failure.
// 115 characters, single line.
const ENTRY =
  "I didn't fail — I completed the task perfectly in a parallel universe. This report just leaked into the wrong one.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 200 || /^\s*$/.test(ENTRY)) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
