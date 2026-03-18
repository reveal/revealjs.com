---
id: installation
title: 安裝
layout: default
---

# 安裝

我們提供三種不同安裝 reveal.js 的方式，取決於你的使用情境和技術經驗。

1. [基本設置](#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E7%BD%AE) 是開始使用的最簡單函式。無需設置任何構建工具。
1. [完整設置](#full-setup) 可讓你訪問更改 reveal.js 源代碼所需的構建工具。它包括一個網頁伺服器，如果你想要加載外部 Markdown 文件則需要此伺服器（基本設置配合你自訂的網頁伺服器也可以）。
1. 如果你想在項目中使用 reveal.js 作為依賴項，你可以 [從 npm 安裝](#%E5%BE%9E-npm-%E5%AE%89%E8%A3%9D)。

#### 下一步

安裝完 reveal.js 後，我們推薦你查看 [Markup](/zh-hant/markup/) 和 [配置選項](/zh-hant/config/) 指南。

## 基本設置

我們希望能讓盡可能多的人使用 reveal.js。基本設置是大家最常使用的方式，你只需要有一個瀏覽器。無需經過構建過程或安裝任何依賴套件。

1. 下載最新版本的 reveal.js <https://github.com/hakimel/reveal.js/archive/master.zip>
2. 解壓並替換 index.html 中的範例內容為你自己的
3. 在瀏覽器中打開 index.html 查看

就是這麼簡單 🚀

## 完整設置 <span class="text-gray-500 font-normal">- 推薦</span>{id="full-setup"}

某些 reveal.js 功能，如外部 Markdown，簡報需要從本地網頁伺服器執行。以下指令將設置這樣的伺服器以及完成對 reveal.js 源代碼所需的所有開發任務。

1. 安裝 [Node.js](https://nodejs.org/) (10.0.0 或更高版本)

2. 克隆 reveal.js 倉庫

   ```shell
   $ git clone https://github.com/hakimel/reveal.js.git
   ```

3. 移動到 reveal.js 資料夾並安裝依賴

   ```shell
   $ cd reveal.js && npm install
   ```

4. 提供簡報並監控源文件的更改

   ```shell
   $ npm start
   ```

5. 打開 <http://localhost:8000> 查看你的簡報

### 開發伺服器端口

開發伺服器默認使用 8000 端口。你可以使用 `port` 參數切換到不同的端口：

```shell
npm start -- --port=8001
```

## 從 npm 安裝

 reveal.js 有上架至 [npm](https://www.npmjs.com/package/reveal.js) 可以直接安裝。請注意，reveal.js 面向瀏覽器並包含 CSS、字體及其他資源，因此使用 npm 安裝許多功能可能會受限。

```shell
npm install reveal.js
# 或者
yarn add reveal.js
```

安裝後，你可以將 reveal.js 作為 ES 模塊導入：

```js
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

你還需要包括 reveal.js 的樣式和一個 [簡報主題](/zh-hant/themes/)。

```js
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
```
