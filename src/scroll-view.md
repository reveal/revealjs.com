---
id: scroll-view
title: Scroll View
layout: default
---

# Scroll View <span class="r-version-badge new">5.0.0</span>

As of reveal.js 5.0 any presentation can be viewed as a scrollable page. All of your animations, fragments and other features continue to work just like they do in the normal slide view.

Slide decks are a great format for giving presentations, but scrollable web pages are easier for viewers to read on their own.

The scroll view gives you the best of both worlds—without any extra effort. Present in the format best suited for presenting, share in the format best suited for consumption.

### What About Vertical Slides?

The scroll view flattens your deck into a single linear flow. All slides will appear in the order they were authored and there is no diffentiation between horizontal and [vertical slides](/vertical-slides).

### Getting Started

The scroll view is activated by initializing reveal.js with `view: "scroll"`. Here's a demo of it in action.

```js
Reveal.initialize({
  // Activate the scroll view
  view: 'scroll',

  // Force the scrollbar to remain visible
  scrollProgress: true,
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "scrollProgress": true}'>
  <div class="slides">
    <section>
      <h2>Scroll me!</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide with two fragments</h2>
      <h2 class="fragment fade-left">One</h2>
      <h2 class="fragment fade-left">Two</h2>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">Scrolling is even better</h2>
        <div data-id="box-1" style="position: absolute; top: 100%; left: 50%; width: 40px; height: 40px; background-color: indigo;"></div>
      </div>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">Scrolling is even better</h2>
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">with auto-animate!</h2>
        <div data-id="box-1" style="position: absolute; top: -20px; left: 0; width: 100%; height: 180px; background-color: indigo;"></div>
      </div>
    </section>
    <section><h2>The end</h2></section>
  </div>
</div>

## URL Activation

Want to enable scrolling for a deck without changing its config? Edit the URL and append `view=scroll` to the query string. For example, here's the main reveal.js demo in scroll view:  
<https://revealjs.com/demo/?view=scroll>

## Automatic Activation

The scroll view is great when browsing presentations on a mobile device. For that reason, we automatically enable the scroll view when the viewport reaches mobile widths.

This is controlled through the `scrollActivationWidth` config value. If you want to disable the automatic scroll view initialize your presentation with that value set to `null` or `0`:

```js
Reveal.initialize({
  scrollActivationWidth: null,
});
```

## Scrollbar

We render a custom scrollbar for any presentaion in scroll view. This scrollbar is broken up by slide so that users get a clear indication of when the slide will change.

The scrollbar also shows individual fragments within your slides. Slides with fragments are given more vertical space based on how many fragments there are.

By default, the scrollbar is automatically hidden when you stop scrolling. This behavior can be configured using `scrollProgress`.

```js
// - auto:     Show the scrollbar while scrolling, hide while idle
// - true:     Always show the scrollbar
// - false:    Never show the scrollbar
scrollProgress: 'auto';
```

## Scroll Snapping

When scrolling reveal.js will automatically snap to the closest slide. This was picked as the default behavior because it's very comfortable to "flick" between slides this way on touch devices.

If you prefer, you can change it to only snap when you're close to the top of a slide using `proximity`. You can also disable snapping altogether by setting `scrollSnap` to `false`.

```js
// - false:      No snapping, scrolling is continuous
// - proximity:  Snap when close to a slide
// - mandatory:  Always snap to the closest slide
scrollSnap: 'mandatory';
```

## Scroll Layout (experimental)

By default each slide will be sized to be as tall as the viewport. This looks great in most circumstances but can mean a bit of empty space above and below your slides (depending on the viewport and slide deck aspect ratio).

If you prefer a more dense layout with multiple slides visible in parallel, set the `scrollLayout` option to `compact`. This will size each slide to be as wide as the viewport and as tall as it needs to match your aspect ratio (slide width/height).

You can see the different between the two modes in the examples below. Starting with the compact layout.

```js
Reveal.initialize({
  view: 'scroll'
  scrollLayout: 'compact'
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "compact"}'>
  <div class="slides">
    <section>
      <h2>Slide one</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide two</h2>
    </section>
    <section data-background="salmon">
      <h2>Slide three</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide four</h2>
    </section>
  </div>
</div>

Here's the same content with `scrollLayout` set to the default (`'full'`).

```js
Reveal.initialize({
  view: 'scroll'
  scrollLayout: 'full' // this is the default value
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "full"}'>
  <div class="slides">
    <section>
      <h2>Slide one</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide two</h2>
    </section>
    <section data-background="salmon">
      <h2>Slide three</h2>
    </section>
    <section data-background="indigo">
      <h2>Slide four</h2>
    </section>
  </div>
</div>

## Examples

If you're looking for examples of scrollable reveal.js decks here's a great one: https://slides.com/news/scroll-mode/scroll
