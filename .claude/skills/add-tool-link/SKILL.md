Add an article link to a tool in altbox. Usage: /add-tool-link <tool-name> <url>

Follow these steps:

1. Fetch the URL from $ARGUMENTS to extract the article title.

2. Read the tool's `tools/<tool-name>/index.yaml` file to check if a `links:` section exists.

3. If the `links:` section doesn't exist, create it after the `screenshots:` section and before the `body:` section with this format:

```yaml
links:
    - title: "<Article Title>"
      url: <URL>
```

   If the `links:` section already exists, add the new entry at the top of the list:

```yaml
links:
    - title: "<Article Title>"
      url: <URL>
    - title: <Existing Article Title>
      url: <Existing URL>
```

    Put the title in double quotes.

4. Update the `last_updated:` field to today's date in YYYY-MM-DD format.

5. Verify the changes were saved correctly.
