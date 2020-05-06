---
id: vertical-slides
title: Vertical Slides
layout: default
---

# Vertical Slide Navigation

Slides can be nested within other slides to create vertical stacks (see [Markup](/content/markup)). When presenting, you use the left/right arrows to step through the main (horizontal) slides. When you arrive at a vertical stack you can optionally press the up/down arrows to view the vertical slides or skip past them by pressing the right arrow. Here's an example showing a bird's-eye view of what this looks like in action:

<img src="https://static.slid.es/support/reveal.js-vertical-slides.gif" width="450">

## Navigation Mode
You can fine tune the reveal.js navigation behavior by using the `navigationMode` config option. Note that these options are only useful for presentations that use a mix of horizontal and vertical slides. The following navigation modes are available:

| Value                         | Description |
| :---------------------------  | :---------- |
| default                       | Left/right arrow keys step between horizontal slides. Up/down arrow keys step between vertical slides. Space key steps through all slides (both horizontal and vertical). |
| linear                        | Removes the up/down arrows. Left/right arrows step through all slides (both horizontal and vertical). |
| grid                          | When this is enabled, stepping left/right from a vertical stack to an adjacent vertical stack will land you at the same vertical index.<br><br>Consider a deck with six slides ordered in two vertical stacks:<br>`1.1`&nbsp;&nbsp;&nbsp;&nbsp;`2.1`<br>`1.2`&nbsp;&nbsp;&nbsp;&nbsp;`2.2`<br>`1.3`&nbsp;&nbsp;&nbsp;&nbsp;`2.3`<br><br>If you're on slide 1.3 and navigate right, you will normally move from 1.3 -> 2.1. With navigationMode set to "grid" the same navigation takes you from 1.3 -> 2.3. |