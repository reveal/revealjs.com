---
id: keyboard
title: Keyboard
layout: default
---

# Keyboard Bindings

If you're unhappy with any of the default keyboard bindings you can override them using the `keyboard` config option:

```javascript
Reveal.configure({
  keyboard: {
    13: 'next', // go to the next slide when the ENTER key is pressed
    27: () => { console.log('esc') }, // do something custom when ESC is pressed
    32: null // don't do anything when SPACE is pressed (i.e. disable a reveal.js default binding)
  }
});
```

## Adding Keyboard Bindings via JavaScript

Custom key bindings can be added and removed using the following Javascript API. Custom key bindings will override the default keyboard bindings, but will in turn be overridden by the user defined bindings in the ``keyboard`` config option.

```javascript
Reveal.addKeyBinding( binding, callback );
Reveal.removeKeyBinding( keyCode );
```

For example

```javascript
// The binding parameter provides the following properties
//      keyCode: the keycode for binding to the callback
//          key: the key label to show in the help overlay
//  description: the description of the action to show in the help overlay
Reveal.addKeyBinding( { keyCode: 84, key: 'T', description: 'Start timer' }, () => {
  // start timer
} )

// The binding parameter can also be a direct keycode without providing the help description
Reveal.addKeyBinding( 82, () => {
  // reset timer
} )
```

This allows plugins to add key bindings directly to Reveal so they can

* make use of Reveal's pre-processing logic for key handling (for example, ignoring key presses when paused); and
* be included in the help overlay (optional)