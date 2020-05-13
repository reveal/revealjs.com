---
id: methods
title: API Methods
layout: default
---

# API

We provide an extensive JavaScript API for controlling navigation and checking the current state of a presentation. If you're working with a single presentation instance the API can be accessed via the global `Reveal` object.

```javascript
// Navigate to a specific slide
Reveal.slide( indexh, indexv, indexf );

// Relative navigation
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();

// Fragment navigation
Reveal.prevFragment();
Reveal.nextFragment();

// Call this if you add or remove slides to update controls, progress, etc
Reveal.sync();

// Randomize the order of slides
Reveal.shuffle();

// Toggle presentation states, optionally pass true/false to force on/off
Reveal.toggleOverview();
Reveal.toggleAutoSlide();
Reveal.togglePause();

// Shows a help overlay with keyboard shortcuts, optionally pass true/false
// to force on/off
Reveal.toggleHelp();

// Returns the present configuration options
Reveal.getConfig();

// Fetch the current scale of the presentation
Reveal.getScale();

// Returns an object with the scaled presentationWidth & presentationHeight
Reveal.getComputedSlideSize();

// Retrieves the previous and current slide elements
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

// Checks which directions we can navigate towards
// {top: false, right: true, bottom: false, left: false}
Reveal.availableRoutes();

Reveal.getIndices();        // { h: 0, v: 0, f: 0 }
Reveal.getSlidePastCount();
Reveal.getProgress();       // (0 == first slide, 1 == last slide)
Reveal.getSlides();         // Array of all slides
Reveal.getTotalSlides();    // Total number of slides

// Returns an array with all horizontal/vertical slides in the deck
Reveal.getHorizontalSlides();
Reveal.getVerticalSlides();

// Checks if the presentation contains two or more
// horizontal/vertical slides
Reveal.hasHorizontalSlides();
Reveal.hasVerticalSlides();

// Checks if the deck has navigated on either axis at least once
Reveal.hasNavigatedHorizontally();
Reveal.hasNavigatedVertically();

// Returns the speaker notes for the current slide
Reveal.getSlideNotes();

// State checks
Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isVerticalSlide();
Reveal.isOverview();
Reveal.isPaused();
Reveal.isAutoSliding();

// Retrieve key DOM elements
Reveal.getRevealElement(); // <div class="reveal">
Reveal.getSlidesElement(); // <div class="slides">
Reveal.getViewportElement(); // <div class="reveal-viewport">
```

## More Reading
- [Plugin API](/#api)
