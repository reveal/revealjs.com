---
id: auto-animate
layout: default
meta_title: Auto-Animate
title: Auto-Animate
---

# Auto-Animate

reveal.js can automatically animate elements across slides. All you need to do is add `data-auto-animate` to two adjacent slide `<section>` elements and Auto-Animate will animate all matching elements between the two.

Here's a simple example to give you a better idea of how it can be used. The resulting animation will be the word "Magic" sliding 100px downwards.
```html
<section data-auto-animate>
  <h1>Magic</h1>
</section>
<section data-auto-animate>
  <h1 style="position: relative; top: 100px;">Magic</h1>
</section>
```

This example uses the `top` property to move the element but internally reveal.js will use a CSS transform to ensure smooth movement. This same approach to animation works with most animatable CSS properties meaning you can transition things like `position`, `font-size`, `line-height`, `color`, `background-color` and `padding`.

## How Elements are Matched
When you navigate between two auto-animated slides we'll do our best to automatically find matching elements between the two slides. For text, we consider it a match if both the text contents and node type are identical. For images, videos and iframes we compare the `src` attribute. We also take into account the order in which the element appears in the DOM.

In situations where automatic matching is not feasible you can give the objects that you want to animate between a matching `data-id` attribute. We prioritize matching `data-id` values above our automatic matching. 

Here's an example where we've given both blocks a matching ID since automatic matching has no content to go on.

```html
<section data-auto-animate>
  <div data-id="box" style="padding: 20px; background: salmon;"></div>
</section>
<section data-auto-animate>
  <div data-id="box" style="padding: 20px; background: blue;"></div>
</section>
```

## Animation Settings
You can override specific animation settings such as easing and duration either for the whole presentation, per-slide or individually for each animated element. The following configuration attributes can be used to change the settings for a specific slide or element:

| Attribute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                        | Default    | Description 
| :------------------------------- | ---------: | :---------- 
| data-auto-animate-easing         | ease       | A CSS [easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function).
| data-auto-animate-unmatched      | true       | Determines whether elements with no matching auto-animate target should fade in. Set to false to make them appear instantly.
| data-auto-animate-duration       | 1.0        | Animation duration in seconds.
| data-auto-animate-delay          | 0          | Animation delay in seconds (can only be set for specific elements, not at the slide level).

If you'd like to change the defaults for the whole deck, use the following config options:
```javascript
Reveal.initialize({
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false
})
```

## API: State Attributes and Events
We add state attributes to the different elements involved in an auto-animation. These attributes can be tied into if you want to, for example, fine-tune the animation behavior with custom CSS.

Right before an auto-animation starts we add `data-auto-animate="pending"` to the slide `<section>`. At this point the upcoming slide is visible and all of the animated elements have been moved to their starting positions. Next we switch to `data-auto-animate="running"` to indicate when the elements start animating towards their final properties.

Each individual element is decorated with a `data-auto-animate-target` attribute. The value of the attribute is a unique ID for this particular animation OR "unmatched" if this element should animate as unmatched content.

Each time a presentation navigates between two auto-animated slides it dispatches the `autoanimate` event.
```javascript
Reveal.on( 'autoanimate', event => {
  // event.fromSlide, event.toSlide
} );
```