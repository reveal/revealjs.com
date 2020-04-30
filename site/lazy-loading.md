---
id: lazy-loading
layout: default
meta_title: Lazy Loading
meta_description: tbd
title: Lazy Loading
---

# Lazy Loading

When working on presentation with a lot of media or iframe content it's important to load lazily. Lazy loading means that reveal.js will only load content for the few slides nearest to the current slide. The number of slides that are preloaded is determined by the `viewDistance` configuration option.

To enable lazy loading all you need to do is change your `src` attributes to `data-src` as shown below. This is supported for image, video, audio and iframe elements.

```html
<section>
  <img data-src="image.png">
  <iframe data-src="http://hakim.se"></iframe>
  <video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
  </video>
</section>
```

## Lazy Loading Iframes

Note that lazy loaded iframes ignore the `viewDistance` configuration and will only load when their containing slide becomes visible. Iframes are also unloaded as soon as the slide is hidden.

When we lazy load a video or audio element, reveal.js won't start playing that content until the slide becomes visible. However there is no way to control this for an iframe since that could contain any kind of content. That means if we loaded an iframe before the slide is visible on screen it could begin playing media and sound in the background.

You can override this behavior with the `data-preload` attribute. The iframe below will be loaded
according to the `viewDistance`.

```html
<section>
  <iframe data-src="http://hakim.se" data-preload></iframe>
</section>
```

You can also change the default globally with the `preloadIframes` configuration option. If set to
`true` ALL iframes with a `data-src` attribute will be preloaded when within the `viewDistance`
regardless of individual `data-preload` attributes. If set to `false`, all iframes will only be
loaded when they become visible.