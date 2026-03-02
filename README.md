# Apptastic UI

**Apptastic UI** is a reusable React component library built for the **Apptastic Network** ecosystem.  
It is designed to be imported into your React/Gatsby projects so you can share UI components and utilities across multiple apps.

---

## Repo Structure

This repository contains:

- `src/` → Source code for components and utilities
- `dist/` → Compiled / bundled output
- `vite.config.js` → Library bundling config (Vite)
- `tailwind.config.js` → Tailwind setup
- `postcss.config.js` → PostCSS + Tailwind processing
- `package.json` → Library metadata + scripts

---

## Prerequisites

Make sure you have:

- Node.js (18+ recommended)
- npm (or yarn / pnpm)

---

## 🚀 Installation (Local Dev)

Clone the repo:

```bash
git clone https://github.com/praveenax/apptastic-ui.git
cd apptastic-ui
npm install
```

## Build the Library

```bash
npm run build
```

---

## Common Sections Extracted

The following reusable sections are now available for cross-site integration:

- `SiteHeader`
- `HeroSection`
- `SiteFooter`

They are exported from the package root:

```jsx
import { SiteHeader, HeroSection, SiteFooter } from "apptastic-ui";
```

### Link Component Compatibility

Each section supports a `LinkComponent` prop so it can run in Gatsby, React Router, or plain React:

```jsx
<SiteHeader LinkComponent={Link} />
<HeroSection LinkComponent={Link} />
<SiteFooter LinkComponent={Link} />
```

If omitted, components default to native anchor tags (`<a href="..." />`).

### Minimal Example

```jsx
<SiteHeader
	brand={{ name: "Apptastic", logoSrc: "/logo.png", homeHref: "/" }}
	currentPath={location.pathname}
	LinkComponent={Link}
	links={[
		{ to: "/", label: "Home" },
		{ to: "/news/", label: "News" },
		{ label: "Learn", items: [{ to: "/tutorials/", label: "Tutorials" }] },
	]}
/>

<HeroSection
	badgeText="Fresh Daily Coverage"
	titlePrefix="Read"
	titleHighlight="AI"
	titleSuffix="updates"
	description="Portable hero section for new content sites."
	primaryCta={{ to: "/news/", label: "Browse Stories" }}
	secondaryCta={{ to: "/about/", label: "About" }}
	quickLinks={[{ to: "/tools/", label: "Tools" }]}
	LinkComponent={Link}
/>

<SiteFooter
	brand={{ name: "Apptastic", logoSrc: "/logo.png" }}
	tagline="Building practical AI products"
	socialLinks={[{ label: "LinkedIn", href: "https://linkedin.com" }]}
	companyLinks={[{ to: "/about/", label: "About" }]}
	onNewsletterSubmit={(email) => console.log(email)}
	LinkComponent={Link}
/>
```
