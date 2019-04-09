---
title: "bat"
tool: bat
description: "A cat(1) clone with syntax highlighting and Git integration."
author: "David Peter"
website:
project: https://github.com/sharkdp/bat
language: Rust
alternativeto: cat
layout: tool
card_image: /bat/syntax-highlighting.png
---

### Automatic paging

`bat` can pipe its own output to `less` if the output is too large for one screen.

### Syntax highlighting

`bat` supports syntax highlighting for a large number of programming and markup
languages:

![Syntax highlighting example](syntax-highlighting.png)

### Git integration

`bat` communicates with `git` to show modifications with respect to the index
(see left side bar):

![Git integration example](git-integration.png)

### Show non-printable characters

You can use the `-A`/`--show-all` option to show and highlight non-printable
characters:

![Non-printable character example](non-printing-characters.png)
