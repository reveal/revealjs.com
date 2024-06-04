---
id: installation
title: 安裝
layout: default
---

# 安裝

我們提供三種不同的安裝 reveal.js 的方式，取決於您的使用情況和技術經驗。

1. [基本設置](#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E7%BD%AE) 是開始使用的最簡單方法。無需設置任何構建工具。
1. [完整設置](#full-setup) 可讓您訪問更改 reveal.js 源代碼所需的構建工具。它包括一個網絡服務器，如果您想要加載外部 Markdown 文件則需要此服務器（基本設置配合您自選的本地網絡服務器也可以）。
1. 如果您想在項目中使用 reveal.js 作為依賴項，您可以[從 npm 安裝](#%E5%BE%9E-npm-%E5%AE%89%E8%A3%9D)。

#### 下一步

安裝完 reveal.js 後，我們推薦查看 [Markup](/markup/) 和 [配置選項](/config/) 指南。

## 基本設置

我們力求以盡可能多的人都能使用的方式分發 reveal.js。基本設置是我們開始使用的最廣泛訪問方式，只需要您擁有一個網絡瀏覽器。無需經過構建過程或安裝任何依賴。

1. 下載最新版本的 reveal.js <https://github.com/hakimel/reveal.js/archive/master.zip>
1. 解壓並替換 index.html 中的示例內容為您自己的
1. 在瀏覽器中打開 index.html 查看

就是這麼簡單 🚀

## 完整設置 <span class="text-gray-500 font-normal">- 推薦</span>{id="full-setup"}

某些 reveal.js 功能，如外部 Markdown，要求簡報從本地網絡服務器運行。以下指令將設置這樣的服務器以及完成對 reveal.js 源代碼所需的所有開發任務。

1. 安裝 [Node.js](https://nodejs.org/) (10.0.0 或更高版本)

1. 克隆 reveal.js 倉庫

   ```shell
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

1. 移動到 reveal.js 文件夾並安裝依賴

   ```shell
   $ cd reveal.js && npm install
   ```

1. 提供簡報並監控源文件的更改

   ```shell
   $ npm start
   ```

1. 打開 <http://localhost:8000> 查看您的簡報

### 開發服務器端口

開發服務器默認使用 8000 端口。您可以使用 `port` 參數切換到不同的端口：

```shell
npm start -- --port=8001
```

## 從 npm 安裝

框架發布到並可從 [npm](https://www.npmjs.com/package/reveal.js) 安裝。請注意，reveal.js 面向瀏覽器並包含 CSS、字體及其他資源，因此 npm 依賴使用案例可能受限。

```shell
npm install reveal.js
# 或者
yarn add reveal.js
```

安裝後，您可以將 reveal.js 作為 ES 模塊導入：

```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

您

還需要包括 reveal.js 的樣式和一個[簡報主題](/themes/)。

```html
<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css" />
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css" />
```
