---
title: "bottom"
description: "A cross-platform graphical process/system monitor "
author: "Clement Tsang"
tool: bottom
website:
project: https://github.com/ClementTsang/bottom
language: Rust
alternativeto: top
layout: tool
card_image: /bottom/demo.gif
---

`bottom` is a cross-platform process/system visualization and management application.

![Demo](demo.gif)

## Features:

- Graphical visualization widgets for:

  - [CPU usage](https://clementtsang.github.io/bottom/nightly/usage/widgets/cpu/) over time, at an average and per-core level
  - [RAM and swap usage](https://clementtsang.github.io/bottom/nightly/usage/widgets/memory/) over time
  - [Network I/O usage](https://clementtsang.github.io/bottom/nightly/usage/widgets/network/) over time

  with support for zooming in/out the current time interval displayed.

- Widgets for displaying info about:

  - [Disk capacity/usage](https://clementtsang.github.io/bottom/nightly/usage/widgets/disk/)
  - [Temperature sensors](https://clementtsang.github.io/bottom/nightly/usage/widgets/temperature/)
  - [Battery usage](https://clementtsang.github.io/bottom/nightly/usage/widgets/battery/)

- [A process widget](https://clementtsang.github.io/bottom/nightly/usage/widgets/process/) for displaying, sorting, and searching info about processes, as well as support for:

  - Kill signals
  - Tree mode

- Cross-platform support for Linux, macOS, and Windows, with more planned in the future.

