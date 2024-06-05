---
id: auto-slide
title: 自動播放
layout: default
---

# 自動播放

簡報可以設定為自動播放幻燈片，無需任何用戶輸入。要啟用此功能，你需要使用 `autoSlide` 配置選項指定幻燈片變更的間隔時間。間隔以毫秒為單位。

```javascript
// 每五秒自動切換一張幻燈片
Reveal.initialize({
  autoSlide: 5000,
  loop: true,
});
```

<div class="reveal reveal-example" data-config='{"autoSlide": 5000, "loop": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
    <section>幻燈片 3</section>
  </div>
</div>

對於自動播放的幻燈片集，將自動出現播放/暫停控制元件。如果用戶開始與幻燈片集互動，播放將自動暫停。你還可以通過鍵盤上的「A」鍵來暫停或恢復播放（在這裡的嵌入式演示中不適用）。

你可以通過在[配置選項](/zh-hant/config/)中指定 `autoSlideStoppable: false` 來禁用自動播放控制，防止播放被暫停。

## 幻燈片計時

也可以使用 `data-autoslide` 屬性設定幻燈片設定持續時間。

```html
<section data-autoslide="2000">
  <p>2 秒後將顯示第一個片段。</p>
  <p class="fragment" data-autoslide="10000">10 秒後將顯示下一個片段。</p>
  <p class="fragment">現在，片段顯示 2 秒後將顯示下一個幻燈片。</p>
</section>
```

## 自動播放函式

`autoSlideMethod` 屬性可以更改自動撥放的方向。

我們預設將按順序播放所有幻燈片，包括水平和[垂直](/zh-hant/vertical-slides/)幻燈片。如果你只想沿頂層導覽並忽略垂直幻燈片，你可以提供一個調用 `Reveal.right()` 的函式。

```js
Reveal.configure({
  autoSlideMethod: () => Reveal.right(),
});
```

## 事件

每當自動播放被暫停或恢復時，都會觸發事件。

```javascript
Reveal.on('autoslideresumed', (event) => {
  /* ... */
});
Reveal.on('autoslidepaused', (event) => {
  /* ... */
});
```
