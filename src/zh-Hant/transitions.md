---
id: transitions
title: 轉場效果
layout: default
---

# 轉場效果

在導覽簡報時，我們通常通過從右向左動畫的方式在幻燈片之間進行轉場。這種轉場可以通過設置 `transition` 配置選項為有效的[轉場樣式](#styles)來更改。轉場也可以使用 `data-transition` 屬性為特定幻燈片覆蓋。

```html
<section data-transition="zoom">
  <h2>此幻燈片將覆蓋簡報的轉場並放大！</h2>
</section>

<section data-transition-speed="fast">
  <h2>從三種轉場速度中選擇：默認、快速或慢速！</h2>
</section>
```

## 樣式

這是所有可用轉場樣式的完整列表。它們適用於幻燈片和幻燈片背景。

| 名稱    | 效果                                     |
| :------ | :--------------------------------------- |
| none    | 瞬間切換背景                             |
| fade    | 交叉淡出 — _背景轉場的默認選擇_          |
| slide   | 幻燈片之間滑動 — _幻燈片轉場的默認選擇_  |
| convex  | 以凸角滑動                               |
| concave | 以凹角滑動                               |
| zoom    | 放大進入的幻燈片，使其從屏幕中心向外成長 |

{.key-value}

## 分離進出轉場

你還可以對同一幻燈片使用不同的進場和出場轉場，函式是在轉場名稱後附加 `-in` 或 `-out`。

```html
<section data-transition="slide">火車繼續前進……</section>
<section data-transition="slide">不斷前行……</section>
<section data-transition="slide-in fade-out">然後停下。</section>
<section data-transition="fade-in slide-out">（乘客進出）</section>
<section data-transition="slide">火車再次啟動。</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-transition="slide">
        火車繼續前進……
    </section>
    <section data-transition="slide">
        不斷前行……
    </section>
    <section data-transition="slide-in fade-out">
        然後停下。
    </section>
    <section data-transition="fade-in slide-out">
        （乘客進出）
    </section>
    <section data-transition="slide">
        火車再次啟動。
    </section>
  </div>
</div>

## 背景轉場

我們預設使用交叉淡出來進行幻燈片背景之間的轉場。這可以在全域層面更改，或為特定幻燈片覆蓋。要更改所有幻燈片的背景轉場，請使用 `backgroundTransition` 配置選項。

```js
Reveal.initialize({
  backgroundTransition: 'slide',
});
```

或者，你可以在任何 `<section>` 上使用 `data-background-transition` 屬性來覆蓋該特定轉場。
