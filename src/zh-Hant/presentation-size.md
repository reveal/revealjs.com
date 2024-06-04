---
id: presentation-size
title: 簡報尺寸
layout: default
---

# 簡報尺寸

所有簡報都有一個「正常」尺寸，即它們創作時的解析度。reveal.js 會根據正常尺寸自動等比例縮放簡報，以確保一切內容能適應任何顯示或視窗尺寸，同時不改變內容的縱橫比或布局。

下面列出了與尺寸相關的[配置選項](/zh-hant/config/)，包括它們的預設值：

```javascript
Reveal.initialize({
  // 簡報的「正常」尺寸，縱橫比會在簡報被縮放以適應不同解析度時被保留。
  // 可以使用百分比單位指定。
  width: 960,
  height: 700,

  // 顯示尺寸的一部分應該保持空白圍繞內容
  margin: 0.04,

  // 應用於內容的最小/最大可能縮放範圍
  minScale: 0.2,
  maxScale: 2.0,
});
```

## 置中

幻燈片基於它們包含的內容量在螢幕上垂直置中。若要禁用此功能並保持幻燈片在配置的高度固定，請將 `center` 設置為 `false`。

```js
Reveal.initialize({ center: false });
```

## 嵌入式

默認情況下，reveal.js 將假設其應覆蓋整個瀏覽器視窗。如果你想在網頁的一個較小部分嵌入你的簡報，或在同一頁面上顯示[多個簡報](/zh-hant/initialization/#multiple-presentations)，你可以使用 `embedded` [配置選項](/zh-hant/config/)。

```js
Reveal.initialize({ embedded: false });
```

一個嵌入式簡報將根據其 `.reveal` 根的尺寸確定其大小。如果該元素的大小因非視窗 `resize` 事件的原因而改變，你可以調用 `Reveal.layout()` 手動觸發布局更新。

```js
// 更改我們簡報的尺寸
document.querySelector('.reveal').style.width = '50vw';

// 使 reveal.js 感知到尺寸變化
Reveal.layout();
```

## 自帶佈局

如果你想禁用內建的縮放和置中，並帶來你自己的佈局，設置 `disableLayout: true`。這將使你的幻燈片覆蓋可用頁面的 100% 寬度和高度，並將響應式樣式留給你來處理。

```javascript
Reveal.initialize({
  disableLayout: false,
});
```
