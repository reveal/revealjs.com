---
id: slide-numbers
title: Slide Numbers
layout: default
---

# Slide Numbers

If you would like to display the page number of the current slide you can do so using the `slideNumber` and `showSlideNumber` configuration values.

```javascript
// Shows the slide number using default formatting
Reveal.configure({ slideNumber: true });

// Slide number formatting can be configured using these variables:
//  "h.v":  horizontal . vertical slide number (default)
//  "h/v":  horizontal / vertical slide number
//    "c":  flattened slide number
//  "c/t":  flattened slide number / total slides
Reveal.configure({ slideNumber: 'c/t' });

// You can provide a function to fully customize the number:
Reveal.configure({ slideNumber: slide => {
    // Ignore numbering of vertical slides
    return [ Reveal.getIndices( slide ).h ];
}});

// Control which views the slide number displays on using the "showSlideNumber" value:
//     "all": show on all views (default)
// "speaker": only show slide numbers on speaker notes view
//   "print": only show slide numbers when printing to PDF
Reveal.configure({ showSlideNumber: 'speaker' });
```