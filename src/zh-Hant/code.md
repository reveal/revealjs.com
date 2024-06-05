---
id: code
title: 展示代碼
layout: default
---

# 展示代碼

reveal.js 有一個強大的功能，就是為程式碼添加顏色 — 由 [highlight.js](https://highlightjs.org/) 提供支持。這些功能位於 highlight 插件中，並包含在我們的預設簡報模板中。

下面是一個將被語法高亮的 clojure 程式碼範例。當 `<code>` 標籤存在 `data-trim` 屬性時，會自動移除代碼周圍的空白。

預設會對 HTML 進行轉換。要避免這一點，可以在 `<code>` 元素上添加 `data-noescape` 屬性。

```html
<section>
  <pre><code data-trim data-noescape>
(def lazy-fib
  (concat
   [0 1]
   ((fn rfib [a b]
        (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
      <pre><code data-trim data-noescape>
      (def lazy-fib
        (concat
         [0 1]
         ((fn rfib [a b]
              (lazy-cons (+ a b) (rfib b (+ a b)))) 0 1)))
      </code></pre>
    </section>
  </div>
</div>

## 主題

確保在你的文檔中包含了一個語法高亮主題。我們預設包含了 Monokai，它隨 reveal.js 儲存在 [plugin/highlight/monokai.css](https://github.com/hakimel/reveal.js/tree/master/plugin/highlight/monokai.css) 中。可用的主題完整列表可以在 <https://highlightjs.org/static/demo/> 上找到。

```html
<link rel="stylesheet" href="plugin/highlight/monokai.css" />
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealHighlight],
  });
</script>
```

## 行號與高亮

你可以通過在你的 `<code>` 標籤上添加 `data-line-numbers` 屬性來啟用行號。如果你想高亮特定行，可以使用同一屬性提供以逗號分隔的行號列表。例如，在以下範例中，第 3 行和第 8-10 行被高亮：

```html
<pre><code data-line-numbers="3,8-10">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3,8-10" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>

#### 行號偏移 <span class="r-version-badge new">4.2.0</span>

如果你想展示一長串代碼的片段，你可以偏移行號。在下面的範例中，我們設置 `data-ln-start-from="7"` 使行號從 7 開始。

```html
<pre><code data-line-numbers data-ln-start-from="7">
<tr>
  <td>Oranges</td>
  <td>$2</td>
  <td>18</td>
</tr>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers data-ln-start-from="7" data-trim data-noescape>
&lt;tr&gt;
  &lt;td>Oranges&lt;/td&gt;
  &lt;td>$2&lt;/td&gt;
  &lt;td>18&lt;/td&gt;
&lt;/tr&gt;
</code></pre>
    </section>
  </div>
</div>

## 分步高亮

你可以在同一代碼塊上分步進行多次代碼高亮。用 `|` 字符分隔每個高亮步驟。例如 `data-line-numbers="1|2-3|4,6-10"` 會產生三個步驟。開始時高亮第 1 行，下一步是第 2-3 行，最後是第 4 行和第 6 到 10 行。

```html
<pre><code data-line-numbers="3-5|8-10|13-15">
<table>
  <tr>
    <td>Apples</td>
    <td>$1</td>
    <td>7</td>
  </tr>
  <tr>
    <td>Oranges</td>
    <td>$2</td>
    <td>18</td>
  </tr>
  <tr>
    <td>Kiwi</td>
    <td>$3</td>
    <td>1</td>
  </tr>
</table>
</code></pre>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section>
<pre><code data-line-numbers="3-5|8-10|13-15" data-trim data-noescape>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td>Apples&lt;/td&gt;
    &lt;td>$1&lt;/td&gt;
    &lt;td>7&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Oranges&lt;/td&gt;
    &lt;td>$2&lt;/td&gt;
    &lt;td>18&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td>Kiwi&lt;/td&gt;
    &lt;td>$3&lt;/td&gt;
    &lt;td>1&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</code></pre>
    </section>
  </div>
</div>
