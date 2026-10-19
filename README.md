# jpmccrossan.github.io

Personal website of James-Patrick McCrossan, data scientist working on trustworthy AI and machine learning.

Live at https://jpmccrossan.github.io

Built with React, TypeScript and Vite.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

- `src/content.ts` holds all the text on the site.
- `src/pages/` has one file per page: Home, About, Work, Stack, Beyond and Contact.
- `src/components/` has the shared layout and animation components.
- `public/images/` has the photos and `public/cv/` has the downloadable CV.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`.
