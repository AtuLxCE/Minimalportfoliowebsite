# Atul Shreewastav — Portfolio

Personal portfolio featuring technical leadership, Omnio live speech translation, NEMPD research infrastructure, and selected AI projects.

**Live site:** https://atulshreewastav.com.np

## Development

```bash
npm ci
npm run dev
```

The development server runs on port 3000.

```bash
npm run build
npm run preview
```

The production bundle is generated in `dist/`. The build does not run a separate TypeScript check.

## Structure

- `src/components/`: Page sections and reusable UI components.
- `src/styles/portfolio.css`: Portfolio layout, typography, responsive styles, and themes.
- `public/`: Portrait, project image, favicon, and custom-domain configuration.
- `.github/workflows/deploy.yml`: GitHub Pages build and deployment.

## Deployment

Pushes to `main` build the site and deploy it through GitHub Actions to GitHub Pages. `public/CNAME` configures `atulshreewastav.com.np`; Vite uses `/` as the base path. Generated build files and dependencies are excluded from Git.

The original layout started from [this Figma design](https://www.figma.com/design/hZiclJfSGQ9ZthMYJwlfRO/Minimal-Portfolio-Website).
