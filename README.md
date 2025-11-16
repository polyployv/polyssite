# Polyssite Monorepo

This repository currently contains the **Paper Doll Studio** single-page fashion playground that lives in the
`polyssite-frontend` directory. Follow the steps below to install dependencies, run the app locally, execute tests,
and build production assets.

## Prerequisites
- [Node.js](https://nodejs.org/) 18.x or newer (comes with npm 9+)
- npm (installed with Node). Yarn/PNPM also work, but the commands below use npm.

## Clone & Install
```bash
# Clone the repository
 git clone <repo-url>
 cd polyssite

# Install frontend dependencies
 cd polyssite-frontend
 npm install
```

> If you prefer Yarn: run `yarn install` inside `polyssite-frontend` instead of `npm install`.

## Run the Development Server
```bash
cd polyssite-frontend
npm start
```
This boots the standard Create React App dev server at [http://localhost:3000](http://localhost:3000). The page hot-reloads
as you edit files. Tailwind CSS utilities and Framer Motion are already wired through trusted CDNs in `public/index.html`,
so no extra setup is required.

### Environment Variables
The project does not require custom environment variables. The default `.env` from CRA is sufficient. If you later add
API keys, follow the CRA naming convention (`REACT_APP_*`).

## Run Tests
```bash
cd polyssite-frontend
npm test -- --watchAll=false
```
This executes the Jest + React Testing Library suite that ships with Create React App. The `--watchAll=false` flag makes
sure the command exits after running once (useful for CI environments).

## Build for Production
```bash
cd polyssite-frontend
npm run build
```
CRA outputs an optimized production bundle under `polyssite-frontend/build`. Deploy the contents of that folder to any
static host (e.g., Vercel, Netlify, AWS S3).

## Project Structure
```
polyssite/
├── README.md                # You're here
└── polyssite-frontend/      # React + Tailwind single-page app
    ├── README.md            # Detailed product description and component overview
    ├── package.json
    ├── public/
    └── src/
```

For deeper architectural notes (components, mock data, fit logic, etc.), open
[`polyssite-frontend/README.md`](polyssite-frontend/README.md).
