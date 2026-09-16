# Netflix UI Clone

A responsive Netflix-inspired streaming interface built to demonstrate front-end development skills with React, Vite and Tailwind CSS.

The project focuses on recreating the main browsing experience: profile selection, a featured title area, categorized content rows, responsive navigation and deployment as a static site.

## Live Demo

[Open the deployed application](https://paschyz.github.io/netflix/)

## Project Scope

### Implemented

- Profile selection screen with React Router navigation.
- Netflix-style home screen with a featured Stranger Things visual.
- Content rows with category labels such as Trending Now and Popular on Netflix.
- Randomized thumbnail ordering for each content row.
- Responsive layout for mobile, tablet and desktop viewports.
- Responsive header with navigation, notifications and profile menu states.
- Local media asset handling for the featured image.
- Hash-based routing, compatible with GitHub Pages hosting.
- Automated production deployment through GitHub Actions.

### Current Scope

This is a front-end portfolio project and visual UI recreation. It does not include a backend, user authentication, persistent profiles, payments or a real streaming service.

## Technical Highlights

- Component-based UI architecture with React.
- Client-side routing with `react-router-dom`.
- Utility-first responsive styling with Tailwind CSS.
- Vite asset bundling and production builds.
- GitHub Pages deployment from the generated `dist` directory.
- GitHub Actions workflow for repeatable CI/CD deployment.

## Tech Stack

- React 18
- React Router 6
- Vite 5
- Tailwind CSS 3
- JavaScript (ES modules)
- GitHub Actions
- GitHub Pages

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

The application is then available at the local URL displayed by Vite.

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Project Structure

```text
src/
├── assets/       Local images and media
├── FirstVideos   Continue-watching content row
├── Header        Responsive navigation and profile menu
├── Home          Featured content and video categories
├── Profiles      Profile selection screen
├── Videos        Reusable randomized content row
├── router        Client-side route definitions
└── main.jsx      Application entry point
```

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml). The workflow installs dependencies, builds the application with Vite and publishes `dist` through GitHub Pages.

The Vite base path is configured for the repository deployment URL:

```js
base: "/netflix/";
```

The application uses `createHashRouter` because GitHub Pages does not provide server-side fallback routing for browser history URLs.

## Future Improvements

- Replace static thumbnails with data from a movie API.
- Add search, filters and functional navigation tabs.
- Add real profile state and authentication flows.
- Add loading, empty and error states for remote content.
- Add automated component and end-to-end tests.
- Improve accessibility with richer labels, keyboard navigation and focus states.

## Purpose

This project is part of my front-end portfolio and was created to practice responsive UI composition, reusable React components, client-side routing, asset bundling and continuous deployment.
