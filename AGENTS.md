# Repository Guidelines

## Project Structure & Module Organization
- `docs/` contains all VitePress content pages (Markdown).
- `docs/roles/` stores role-specific SOP pages (e.g., `docs/roles/tech-support.md`).
- `docs/.vitepress/config.mts` defines site config, navigation, sidebar, and theme settings.
- Top-level docs use numeric prefixes for ordering (e.g., `00-ai-guide.md`, `01-template.md`).

## Build, Test, and Development Commands
- `bun install` installs dependencies (lockfile: `bun.lockb`).
- `bun run docs:dev` starts the local VitePress dev server for live editing.
- `bun run docs:build` generates the production build and validates structure.
- `bun run docs:preview` serves the built site locally for a final review.

## Coding Style & Naming Conventions
- Markdown: keep files focused on a single topic, use clear `#`/`##` headings, and keep lists tidy.
- Filenames: use numeric prefixes for top-level docs and kebab-case for role pages.
- Links: prefer VitePress root-relative links like `/roles/host`.
- Config: keep `docs/.vitepress/config.mts` formatting consistent (2-space indent, single quotes).

## Testing Guidelines
- No automated test framework is configured yet.
- Use `npm run docs:build` as a smoke test and `npm run docs:preview` to confirm layout and navigation.

## Commit & Pull Request Guidelines
- Commit history favors short, descriptive subjects; `docs:` prefixes are used for documentation updates.
- Keep commits scoped (one topic per commit) and consistent in language (Chinese or English).
- PRs should include a brief summary, affected pages, and screenshots when layout or navigation changes.
