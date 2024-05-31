---
id: touch-navigation
title: 觸摸導航
layout: default
---

# 觸摸導航

您可以在任何支持觸摸的設備上通過滑動來導航演示文稿。水平滑動更改水平幻燈片，垂直滑動更改垂直幻燈片。

如果您希望禁用此功能，可以在初始化時將 `touch` 配置選項設置為 false。

```javascript
Reveal.initialize({
  touch: false,
});
```

如果您的內容中有部分需要保持對觸摸事件的可訪問性，您需要通過向元素添加 `data-prevent-swipe` 屬性來突出顯示這一點。一個常見的例子是需要滾動的元素。

```html
<section>
  <p data-prevent-swipe>無法通過滑動此元素更改幻燈片。</p>
</section>
```
