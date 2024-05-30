---
id: jump-to-slide
title: 跳轉到幻燈片
layout: default
---

# 跳轉到幻燈片 <span class="r-version-badge coming">4.5.0</span>

您可以使用 reveal.js 的跳轉到幻燈片快捷方式直接跳到特定的幻燈片。以下是操作方法：

1. 按 G 啟動
2. 輸入幻燈片編號或 id
3. 按 Enter 確認

## 導航到幻燈片編號

當跳轉到一個幻燈片時，您可以輸入數字值或字符串。如果您提供一個數字，reveal.js 將導航到所需的幻燈片編號。如果您輸入一個字符串，reveal.js 將嘗試定位一個具有匹配 `id` 的幻燈片並導航到它。

這裡有一些不同輸入及其導航結果的範例。

| 輸入          | 結果
| :-             | :-
| 5              | 導航到幻燈片編號 5
| 6/2            | 導航到水平幻燈片 6，垂直幻燈片 2
| the-end        | 導航到具有此 id 的幻燈片（`<section id="the-end">`）
{.key-value}

## 禁用跳轉到幻燈片

跳轉到幻燈片默認情況下是啟用的，但如果您想關閉它，您可以將 `jumpToSlide` 配置值設置為 `false`。

```javascript
Reveal.initialize({
  jumpToSlide: false
})
```