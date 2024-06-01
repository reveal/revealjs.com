---
id: postmessage
title: postMessage API
layout: default
---

# postMessage API

框架內建了 postMessage API，當需要與另一個窗口中的演示文稿進行通信時可以使用。以下示例展示了如何讓給定窗口中的 reveal.js 實例進行到第二張幻燈片：

```javascript
<window>.postMessage( JSON.stringify({ method: 'slide', args: [ 2 ] }), '*' );
```

## postMessage 事件

當 reveal.js 在一個 iframe 中運行時，它可以選擇將所有事件冒泡到父窗口。冒泡的事件是三個字段的字符串化 JSON：namespace, eventName 和 state。這是從父窗口訂閱它們的方法：

```javascript
window.addEventListener('message', (event) => {
  var data = JSON.parse(event.data);
  if (data.namespace === 'reveal' && data.eventName === 'slidechanged') {
    // 幻燈片已變更，查看 data.state 以獲得幻燈片號碼
  }
});
```

## postMessage 回調

當您通過 postMessage API 調用任何方法時，reveal.js 會發送一條帶有返回值的消息。這樣做是為了讓您可以調用 getter 方法並查看結果。查看此示例：

```javascript
<revealWindow>.postMessage( JSON.stringify({ method: 'getTotalSlides' }), '*' );

window.addEventListener( 'message', event => {
  var data = JSON.parse( event.data );
  // `data.method` 是我們調用的方法
  if( data.namespace === 'reveal' && data.eventName === 'callback' && data.method === 'getTotalSlides' ) {
    data.result // = 幻燈片的總數
  }
} );
```

## 啟用/禁用 postMessage

這種跨窗口消息傳遞可以通過配置標誌來開啟或關閉。這些是默認值。

```javascript/1-5
Reveal.initialize({
  // 通過 window.postMessage 暴露 reveal.js API
  postMessage: true,

  // 通過 postMessage 將所有 reveal.js 事件發送到父窗口
  postMessageEvents: false
});
```