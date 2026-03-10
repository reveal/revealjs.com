---
id: react
title: React
layout: default
---

# React

`@revealjs/react` is the official React wrapper for reveal.js. Describe your slides as React components and let the package handle initialization, syncing and cleanup.

## Installation

Install the package along with its peer dependencies:

```bash
npm i @revealjs/react reveal.js react react-dom
# or
yarn add @revealjs/react reveal.js react react-dom
```

The package ships only the React bindings. You still need to import the reveal.js CSS, a theme, and any plugins your deck uses.

## Basic Deck

Render a `Deck` with one or more `Slide` children and import the core reveal.js styles:

```tsx
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h1>Hello</h1>
        <p>My first Reveal deck in React.</p>
      </Slide>

      <Slide background="#111827">
        <h2>Second slide</h2>
      </Slide>
    </Deck>
  );
}
```

For vertical slides, wrap `Slide` components in `Stack`:

```tsx
import { Deck, Slide, Stack } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Slide>Intro</Slide>

      <Stack>
        <Slide>Vertical 1</Slide>
        <Slide>Vertical 2</Slide>
      </Stack>
    </Deck>
  );
}
```

## Fragments

Use `Fragment` to reveal content one step at a time. By default it renders as a `<span>` — use the `as` prop to change the element type.

```tsx
import { Deck, Slide, Fragment } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h2>Step by step</h2>
        <Fragment as="p">First point</Fragment>
        <Fragment as="p">Second point</Fragment>
        <Fragment as="p">Third point</Fragment>
        <Fragment asChild><div>Third point</div></Fragment>
      </Slide>
    </Deck>
  );
}
```

Pass an `animation` prop for a specific [fragment style](/fragments/), and `index` to control the order:

```tsx
<Fragment animation="fade-up">Fades up</Fragment>
<Fragment animation="highlight-red" index={2}>Highlighted last</Fragment>
```

## Configuration

Pass any [reveal.js config option](/config/) through the `config` prop on `Deck`. Plugins are registered separately via `plugins` and are applied once at initialization time, matching reveal.js's plugin lifecycle.

{% raw %}
```tsx
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

export function Presentation() {
  return (
    <Deck
      config={{
        width: 1280,
        height: 720,
        hash: true,
        transition: 'slide',
      }}
      plugins={[RevealHighlight]}
    >
      <Slide>Configured deck</Slide>
    </Deck>
  );
}
```
{% endraw %}

`Slide` supports convenient background props such as `background`, `backgroundImage` and `backgroundColor`, while still passing through raw `data-*` attributes like `data-transition` and `data-auto-animate` to the underlying `<section>` element.

## Events

Use event props on `Deck` to respond to reveal.js lifecycle and navigation events:

```tsx
import { Deck, Slide } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck
      onReady={(deck) => console.log('Ready', deck)}
      onSlideChange={(event) => console.log('Slide changed', event.indexh, event.indexv)}
      onFragmentShown={(event) => console.log('Fragment shown', event.fragment)}
    >
      <Slide>Intro</Slide>
      <Slide>Next</Slide>
    </Deck>
  );
}
```

Available event props: `onReady`, `onSync`, `onSlideSync`, `onSlideChange`, `onSlideTransitionEnd`, `onFragmentShown`, `onFragmentHidden`, `onOverviewShown`, `onOverviewHidden`, `onPaused`, `onResumed`.

## Reveal API

Use `useReveal()` inside the deck tree to call the reveal.js API from your own components:

```tsx
import { Deck, Slide, useReveal } from '@revealjs/react';

function NextButton() {
  const deck = useReveal();

  return <button onClick={() => deck?.next()}>Next slide</button>;
}

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h2>Controlled from React</h2>
        <NextButton />
      </Slide>
    </Deck>
  );
}
```

To access the reveal.js instance outside of the component tree, pass a `deckRef` to `Deck`:

```tsx
import { useRef } from 'react';
import { Deck, Slide } from '@revealjs/react';
import type { RevealApi } from 'reveal.js';

export function Presentation() {
  const deckRef = useRef<RevealApi>(null);

  return (
    <Deck deckRef={deckRef}>
      <Slide>Hello</Slide>
    </Deck>
  );
}
```

## How It Works

- `Deck` creates one reveal.js instance on mount and destroys it on unmount.
- After every React render that affects `children` or `config`, `Deck` calls `reveal.sync()` to keep reveal.js's internal slide model aligned with the DOM.
- `config` is shallow-compared on each render so that `reveal.configure()` is only called when a value actually changes.
- `plugins` are initialization-only. The prop is captured once on first mount and ignored on subsequent renders.
- Event props are wired with `deck.on()` after initialization and cleaned up with `deck.off()`. Changing a callback between renders swaps the listener automatically.
