---
title: "duc"
tool: duc
description: "A collection of tools for inspecting and visualizing disk usage"
author: "Ico Doornekamp"
website: https://duc.zevv.nl/
project: https://github.com/zevv/duc
language: C
alternativeto: du
layout: tool
card_image: /duc/screenshot.png
---

Duc is a collection of tools for indexing, inspecting and visualizing disk
usage. Duc maintains a database of accumulated sizes of directories of the
file system, and allows you to query this database with some tools, or
create fancy graphs showing you where your bytes are.

List all files and directories under /usr/local, showing relative file sizes in a graph:

```
    $ duc ls -Fg /usr/local
      4.7G lib/                 [+++++++++++++++++++++++++++++++++++++++++++]
      3.1G share/               [++++++++++++++++++++++++++++               ]
      2.7G src/                 [++++++++++++++++++++++++                   ]
    814.9M bin/                 [+++++++                                    ]
    196.6M include/             [+                                          ]
     66.6M x86_64-w64-mingw32/  [                                           ]
     59.9M local/               [                                           ]
     38.8M i686-w64-mingw32/    [                                           ]
     20.3M sbin/                [                                           ]
     13.6M lib32/               [                                           ]
     13.3M libx32/              [                                           ]
```

![Screenshot](screenshot.png)
