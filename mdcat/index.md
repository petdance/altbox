---
title: "mdcat"
tool: mdcat
description: "cat for Markdown"
author: "Sebastian Wiesner"
website:
project: https://github.com/lunaryorn/mdcat
language: Rust
alternativeto: cat
layout: tool
card_image: /mdcat/mdcat.png
---

`mdcat` renders Markdown to the terminal.

![mdcat example](mdcat.png)

* Nicely renders all basic [CommonMark](https://commonmark.org/) syntax (no tables or footnotes though),
* Highlights code blocks with [syntect](https://github.com/trishume/syntect)
* Shows links and images inline in supported terminals.
* Adds jump marks for headings in iTerm2 (jump forwards and backwards with ⇧⌘↓ and ⇧⌘↑).
