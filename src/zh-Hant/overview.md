---
id: overview
title: 概覽模式
layout: default
---

# 概覽模式

按下「ESC」或「O」鍵來開啟或關閉概覽模式。當你處於這種模式時，你仍然可以在幻燈片之間導覽，就像你在你的簡報上方 1000 公尺高的地方一樣。

<picture><img src="/images/docs/overview.png" alt="具有垂直幻燈片的幻燈片布局"></picture>

## API

你可以使用`toggleOverview()` API 函式從 JavaScript 中激活或停用概覽模式。

```js
// 切換到當前狀態的相反狀態
Reveal.toggleOverview();

// 激活概覽模式
Reveal.toggleOverview(true);

// 停用概覽模式
Reveal.toggleOverview(false);
```

## 事件

當概覽模式被激活和停用時，我們會觸發事件。

```javascript
Reveal.on('overviewshown', (event) => {
  /* ... */
});
Reveal.on('overviewhidden', (event) => {
  /* ... */
});
```
