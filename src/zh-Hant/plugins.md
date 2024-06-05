---
id: plugins
title: 插件
layout: default
---

# 插件

插件可用於為 reveal.js 增加額外功能。要使用插件，你需要執行兩件事：

1. 在文檔中包含插件腳本。（有些插件可能還需要樣式。）
1. 通過在初始化時將其包含在 `plugins` 數組中來告訴 reveal.js 關於插件。

這是一個範例：

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

如果你使用 ES 模塊，我們也為所有內置插件提供了模塊導出：

```html
<script type="module">
  import Reveal from 'dist/reveal.esm.js';
  import Markdown from 'plugin/markdown/markdown.esm.js';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

## 內置插件

一些常見的插件，包括支持 [Markdown](/zh-hant/markdown/)、[代碼高亮](/zh-hant/code/) 和 [演講者筆記](/zh-hant/speaker-view/)，均包含在我們默認的[簡報模板](https://github.com/hakimel/reveal.js/blob/master/index.html)中。

這些插件與 reveal.js 存儲庫一起分發。這是所有內置插件的完整列表。

| 名稱            | 描述                                                                                                       |
| :-------------- | :--------------------------------------------------------------------------------------------------------- |
| RevealHighlight | 語法高亮的[代碼](/zh-hant/code/)。<br><span class="text-gray-600">plugin/highlight/highlight.js</span>             |
| RevealMarkdown  | 使用 [Markdown](/zh-hant/markdown/) 編寫內容。<br><span class="text-gray-600">plugin/markdown/markdown.js</span>   |
| RevealSearch    | 按 CTRL+Shift+F 搜索幻燈片內容。<br><span class="text-gray-600">plugin/search/search.js</span>             |
| RevealNotes     | 在單獨視窗中顯示[演講者視圖](/zh-hant/speaker-view/)。<br><span class="text-gray-600">plugin/notes/notes.js</span> |
| RevealMath      | 呈現[數學方程式](/zh-hant/math/)。<br><span class="text-gray-600">plugin/math/math.js</span>                       |
| RevealZoom      | Alt+ 點擊元素放大（Linux 中使用 CTRL+ 點擊）。<br><span class="text-gray-600">plugin/zoom/zoom.js</span>     |

{.key-value}

如果你換用 `.js` 為 `.esm.js`，以上所有插件都可以作為 ES 模塊獲得。

## API

我們提供了 API 函式來檢查哪些插件目前已導入。如果你想手動調用插件上的函式，也可以檢索任何已導入插件實例的參考。

```js
import Reveal from 'dist/reveal.esm.js';
import Markdown from 'plugin/markdown/markdown.esm.js';
import Highlight from 'plugin/highlight/highlight.esm.js';

Reveal.initialize({ plugins: [Markdown, Highlight] });

Reveal.hasPlugin('markdown');
// true

Reveal.getPlugin('markdown');
// { id: "markdown", init: ... }

Reveal.getPlugins();
// {
//   markdown: { id: "markdown", init: ... },
//   highlight: { id: "highlight", init: ... }
// }
```

## 依賴 <span class="r-version-badge deprecated">4.0.0</span> {id=dependencies}

這個功能是為了向後兼容而保留的，但從 reveal.js 4.0.0 開始已被廢棄。在舊版本中，我們使用內置的依賴加載器來加載插件。我們停用這一功能是因為腳本的最佳加載和捆綁方式可能會根據使用案例大不相同。如果你需要加載一個依賴，請使用 `<script defer>` 標籤包含它。

依賴按照它們出現的順序加載。

```js
Reveal.initialize({
  dependencies: [
    { src: 'plugin/markdown/markdown.js', condition: () => {
        return !!document.querySelector( ’[data-markdown]’ );
    } },
    { src: 'plugin/highlight/highlight.js', async: true }
  ]
});
```

每個依賴對象都有以下屬性：

- **src**: 要加載的腳本的路徑
- **async**: [可選] 標記腳本是否應該在 reveal.js 啟動後加載，默認為 false
- **callback**: [可選] 腳本加載完成時執行的函數
- **condition**: [可選] 必須返回 true 才會加載腳本的函數
