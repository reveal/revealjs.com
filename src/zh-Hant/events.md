---
id: events
title: 事件
layout: default
---

# 事件

我們發送許多事件，以便你可以輕鬆地響應簡報中的變化。使用 `Reveal.on()` 添加事件監聽器，使用 `Reveal.off()` 移除它們。

```js
Reveal.on('eventname', callbackFunction);
```

## 就緒

當 reveal.js 加載了所有非異步依賴並準備好接受 API 調用時會觸發 `ready` 事件。要檢查 reveal.js 是否已經「就緒」，你可以調用 `Reveal.isReady()`。

```javascript
Reveal.on('ready', (event) => {
  // event.currentSlide, event.indexh, event.indexv
});
```

我們還會在 `.reveal` 元素上添加一個 class 叫 `.ready`，以便你可以用 CSS 掛鉤進這個狀態。

`Reveal.initialize` 函式還返回一個 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)，當簡報準備好時解析。以下與添加 `ready` 事件的監聽器同義：

```javascript
Reveal.initialize().then(() => {
  // reveal.js 已準備好
});
```

## 幻燈片變更

每次幻燈片變更時，都會觸發 `slidechanged` 事件。事件對象包含當前幻燈片的索引值以及對前一幻燈片和當前幻燈片 HTML 元素的引用。

一些函式庫如 MathJax（參見 [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)），可能會對幻燈片的變形和顯示狀態感到困惑。通常，這可以通過從此回調調用它們的更新或渲染函數來修復。

```javascript
Reveal.on('slidechanged', (event) => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
});
```

## 幻燈片轉換結束

`slidechanged` 事件在幻燈片變更時立即觸發。如果你寧願在幻燈片轉換完成並完全可見時調用事件監聽器，你可以使用 `slidetransitionend` 事件。`slidetransitionend` 事件包含與 `slidechanged` 相同的事件數據。

```javascript
Reveal.on('slidetransitionend', (event) => {
  console.log(event.currentSlide);
});
```

## 調整大小

當 reveal.js 更改簡報的縮放比例時，會觸發 `resize` 事件。

```javascript
Reveal.on('resize', (event) => {
  // event.scale, event.oldScale, event.size
});
```

## 特定功能的事件

- [概覽模式事件](/zh-hant/overview/#%E4%BA%8B%E4%BB%B6)
- [片段事件](/zh-hant/fragments/#%E4%BA%8B%E4%BB%B6)
- [自動播放事件](/zh-hant/auto-slide/#%E4%BA%8B%E4%BB%B6)
