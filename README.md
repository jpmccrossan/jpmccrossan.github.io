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

- `src/content.ts` holds the site-wide text: profile, About, skills and the home page.
- `src/portfolio.ts` has one entry per portfolio page (`/portfolio/<slug>`): work in one section, projects and
  research in the other. Add an entry and its page exists.
- `src/applications.ts` has one entry per job application page (`/applications/<slug>`). These pages are unlisted, not
  private: the repo is public, so write nothing there you wouldn't want anyone to read.
- `src/pages/` has the pages: Home, Portfolio, ProjectPage, About, Applications, ApplicationPage and Contact.
- `src/components/` has the shared layout, gallery and animation components.
- `public/images/` has the photos and screenshots, `public/papers/` the downloadable papers and `public/cv/` the CV.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`.
