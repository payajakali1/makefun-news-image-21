// news-image-20261121 — the world news of Saturday 21 November 2026 in one
// picture. The repository ships the finished front page as entry.png (JPEG
// bytes under a .png name; the gate tells the format from the magic bytes),
// and this program copies it to the harness's output directory.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const MAX_BYTES = 1_048_576; // the gate's 1 MiB cap
const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47];
const JPEG_MAGIC = [0xff, 0xd8, 0xff];

const source = new URL("./entry.png", import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Check the asset against the gate's rules before handing it over: a file
// that is too large or neither PNG nor JPEG would be scored invalid.
const bytes = readFileSync(source);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate cap`);
}
const hasMagic = (magic: number[]) => magic.every((b, i) => bytes[i] === b);
if (!hasMagic(PNG_MAGIC) && !hasMagic(JPEG_MAGIC)) {
  throw new Error("entry.png is neither a PNG nor a JPEG (bad magic bytes)");
}

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// The program runs twice and both runs must write the same bytes, so prove
// the copy landed whole: re-read it and compare against the source asset.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error("written entry.png differs from the repository asset");
}
