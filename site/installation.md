---
id: installation
layout: default
meta_title: Installation
title: Installation
---

# Installation

The **basic setup** is for authoring presentations only. The **full setup** gives you access to all reveal.js features and plugins such as speaker notes as well as the development tasks needed to make changes to the source.

## Basic Setup

The core of reveal.js is very easy to install. You'll simply need to download a copy of this repository and open the index.html file directly in your browser.

1. Download the latest version of reveal.js from <https://github.com/hakimel/reveal.js/releases>
2. Unzip and replace the example contents in index.html with your own
3. Open index.html in a browser to view it

## Full Setup

Some reveal.js features, like external Markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

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
The development server defaults to port 8000. You can use the the `port` argument to switch to a different one:
```shell
npm start -- --port=8001
```

## Installing from npm or yarn

You can also install reveal.js as a dependency using npm or yarn.

```shell
npm install reveal.js
# or
yarn add reveal.js
```

Once installed, you can include reveal.js as an ES module:
```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/dist/plugin/markdown.esm.js';

let deck = new Reveal({
   plugins: [ Markdown ]
})
deck.initialize();
```

You'll also need to include the reveal.js styles and a presentation theme. Here's an example of how that can be done assuming you're using Sass:
```scss
@import '/node_modules/reveal.js/dist/reveal';
@import '/node_modules/reveal.js/dist/theme/black';
```