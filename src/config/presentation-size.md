---
id: presentation-size
title: Presentation Size
layout: default
---

# Presentation Size

All presentations have a "normal" size, that is, the resolution at which they are authored. reveal.js will automatically scale presentations uniformly based on the normal size to ensure that everything fits on any given display or viewport without changing the aspect ratio of your content.

See below for a list of configuration options related to sizing, including default values:

```javascript
Reveal.initialize({
  // The "normal" size of the presentation, aspect ratio will
  // be preserved when the presentation is scaled to fit different
  // resolutions. Can be specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around 
  // the content
  margin: 0.1,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5
});
```

## Center

Slides are vertically centered on the screen based on how much content they contain. To disable this and leave slides locked at their configured height set `center` to `false`.
```js
Reveal.initialize({ center: false })
```

## BYOL

If you want disable the built-in scaling and centering and Bring Your Own Layout you can set the following config options:

```javascript
Reveal.initialize({
  width: "100%",
  height: "100%",
  center: false,
  margin: 0,
  minScale: 1,
  maxScale: 1
});
```

That will make your slides cover 100% of the available page width and height.