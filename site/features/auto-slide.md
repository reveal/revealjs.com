---
id: auto-slide
layout: default
meta_title: Auto-Slide
title: Auto-Slide
---

# Auto-Slide

Presentations can be configured to progress through slides automatically, without any user input. To enable this you will need to tell the framework how many milliseconds it should wait between slides:

```javascript
// Slide every five seconds
Reveal.configure({
  autoSlide: 5000
});
```

When this is turned on a control element will appear that enables users to pause and resume auto-sliding. Alternatively, sliding can be paused or resumed by pressing »A« on the keyboard. Sliding is paused automatically as soon as the user starts navigating. You can disable these controls by specifying `autoSlideStoppable: false` in your reveal.js config.

You can also override the slide duration for individual slides and fragments by using the `data-autoslide` attribute:

```html
<section data-autoslide="2000">
  <p>After 2 seconds the first fragment will be shown.</p>
  <p class="fragment" data-autoslide="10000">After 10 seconds the next fragment will be shown.</p>
  <p class="fragment">Now, the fragment is displayed for 2 seconds before the next slide is shown.</p>
</section>
```

To override the method used for navigation when auto-sliding, you can specify the `autoSlideMethod` setting. To only navigate along the top layer and ignore vertical slides, set this to `Reveal.navigateRight`.

Whenever the auto-slide mode is resumed or paused the `autoslideresumed` and `autoslidepaused` events are fired.