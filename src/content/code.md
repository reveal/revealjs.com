---
id: code
title: Presenting Code
layout: default
---

# Presenting Code

By default, Reveal is configured with [highlight.js](https://highlightjs.org/) for code syntax highlighting. To enable syntax highlighting, you'll have to load the highlight plugin ([plugin/highlight/highlight.js](plugin/highlight/highlight.js)) and a highlight.js CSS theme (Reveal comes packaged with the Monokai themes: [lib/css/monokai.css](lib/css/monokai.css)).

```javascript
Reveal.initialize({
  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
  ]
});
```

Below is an example with clojure code that will be syntax highlighted. When the `data-trim` attribute is present, surrounding whitespace is automatically removed.  HTML will be escaped by default. To avoid this, for example if you are using `<mark>` to call out a line of code, add the `data-noescape` attribute to the `<code>` element.

```html
<section>
  <pre><code data-trim data-noescape>
(def lazy-fib
  (concat
   [0 1]
   <mark>((fn rfib [a b]</mark>
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
  </code></pre>
</section>
```

## Line Numbers & Highlights

To enable line numbers, add `data-line-numbers` to your `<code>` tags. If you want to highlight specific lines you can provide a comma separated list of line numbers using the same attribute. For example, in the following example lines 4 and 8-11 are highlighted:

```html
<pre><code class="hljs" data-line-numbers="4,8-11">
import React, { useState } from 'react';
 
function Example() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
</code></pre>
```

## Step-by-step Highlights

You can step through multiple code highlights on the same code block. Delimit each of your highlight steps with the `|` character. For example `data-line-numbers="1|2-3|4,6-10"` will produce three steps. It will start by highlighting line 1, next step is lines 2-3, and finally line 4 and 6 through 10.