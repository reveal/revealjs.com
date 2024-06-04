---
id: jump-to-slide
title: 跳轉到幻燈片
layout: default
---

# 跳轉到幻燈片 <span class="r-version-badge coming">4.5.0</span>

你可以使用 reveal.js 的跳轉到幻燈片快捷鍵直接跳到特定的幻燈片。以下是操作方式：

1. 按 G 啟動
2. 輸入幻燈片編號或 id
3. 按 Enter 確認

## 導覽到幻燈片編號

當跳轉到一個幻燈片時，你可以輸入數字值或字符串。如果你提供一個數字，reveal.js 將導覽到所需的幻燈片編號。如果你輸入一個字符串，reveal.js 將嘗試定位一個具有匹配 `id` 的幻燈片並導覽到它。

這裡有一些不同輸入及其導覽結果的範例。

| 輸入    | 結果                                                 |
| :------ | :--------------------------------------------------- |
| 5       | 導覽到幻燈片編號 5                                   |
| 6/2     | 導覽到水平幻燈片 6，垂直幻燈片 2                     |
| the-end | 導覽到具有此 id 的幻燈片（`<section id="the-end">`） |

{.key-value}

## 禁用跳轉到幻燈片

跳轉到幻燈片默認情況下是啟用的，但如果你想關閉它，你可以將 `jumpToSlide` 配置值設置為 `false`。

```javascript
Reveal.initialize({
  jumpToSlide: false,
});
```
