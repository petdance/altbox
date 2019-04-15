---
title: "sn"
tool: sn
description: "Find build artifacts that are taking up disk space"
author: "Vanessa McHale"
website:
project: https://github.com/vmchale/tin-summer
language: Rust
alternativeto: du
layout: tool
card_image: /sn/screenshot.png
---

If you do a significant amount of programming, you'll probably end up with
build artifacts scattered about. `sn` is a tool to help you find those
artifacts.

`sn` is also a replacement for `du`. It has nicer output, saner commands
and defaults, and it even runs faster on big directories thanks to
multithreading.


* Faster on large directories
* Uses regex for exclusions, making it dramatically faster than du when used with the --exclude flag.
* Defaults to human-readable output
* Colorized output
* Nicer help
* Provides sorted output
* Finds build artifacts
* Reads file sizes, not disk usage
* Extensible in Rust

![Screenshot](screenshot.png)
