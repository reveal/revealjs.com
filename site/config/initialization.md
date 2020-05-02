---
id: initialization
layout: default
meta_title: Initialization
title: Initialization
---

# Initialization

If you only have a single presentation on the page we recommend initializing reveal.js using the singleton API.
```html
<script src="dist/reveal.es5.js"></script>
<script>
  Reveal.initialize({ keyboard: true });
</script>
```

The `initialize` method returns a promise which will resolve as soon as the presentation is ready and can be interacted with via the API.
```js
Reveal.initialize.then( () => {
  // reveal.js is ready
} )
```

If you want to run multiple presentations side-by-side on the same page you can create instances of the Reveal class. Note that you will also need to set the `embedded` config option to true.
```html
<div class="reveal deck-1">...</div>
<div class="reveal deck-2">...</div>
<script src="dist/reveal.es5.js"></script>
<script>
  let deck1 = new Reveal( document.querySelector( 'deck-1' ), { embedded: true } );
  let deck2 = new Reveal( document.querySelector( 'deck-2' ), { embedded: true } );

  deck1.initialize();
  deck2.initialize();
</script>
```

## ES Module

We provide two JavaScript bundles; `/dist/reveal.es5.js` with support for legacy browers and `/dist/reveal.js` which targets modern browsers with ES6 support.

Here's how to import and initialize the ES module version of reveal.js, including the Markdown plugin:

```html
<script type="module">
  import Reveal from '/dist/reveal.js';
  import Markdown from '/plugin/markdown/markdown.js';
  Reveal.initialize({
    plugins: [ Markdown ]
  });
</script>
```