---
id: installation
layout: default
meta_title: Installation
meta_description: tbd
title: Installation
---

# Installation

The **basic setup** is for authoring presentations only. The **full setup** gives you access to all reveal.js features and plugins such as speaker notes as well as the development tasks needed to make changes to the source.

## Basic setup

The core of reveal.js is very easy to install. You'll simply need to download a copy of this repository and open the index.html file directly in your browser.

1. Download the latest version of reveal.js from <https://github.com/hakimel/reveal.js/releases>
2. Unzip and replace the example contents in index.html with your own
3. Open index.html in a browser to view it

## Full setup

Some reveal.js features, like external Markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](https://nodejs.org/) (10.0.0 or later)

1. Clone the reveal.js repository
   ```sh
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

1. Move to the reveal.js folder and install dependencies
   ```sh
   $ cd reveal.js && npm install
   ```

1. Serve the presentation and monitor source files for changes
   ```sh
   $ npm start
   ```

1. Open <http://localhost:8000> to view your presentation

   You can change the port by using `npm start -- --port=8001`.