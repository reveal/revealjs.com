---
id: scroll-view
title: Scroll View
layout: default
---

# Scroll View <span class="r-version-badge new">5.0.0</span>

reveal.js can automatically animate elements across slides. All you need to do is add `data-auto-animate` to two adjacent slide `<section>` elements and Auto-Animate will animate all matching elements between the two.

Here's a simple example to give you a better idea of how it can be used.
```js
Reveal.initialize({
  view: 'scroll',
  scrollProgress: true
});
```
<div class="reveal reveal-example" data-config='{"view": "scroll", "scrollProgress": true}'>
  <div class="slides">
    <section><h2>Scroll this</h2></section>
    <section data-background="indigo">
      <h2>The Scroll View turns presentations into <span class="fragment">scrollable</span> <span class="fragment">pages</span></h2>
    </section>
    <section><h2>The end</h2></section>
  </div>
</div>

This example uses the `margin-top` property to move the element but internally reveal.js will use a CSS transform to ensure smooth movement. This same approach to animation works with most animatable CSS properties meaning you can transition things like `position`, `font-size`, `line-height`, `color`, `background-color`, `padding` and `margin`.

### Automatically Activated on Small Screens

## Fragments &amp; Auto-Animate

## Configuration

### scrollActivationWidth

### scrollProgress

### scrollLayout

### scrollSnap
