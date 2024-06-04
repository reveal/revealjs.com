---
id: markdown
title: Markdown
layout: default
---

# Markdown

使用 Markdown 編寫簡報內容不僅可行，而且往往更方便。要創建一個 Markdown 幻燈片，請在你的 `<section>` 元素中添加 `data-markdown` 屬性，並將內容包裹在 `<textarea data-template>` 中，如下例所示。

```html
<section data-markdown>
  <textarea data-template>
    ## 幻燈片 1
    包含一些文本和一個[鏈接](https://hakim.se)的段落。
    ---
    ## 幻燈片 2
    ---
    ## 幻燈片 3
  </textarea>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown data-separator="---">
        <script type="text/template">
## 幻燈片 1
包含一些文本和一個[鏈接](https://hakim.se)的段落。
---
## 幻燈片 2
---
## 幻燈片 3
        </script>
    </section>
  </div>
</div>

注意，它對縮進（避免混合使用制表符和空格）和換行（避免連續換行）很敏感。

## Markdown 插件

這個功能由內置的 Markdown 插件提供支持，該插件反過來使用 [marked](https://github.com/chjj/marked) 進行所有解析。Markdown 插件包含在我們的默認簡報範例中。如果你想手動將其添加到新的簡報中，這是操作方式：

```html
<script src="plugin/markdown/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

## 外部 Markdown

你可以將內容寫入一個單獨的文件，並讓 reveal.js 在運行時加載它。注意分隔符參數，它決定了外部文件中的幻燈片如何分隔：`data-separator` 屬性定義水平幻燈片的正則表達式（默認為 `^\r?\n---\r?\n$`，即以換行符為界的水平線）和 `data-separator-vertical` 定義垂直幻燈片（默認禁用）。`data-separator-notes` 屬性是一個正則表達式，用於指定當前幻燈片講者筆記的開始（默認為 `notes?:`，因此它會匹配 "note:" 和 "notes:"）。`data-charset` 屬性是可選的，指定加載外部文件時使用哪種字符集。

在本地使用時，此功能要求 reveal.js [從本地網頁伺服器運行](/zh-hant/installation/#full-setup)。以下範例自定義了所有可用選項：

```html
<section
  data-markdown="example.md"
  data-separator="^\n\n\n"
  data-separator-vertical="^\n\n"
  data-separator-notes="^Note:"
  data-charset="iso-8859-15"
>
  <!--
        注意 Windows 使用 `\r\n` 而不是 `\n` 作為換行字符。
        為了支持所有操作系統的正則表達式，使用 `\r?\n` 而非 `\n`。
    -->
</section>
```

## 元素屬性

特殊語法（通過 HTML 註釋）可用於為 Markdown 元素添加屬性。這對於片段等很有用。

```html
<section data-markdown>
  <script type="text/template">
    - 項目 1 <!-- .element: class="fragment" data-fragment-index="2" -->
    - 項目 2 <!-- .element: class="fragment" data-fragment-index="1" -->
  </script>
</section>
```

## 幻燈片屬性

特殊語法（通過 HTML 註釋）可用於為由你的 Markdown 生成的幻燈片 `<section>` 元素添加屬性。

```html
<section data-markdown>
  <script type="text/template">
    <!-- .slide: data-background="#ff0000" -->
      Markdown 內容
  </script>
</section>
```

## 語法高亮

reveal.js 內置了強大的語法高亮功能。使用下面顯示的括號語法，你可以突出顯示個別行，甚至逐步進行多個獨立的高亮。[了解更多關於行高亮的信息](/zh-hant/code/#%E8%A1%8C%E8%99%9F%E8%88%87%E9%AB%98%E4%BA%AE)。

````html
<section data-markdown>
  <textarea data-template>
    ```js [1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

### 行號偏移

你可以通過在高亮的開頭添加一個數字和冒號來添加[行號偏移](/zh-hant/code/#%E8%A1%8C%E8%99%9F%E5%81%8F%E7%A7%BB-4.2.0)。

````html
<section data-markdown>
  <textarea data-template>
    ```js [712: 1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
  </textarea>
</section>
````

<div class="reveal reveal-example">
  <div class="slides">
    <section data-markdown>
      <textarea data-template>
        ```js [712: 1-2|3|4]
        let a = 1;
        let b = 2;
        let c = x => 1 + 2 + x;
        c(3);
        ```
      </textarea>
    </section>
  </div>
</div>

## 配置 _marked_

我們使用 [marked](https://github.com/chjj/marked) 解析 Markdown。要自定義 marked 的渲染，你可以在[配置 Reveal](/zh-hant/config/) 時傳入選項：

```javascript
Reveal.initialize({
  // 傳入 marked 的選項
  // 見 https://marked.js.org/using_advanced#options
  markdown: {
    smartypants: true,
  },
});
```
