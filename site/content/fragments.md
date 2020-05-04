---
id: fragments
layout: default
meta_title: Fragments
title: Fragments
---

# Fragments

Fragments are used to highlight individual elements on a slide. Every element with the class `fragment` will be stepped through before moving on to the next slide.

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment:

```html
<section>
  <p class="fragment grow">grow</p>
  <p class="fragment shrink">shrink</p>
  <p class="fragment strike">strike</p>
  <p class="fragment fade-out">fade-out</p>
  <p class="fragment fade-up">fade-up (also down, left and right!)</p>
  <p class="fragment fade-in-then-out">fades in, then out when we move to the next step</p>
  <p class="fragment fade-in-then-semi-out">fades in, then obfuscate when we move to the next step</p>
  <p class="fragment highlight-current-blue">blue only once</p>
  <p class="fragment highlight-red">highlight-red</p>
  <p class="fragment highlight-green">highlight-green</p>
  <p class="fragment highlight-blue">highlight-blue</p>
</section>
```
<div class="reveal example-deck">
  <div class="slides">
    <section>
      <p class="fragment grow">grow</p>
      <p class="fragment shrink">shrink</p>
      <p class="fragment strike">strike</p>
      <p class="fragment fade-out">fade-out</p>
      <p class="fragment fade-up">fade-up (also down, left and right!)</p>
      <p class="fragment fade-in-then-out">fades in, then out when we move to the next step</p>
      <p class="fragment fade-in-then-semi-out">fades in, then obfuscate when we move to the next step</p>
    </section>
  </div>
</div>

Multiple fragments can be applied to the same element sequentially by wrapping it, this will fade in the text on the first step and fade it back out on the second.

```html
<section>
  <span class="fragment fade-in">
    <span class="fragment fade-out">I'll fade in, then out</span>
  </span>
</section>
```
<div class="reveal example-deck">
  <div class="slides">
    <section>
      <span class="fragment fade-in">
        <span class="fragment fade-out">I'll fade in, then out</span>
      </span>
    </section>
  </div>
</div>

The display order of fragments can be controlled using the `data-fragment-index` attribute.

```html
<section>
  <p class="fragment" data-fragment-index="3">Appears last</p>
  <p class="fragment" data-fragment-index="1">Appears first</p>
  <p class="fragment" data-fragment-index="2">Appears second</p>
</section>
```
<div class="reveal example-deck">
  <div class="slides">
    <section>
      <p class="fragment" data-fragment-index="3">Appears last</p>
      <p class="fragment" data-fragment-index="1">Appears first</p>
      <p class="fragment" data-fragment-index="2">Appears second</p>
    </section>
  </div>
</div>

## Fragment events

When a slide fragment is either shown or hidden reveal.js will dispatch an event.

Some libraries, like MathJax (see #505), get confused by the initially hidden fragment elements. Often times this can be fixed by calling their update or render function from this callback.

```javascript
Reveal.on( 'fragmentshown', event => {
  // event.fragment = the fragment DOM element
} );
Reveal.on( 'fragmenthidden', event => {
  // event.fragment = the fragment DOM element
} );
```