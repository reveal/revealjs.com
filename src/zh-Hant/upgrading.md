---
id: upgrading
title: 升級指南
layout: default
---

# 從版本 3 升級到 4.0

我們盡力避免破壞性更改，但在版本 4.0 中有一些變更。如果你想遷移現有的簡報，請按照以下指南操作。

### 更新資產位置

我們的 JS 和 CSS 資產已經移動。在你的簡報 HTML 中，更新以下 `<script>` 和 `<link>` 的路徑：

| 舊位置                           | 新位置                            |
| :------------------------------- | :-------------------------------- |
| js/reveal.js                     | dist/reveal.js                    |
| css/reset.css                    | dist/reset.css                    |
| css/reveal.css                   | dist/reveal.css                   |
| css/theme/&lt;theme-name&gt;.css | dist/theme/&lt;theme-name&gt;.css |
| lib/css/monokai.css              | plugin/highlight/monokai.css      |
| lib/js/head.min.js               | 在 3.8.0 中刪除                   |

{.key-value}

### 從 `<head>` 中移除打印 CSS

在你的簡報 HTML 中，從 `<head>` 移除以下腳本。這些樣式現已整合入 reveal.css 文件中。

```html
<script>
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi)
    ? 'css/print/pdf.css'
    : 'css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
</script>
```

### 插件導入

如果你保留了 v3 /plugin 目錄的副本，則*沒有破壞性更改*。如果你想切換到最新的插件版本，你需要更新你的 `Reveal.initialize()` 調用，以使用[新的插件導入語法](/zh-hant/plugins/)。插件也可作為 ES 模塊使用。

```html
<script src="dist/reveal.js"></script>
<script src="plugin/markdown/markdown.js"></script>
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown, RevealHighlight],
  });
</script>
```

### 移除 Multiplex 和 Notes Server

Multiplex 和 Notes Server 插件已從 reveal.js 核心移出到它們自己的存儲庫中。請查看它們相應的 README 文件以獲取使用指南。

- https://github.com/reveal/multiplex
- https://github.com/reveal/notes-server

### 其他

- 移除了 `Reveal.navigateTo`，改用 `Reveal.slide`。
- 我們已切換到 gulp 和 rollup 作為構建系統。確保執行 `npm install` 以獲得最新的依賴項。伺服器仍然使用 `npm start` 啟動，與之前相同。
