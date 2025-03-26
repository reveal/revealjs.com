---
id: installation
title: Installation
layout: default
---

# Installation

We provide three different ways to install reveal.js depending on your use case and technical experience.

1. The [basic setup](#basic-setup) is the easiest way to get started. No need to set up any build tools.
1. The [full setup](#full-setup) gives you access to the build tools needed to make changes to the reveal.js source code. It includes a web server which is required if you want to load external Markdown files (the basic setup paired with your own choice of local web server works too).
1. If you want to use reveal.js as a dependency in your project, you can [install from npm](#installing-from-npm).

#### Next Steps

Once reveal.js is installed, we recommend checking out the [Markup](/markup/) and [Config Option](/config/) guides.

## Basic Setup

We make a point of distributing reveal.js in a way that it can be used by as many people as possible. The basic setup is our most broadly accessible way to get started and only requires that you have a web browser. There's no need to go through a build process or install any dependencies.

1. Download the latest reveal.js version <https://github.com/hakimel/reveal.js/archive/master.zip>
1. Unzip and replace the example contents in index.html with your own
1. Open index.html in a browser to view it

That's it 🚀

## Full Setup <span class="text-gray-500 font-normal">- Recommended</span>{id="full-setup"}

Some reveal.js features, like external Markdown, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](https://nodejs.org/) (10.0.0 or later)

1. Clone the reveal.js repository

   ```shell
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

1. Move to the reveal.js folder and install dependencies

   ```shell
   $ cd reveal.js && npm install
   ```

1. Serve the presentation and monitor source files for changes

   ```shell
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

### Development Server Port

The development server defaults to port 8000. You can use the `port` argument to switch to a different one:

```shell
npm start -- --port=8001
```

## Installing From npm

The framework is published to, and can be installed from, [npm](https://www.npmjs.com/package/reveal.js). Note that reveal.js is targeted at the browser and includes CSS, fonts and other assets so the npm dependency use case may be limited.

```shell
npm install reveal.js
# or
yarn add reveal.js
```

Once installed, you can include reveal.js as an ES module:

```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

You'll also need to include the reveal.js styles and a [presentation theme](/themes/).

```html
<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css" />
```

## Using framework
This guide works with Deno Fresh. Appliance to other frameworks should be similar.

On `routes/index.tsx`:
```tsx
import Island from "../islands/Island.tsx";

export default function Home() {
  return (
    <Island />
  );
}
```
On `islands/Island.tsx`:
```jsx
import {useEffect} from 'preact/hooks'
import Reveal from '../reveal/js/index.js';

export default function Island() {
  useEffect(()=> {
    const deck = new Reveal()
    deck.initialize();
  }, [] ) 
  return (
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
  ) 
}
```
Add these styles into `routes/_app.tsx`:
```html
<link rel="stylesheet" href="https://unpkg.com/reveal.js@4.3.1/dist/reveal.css" />
<link rel="stylesheet" href="https://unpkg.com/reveal.js@4.3.1/dist/reset.css" />
<link rel="stylesheet" href="https://unpkg.com/reveal.js@4.3.1/dist/theme/black.css" />
```
