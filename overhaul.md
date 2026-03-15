# Overhauling altbox.dev

## Current state of altbox.dev

I have an existing site <https://altbox.dev>, and the source code for it is
here in this repository. It's a static-only HTML site with some
graphics.It's currently done with Jekyll and I don't want to do Jekyll
anymore.

altbox is a site for showcasing alternative CLI tools for Linux, macOS and
other Unix-like systems. Each tool has a directory of its own, and an
index.md file that is the content for the page. The file has some
frontmatter like this:

    ---
    title: "ack"
    tool: ack
    description: "a tool like grep, optimized for programmers"
    author: "Andy Lester"
    website: https://beyondgrep.com/
    project: https://github.com/beyondgrep/ack3/
    language: Perl
    alternativeto: grep
    layout: tool
    card_image: /ack/screenshot.png
    ---

Some tools have screenshots as well, noted above as `card_image`.

## Future needs

I want to have some sort of static site generator, but not Jekyll or
anything else using Ruby because the dependencies are a nightmare.

It must run on macOS, but it would be nice if it ran on Linux, too.

It needs to generate a sitemap.xml automatically.

The HTML must be mobile-friendly.

I don't need to carry over any existing data to the new system. I will
rewrite all the content in whatever new format is available. Maybe it will
be YAML with text fields. I definitely don't want JSON because JSON doesn't
allow comments.

I need some way to organize the tools easily.  For instance, I need a page
like "grep-like tools" that will list ack, ripgrep, ag and other grep-like
tools.  This could be via tagging.

Tagging in general would be nice. Maybe I'd have a tag for license type, for example.

I do NOT need the software to upload to the server. I just want it to run
locally and create the directories and files, and I will rsync it to the
server myself.

## Tool pages

Each tool on the site will have its own landing page.

Each tool page must display when the page was last updated.  That date will
be part of the metadata for each tool, not just the timestamp on the source
file.

There will be multiple paragraphs of text on each tool page. I need to
write this text in Markdown that will then be rendered to HTML at build
time.

I need to be able to have multiple screenshots per page. The screenshots
have to be able to be interspersed throughout the text.

The tool page should have some sort of heading, maybe like:

    ack
    Replacement for: [grep]
    License: [BSD]
    Language: [Perl]
    Page updated: 2026-03-14

Each of the bracketed words above would be links to relevant landing pages.

## Landing pages

The landing page for grep would have a list of all the grep-like tools, for
example.  The landing page would have a link to the tool page and a brief
bit of metadata about the tool. The details of the tool will be on the tool
page.

## Navigation

There will be some sort of navigation on the left side of each page that
would list the high-level landing pages.  For example, it might have:

    - du
    - find
    - grep
    - screen

And each of those links would go to the relevant landing page for the standard tool.

## URL paths

There will be landing pages for each of the following categories, with example paths:

- Alternate tool:
    - Pattern: /tool/TOOL
    - Example: /tool/ack
- Standard tool
    - Pattern: /replaces/STANDARDTOOL
    - Example: /replaces/grep
- Source language
    - Pattern: /language/LANGUAGE
    - Example: /language/perl
- License
    - Pattern: /license/LICENSE
    - Example: /license/bsd
