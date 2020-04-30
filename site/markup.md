---
id: markup
layout: default
meta_title: Markup
meta_description: tbd
title: Markup
---

# Markup

Here's a barebones example of a fully working reveal.js presentation:
```html
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css">
    <link rel="stylesheet" href="dist/theme/white.css">
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <script src="dist/reveal.es5.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

The presentation markup hierarchy needs to be `.reveal > .slides > section` where the `section` represents one slide and can be repeated indefinitely. If you place multiple `section` elements inside of another `section` they will be shown as vertical slides. The first of the vertical slides is the "root" of the others (at the top), and will be included in the horizontal sequence. For example:

```html
<div class="reveal">
  <div class="slides">
    <section>Single Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>
```

It's also possible to write presentations using [Markdown](/markdown).