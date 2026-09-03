# Dimensimu 3D Company Profile — Stage 10

React + Vite + JavaScript company profile for Dimensimu 3D.

## Stage 10 additions
- Realistic product catalog content based on Dimensimu 3D product offerings
- Centralized contact, map, social, and marketplace configuration
- Optional Shopee, Tokopedia, and TikTok Shop links
- Production-safe placeholders instead of invented business contact details
- Vite base path configurable through `VITE_BASE_PATH` for GitHub Pages/subpath hosting
- Existing Stage 6–9 3D, WhatsApp, SEO, service worker, accessibility, and error-boundary layers retained

## Environment setup
Copy `.env.example` to `.env` and fill only the real business information.

```env
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
VITE_CONTACT_EMAIL=your-real-email@example.com
VITE_CONTACT_PHONE=+62xxxxxxxxxxx
VITE_CONTACT_ADDRESS=Alamat bisnis atau Indonesia
VITE_GOOGLE_MAPS_URL=
VITE_INSTAGRAM_URL=
VITE_TIKTOK_URL=
VITE_YOUTUBE_URL=
VITE_SHOPEE_URL=
VITE_TOKOPEDIA_URL=
VITE_TIKTOK_SHOP_URL=
VITE_PRINTER_MODEL_URL=/models/printer.glb
VITE_BASE_PATH=/
```

## GitHub Pages
Set `VITE_BASE_PATH` to the repository subpath, for example `/nama-repository/`, then run:

```bash
npm install
npm run build
```

The generated `dist` folder can be deployed by the hosting workflow of your choice.

## Optional printer model
Create `public/models/printer.glb` and set:

```env
VITE_PRINTER_MODEL_URL=/models/printer.glb
```

Without the GLB file, the procedural 3D printer fallback remains active.


## Stage 11 — Production UX
- Lazy-loaded product and portfolio image slots with shimmer loading.
- Automatic CSS fallback when an image is unavailable.
- Floating WhatsApp CTA on desktop and compact mobile layout.
- Product/portfolio data now expose an `image` field without changing the UI architecture.
- `public/images/products/README.md` documents where to place real product photos.

### Stage 11 verification
Run `npm install` then `npm run build` locally before deployment.


## Stage 11 — Real Product Assets

The following optimized WebP assets are included and mapped into the product catalog / portfolio:
- `public/images/products/iot-smart-home.webp`
- `public/images/products/paket-penjemur-otomatis.webp`
- `public/images/products/convex-mirror-closeup.webp`
- `public/images/products/convex-mirror-karakter.webp`

Replace these files with newer product photos using the same paths to update the site without changing component code.

## Stage 11.1 — Rendering Stability

This revision prioritizes stable browser compositing: the 3D canvas uses demand rendering, disables auto-rotation and realtime shadow passes, lowers DPR, and removes `content-visibility` from animated sections. CSS and Framer Motion are no longer competing to animate the same `.reveal` elements.


## Catalog display limit
- The product catalog defaults to 8 visible products via `catalogSettings.defaultLimit`.
- Users can change the maximum visible count between 4, 8, 12, or all products from the catalog control.
- A `Tampilkan Semua` action appears when the filtered result exceeds the current limit.
- Search and category filters are applied before the display limit, so the limit always applies to the filtered result set.


## Image path fix

Product and portfolio images use `import.meta.env.BASE_URL`, so they work on both Vite local development and GitHub Pages repository subpaths.

Do not hard-code public asset URLs as `/images/...` in `src/data/siteData.js`; use `publicAsset('/images/...')`.


## Product image paths

Product and portfolio image URLs are generated with Vite's `import.meta.env.BASE_URL`. This is required for GitHub Pages repository deployments, where the site is served below `/<repository>/`. Local development uses `/` by default.
