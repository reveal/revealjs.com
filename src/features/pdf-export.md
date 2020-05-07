---
id: pdf-export
title: PDF Export
layout: default
---

# PDF Export

Presentations can be exported to PDF via a special print stylesheet. This feature requires that you use [Google Chrome](http://google.com/chrome) or [Chromium](https://www.chromium.org/Home) and the presentation needs to be served from a web server.

Here's an example of an exported presentation that's been uploaded to SlideShare: http://www.slideshare.net/hakimel/revealjs-300.

## Separate pages for fragments
[Fragments](/features/fragments) are printed on separate slides by default. Meaning if you have a slide with three fragment steps, it will generate three separate slides where the fragments appear incrementally.

If you prefer printing all fragments in their visible states on the same slide you can set the `pdfSeparateFragments` config option to false.

## Page size

Export dimensions are inferred from the configured [presentation size](/config/presentation-size). Slides that are too tall to fit within a single page will expand onto multiple pages. You can limit how many pages a slide may expand onto using the `pdfMaxPagesPerSlide` config option, for example `Reveal.configure({ pdfMaxPagesPerSlide: 1 })` ensures that no slide ever grows to more than one printed page.

## Instructions

1. Open your presentation with `print-pdf` included in the query string i.e. `http://localhost:8000/?print-pdf`. You can test this with [revealjs.com?print-pdf](http://revealjs.com?print-pdf).
1. Open the in-browser print dialog (CTRL/CMD+P).
1. Change the **Destination** setting to **Save as PDF**.
1. Change the **Layout** to **Landscape**.
1. Change the **Margins** to **None**.
1. Enable the **Background graphics** option.
1. Click **Save** 🎉

![Chrome Print Settings](https://s3.amazonaws.com/hakim-static/reveal-js/pdf-print-settings-2.png)

## Exporting Printing Speaker Notes

If you want to include [speaker notes](/features/speaker-view) in your export, you can append `showNotes=true` to the query string, for example: `http://localhost:8000/?print-pdf&showNotes=true`.

## Alternative Ways to Export

You can also use [decktape](https://github.com/astefanutti/decktape) to convert your presentation to PDF via the command line.