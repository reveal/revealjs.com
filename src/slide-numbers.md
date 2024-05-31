---
id: slide-numbers
title: Slide Numbers
layout: default
---

# Slide Numbers

You can display the page number of the current slide by setting the `slideNumber` config option to `true`.

```js
Reveal.initialize({ slideNumber: true });
```

<div class="reveal reveal-example" data-config='{"slideNumber": true}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>

## Format

The slide number format can be customized by setting `slideNumber` to one of the following values.

| Value | Description                                                           |
| :---- | :-------------------------------------------------------------------- |
| h.v   | Horizontal . Vertical slide number (default)                          |
| h/v   | Horizontal / Vertical slide number                                    |
| c     | Flattened slide number, including both horizontal and vertical slides |
| c/t   | Flattened slide number / total slides                                 |

{.key-value}

```js
Reveal.initialize({ slideNumber: 'c/t' });
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>

If none of the existing formats are to your liking, you can provide a custom slide number generator.

```js
Reveal.initialize({
  slideNumber: (slide) => {
    // Ignore numbering of vertical slides
    return [Reveal.getIndices(slide).h];
  },
});
```

## Context

When slide numbers are enabled, they will be included in all contexts by default. If you only want to show slide numbers in a specific context you can set `showSlideNumber` to one of the following:

| Value   | Description                                  |
| :------ | :------------------------------------------- |
| all     | Show slide numbers in all contexts (default) |
| print   | Only show slide numbers when printing to PDF |
| speaker | Only show slide numbers in the speaker view  |

{.key-value}

```js
Reveal.initialize({ showSlideNumber: 'print' });
```
