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
npm run build
npm run serve
```

Open `http://localhost:8787`.

## Cloudflare Pages

Build settings:

- Framework preset: None
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Do not set the output directory to `/`; Cloudflare will try to upload `node_modules`, which includes oversized Worker binaries.
