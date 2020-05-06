---
id: overview
title: Overview
layout: default
---

# Plugins

TODO: Describe what plugins are, and how to load them.

## Dependencies

Reveal.js doesn’t _rely_ on any third party scripts to work but a few optional libraries are included by default. These libraries are loaded as dependencies in the order they appear, for example:

```javascript
Reveal.initialize({
  dependencies: [
    // Interpret Markdown in <section> elements
    { src: ’plugin/markdown/marked.js’, condition: () => { return !!document.querySelector( ’[data-markdown]’ ); } },
    { src: ’plugin/markdown/markdown.js’, condition: () => { return !!document.querySelector( ’[data-markdown]’ ); } },

    // Syntax highlight for <code> elements
    { src: ’plugin/highlight/highlight.js’, async: true },

    // Zoom in and out with Alt+click
    { src: ’plugin/zoom-js/zoom.js’, async: true },

    // Speaker notes
    { src: ’plugin/notes/notes.js’, async: true },

    // MathJax
    { src: ’plugin/math/math.js’, async: true }
  ]
});
```

You can add your own extensions using the same syntax. The following properties are available for each dependency object:
- **src**: Path to the script to load
- **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
- **callback**: [optional] Function to execute when the script has loaded
- **condition**: [optional] Function which must return true for the script to be loaded

You can also include dependencies which are bundled/already present on the page. To include a bundled plugin. replace the `src` property with a reference to a `plugin` instance:
- **plugin**: the plugin instance (see [Plugins](#plugins))