import { mkdirSync, writeFileSync } from "node:fs";

// One line of horror: a single sentence, under 200 characters.
// The scare is earned by what the line withholds: whose heartbeat is it,
// and how does it know the name?
const LINE =
  "The ultrasound showed a second heartbeat, and it was tapping out my name in Morse.";

// Gate guard: the entry must be 1-200 characters of real text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
