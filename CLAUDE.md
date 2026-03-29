# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Commands

```bash
make          # build site (sync assets + npm run build)
make serve    # start dev server at http://localhost:4321
make test     # run HTML validation tests (requires Perl + Test::HTML::Tidy5)
make clean    # remove dist/
make rsync    # deploy dist/ to production server
```

Tests require building first (`make`), then `make test` runs `prove t/html.t`.

## Architecture

**altbox** is an Astro-based static site cataloging CLI tools as
alternatives to standard Unix tools. All content lives in
`tools/<toolname>/index.yaml` files.

### Data flow

1. `tools/<name>/index.yaml` — source of truth for each tool (metadata +
    markdown body)
2. `src/lib/tools.js` — loads all YAMLs, normalizes arrays, rewrites
    relative asset paths to web-accessible `/tool/<slug>/` URLs
3. Astro pages call `getAllTools()` at build time and use
    `getStaticPaths()` to generate routes

### Routes generated at build time

| URL pattern | Source file |
|---|---|
| `/tool/:name` | `src/pages/tool/[name].astro` |
| `/alternative-to/:tool` | `src/pages/alternative-to/[tool].astro` |
| `/language/:lang` | `src/pages/language/[lang].astro` |
| `/license/:license` | `src/pages/license/[license].astro` |
| `/works-with/:tool` | `src/pages/works-with/[tool].astro` |

### Tool YAML schema

```yaml
name: ripgrep
author: Andrew Gallant
website: https://...
project: https://...       # Only if different from website
language: Rust
license: MIT
alternativeto: grep        # or list; lowercase; drives /alternative-to/ routes
workswith: fzf             # optional; or list; lowercase; drives /works-with/ routes
description: One-line description.
last_updated: 2026-02-15   # date this index.yaml was last updated, NOT the tool's release date
screenshots:
    - file: screenshot.png
      caption: Caption text
body: |
    Markdown content. Use {{screenshot: file, caption}} shortcode for inline screenshots.
    Link to other tools as [ack](/tool/ack).
```

Asset files (screenshots) go in `tools/<toolname>/` alongside the YAML. The
Makefile rsyncs them to `public/tool/` at build time (excluded from Git via
.gitignore).

### Markdown processing

`src/lib/renderMarkdown.js` runs the unified/remark/rehype pipeline. The
custom plugin `src/plugins/remark-screenshots.js` transforms `{{screenshot:
file, caption}}` shortcodes into `<figure>` HTML elements.

### Sidebar

`src/layouts/Layout.astro` builds the sidebar dynamically using
`getSidebarItems()`, `getSidebarLanguages()`, `getSidebarLicenses()`, and
`getSidebarWorksWith()` from `tools.js`. These aggregate counts across all
tools.

## Repository

- Repo: <https://github.com/petdance/altbox>
- Issues: <https://github.com/petdance/altbox/issues> — issues labeled "tool" are candidates for addition to the site

## Optional body sections

The `body` field can include an `## Articles` section at the end with links to
blog posts, tutorials, or other external writeups about the tool. Example:

```yaml
body: |
    ...

    ## Articles

    - [How to use foo on Linux](https://example.com/foo)
    - [foo vs bar: a comparison](https://example.com/foo-vs-bar)
```

## Code style

- 4-space indentation in all files
- All fenced code blocks in tool `body` fields must have a language identifier (e.g., ` ```bash `, ` ```yaml `)
