---
name: add-tool-link
description: Adds an article link to a tool's index.yaml in altbox, fetching the title and publication date from the URL.
tools:
    - WebFetch
    - Bash
    - Read
    - Edit
---

Add an article link to a tool in altbox. Usage: /add-tool-link <tool-name> <url>

Follow these steps:

1. Fetch the URL from $ARGUMENTS to extract the article title. Use the WebFetch tool first; fall back to `curl -sL "<url>"` if WebFetch returns an error or empty content.

2. Read the tool's `tools/<tool-name>/index.yaml` file to check if a `links:` section exists.

3. While fetching the article, also extract the publication date. Use the WebFetch tool first; if it fails, use `curl
    -sL "<url>"` and try these patterns in order until one yields a date:

   - `grep -oE '"datePublished":"[^"]*"'` — JSON-LD or meta tags
   - `grep -oE '<time[^>]*datetime="[^"]*"'` — HTML `<time>` elements
   - `grep -oE '[A-Z][a-z]{2} [0-9]{1,2}, [0-9]{4}'` — human-readable byline dates like "Sep 25, 2024"

   Convert whatever format you find to YYYY-MM-DD. Today's date is the fetched date.

   If the page is blocked (Cloudflare challenge, login wall, etc.) and no date can be extracted, omit `published:` and note it to the user so they can supply it manually.

4. If the `links:` section doesn't exist, create it after the `screenshots:` section and before the `body:` section with this format:

```yaml
links:
    - title: "<Article Title>"
      url: <URL>
      published: <YYYY-MM-DD>
      fetched: <YYYY-MM-DD>
```

   If the `links:` section already exists, add the new entry at the top of the list:

```yaml
links:
    - title: "<Article Title>"
      url: <URL>
      published: <YYYY-MM-DD>
      fetched: <YYYY-MM-DD>
    - title: <Existing Article Title>
      url: <Existing URL>
```

   Put the title in double quotes. If the publication date cannot be found, omit the `published:` field.

5. Update the `last_updated:` field to today's date in YYYY-MM-DD format.

6. Verify the changes were saved correctly.
