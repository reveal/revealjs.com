---
id: layout
title: 布局
layout: default
---

# 布局

我們提供了幾種不同的輔助 class，用於控制布局並設計你的內容。我們目標是在即將到來的版本中添加更多這種 class，因此請保持密切關注。

如果你希望更改簡報的尺寸、縮放和居中，請參見[簡報大小](/zh-hant/presentation-size/)。

## 堆疊

`r-stack` 布局輔助讓你可以居中並將多個元素疊加在一起。這意味著要與[片段](/zh-hant/fragments/)一起使用，以逐步揭示元素。

```html
<div class="r-stack">
  <img
    class="fragment"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

如果你希望逐個顯示堆疊的元素，可以調整片段設置：

```html
<div class="r-stack">
  <img
    class="fragment fade-out"
    data-fragment-index="0"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment current-visible"
    data-fragment-index="0"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <div class="r-stack">
        <img class="fragment fade-out" data-fragment-index="0" src="https://picsum.photos/450/300" width="450" height="300">
        <img class="fragment current-visible" data-fragment-index="0" src="https://picsum.photos/300/450" width="300" height="450">
        <img class="fragment" src="https://picsum.photos/400/400" width="400" height="400">
      </div>
    </section>
  </div>
</div>

## 適應文字

叫做 `r-fit-text` 的 class 使文字盡可能大而不超出幻燈片。當你希望文字很大而不需要手動找到正確的字體大小時，這非常合適。由 [fitty](https://github.com/rikschennink/fitty) ❤️ 提供支持

```html
<h2 class="r-fit-text">大</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">大</h2>
    </section>
  </div>
</div>

```html
<h2 class="r-fit-text">適應文字</h2>
<h2 class="r-fit-text">可用於多個標題</h2>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2 class="r-fit-text">適應文字</h2>
      <h2 class="r-fit-text">可用於多個標題</h2>
    </section>
  </div>
</div

>

## 拉伸

`r-stretch` 布局輔助讓你可以調整元素（如圖片或視頻）的大小，以覆蓋幻燈片中剩餘的垂直空間。例如，在下面的例子中，我們的幻燈片包含一個**標題**、一個**圖片**和一個**作者行**。因為**圖片**具有 叫做 `.r-stretch` 的 class ，其高度設置為幻燈片高度減去**標題**和**作者行**的組合高度。

```html
<h2>拉伸範例</h2>
<img class="r-stretch" src="/images/slides-symbol-512x512.png" />
<p>圖片說明</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <h2>拉伸範例</h2>
      <img class="r-stretch" style="display: inline-block;" src="/images/slides-symbol-512x512.png">
      <p>圖片說明</p>
    </section>
  </div>
</div>

#### 拉伸限制

- 只有幻燈片部分的直接後代才可以拉伸
- 每個幻燈片部分只能拉伸一個後代

## 框架

用 `r-frame` 裝飾任何元素，使其在背景中脫穎而出。如果被框架的元素放置在錨點內，我們將對邊框應用懸停效果。

```html
<img src="logo.svg" width="200" />
<a href="#">
  <img class="r-frame" src="logo.svg" width="200" />
</a>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <img src="/images/logo/reveal-symbol.svg" width="200">
      <a href="#">
        <img class="r-frame" src="/images/logo/reveal-symbol.svg" width="200">
      </a>
    </section>
  </div>
</div>
