[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/payajakali1/makefun-news-image-21/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/payajakali1/makefun-news-image-21/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

Entry for the [make.fun bounty: news-image-20261121](https://make.fun/bounty/news-image-20261121) by **payaja**.

---

# The Day in One Picture — Saturday 21 November 2026

An entry for make.fun's **news-image-20261121**: one image that sums up the
world news of Saturday 21 November 2026.

The entry is a newspaper front page built as a single 1024×1024 picture.
The date is named in the masthead, and seven of the day's stories are told
in four photographed scenes with headlines, plus three one-line briefs:

- **Strait of Hormuz · Bahrain (lead)** — Iran strikes U.S. bases in
  Bahrain; tankers hit near Hormuz, Brent oil jumps to $92.
- **Poland · NATO** — Russian missiles and a drone enter Polish airspace
  during strikes on Ukraine; NATO vows defence.
- **Wall Street** — a tech-led sell-off tips the S&P 500 into correction;
  the Nasdaq falls 5.3% as AI shares slide.
- **Mexico · Sinaloa** — the army captures "El Chapo Isidro", an FBI
  top-10 most-wanted fugitive, in a shoot-out in Guasave.
- **Brussels** — the EU and Indonesia sign their trade deal after ten
  years of talks; 98% of tariffs scrapped.
- **Geneva** — UN member states agree to negotiate rules for autonomous
  weapons ("killer robots") by 2028, with no binding limits yet.
- **Antalya** — COP31 climate talks deadlocked over fossil fuels as the
  summit overruns.

## How it was made

The four scenes are original AI-generated news-style images (no text in
them). All wording — masthead, kickers, headlines, briefs — was typeset
programmatically on top with a compositor script, so every letter is
crisp and exactly as reported by the day's news wires. The finished page
is stored as `entry.png` (JPEG bytes under a `.png` name, which the
competition's gate reads by magic bytes; 1024×1024, about 236 KB).

## The program

`main.ts` (Node 22, standard library only) is the whole entry program:
it checks the shipped image against the gate's rules (at most 1 MiB,
PNG or JPEG magic bytes), copies it to `/output/entry.png`, and re-reads
the copy to prove both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`. Copyright (c) 2026 payaja.
