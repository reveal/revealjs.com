---
id: layout
title: Layout
layout: default
---

# Layout

TODO: Descibe layout techniques.
- Image stack

## Stretching elements

Sometimes it's desirable to have an element, like an image or video, stretch to consume as much space as possible within a given slide. This can be done by adding the `.stretch` class to an element as seen below:

```html
<section>
  <h2>This video will use up the remaining space on the slide</h2>
    <video class="stretch" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
</section>
```

Limitations:
- Only direct descendants of a slide section can be stretched
- Only one descendant per slide section can be stretched