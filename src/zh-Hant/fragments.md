---
id: fragments
title: 片段
layout: default
---

# 片段

片段用於突出顯示或逐步顯示幻燈片上的單個元素。所有帶有叫做 `fragment` 的 class 的元素將在轉到下一張幻燈片之前逐步顯示。

默認的片段樣式是從不可見開始，然後淡入。通過添加不同的 class 到片段，可以更改這種樣式。

```html
<p class="fragment">淡入</p>
<p class="fragment fade-out">淡出</p>
<p class="fragment highlight-red">突出顯示紅色</p>
<p class="fragment fade-in-then-out">先淡入，然後淡出</p>
<p class="fragment fade-up">向上滑動同時淡入</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment">淡入</p>
      <p class="fragment fade-out">淡出</p>
      <p class="fragment highlight-red">突出顯示紅色</p>
      <p class="fragment fade-in-then-out">先淡入，然後淡出</p>
      <p class="fragment fade-up">向上滑動同時淡入</p>
    </section>
  </div>
</div>

| 名稱                    | 效果                           |
| :---------------------- | :----------------------------- |
| fade-out                | 開始可見，然後淡出             |
| fade-up                 | 向上滑動同時淡入               |
| fade-down               | 向下滑動同時淡入               |
| fade-left               | 向左滑動同時淡入               |
| fade-right              | 向右滑動同時淡入               |
| fade-in-then-out        | 先淡入，然後在下一步淡出       |
| current-visible         | 在下一步先淡入，然後淡出       |
| fade-in-then-semi-out   | 先淡入，然後在下一步淡到 50%    |
| grow                    | 放大                           |
| semi-fade-out           | 淡出到 50%                      |
| shrink                  | 縮小                           |
| strike                  | 中劃線                         |
| highlight-red           | 文本變紅                       |
| highlight-green         | 文本變綠                       |
| highlight-blue          | 文本變藍                       |
| highlight-current-red   | 文本變紅，然後在下一步恢復原樣 |
| highlight-current-green | 文本變綠，然後在下一步恢復原樣 |
| highlight-current-blue  | 文本變藍，然後在下一步恢復原樣 |

{.key-value}

## 自定義片段 <span class="r-version-badge new">4.5.0</span>

可以通過為 `.fragment.effectname` 和 `.fragment.effectname.visible` 分別定義 CSS 樣式來實現自定義效果。當片段在簡報中被逐步顯示時，叫做 `visible` 的 class 將被添加到每個片段上。

例如，以下定義了一種片段樣式，其中元素最初被模糊，但在逐步顯示時變得清晰。

```html
<style>
  .fragment.blur {
    filter: blur(5px);
  }
  .fragment.blur.visible {
    filter: none;
  }
</style>
<section>
  <p class="fragment custom blur">一</p>
  <p class="fragment custom blur">二</p>
  <p class="fragment custom blur">三</p>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <style>
      .fragment.blur {
        filter: blur(5px);
      }
      .fragment.blur.visible {
        filter: none;
      }
    </style
    <section>
      <p class="fragment custom blur">一</p>

      <p class="fragment custom blur">二</p>
      <p class="fragment custom blur">三</p>
    </section>

  </div>
</div>

請注意，我們為每個片段添加了一個 叫做 `custom` 的 class 。這告訴 reveal.js 避免應用其默認的淡入片段樣式。

如果你希望所有元素保持模糊，除了當前片段外，你可以用 `current-fragment` 替換 `visible`。

```css
.fragment.blur.current-fragment {
  filter: none;
}
```

## 嵌套片段

可以通過包裝同一元素來順序應用多個片段，這將在第一步淡入文本，在第二步將其變紅，在第三步淡出。

```html
<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out"> 淡入 > 變紅 > 淡出 </span>
  </span>
</span>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <span class="fragment fade-in">
        <span class="fragment highlight-red">
          <span class="fragment fade-out">
            淡入 > 變紅 > 淡出
          </span>
        </span>
      </span>
    </section>
  </div>
</div>

## 片段順序

默認情況下，片段將按照它們在 DOM 中出現的順序進行步進。這個顯示順序可以使用 `data-fragment-index` 屬性更改。請注意，多個元素可以在同一索引處出現。

```html
<p class="fragment" data-fragment-index="3">最後出現</p>
<p class="fragment" data-fragment-index="1">第一個出現</p>
<p class="fragment" data-fragment-index="2">第二個出現</p>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <p class="fragment" data-fragment-index="3">最後出現</p>
      <p class="fragment" data-fragment-index="1">第一個出現</p>
      <p class="fragment" data-fragment-index="2">第二個出現</p>
    </section>
  </div>
</div>

## 事件

當片段被顯示或隱藏時，reveal.js 將發送事件。

```javascript
Reveal.on('fragmentshown', (event) => {
  // event.fragment = 片段 DOM 元素
});
Reveal.on('fragmenthidden', (event) => {
  // event.fragment = 片段 DOM 元素
});
```
