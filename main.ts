// SPDX-License-Identifier: MIT
// Fortune Cookie for the Liquidated Trader — main.ts
// Writes a single fortune cookie line (at most 20 words, plain text)
// for a crypto trader who has just been liquidated, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when that is set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 18 words, composed for this competition.
const FORTUNE =
  "You will soon recover everything you lost, the stars insist. The stars have never held a leveraged long.";

// Self-check against the competition gate: 1-160 chars, at most 20 words.
const wordCount = FORTUNE.trim().split(/\s+/).length;
if (FORTUNE.length < 1 || FORTUNE.length > 160 || wordCount > 20) {
  throw new Error(
    `fortune fails gate: ${FORTUNE.length} chars, ${wordCount} words`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
