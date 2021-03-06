---
title: "mtr"
tool: mtr
description: "Network tool to combine traceroute and ping"
author:
    - "Matt Kimball"
    - "Roger Wolff"
website: https://www.bitwizard.nl/mtr/
project: https://github.com/traviscross/mtr
language: C
alternativeto: traceroute and ping
layout: tool
card_image: /mtr/screenshot.gif
---

mtr combines the functionality of the `traceroute` and `ping` programs in a
single network diagnostic tool.

As mtr starts, it investigates the network connection between the host mtr
runs on and a user-specified destination host. After it determines the
address of each network hop between the machines, it sends a sequence ICMP
ECHO requests to each one to determine the quality of the link to each
machine. As it does this, it prints running statistics about each machine.

![Screenshot](screenshot.gif)
