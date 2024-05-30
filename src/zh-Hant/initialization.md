---

id: initialization
title: 初始化
layout: default
---

# 初始化

最常見的 reveal.js 使用情景是有一個覆蓋整個視口的單一簡報。從 4.0 版本開始，我們也支持在同一頁面上同時運行[多個簡報](#multiple-presentations)，以及將庫作為一個[ES 模塊](#es-module)引入。

如果你的頁面上只有一個簡報，我們建議使用全局的 `Reveal` 對象來初始化 reveal.js。`Reveal.initialize` 方法接受一個參數；一個 reveal.js 的[配置對象](/config/)。
```html
<script src="dist/reveal.js"></script>
<script>
  Reveal.initialize({ transition: 'none' });
</script>
```

`initialize` 方法返回一個 promise，當簡報準備好並可以通過 API 進行交互時，此 promise 將解析。
```js
Reveal.initialize().then( () => {
  // reveal.js 已準備好
} )
```

## 多個簡報 <span class="r-version-badge new">4.0.0</span> {id="multiple-presentations"}

要在同一頁面上並排運行多個簡報，你可以創建 `Reveal` 類的實例。`Reveal` 構造函數接受兩個參數；簡報的 `.reveal` HTML 元素根以及一個可選的[配置對象](/config/)。

請注意，你還需要將[嵌入式](/presentation-size/#embedded)配置選項設置為真。這個標誌使得簡報按照它們的 `.reveal` 根元素的大小進行自我調整，而不是按照瀏覽器視口。你還需要手動為每個 `.reveal .deck*` 元素定義 `width` 和 `height` 的 CSS 屬性，才能看到它們顯示出來。

默認情況下，reveal.js 會捕獲文檔中的所有鍵盤事件。對於嵌入式簡報，我們建議使用 `keyboardCondition: 'focused'` 初始化，這樣鍵盤事件只有在觀眾聚焦簡報時才會被捕獲。

```html
<div class="reveal deck1">...</div>
<div class="reveal deck2">...</div>

<script src="dist/reveal.js"></script>
<script>
  let deck1 = new Reveal( document.querySelector( '.deck1' ), {
    embedded: true,
    keyboardCondition: 'focused' // 只有在聚焦時才反應按鍵
  } );
  deck1.initialize();

  let deck2 = new Reveal( document.querySelector( '.deck2' ), {
    embedded: true
  } );
  deck2.initialize();
</script>
```

## ES 模塊 <span class="r-version-badge new">4.0.0</span> {id="es-module"}

我們提供兩個 JavaScript 包，取決於你的使用情況。我們的默認簡報模板使用 `dist/reveal.js`，它支持廣泛的跨瀏覽器（ES5）並將 Reveal 暴露到全局窗口（UMD）。

第二個包是 `dist/reveal.esm.js`，它允許將 reveal.js 作為 ES 模塊導入。這個版本可以直接在瀏覽器中使用 `<script type="module">` 或在你自己的構建過程中

捆綁使用。

以下是如何導入並初始化 reveal.js 的 ES 模塊版本以及 Markdown 插件：

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [ Markdown ]
  });
</script>
```

如果你是[從 npm 安裝 reveal.js](/installation/#installing-from-npm)並且捆綁它，你應該能夠使用：
```js
import Reveal from 'reveal.js';
Reveal.initialize();
```

## 取消初始化 reveal.js <span class="r-version-badge new">4.3.0</span> {id="destroy"}

如果你想取消初始化 reveal.js，你可以使用 `destroy` API 方法。這將撤銷框架對 DOM 做出的所有更改，移除所有事件監聽器並註銷/銷毀所有插件。

```js
Reveal.destroy();
```