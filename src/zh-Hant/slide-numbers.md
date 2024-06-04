---
id: slide-numbers
title: 幻燈片編號
layout: default
---

# 幻燈片編號

你可以通過設置 `slideNumber` 配置選項為 `true` 來顯示當前幻燈片的頁碼。

```js
Reveal.initialize({ slideNumber: true });
```

<div class="reveal reveal-example" data-config='{"slideNumber": true}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
  </div>
</div>

## 格式

幻燈片編號格式可以通過將 `slideNumber` 設置為以下值之一來自定義。

| 值  | 描述                                     |
| :-- | :--------------------------------------- |
| h.v | 水平。垂直幻燈片編號（默認）              |
| h/v | 水平/垂直幻燈片編號                      |
| c   | 平坦化的幻燈片編號，包括水平和垂直幻燈片 |
| c/t | 平坦化的幻燈片編號/總幻燈片數            |

{.key-value}

```js
Reveal.initialize({ slideNumber: 'c/t' });
```

<div class="reveal reveal-example" data-config='{"slideNumber": "c/t"}'>
  <div class="slides">
    <section>幻燈片 1</section>
    <section>幻燈片 2</section>
  </div>
</div>

如果現有的格式都不符合你的需求，你可以提供一個自定義的幻燈片編號生成器。

```js
Reveal.initialize({
  slideNumber: (slide) => {
    // 忽略垂直幻燈片的編號
    return [Reveal.getIndices(slide).h];
  },
});
```

## 上下文

當啟用幻燈片編號時，它們將默認包含在所有上下文中。如果你只想在特定上下文中顯示幻燈片編號，你可以將 `showSlideNumber` 設置為以下之一：

| 值      | 描述                                 |
| :------ | :----------------------------------- |
| all     | 在所有上下文中顯示幻燈片編號（默認） |
| print   | 僅在打印 PDF 時顯示幻燈片編號      |
| speaker | 僅在演講者視圖中顯示幻燈片編號       |

{.key-value}

```js
Reveal.initialize({ showSlideNumber: 'print' });
```
