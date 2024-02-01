---
id: react
title: React Framework
layout: default
---

# React Framework

Reveal.js can be added to a React project a few different ways. 
1. Manually add Reveal.js markup and setup scripts to a React project
2. Install using `npm` and setup programmatically **(recommended)**
3. Use third-party packages

When it comes to React projects, the two most popular creation, setup, and build tools are Vite and CRA. Since CRA is no longer officially supported, we will focus on Vite.

## Vite + React

### Manual

Starting with a very simple presentation:

```html
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

#### React everywhere

If you want to create a presentation entirely in React (which you can), then make the Reveal slide deck container (div with `class="reveal"`) the `#root` of your React App. The simplest way is to replace the root `div` in the project's `index.html` with the slide deck container (with contents) and then just add `id="root"` to the container.

Using the example above, you would replace

```html
<div id="root"></div>
```

inside `index.html` with

```html
<div id="root" class="reveal">
  <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
  </div>
</div>
```
from our example.

Next, add in the other parts of your presentation's html that is missing from your Vite project's `index.html` document.

Continuing with our example, you would need to add

```html
<link rel="stylesheet" href="dist/reveal.css" />
<link rel="stylesheet" href="dist/theme/white.css" />
```

to `index.html` document's head element and add the scripts

```html
<script src="dist/reveal.js"></script>
<script>
  Reveal.initialize();
</script>
```
somewhere at the end of the body.

Altogether, your `index.html` file should look like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root" class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```
#### React Islands

If you only want to sprinkle a few components into specific slides, we recommend you make the react root element a separate element that sits outside of the reveal container div and then **use [react portals](https://react.dev/reference/react-dom/createPortal) to place react component into specific sections.** 

For a simple Vite project you might end up with an `index.html` that looks like: 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

#### Paths

There is an potential issue with the examples provided so far and that is the paths for the reveal links and scripts. You need to make sure they are correct and they depend on how you added Reveal to your project. We would recommend using the `npm` installation method and then making sure reveal is included in the build (so it ends up in the `dist` directory).

### Programmatic

Instead of editing the `index.html` file, you can add and initialize reveal in a Javascript/Typescript source file like `main.tsx` or `app.tsx`. 

You can do so globally i.e. outside of app/component functions or inside one of them. In the latter case, you have to be careful not to stack initializations. Only initialize a slide deck once. If you need to reconfigure, use the `configure` function or `destroy` the deck before initializing again.

To begin, install reveal using `npm`:

```bash
npm install reveal.js
```

and if you are using typescript, you need to install the types as well:

```bash
npm i --save-dev @types/reveal.js
```

#### Imports

You will need the following imports:

```ts
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css"; // "black" theme is just an example
```

#### Initialization

Finally, add the code provided in the [initialization section of the Reveal.js docs](https://revealjs.com/initialization/). Make sure to use what is relevant to your case.

If you decide to intialize the slide deck inside an app or component function where slide deck containers are in the returned JSX, we recommended you use a `useEffect` hook to do so. This will ensure that initialization happens after the containers are first rendered.

It is also recommended to use refs to maintain a handle on the slide deck container `div` and the corresponding `reveal` instance. These refs can help make sure each slide deck is only initialized once. 

#### Example:

```ts
// App.tsx
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
    const deckDivRef = useRef<HTMLDivElement>(null) // keep reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // keep reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization in strict mode
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, {
            transition: "slide",
            // other config options
        });

        deckRef.current.initialize().then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
        // Your presentation is sized based on the width and height of
        // our parent element. Make sure the parent is not 0-height.
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">
                <section>Slide 1</section>
                <section>Slide 2</section>
            </div>
        </div>
    );
}

export default App;
```

Note the use of `deckDivRef` in the `Reveal` constructor. This is important if you want to add multiple decks to the `App`.

## Third party packages

The following third-party packages might prove useful for adding Reveal.js presentations to React projects or for adding React components/apps to Reveal.js presentations:

- [revealjs-react](https://github.com/blakeanedved/revealjs-react) - A React wrapper for the RevealJS Presentation Library.
- [react-reveal-slides](https://github.com/bouzidanas/react-reveal-slides) - A React component for creating Reveal.js presentations entirely in React.
- [revealjs-react-boilerplate](https://github.com/cberthou/revealjs-react-boilerplate) - A boilerplate for creating revealJS presentations using React.