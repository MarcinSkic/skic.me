# Portfolio Website

Personal portfolio site with projects, work experience, and blog.

## Stack

- **SvelteKit 2** + TypeScript (strict), static output via `adapter-static`
- **MDsveX** for blog posts (Markdown rendered as Svelte components)
- **SCSS** with stylelint (recess-order property ordering)
- **PostHog** analytics, **Iconify** icons

## Structure

```
src/
├── routes/
│   ├── +layout.svelte       # Global layout: PostHog init, nav, styles
│   ├── +page.svelte         # Home: projects + experience sections
│   ├── +components/         # Shared UI (Header, Footer, Timeline, Masonry, Slider)
│   └── blog/
│       ├── +page.server.ts  # Loads and sorts all posts
│       └── [slug]/          # Dynamic post routes
├── lib/
│   ├── projects.ts          # Project data (images, tech, links, grid positions)
│   ├── experience.ts        # Work timeline entries
│   └── time.ts              # Date utilities
└── posts/                   # Blog markdown files
```

## Key Patterns

**Content as TypeScript data** — projects and experience are hardcoded typed objects in `src/lib/`, not a CMS or external API.

**Blog auto-discovery** — `import.meta.glob('../../posts/*.md')` in `+page.server.ts` collects all posts; front matter drives metadata.

**Blog post front matter:**
```yaml
---
title: string
description: string
date: string        # ISO format
tags: string[]
published: boolean  # false = draft, excluded from listing
---
```

**Component location** — shared components live under `routes/+components/`, not `lib/`, so they can be co-located with their styles.

**Scroll-based nav highlighting** — home page tracks visible section via IntersectionObserver; active state passed through Svelte context.

**Reading time** — injected automatically by a remark plugin in `svelte.config.js`.

## Writing Quality Checks (blog only)

`svelte.config.js` runs remark/rehype plugins on blog posts:
- Spell check (retext-spell)
- Readability target: reading age 20 (retext-readability)
- Passive voice, repeated words warnings

Build will warn (not fail) on style issues.

## Styling Conventions

- CSS variables: `--nav-height`, `--color-bg-0/1/2`, `--color-text-0/1`
- Global styles in `src/routes/styles.scss`
- Component styles in scoped `<style lang="scss">` blocks
- stylelint enforces recess property order — run `pnpm lint:styles` to check

## Commands

```bash
pnpm dev        # dev server
pnpm build      # static build
pnpm preview    # preview built site
pnpm check      # svelte-check (type errors)
pnpm lint       # eslint + stylelint
pnpm test       # vitest (Masonry layout math)
```
