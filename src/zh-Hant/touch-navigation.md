---
id: touch-navigation
title: 觸控導覽
layout: default
---

# 觸控導覽

你可以在任何支持觸控的設備上通過滑動來導覽簡報。水平滑動更改水平幻燈片，垂直滑動更改垂直幻燈片。

如果你希望禁用此功能，可以在初始化時將 `touch` 配置選項設置為 false。

```javascript
Reveal.initialize({
  touch: false,
});
```

如果你的內容中有部分需要保持對觸控事件的可訪問性，你需要通過向元素添加 `data-prevent-swipe` 屬性來標註這一點。一個常見的例子是需要滾動的元素。

```html
<section>
  <p data-prevent-swipe>無法通過滑動此元素更改幻燈片。</p>
</section>
```
