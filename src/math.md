---
id: math
title: Math
layout: default
---

# Math

If you want to display math equations in your presentation you can easily do so with the MathJax plugin. This is a very thin wrapper around the [MathJax](http://www.mathjax.org/) library. [Find our more about plugins here](/plugins/).

The plugin defaults to using [LaTeX](https://en.wikipedia.org/wiki/LaTeX) but that can be adjusted through the `math` configuration object. Note that MathJax is loaded from a remote server. If you want to use it offline you'll need to download a copy of the library and adjust the `mathjax` configuration value.

Below is an example of how the plugin can be configured. If you don't intend to change these values you do not need to include the `math` config option at all.

```html
<script src="plugin/math/math.js"></script>
<script>
  Reveal.initialize({
    math: {
      mathjax: 'https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js',
      config: 'TeX-AMS_HTML-full',
      // pass other options into `MathJax.Hub.Config()`
      TeX: { Macros: { RR: "{\\bf R}" } }
    },
    plugins: [ RevealMath ]
  });
</script>
```

```html
<section>
  <h2>The Lorenz Equations</h2>
  \[\begin{aligned}
  \dot{x} &amp; = \sigma(y-x) \\
  \dot{y} &amp; = \rho x - y - xz \\
  \dot{z} &amp; = -\beta z + xy
  \end{aligned} \]
</section>
```
<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>The Lorenz Equations</h2>
      \[\begin{aligned}
      \dot{x} &amp; = \sigma(y-x) \\
      \dot{y} &amp; = \rho x - y - xz \\
      \dot{z} &amp; = -\beta z + xy
      \end{aligned} \]
    </section>
  </div>
</div>

## Markdown
If you want to include math inside of a presentation written in Markdown you need to wrap the formula in backticks. This prevents syntax conflicts between LaTeX and Markdown. For example:

```tex
`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`
```
