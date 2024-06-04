---
id: themes
title: Themes
layout: default
---

# Themes

The framework comes with a few different themes included.

| Name            | Preview                                                                                                                            |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| black (default) | <img src="/images/docs/themes/black.png" width="150" height="150" alt="Black background, white text, blue links">                  |
| white           | <img src="/images/docs/themes/white.png" width="150" height="150" alt="White background, black text, blue links">                  |
| league          | <img src="/images/docs/themes/league.png" width="150" height="150" alt="Gray background, white text, blue links">                  |
| beige           | <img src="/images/docs/themes/beige.png" width="150" height="150" alt="Beige background, dark text, brown links">                  |
| night           | <img src="/images/docs/themes/night.png" width="150" height="150" alt="Black background, thick white text, orange links">          |
| serif           | <img src="/images/docs/themes/serif.png" width="150" height="150" alt="Cappuccino background, gray text, brown links">             |
| simple          | <img src="/images/docs/themes/simple.png" width="150" height="150" alt="White background, black text, blue links">                 |
| solarized       | <img src="/images/docs/themes/solarized.png" width="150" height="150" alt="Cream-colored background, dark green text, blue links"> |
| moon            | <img src="/images/docs/themes/moon.png" width="150" height="150" alt="Dark blue background, thick grey text, blue links">          |
| dracula         | <img src="/images/docs/themes/dracula.png" width="150" height="150">                                                               |
| sky             | <img src="/images/docs/themes/sky.png" width="150" height="150" alt="Blue background, thin dark text, blue links">                 |
| blood           | <img src="/images/docs/themes/blood.png" width="150" height="150" alt="Dark background, thick white text, red links">              |

{.key-value}

Each theme is available as a separate stylesheet. To change theme you will need to replace **black** below with your desired theme name in index.html:

```html
<link rel="stylesheet" href="dist/theme/black.css" />
```

## Custom Properties

All theme variables are exposed as CSS custom properties in the pseudo-class `:root`. See [the list of exposed variables](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss).

## Creating a Theme

If you want to add a theme of your own see the instructions here: [/css/theme/README.md](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md).

Alternatively, if you want a clean start, you can opt to start from a blank CSS document and customize everything from the ground up.
