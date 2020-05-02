---
id: math
layout: default
meta_title: Math
title: Math
---

# Math

If you want to display math equations in your presentation you can easily do so by including this plugin. The plugin is a very thin wrapper around the [MathJax](http://www.mathjax.org/) library. To use it you'll need to include it as a reveal.js dependency, [find our more about dependencies here](#dependencies).

The plugin defaults to using [LaTeX](https://en.wikipedia.org/wiki/LaTeX) but that can be adjusted through the `math` configuration object. Note that MathJax is loaded from a remote server. If you want to use it offline you'll need to download a copy of the library and adjust the `mathjax` configuration value.

Below is an example of how the plugin can be configured. If you don't intend to change these values you do not need to include the `math` config object at all.

```js
Reveal.initialize({
  // other options ...

  math: {
    mathjax: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js',
    config: 'TeX-AMS_HTML-full', // See http://docs.mathjax.org/en/latest/config-files.html
    // pass other options into `MathJax.Hub.Config()`
    TeX: { Macros: { RR: "{\\bf R}" } }
  },

  dependencies: [
    { src: 'plugin/math/math.js', async: true }
  ]
});
```

Read MathJax's documentation if you need [HTTPS delivery](http://docs.mathjax.org/en/latest/start.html#secure-access-to-the-cdn) or serving of [specific versions](http://docs.mathjax.org/en/latest/configuration.html#loading-mathjax-from-the-cdn) for stability.

## Math in Markdown
If you want to include math inside of a presentation written in Markdown you need to wrap the formula in backticks. This prevents syntax conflicts between LaTeX and Markdown. For example:

```
`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`
```