Add a new tool to altbox from GitHub issue number $ARGUMENTS.

Follow these steps:

1. Fetch the issue from the altbox repo:
   `gh issue view $ARGUMENTS --repo petdance/altbox`
   The issue body should contain a URL for the tool's homepage or GitHub repo.

2. Research the tool by fetching its homepage and/or GitHub repo page. Gather:
   - Full author name
   - Implementation language
   - License (check the repo's license file or GitHub license badge if not obvious)
   - A concise one-line description
   - Key features for the body (2–4 paragraphs or sections with usage examples)
   - The tool's slug/name (lowercase, no spaces) for the directory name

3. Find a screenshot:
   - Look at images on the GitHub repo README page — prefer the second actual screenshot (skip logos and badges)
   - If none on GitHub, check the tool's homepage for a screenshot
   - Get the direct image URL

4. Create the directory `tools/<slug>/` and write `tools/<slug>/index.yaml` using this schema:

```yaml
---
name: <toolname>
author: <Full Name>
website: <homepage URL, omit if same as project>
project: <GitHub or project URL>
language: <Language>
license: <License>
alternativeto: <standard tool this replaces, lowercase>
workswith: <optional tool it integrates with, lowercase>
description: <One-line description ending with a period.>
last_updated: <YYYY-MM-DD of latest release>
screenshots:
    - file: screenshot.png
      caption: <descriptive caption>
body: |
    <2–4 paragraphs of description and key features>

    {{screenshot: screenshot.png, <caption>}}

    ## Basic usage

    ```
    <example commands>
    ```
```

   Notes:
   - `website` and `project` can be the same URL; omit `website` if so (use only `project`)
   - `alternativeto` and `workswith` values must be lowercase
   - `workswith` is optional — omit if not applicable
   - Use 4-space indentation throughout

5. Download the screenshot:
   `curl -sL "<image URL>" -o tools/<slug>/screenshot.png`
   Verify it downloaded as a valid image with `file tools/<slug>/screenshot.png`.
   If no suitable screenshot exists anywhere, skip the `screenshots` block and the `{{screenshot: ...}}` line in the body.

6. Show the contents of the created YAML file and confirm the screenshot was saved.
