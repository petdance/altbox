---
title: "dust"
tool: dust
description: "A more intuitive version of du"
author: "Andy Boot"
website:
project: https://github.com/bootandy/dust
language: Rust
alternativeto: du
layout: tool
---

Dust is meant to give you an instant overview of which directories are
using disk space without requiring sort or head. Dust will print a maximum
of 1 'Did not have permissions message'.

Dust will list the 20 biggest sub directories or files and will smartly
recurse down the tree to find the larger ones. There is no need for a '-d'
flag or a '-h' flag. The largest sub directory will have its size shown in
red

## Sample output

```
djin:git/dust> dust
 1.2G  target
 622M ├─┬ debug
 445M │ ├── deps
  70M │ ├── incremental
  56M │ └── build
 262M ├─┬ rls
 262M │ └─┬ debug
 203M │   ├── deps
  56M │   └── build
 165M ├─┬ package
 165M │ └─┬ du-dust-0.2.4
 165M │   └─┬ target
 165M │     └─┬ debug
 131M │       └── deps
 165M └─┬ release
 124M   └── deps
```
