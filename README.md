# KOHLER × MIT-WPU AI Lab — Student Journey 2026

A 13-slide, responsive React presentation telling the story of the KOHLER × MIT-WPU AI Lab, from the March 2026 idea through the October launch and beyond.

## Run locally

```sh
npm install
npm run dev
```

Use the on-screen arrows or your keyboard’s **← / →** keys to move between slides. **Home** and **End** go to the first and last slides. The journey bar at the bottom of the screen jumps to each stage.

## Build

```sh
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Push this project to the `main` branch of a GitHub repository.
2. In the repository, open **Settings → Pages** and set the build source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will build and publish the site on each push to `main`.

The site uses a relative Vite base path, so it works from a GitHub Pages project URL as well as a custom domain. Fonts and photography load from Google Fonts and Unsplash.
