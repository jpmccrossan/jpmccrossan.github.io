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
matching `image` / `portrait` field, e.g. `portrait: '/images/portrait.jpg'`. Empty fields render a
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

It's a static site: `npm run build` produces `dist/`. Because it uses real URLs (`/about`, not `/#/about`),
the host must serve `index.html` for unknown paths ("SPA fallback").

- **Docker / VPS (e.g. a $5/month droplet):** `docker build -t site . && docker run -p 80:80 site`.
  `deploy/nginx.conf` already has the SPA fallback and asset caching.
- **DigitalOcean App Platform (static site):** source dir `/`, build command `npm run build`,
  output dir `dist`, and set the catch-all document to `index.html`.

## Moving the domain off WordPress

1. Deploy here first and check it on the host's temporary URL.
2. At your domain registrar (or WordPress.com → Domains if registered there), point DNS at the new host:
   an `A` record for `@` to the server IP (or the `CNAME`/records your host gives you) and `www` as a `CNAME`.
3. Add the domain in the host's dashboard and enable HTTPS (Let's Encrypt / automatic certs).
4. Once DNS has propagated, cancel the WordPress plan. If the domain itself is registered with
   WordPress.com, you can keep it there and only change DNS, or transfer it out later.
