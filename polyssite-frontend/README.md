# Paper Doll Studio

A single-page paper-doll inspired fashion playground built with React and TypeScript. Mix & match shop pieces on a customizable
mannequin, preview fit guidance, and open boutique-style modals without ever leaving the page.

## Tech Stack
- [Create React App](https://create-react-app.dev/) with TypeScript
- Tailwind CSS (CDN build injected in `public/index.html` for rapid prototyping)
- Framer Motion (loaded via CDN to drive the vinyl animation, bottom sheet, and card micro-interactions)
- Local mock data (`src/data/mockData.ts`) for shops, products, and measurements

## Getting Started
1. Install dependencies (the project only relies on the default CRA toolchain, so the standard install is quick):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000` to interact with the studio.
3. Run the unit tests:
   ```bash
   npm test
   ```
4. Build for production:
   ```bash
   npm run build
   ```

> **Note:** Tailwind CSS and Framer Motion are injected from trusted CDNs inside `public/index.html`. This keeps the repository
> lightweight while still providing the required utility classes and animation primitives.

## Project Highlights
- Boutique hero section with spinning vinyl record that reflects the music toggle state
- Shop selector, mannequin with layered clothing blocks, and an always-available fit suggestion banner
- Category tabs + horizontal product rail to quickly equip pieces or open a detail sheet
- Body customization modal with presets and a responsive silhouette preview
- Fit logic (`src/utils/fitLogic.ts`) compares user measurements with item measurements and surfaces warnings or green lights

## File Structure
```
src/
├── App.tsx
├── components/
│   ├── BodyModal.tsx
│   ├── CategoryTabs.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Mannequin.tsx
│   ├── ProductDetailSheet.tsx
│   ├── ProductRail.tsx
│   └── ShopSelector.tsx
├── data/
│   └── mockData.ts
├── lib/
│   └── cdnMotion.tsx
├── utils/
│   └── fitLogic.ts
├── types.ts
├── index.css
└── index.tsx
```

Enjoy remixing nostalgic outfits! ✂️
