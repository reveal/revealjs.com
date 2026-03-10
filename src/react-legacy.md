---
id: react-legacy
title: React (Manual Setup)
layout: default
---

# React (Manual Setup)

<div class="r-callout">
  This page describes the manual setup approach used before reveal.js 6.0. If you're starting a new project, use the official <a href="/react/"><strong>@revealjs/react</strong></a> package instead.
</div>

## Installing From npm

You can add and initialize reveal.js in a JavaScript/TypeScript source file like `main.tsx` or `app.tsx`.

You can do so globally i.e. outside of app/component functions or inside one of them. In the latter case, you have to be careful not to stack initializations. Only initialize a slide deck once. If you need to reconfigure, use the `configure` function or `destroy` the deck before initializing again.

To begin, install reveal.js using `npm`:

```bash
npm install reveal.js
```

#### Imports

You will need the following imports:

```ts
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css'; // "black" theme is just an example
```

#### Initialization

Finally, add the [initialization code](/initialization/) most suitable to your project's needs.

If you decide to initialize the slide deck inside an app or component function where slide deck containers are in the returned JSX, we recommend using a `useEffect` hook to do so. This will ensure that initialization happens after the containers are first rendered.

It is also recommended to use refs to maintain a handle on the slide deck container `div` and the corresponding `reveal` instance. These refs can help make sure each slide deck is only initialized once.

#### Full Working Example

```tsx
// App.tsx
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import type { RevealApi } from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<RevealApi | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setup
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    // Your presentation is sized based on the width and height of
    // the parent element. Make sure the parent is not 0-height.
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

Note the use of `deckDivRef` in the `Reveal` constructor. This is important if you want to add multiple decks to the same React app.

## React Portals

If you only want to sprinkle a few components into specific slides, we recommend keeping the reveal.js DOM tree outside of React and using [React Portals](https://react.dev/reference/react-dom/createPortal) to place React components into specific sections.
