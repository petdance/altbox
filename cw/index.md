---
title: cw
tool: cw
description: "A faster line-counting tool"
author: "Thomas Hurst"
website:
project: https://github.com/Freaky/cw
language: Rust
alternativeto: wc
layout: tool
card_image:
---

A fast replacement for `wc` that counts word, line, character and byte counts.

Counts of multiple files may be accelerated by use of the `--threads` option.

```
  'xargs <files cw --threads=12' ran
    2.01 ± 0.03 times faster than 'xargs <files cw --threads=4'
   11.55 ± 0.15 times faster than 'xargs <files wc'
```
