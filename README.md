# firefudge1.github.io

Personal portfolio site — Arav Karnik, Electrical and Computer Engineering at
UT Austin. Live at **https://firefudge1.github.io/**.

Covers PCB design, embedded firmware, and robotics work: suspension telemetry
and high-voltage safety electronics for Longhorn Racing's Formula SAE car,
embedded systems work at Adom Industries, imitation-learning research at UT's
Robot Interactive Intelligence Lab, and four seasons of FIRST Robotics
electrical design.

## Stack

- **React 19** — UI, no router or state library
- **Vite 8** — dev server and production build
- **Plain CSS** — custom properties for theming, no framework
- **oxlint** — linting
- **GitHub Actions → GitHub Pages** — build and deploy on push to `main`

Two runtime dependencies: `react` and `react-dom`.

## Local development

Requires Node 20.19+ or 22.12+.

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built output locally
npm run lint     # oxlint
```

## Layout

```
index.html            page shell
src/main.jsx          mounts <App/>
src/App.jsx           Nav → Hero → Projects → Skills → Footer
src/components/       one component + its stylesheet per file
src/data/             projects, skills, contacts — content lives here, not in markup
src/hooks/            useReveal (IntersectionObserver scroll reveal)
public/projects/      project imagery
```

Content is data-driven: adding or editing a project means changing
`src/data/projects.js`, not component code.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run build` and publishes `dist/` to GitHub Pages. The repository's
Pages source is set to **GitHub Actions** rather than a branch, since the site
needs a build step.
