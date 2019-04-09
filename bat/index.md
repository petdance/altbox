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
---

### Automatic paging

`bat` can pipe its own output to `less` if the output is too large for one screen.

### Syntax highlighting

`bat` supports syntax highlighting for a large number of programming and markup
languages:

![Syntax highlighting example](https://imgur.com/rGsdnDe.png)

### Git integration

`bat` communicates with `git` to show modifications with respect to the index
(see left side bar):

![Git integration example](https://i.imgur.com/2lSW4RE.png)

### Show non-printable characters

You can use the `-A`/`--show-all` option to show and highlight non-printable
characters:

![Non-printable character example](https://i.imgur.com/WndGp9H.png)
