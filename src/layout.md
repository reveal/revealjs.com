---
id: layout
title: Layout
layout: default
---

# Layout

We provide a few different helper classes for controlling the layout and styling your content. We're aiming to add more of these in upcoming versions so keep an eye out for that.

If you're looking to change the sizing, scaling and centering of your presentation please see [Presentation Size](/presentation-size/).

## Stack

The `r-stack` layout helper lets you center and place multiple elements on top of each other. This is intended to be used together with [fragments](/fragments/) to incrementally reveal elements.

```html
<div class="r-stack">
  <img
    class="fragment"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

If you want to show each of the stacked elements individually you can adjust the fragment settings:

```html
<div class="r-stack">
  <img
    class="fragment fade-out"
    data-fragment-index="0"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment current-visible"
    data-fragment-index="0"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment fade-out" data-fragment-index="0" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment current-visible" data-fragment-index="0" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

## Fit Text

The `r-fit-text` class makes text as large as possible without overflowing the slide. This is great when you want BIG text without having to manually find the right font size. Powered by [fitty](https://github.com/rikschennink/fitty) ❤️

```html
<h2 class="r-fit-text">BIG</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">BIG</h2>
    </section>
  </div>
</div>

```html
<h2 class="r-fit-text">FIT TEXT</h2>
<h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">FIT TEXT</h2>
      <h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
    </section>
  </div>
</div>

## Stretch

The `r-stretch` layout helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide. For example, in the below example our slide contains a **title**, an **image** and a **byline**. Because the **image** has the `.r-stretch` class, its height is set to the slide height minus the combined height of the **title** and **byline**.

```html
<h2>Stretch Example</h2>
<img class="r-stretch" src="/images/slides-symbol-512x512.png" />
<p>Image byline</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>Stretch Example</h2>
      <img class="r-stretch" style="display: inline-block;" src="/images/slides-symbol-512x512.png">
      <p>Image byline</p>
    </section>
  </div>
</div>

#### Stretch Limitations

- Only direct descendants of a slide section can be stretched
- Only one descendant per slide section can be stretched

## Frame

Decorate any element with `r-frame` to make it stand out against the background. If the framed element is placed inside an anchor, we'll apply a hover effect to the border.

```html
<img src="logo.svg" width="200" />
<a href="#">
  <img class="r-frame" src="logo.svg" width="200" />
</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-symbol.svg" width="200">
      <a href="#">
        <img class="r-frame" src="/images/logo/reveal-symbol.svg" width="200">
      </a>
    </section>
  </div>
</div>
