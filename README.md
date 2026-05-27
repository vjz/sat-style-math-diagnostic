# SAT Math Mini Diagnostic

Static, Cloudflare Pages-ready SAT-style math diagnostic.

## Features

- 15-question SAT-style math test
- Rough SAT Math score band estimate
- Weak-topic summary
- Missed-question review
- In-progress test stored in `sessionStorage`
- Completed history stored locally in `localStorage`
- No backend, no login, no external data storage

## Local run

```bash
npm run check
npm run serve
```

Open `http://localhost:8787`.

## Cloudflare Pages

Build settings:

- Framework preset: None
- Build command: leave blank, or `npm run check`
- Build output directory: `/`

If Cloudflare requires an output directory, set it to the project root.
