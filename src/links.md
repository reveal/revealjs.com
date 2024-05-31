---
id: links
title: Links
layout: default
---

# Internal links

You can create links from one slide to another. Start by giving your target slide a unique `id` attribute. Next, you can create an anchor with an href in the format `#/<id>`. Here's a complete working example:

```html/1,8
<section>
	<a href="#/grand-finale">Go to the last slide</a>
</section>
<section>
	<h2>Slide 2</h2>
</section>
<section id="grand-finale">
	<h2>The end</h2>
	<a href="#/0">Back to the first</a>
</section>
```

<div class="reveal reveal-example" data-config='{"respondToHashChanges": true}'>
  <div class="slides">
    <section>
		<a href="#/grand-finale">Go to the last slide</a>
	</section>
	<section>
		<h2>Slide 2</h2>
	</section>
	<section id="grand-finale">
		<h2>The end</h2>
		<a href="#/0">Back to the first</a>
	</section>
  </div>
</div>

## Numbered Links

It's also possible to link to slides based on their slide index. The href format for an numbered link is `#/0` where 0 is the horizontal slide number. To link to a [vertical slide](/vertical-slides/) use `#/0/0` where the second number is the index of the vertical slide target.

```html
<a href="#/2">Go to 2nd slide</a>
<a href="#/3/2">Go to the 2nd vertical slide inside of the 3rd slide</a>
```

## Navigation Links

You can add relative navigation links that work similarly to the built in directional control arrows. This is done by adding one of the following classes to any clickable HTML element inside of the `.reveal` container.

```html
<button class="navigate-left">Left</button>
<button class="navigate-right">Right</button>
<button class="navigate-up">Up</button>
<button class="navigate-down">Down</button>

<!-- Previous vertical OR horizontal slide -->
<button class="navigate-prev">Prev</button>

<!-- Next vertical OR horizontal slide -->
<button class="navigate-next">Next</button>
```

Each navigation element is automatically given an `enabled` class when it's a valid navigation route based on the current slide. For example, if you're on the first slide only `navigate-right` will have the `enabled` class since it's not possible to navigate towards the left.
