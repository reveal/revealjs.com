---
id: markup
title: 標記
layout: default
---

# 標記

這是一個完整的 reveal.js 簡報的基本範例：

```html
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>幻燈片 1</section>
        <section>幻燈片 2</section>
      </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

簡報的標記層次結構需要是 `.reveal > .slides > section`，其中 `section` 元素代表一個幻燈片，可以無限重復。

如果你在另一個 `section` 內放置多個 `section` 元素，它們將被顯示為[垂直幻燈片](/zh-hant/vertical-slides/)。垂直幻燈片的第一個是其他幻燈片的「根」（在頂部），並將包括在水平序列中。例如：

```html
<div class="reveal">
  <div class="slides">
    <section>水平幻燈片</section>
    <section>
      <section>垂直幻燈片 1</section>
      <section>垂直幻燈片 2</section>
    </section>
  </div>
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>水平幻燈片</section>
    <section>
      <section>垂直幻燈片 1</section>
      <section>垂直幻燈片 2</section>
    </section>
  </div>
</div>

你同樣可以使用 [Markdown](/zh-hant/markdown/) 撰寫簡報。

## 視窗

reveal.js 的視窗是確定簡報在網頁上的大小的包裝器 DOM 元素。默認情況下，這將是 `body` 元素。如果你在同一頁面上包含多個簡報，每個簡報的 `.reveal` 元素將作為它們的視窗。

視窗在 reveal.js 初始化時始終帶有叫做 `reveal-viewport` 的 class 。

## 幻燈片狀態

如果你在幻燈片 `<section>` 上設置了 `data-state="make-it-pop"`，當該幻燈片打開時，"make-it-pop" 將作為類應用於[視窗元素](#視窗)。這使得你可以根據幻燈片的狀態應用樣式。

```html
<section data-state="make-it-pop"></section>
```

```css
/* CSS */
.make-it-pop {
  filter: drop-shadow(0 0 10px purple);
}
```

你還可以通過 JavaScript 監聽這些狀態變化：

```javascript
Reveal.on('make-it-pop', () => {
  console.log('✨');
});
```
