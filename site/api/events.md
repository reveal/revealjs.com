---
id: events
layout: default
meta_title: Events
title: Events
---

# Events

Doc TODO
- on/off methods
- fragment events
- pause events
- overview mode events

## Ready Event

A `ready` event is fired when reveal.js has loaded all non-async dependencies and is ready to start navigating. To check if reveal.js is already 'ready' you can call `Reveal.isReady()`.

```javascript
Reveal.on( 'ready', event => {
  // event.currentSlide, event.indexh, event.indexv
} );
```

Note that we also add a `.ready` class to the `.reveal` element so that you can hook into this with CSS.


## Slide Change Events

A `slidechanged` event is fired each time the slide is changed. The event object holds the index values of the current slide as well as a reference to the previous and current slide DOM nodes.

Some libraries, like MathJax (see [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)), get confused by the transforms and display states of slides. Often times, this can be fixed by calling their update or render function from this callback.

```javascript
Reveal.on( 'slidechanged', event => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );
```

The `slidechanged` event fires instantly when the slide changes. If you'd rather invoke your event listener when the slide has finished transitioning and is fully visible, you can use the `slidetransitionend` event. The `slidetransitionend` event includes the same event data as described above.

```javascript
Reveal.on( 'slidetransitionend', event => console.log( event.currentSlide ) );
```


## Resize Event

When reveal.js changes the scale of the slides it fires a resize event. You can subscribe to the event to resize your elements accordingly.

```javascript
Reveal.on( 'resize', event => {
  // event.scale, event.oldScale, event.size
} );
```