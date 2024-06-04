---
id: themes
title: 主題
layout: default
---

# 主題

此框架附帶了幾種不同的主題。

| 名稱         | 預覽                                                                                                          |
| :----------- | :------------------------------------------------------------------------------------------------------------ |
| black (默認) | <img src="/images/docs/themes/black.png" width="150" height="150" alt="黑色背景，白色文字，藍色鏈接">         |
| white        | <img src="/images/docs/themes/white.png" width="150" height="150" alt="白色背景，黑色文字，藍色鏈接">         |
| league       | <img src="/images/docs/themes/league.png" width="150" height="150" alt="灰色背景，白色文字，藍色鏈接">        |
| beige        | <img src="/images/docs/themes/beige.png" width="150" height="150" alt="米色背景，深色文字，棕色鏈接">         |
| night        | <img src="/images/docs/themes/night.png" width="150" height="150" alt="黑色背景，粗白色文字，橙色鏈接">       |
| serif        | <img src="/images/docs/themes/serif.png" width="150" height="150" alt="卡布奇諾背景，灰色文字，棕色鏈接">     |
| simple       | <img src="/images/docs/themes/simple.png" width="150" height="150" alt="白色背景，黑色文字，藍色鏈接">        |
| solarized    | <img src="/images/docs/themes/solarized.png" width="150" height="150" alt="奶油色背景，深綠色文字，藍色鏈接"> |
| moon         | <img src="/images/docs/themes/moon.png" width="150" height="150" alt="深藍背景，粗灰色文字，藍色鏈接">        |
| dracula      | <img src="/images/docs/themes/dracula.png" width="150" height="150">                                          |
| sky          | <img src="/images/docs/themes/sky.png" width="150" height="150" alt="藍色背景，細深色文字，藍色鏈接">         |
| blood        | <img src="/images/docs/themes/blood.png" width="150" height="150" alt="深色背景，粗白色文字，紅色鏈接">       |

{.key-value}

每個主題都可作為一個單獨的樣式表使用。若要更換主題，你需要在 index.html 中將以下 **black** 替換為你想要的主題名稱：

```html
<link rel="stylesheet" href="dist/theme/black.css" />
```

## 自定義屬性

所有主題變數都作為 CSS 自定義屬性在偽類 `:root` 中。查看[變數列表](https://github.com/hakimel/reveal.js/blob/master/css/theme/template/exposer.scss)。

## 創建主題

如果你想添加自己的主題，請參見此處的指南：[/css/theme/README.md](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md)。

或者，如果你想要一個全新的開始，你可以選擇從一個空白的 CSS 文件開始，並從頭開始自定義一切。
