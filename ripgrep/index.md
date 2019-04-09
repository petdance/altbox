---
title: "ripgrep"
description: "Searches directories for a regex pattern"
author: "Andrew Gallant"
tool: rg
website:
project: https://github.com/BurntSushi/ripgrep
language: Rust
alternativeto:
    - grep
    - find
layout: tool
---

ripgrep is a line-oriented search tool that recursively searches your
current directory for a regex pattern. By default, `rg` will respect
your `.gitignore` and automatically skip hidden files/directories and binary
files. ripgrep has first class support on Windows, macOS and Linux, with
binary downloads available for every release. ripgrep is similar to other
popular search tools like [ack](/ack) and [ag](/ag).

![Screenshot](screenshot.png)
