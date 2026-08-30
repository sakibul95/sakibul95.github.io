# Profile README — setup

## 1. Create the repo

Create a **public** repo named exactly `sakibul95` (same as the username). GitHub treats a repo named
after your username as your profile repo and renders its `README.md` on your profile page.

## 2. Copy the files in

```
sakibul95/
├── README.md                          ← github-profile/README.md
└── .github/
    └── workflows/
        └── games.yml                  ← github-profile/.github/workflows/games.yml
```

Commit and push to `main`.

## 3. Let the games generate

The three animated games (Snake, Pac-Man, Breakout) are **not** static files — a GitHub Action renders
them daily from the contribution graph and force-pushes the SVGs to an `output` branch. The README points
at `raw.githubusercontent.com/sakibul95/sakibul95/output/…`.

**Until that action runs once, those three images will be broken.** To trigger it immediately:

1. Push `games.yml` (the `push` trigger fires on `main`), or
2. Actions tab → **generate contribution games** → **Run workflow**

If Actions are disabled on the new repo: Settings → Actions → General → *Allow all actions*. The workflow
needs `contents: write`, which it declares itself — no PAT or secret required.

After the first successful run you'll see a new `output` branch holding:

```
github-snake.svg
github-snake-dark.svg
pacman-contribution-graph.svg
pacman-contribution-graph-dark.svg
breakout-contribution-graph.svg
breakout-contribution-graph-dark.svg
```

## 4. About the stats widgets

Most "cool profile README" widgets are one person's free Vercel deployment, and they die. Measured on
2026-08-20 against `sakibul95`:

| Widget | Status | Verdict |
| --- | --- | --- |
| `github-profile-trophy.vercel.app` | **402 Payment Required** | Dead — over quota. Removed from the README. |
| `github-readme-stats.vercel.app` | **503** | Over quota. The README uses the `-salesp07` community mirror instead. |
| `streak-stats.demolab.com` | 200 | Working. In use. |
| `github-readme-activity-graph.vercel.app` | 200 | Working, but omitted — see below. |
| `capsule-render`, `readme-typing-svg`, `skillicons.dev`, `shields.io`, `komarev` | 200 | Working. In use. |

### The language card needed a fix

Unfiltered, `top-langs` reported **HTML 99.74%**, TypeScript 0.17%, C# 0.09% — because public repos here
include *built* static output (the portfolio's `out/` directory), and generated HTML swamps everything.
That card would tell every visitor that a senior .NET engineer writes HTML.

With `&hide=html,css,scss,mdx` it reads **TypeScript 65.71% · C# 33.39%**, which reflects actual authored
code. That's the version in the README. Add `&exclude_repo=repo-name` if a specific repo still skews it.

### What was deliberately left out

- **Main stats card** — returns `Rank: C`, `0` stars, `0` PRs, `0` issues, `49` commits in the last year.
  Accurate, but it advertises a thin public footprint for someone whose real work is in private client repos.
- **Trophy row** — endpoint is dead, and it would grade that same thin footprint.
- **Activity graph** — works, but renders as a near-flat line at ~49 commits/year.

Add any of them back if the public activity picks up. Working URLs:

```
https://github-readme-stats-salesp07.vercel.app/api?username=sakibul95&show_icons=true&hide_border=true&bg_color=0c0e12&title_color=34d399&icon_color=22d3ee&text_color=a1a1aa
https://github-readme-activity-graph.vercel.app/graph?username=sakibul95&bg_color=0c0e12&color=34d399&line=22d3ee&point=f4f4f5&area=true&hide_border=true
```

### Permanent fix: self-host the stats service

Community mirrors hit quota too. To stop depending on them, deploy your own — free, ~5 minutes:

1. Fork [`anuraghazra/github-readme-stats`](https://github.com/anuraghazra/github-readme-stats)
2. Import the fork at [vercel.com/new](https://vercel.com/new)
3. Add a `PAT_1` env var — a GitHub personal access token with `public_repo` scope
4. Swap `github-readme-stats-salesp07.vercel.app` in the README for your own deployment URL

## 5. Other optional trims

| If… | Do this |
| --- | --- |
| You want fewer games | Drop the unwanted `### ` blocks from the README and shorten `games:` in `games.yml`. Snake and Pac-Man/Breakout come from separate actions, so removing all of one lets you delete that step too. |
| You want your phone number public | Add it under **Let's build something fast**. It's intentionally omitted — public READMEs get scraped by bots. |
| The games look sparse | Expected at ~49 commits/year — the animations have few cells to eat. They fill in as public commits accumulate. |

## 5. Keeping it in sync with the portfolio

The README's copy, stats and project list are pulled from the portfolio's
[`src/lib/site.ts`](../src/lib/site.ts), [`src/lib/portfolio.ts`](../src/lib/portfolio.ts),
[`src/lib/projects.ts`](../src/lib/projects.ts) and [`src/lib/experience.ts`](../src/lib/experience.ts).
When you update those, mirror the change here — the two aren't wired together.
