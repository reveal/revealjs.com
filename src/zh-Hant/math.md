---
id: math
title: 數學
layout: default
---

# 數學

數學插件允許你在幻燈片中包含美觀的排版數學公式。首先，確保 reveal.js 已經初始化並啟用了數學插件。

```html
<script src="plugin/math/math.js"></script>
<script>
  Reveal.initialize({ plugins: [RevealMath.KaTeX] });
</script>
```

在此範例中，我們使用了 KaTeX 排版器，但你也可以選擇使用[MathJax 2](#mathjax-2)或[3](#mathjax-3-4.2.0)。

現在插件已導入，我們可以開始在幻燈片中添加 [LaTeX](https://en.wikipedia.org/wiki/LaTeX) 公式。

```html
<section>
  <h2>洛倫茲方程</h2>
  \[\begin{aligned} \dot{x} &amp; = \sigma(y-x) \\ \dot{y} &amp; = \rho x - y -
  xz \\ \dot{z} &amp; = -\beta z + xy \end{aligned} \]
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>洛倫茲方程</h2>
      \[\begin{aligned}
      \dot{x} &amp; = \sigma(y-x) \\
      \dot{y} &amp; = \rho x - y - xz \\
      \dot{z} &amp; = -\beta z + xy
      \end{aligned} \]
    </section>
  </div>
</div>

## Markdown

如果你想在 Markdown 寫的簡報中插入數學公式，你需要用反引號將公式包起來。這樣可以避免 LaTeX 和 Markdown 語法之間的衝突。例如：

```html
<section data-markdown>`$$ J(\theta_0,\theta_1) = \sum_{i=0} $$`</section>
```

## 排版庫

數學插件提供了三種數學排版庫供你選擇用於渲染你的數學公式。每個變體都是獨立的插件，可以通過 `RevealMath.<Variant>` 訪問。如果你沒有特別偏好，我們建議使用 KaTeX。

| Library                                               | Plugin Name         | Config Property              |
| :---------------------------------------------------- | :------------------ | :--------------------------- |
| [KaTeX](https://katex.org/)                           | RevealMath.KaTeX    | [katex](#katex-4.2.0)        |
| [MathJax 2](https://docs.mathjax.org/en/v2.7-latest/) | RevealMath.MathJax2 | [mathjax2](#mathjax-2)       |
| [MathJax 3](https://www.mathjax.org/)                 | RevealMath.MathJax3 | [mathjax3](#mathjax-3-4.2.0) |

{.full-width}

### KaTeX <span class="r-version-badge new">4.2.0</span>

通過 `katex` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需添加 `katex` 配置選項。

```js
Reveal.initialize({
  katex: {
    version: 'latest',
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true },
    ],
    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
  },
  plugins: [RevealMath.KaTeX],
});
```

注意，默認情況下會從外部伺服器取得最新版本的 KaTeX（https://cdn.jsdelivr.net/npm/katex）。要使用固定版本，將 `version` 設為例如 `0.13.18`。

如果你想離線使用 KaTeX，你需要下載庫的副本（例如通過 npm）並使用 `local` 配置選項（則 `version` 選項將被忽略），例如：

```js
Reveal.initialize({
  katex: {
    local: 'node_modules/katex',
  },
  plugins: [RevealMath.KaTeX],
});
```

### MathJax 2

通過 `mathjax2` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需包括 `mathjax2` 配置選項。

```js
Reveal.initialize({
  mathjax2: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js',
    config: 'TeX-AMS_HTML-full',
    // pass other options into `MathJax.Hub.Config()`
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    },
  },
  plugins: [RevealMath.MathJax2],
});
```

注意，最新的 MathJax 2 從遠程伺服器加載。要使用固定版本，將 mathjax 設為例如 https://cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js。

如果你想離線使用 MathJax，你需要下載函式庫的副本（例如通過 npm）並將 `mathjax` 指向本地副本。

### MathJax 3 <span class="r-version-badge new">4.2.0</span>

通過 `mathjax3` 配置對象調整選項。以下是默認的插件配置。如果你不打算更改這些值，則無需包括 `mathjax3` 配置選項。

```js
Reveal.initialize({
  mathjax3: {
    mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
    tex: {
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    },
  },
  plugins: [RevealMath.MathJax3],
});
```

注意，最新的 MathJax 3 從遠程伺服器加載。要使用固定版本，將 `mathjax` 設為例如 <https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js>。此外，配置現在是 URL 的一部分，默認載入 `tex-mml-chtml`，它能識別 TeX 和 MathML 表示的數學公式，並使用 HTML 和 CSS 生成輸出（CommonHTML 輸出格式）。這是一個非常通用的配置，但這也是它很龐大的原因，因此你可能需要考慮一個更輕量，更符合你需求的配置，例如 `tex-svg`。

如果你想離線使用 MathJax，你需要下載庫的副本（例如通過 npm）並相應地調整 `mathjax`。