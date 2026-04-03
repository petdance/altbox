# Add a new tool to altbox from the URL $ARGUMENTS.

Follow these steps:

1. Research the tool by fetching its homepage and/or GitHub repo page at $ARGUMENTS. Gather:

   - Full author name (for GitHub tools, fetch the author's GitHub profile to get their full name)
   - Implementation language
   - A concise one-line description
   - Key features for the body (presented as bullet lists, not paragraphs)
   - The tool's slug/name (lowercase, no spaces) for the directory name

2. Find a screenshot:

   - Look at images on the GitHub repo README page — prefer the second actual screenshot (skip logos and badges)
   - If none on GitHub, check the tool's homepage for a screenshot
   - Get the direct image URL

3. Create the directory `tool/<slug>/` and write `tool/<slug>/index.yaml` using this schema:

    The writing style should be geared more towards bullet lists than long paragraphs of lists of features.

    Don't use bolding.

4. Download the screenshot:

   `curl -sL "<image URL>" -o tool/<slug>/screenshot.png`

   Verify it downloaded as a valid image with `file tool/<slug>/screenshot.png`.
   If no suitable screenshot exists anywhere, skip the `screenshots` block and the `{{screenshot: ...}}` line in the body.

5. Show the contents of the created YAML file and confirm the screenshot was saved.

## index.yaml file format

This is a sample of the index.yaml.

```yaml
---
name: <toolname>
author: <Full Name>
homepage: <homepage URL, omit if same as project>
project: <GitHub or project URL>
language: <Language>
alternativeto: <standard tool this replaces, lowercase>
workswith: <optional tool it integrates with, lowercase>
description: <One-line description ending with a period.>
last_updated: <YYYY-MM-DD — today's date, when this index.yaml is being created>
screenshots:
    - file: screenshot.png
      caption: <descriptive caption>
body: |
    <One or two sentence intro>

    ## Features

    - <Feature 1>
    - <Feature 2>
    - <Feature 3>
    - ...

    {{screenshot: screenshot.png, <caption>}}
```

Notes:

   - `homepage` and `project` can be the same URL; omit `homepage` if so (use only `project`)
   - `alternativeto` and `workswith` values must be lowercase
   - `workswith` is optional — omit if not applicable
   - Use 4-space indentation throughout
   - All fenced code blocks must have a language identifier (e.g. ```bash)
   - Inline comments in code blocks must be complete sentences with a capital first letter and ending period (e.g. `# Search only Perl files.`)

## Terms

- "TUI" not "text user interface"
