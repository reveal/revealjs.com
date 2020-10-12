---
id: methods
title: API Methods
layout: default
---

# API

We provide an extensive JavaScript API for controlling navigation and checking the current state of a presentation. If you're working with a single presentation instance the API can be accessed via the global `Reveal` object.

### Navigation
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

// Checks which directions we can navigate towards
// {top: false, right: true, bottom: false, left: false}
Reveal.availableRoutes();
```

### Misc
```javascript
// Call this if you add or remove slides to update controls, progress, etc
Reveal.sync();

// Call this to update the presentation scale based on available viewport
Reveal.layout();

// Randomize the order of slides
Reveal.shuffle();

// Returns the present configuration options
Reveal.getConfig();

// Fetch the current scale of the presentation
Reveal.getScale();

// Returns an object with the scaled presentationWidth & presentationHeight
Reveal.getComputedSlideSize();

Reveal.getIndices(slide=currentSlide);  // Coordinates of the slide (e.g. { h: 0, v: 0, f: 0 })
Reveal.getProgress();                   // (0 == first slide, 1 == last slide)

// Returns the speaker notes for the slide
Reveal.getSlideNotes(slide=currentSlide);
```

### Slides
```javascript
// Retrieves the previous and current slide elements
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

// Returns an all horizontal/vertical slides in the deck
Reveal.getHorizontalSlides();
Reveal.getVerticalSlides();

// Total number of slides
Reveal.getTotalSlides();
Reveal.getSlidePastCount();

// Array of all slides
Reveal.getSlides();
```

### Slide State
```javascript
// Checks if the presentation contains two or more
// horizontal/vertical slides
Reveal.hasHorizontalSlides();
Reveal.hasVerticalSlides();

// Checks if the deck has navigated on either axis at least once
Reveal.hasNavigatedHorizontally();
Reveal.hasNavigatedVertically();

Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isVerticalSlide();
```

### Modes
```javascript
// Shows a help overlay with keyboard shortcuts, optionally pass true/false
// to force on/off
Reveal.toggleHelp();

// Toggle presentation states, optionally pass true/false to force on/off
Reveal.toggleOverview();
Reveal.toggleAutoSlide();
Reveal.togglePause();

Reveal.isOverview();
Reveal.isAutoSliding();
Reveal.isPaused();
```

### DOM Elements
```javascript
// Retrieve key DOM elements
Reveal.getRevealElement(); // <div class="reveal">
Reveal.getSlidesElement(); // <div class="slides">
Reveal.getViewportElement(); // <div class="reveal-viewport">
```

## More Reading
- [Plugin API](/plugins/#api)
