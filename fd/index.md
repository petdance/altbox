---
title: "fd"
tool: fd
description: "Simple, fast and user-friendly alternative to find"
author: "David Peter"
website:
project: https://github.com/sharkdp/fd
language: Rust
alternativeto: find
layout: tool
---

`fd` is a simple, fast and user-friendly alternative to `find`.

While it does not seek to mirror all of `find`'s powerful functionality, it provides sensible
(opinionated) defaults for [80%](https://en.wikipedia.org/wiki/Pareto_principle) of the use cases.

* Convenient syntax: `fd PATTERN` instead of `find -iname 'PATTERN'`.
* Colorized terminal output (similar to `ls`).
* It's fast.
* Smart case: the search is case-insensitive by default. It switches to
  case-sensitive if the pattern contains an uppercase
  character[\*](http://vimdoc.sourceforge.net/htmldoc/options.html#'smartcase').
* Ignores hidden directories and files, by default.
* Ignores patterns from your `.gitignore`, by default.
* Regular expressions.
* Unicode-awareness.
* Parallel command execution with a syntax similar to GNU Parallel.

## Demo

![Demo](screencast.svg)


## Articles

* [A Friendly Alternative to find](https://opensource.com/article/18/6/friendly-alternative-find)
