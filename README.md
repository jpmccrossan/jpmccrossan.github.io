# jp-mccrossan-site

Personal "about me" site for James-Patrick McCrossan. React + TypeScript SPA built with Vite.

Design: Bulkhead-style dark, massive uppercase type, grain and numbered index nav, recoloured in the
CV's electric blue, with the CV's dot-grid motif as an interactive hero.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs static files to dist/
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in `src/content.ts`. To add images, put them in `public/images/` and set the
matching `image` / `portrait` field, e.g. `portrait: '/images/portrait-shirt.jpg'`. Unedited source photos go in `originals/` (not committed). Empty fields render a
styled placeholder.

| Route     | File                  |
| --------- | --------------------- |
| `/`       | `src/pages/Home.tsx`  |
| `/about`  | `src/pages/About.tsx` |
| `/work`   | `src/pages/Work.tsx`  |
| `/stack`  | `src/pages/Stack.tsx` |
| `/beyond` | `src/pages/Beyond.tsx`|
| `/contact`| `src/pages/Contact.tsx`|

## Deploying

Hosted on GitHub Pages. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/`. It's live about 30 seconds later at https://jpmccrossan.github.io.

The build copies `index.html` to `404.html` so deep links like `/about` load the app (GitHub Pages
serves them with a 404 status, which browsers ignore).

## Custom domain (moving off WordPress)

1. `gh api -X PUT repos/jpmccrossan/jpmccrossan.github.io/pages -f cname=jpmccrossan.com`
2. In WordPress.com DNS, keep any MX/email records, remove the `@` and `www` A/CNAME records, then add
   A records on `@` for 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 and a
   CNAME `www` → `jpmccrossan.github.io`.
3. Verify the domain in GitHub (Settings → Pages), then enforce HTTPS once the certificate is issued.
