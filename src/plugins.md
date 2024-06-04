---
id: plugins
title: Plugins
layout: default
---

# Plugins

Plugins can be used to extend reveal.js with additional functionality. To make use of a plugin, you'll need to do two things:

1. Include the plugin script in the document. (Some plugins may require styles as well.)
1. Tell reveal.js about the plugin by including it in the `plugins` array when initializing.

Here's an example:

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

If you're using ES modules, we also provide module exports for all built-in plugins:

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

## Built-in Plugins

A few common plugins which add support for [Markdown](/markdown/), [code highlighting](/code/) and [speaker notes](/speaker-view/) are included in our default [presentation boilerplate](https://github.com/hakimel/reveal.js/blob/master/index.html).

These plugins are distributed together with the reveal.js repo. Here's a complete list of all built-in plugins.

| Name            | Description                                                                                                             |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------- |
| RevealHighlight | Syntax highlighted [code](/code/).<br><span class="text-gray-600">plugin/highlight/highlight.js</span>                  |
| RevealMarkdown  | Write content using [Markdown](/markdown/).<br><span class="text-gray-600">plugin/markdown/markdown.js</span>           |
| RevealSearch    | Press CTRL+Shift+F to search slide content.<br><span class="text-gray-600">plugin/search/search.js</span>               |
| RevealNotes     | Show a [speaker view](/speaker-view/) in a separate window.<br><span class="text-gray-600">plugin/notes/notes.js</span> |
| RevealMath      | Render [math equations](/math/).<br><span class="text-gray-600">plugin/math/math.js</span>                              |
| RevealZoom      | Alt+click to zoom in on elements (CTRL+click in Linux).<br><span class="text-gray-600">plugin/zoom/zoom.js</span>       |

{.key-value}

All of the above are available as ES modules if you swap `.js` for `.esm.js`.

## API

We provide API methods for checking which plugins that are currently registered. It's also possible to retrieve a reference to any registered plugin instance if you want to manually call a method on them.

```js
import Reveal from 'dist/reveal.esm.js';
import Markdown from 'plugin/markdown/markdown.esm.js';
import Highlight from 'plugin/highlight/highlight.esm.js';

Reveal.initialize({ plugins: [Markdown, Highlight] });

Reveal.hasPlugin('markdown');
// true

Reveal.getPlugin('markdown');
// { id: "markdown", init: ... }

Reveal.getPlugins();
// {
//   markdown: { id: "markdown", init: ... },
//   highlight: { id: "highlight", init: ... }
// }
```

## Dependencies <span class="r-version-badge deprecated">4.0.0</span> {id=dependencies}

This functionality is left in for backwards compatibility but has been deprecated as of reveal.js 4.0.0. In older versions we used a built-in dependency loader to load plugins. We moved away from this because how scripts are best loaded and bundled may vary greatly depending on use case. If you need to load a dependency, include it using a `<script defer>` tag instead.

Dependencies are loaded in the order they appear.

```js
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/markdown.js', condition: () => {
        return !!document.querySelector( ’[data-markdown]’ );
    } },
    { src: 'plugin/highlight/highlight.js', async: true }
  ]
});
```

The following properties are available for each dependency object:

- **src**: Path to the script to load
- **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
- **callback**: [optional] Function to execute when the script has loaded
- **condition**: [optional] Function which must return true for the script to be loaded
