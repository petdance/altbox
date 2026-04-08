# Find alternative tools for a given CLI tool

Search the web for alternative tools to the one specified in $ARGUMENTS. The goal is to discover new tools that could be
added to altbox.

## Steps

1. **Search for alternatives**: Use WebSearch to find alternatives to the tool specified in $ARGUMENTS. Search for
patterns like "<tool> alternative", "<tool> similar tools", "alternatives to <tool>", etc.

2. **Extract candidates**: From the search results, identify 3-5 promising alternative tools that:
   - Are open source or widely available
   - Have active development/maintenance
   - Serve a similar purpose to the input tool
   - Are not already in altbox

3. **For each candidate**, gather:
   - Tool name and homepage/GitHub URL
   - One-line description of what it does
   - Primary implementation language
   - Any unique features that differentiate it

4. **Present results** in a formatted list with:
   - Tool name
   - URL to homepage or GitHub repo
   - Brief description
   - Language
   - Notes on why it's an alternative to the input tool
   - Suggestion: "Run `/add-tool-from-page <URL>` to add this tool"
   - If possible, check the project page to tell how recently it has been updated. Be specific in how recent things have
   been updated, like maybe when commits have been made, or how active the issues queue is.

   This list is for a human to look at to decide what they think of the tool.

## Output format

```
# Alternatives to <tool>

## <Tool Name 1>
- **URL**: <homepage or GitHub>
- **Language**: <Language>
- **Description**: Brief description
- **Why it's an alternative**: Explanation
- Run: `/add-tool-from-page <URL>`

## <Tool Name 2>
...
```

## Tips

- Check if tools already exist in altbox by looking at the existing tools.
- Prioritize tools with good documentation and active communities.
- Look for tools mentioned in comparisons or listicles about alternatives.
- If the input tool doesn't have clear alternatives, let the user know.
