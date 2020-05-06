---
id: fragments
title: Fragments
layout: default
---

# Fragments

Fragments are used to highlight or incrementally reveal individual elements on a slide. Every element with the class `fragment` will be stepped through before moving on to the next slide.

The default fragment style is to start out invisible and fade in. This style can be changed by appending a different class to the fragment.

```html
<p class="fragment">Fade in</p>
<p class="fragment fade-out">Fade out</p>
<p class="fragment highlight-red">Highlight red</p>
<p class="fragment fade-in-then-out">Fade in, then out</p>
<p class="fragment fade-up">Slide up while fading in</p>
```
<div class="reveal example-deck">
  <div class="slides">
    <section>
      <p class="fragment">Fade in</p>
      <p class="fragment fade-out">Fade out</p>
      <p class="fragment highlight-red">Highlight red</p>
      <p class="fragment fade-in-then-out">Fade in, then out</p>
      <p class="fragment fade-up">Slide up while fading in</p>
    </section>
  </div>
</div>

| Name                    | Effect     |
| :-                      |:-          |
| fade-out                | Start visible, fade out |
| fade-up                 | Slide up while fading in |
| fade-down               | Slide down while fading in |
| fade-left               | Slide left while fading in |
| fade-right              | Slide right while fading in |
| fade-in-then-out        | Fades in, then out on the next step |
| fade-in-then-semi-out   | Fades in, then to 50% on the next step |
| grow                    | Scale up |
| shrink                  | Scale down |
| strike                  | Strike through |
| highlight-red           | Turn text red |
| highlight-green         | Turn text green |
| highlight-blue          | Turn text blue |
| highlight-current-red   | Turn text red, then back to original on next step |
| highlight-current-green | Turn text green, then back to original on next step |
| highlight-current-blue  | Turn text blue, then back to original on next step |
{.no-wrap-1st .w-full-2nd}


## Nested Fragments

Multiple fragments can be applied to the same element sequentially by wrapping it, this will fade in the text on the first step, turn it red on the second and fade out on the third.

```html
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      Fade in > Turn red > Fade out
    </span>
  </span>
</span>
```
<div class="reveal example-deck">
  <div class="slides">
    <section>
      <span class="fragment fade-in">
        <span class="fragment highlight-red">
          <span class="fragment fade-out">
            Fade in > Turn red > Fade out
          </span>
        </span>
      </span>
    </section>
  </div>
</div>

## Fragment Order

By default fragments will be stepped through in the order that they appear in the DOM. This display order can be changed using the `data-fragment-index` attribute. Note that multiple elements can appear at the same index.

```html
<p class="fragment" data-fragment-index="3">Appears last</p>
<p class="fragment" data-fragment-index="1">Appears first</p>
<p class="fragment" data-fragment-index="2">Appears second</p>
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

## Fragment Events

When a fragment is either shown or hidden reveal.js will dispatch an event.

```javascript
Reveal.on( 'fragmentshown', event => {
  // event.fragment = the fragment DOM element
} );
Reveal.on( 'fragmenthidden', event => {
  // event.fragment = the fragment DOM element
} );
```