---
id: presentation-size
layout: default
meta_title: Presentation Size
title: Presentation Size
---

# Presentation Size

All presentations have a normal size, that is, the resolution at which they are authored. The framework will automatically scale presentations uniformly based on this size to ensure that everything fits on any given display or viewport.

See below for a list of configuration options related to sizing, including default values:

```javascript
Reveal.initialize({

  // ...

  // The "normal" size of the presentation, aspect ratio will be preserved
  // when the presentation is scaled to fit different resolutions. Can be
  // specified using percentage units.
  width: 960,
  height: 700,

  // Factor of the display size that should remain empty around the content
  margin: 0.1,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 1.5

});
```

If you wish to disable this behavior and do your own scaling (e.g. using media queries), try these settings:

```javascript
Reveal.initialize({

  // ...

  width: "100%",
  height: "100%",
  margin: 0,
  minScale: 1,
  maxScale: 1
});
```