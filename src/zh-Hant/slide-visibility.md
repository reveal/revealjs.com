---
id: slide-visibility
title: 幻燈片可見性
layout: default
---

# 幻燈片可見性

`data-visibility` 屬性可以用來隱藏幻燈片。它還可以用來在 reveal.js 的內部編號系統中標記幻燈片為「未計數」，這將會影響可見的幻燈片編號和進度條。

## 隱藏的幻燈片 <span class="r-version-badge new">4.1.0</span>

要從視圖中隱藏幻燈片，添加 `data-visibility="hidden"`。隱藏的幻燈片會在 reveal.js 初始化時立即從 DOM 中移除。

```html
<section>幻燈片 1</section>
<section data-visibility="hidden">幻燈片 2</section>
<section>幻燈片 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section data-visibility="hidden">幻燈片 2</section>
    <section>幻燈片 3</section>
  </div>
</div>

## 未計數的幻燈片

在準備演講時，有時準備一些可能有時間展示也可能沒有時間展示的選擇性幻燈片是有幫助的。這可以通過在簡報的末尾追加幾張幻燈片輕鬆完成，但這意味著 reveal.js 的進度條和幻燈片編號將提示還有額外的幻燈片。

要將這些幻燈片“隱藏”在 reveal.js 的編號系統中，可以使用 `data-visibility="uncounted"`。

**注意：**這只適用於簡報末尾的幻燈片，即所有主要幻燈片之後的幻燈片。

```html
<section>幻燈片 1</section>
<section>幻燈片 2</section>
<section data-visibility="uncounted">幻燈片 3</section>
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t", "progress": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
    <section data-visibility="uncounted">幻燈片 3</section>
  </div>
</div>
