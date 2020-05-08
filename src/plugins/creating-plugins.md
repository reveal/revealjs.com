---
id: creating-plugins
title: Creating Plugins
layout: default
---

# Plugin API

**Outdated, this will be rewritten to match the 4.0 plugin API**

Plugins should register themselves with reveal.js by calling `Reveal.registerPlugin( MyPlugin )`. Registered plugins _must_ expose a unique `id` property and can optionally expose an `init` function that reveal.js will call to initialize them.

When reveal.js is booted up via `initialize()`, it will go through all registered plugins and invoke their `init` methods. If the `init` method returns a Promise, reveal.js will wait for that promise to be fulfilled before finishing the startup sequence and firing the [ready](#ready-event) event. Here’s an example of a plugin that does some asynchronous work before reveal.js can proceed:

```javascript
let MyPlugin = {
  id: ’my-plugin’,
  init: deck => {
    return new Promise( resolve => setTimeout( resolve, 3000 ) )
  }
};
Reveal.initialize({
  plugins: [ MyPlugin ]
}).then( () => {
  console.log( ’Three seconds later...’ )
} );
```

If the plugin’s init method does _not_ return a Promise, the plugin is considered ready right away and will not hold up the reveal.js startup sequence.

## Manually Registering Plugins

TBD. Describe how plugins can be registered after reveal.js is already initialized.

## Retrieving Plugins

If you want to check if a specific plugin is registered you can use the `Reveal.hasPlugin` method and pass in a plugin ID, for example: `Reveal.hasPlugin( ’my-plugin’ )`. If you want to retrieve a plugin instance you can use `Reveal.getPlugin( ’my-plugin’ )`.