---
id: scroll-view
title: 滾動視圖
layout: default
---

# 滾動視圖 <span class="r-version-badge new">5.0.0</span>

從 reveal.js 5.0 版本開始，任何簡報都可以作為可滾動頁面查看。所有的動畫、片段和其他功能仍然像在普通幻燈片視圖中一樣運作。

幻燈片套件是進行演示的絕佳格式，但可滾動的網頁對觀眾自行閱讀更為方便。

滾動視圖讓你兼得兩者之長——而不需額外努力。以最適合演示的格式進行演示，以最適合聽眾的格式進行分享。

### 垂直幻燈片怎麼辦？

滾動視圖將你的套件扁平化為單一線性流程。所有幻燈片將按照其創建順序顯示，不會區分水平和 [垂直幻燈片](/zh-hant/vertical-slides)。

### 入門

滾動視圖通過初始化 reveal.js 並設置 `view: "scroll"` 來激活。這裡有一個實際操作的示範。

```js
Reveal.initialize({
  // 激活滾動視圖
  view: 'scroll',

  // 強制滾動條始終可見
  scrollProgress: true,
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "scrollProgress": true}'>
  <div class="slides">
    <section>
      <h2>滾動我！</h2>
    </section>
    <section data-background="indigo">
      <h2>帶有兩個片段的幻燈片</h2>
      <h2 class="fragment fade-left">一</h2>
      <h2 class="fragment fade-left">二</h2>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">滾動更棒</h2>
        <div data-id="box-1" style="position: absolute; top: 100%; left: 50%; width: 40px; height: 40px; background-color: indigo;"></div>
      </div>
    </section>
    <section data-auto-animate>
      <div style="position: relative">
        <h2 style="position: relative; z-index: 1; margin-bottom: 0;">滾動配合自動動畫更棒！</h2>
        <div data-id="box-1" style="position: absolute; top: -20px; left: 0; width: 100%; height: 180px; background-color: indigo;"></div>
      </div>
    </section>
    <section><h2>結束</h2></section>
  </div>
</div>

## URL 激活

想要為一套幻燈片啟用滾動視圖而不改變其配置？編輯 URL 並添加 `view=scroll` 到查詢字符串。例如，這裡是 reveal.js 演示在滾動視圖中的效果：  
<https://revealjs.com/demo/?view=scroll>

## 自動激活

在行動裝置上瀏覽簡報時，滾動視圖非常有用。因此，當視窗達到移動寬度時，我們會自動啟用滾動視圖。

這是通過 `scrollActivationWidth` 配置值控制的。如果你想要禁用自動滾動視圖，初始化你的

簡報時將該值設為 `null` 或 `0`:

```js
Reveal.initialize({
  scrollActivationWidth: null,
});
```

## 滾動條

我們為任何在滾動視圖中的簡報渲染自定義滾動條。這個滾動條按幻燈片分段，讓用戶清楚地知道幻燈片何時更換。

滾動條還將顯示你幻燈片中的個別片段。擁有片段的幻燈片將根據片段數量獲得更多垂直空間。

默認情況下，當你停止滾動時滾動條會自動隱藏。這個行為可以通過 `scrollProgress` 進行配置。

```js
// - auto:     滾動時顯示滾動條，閒置時隱藏
// - true:     始終顯示滾動條
// - false:    永不顯示滾動條
scrollProgress: 'auto';
```

## 滾動捕捉

在滾動時，reveal.js 會自動移動到最接近的幻燈片。這被選為默認行為，因為這樣在觸控設備上「快速滑動」幻燈片非常舒適。

如果你喜歡，你可以將其更改為只在靠近幻燈片頂部時捕捉，使用 `proximity`。你也可以通過設置 `scrollSnap` 為 `false` 完全禁用捕捉。

```js
// - false:      無捕捉，滾動連續
// - proximity:  靠近幻燈片時捕捉
// - mandatory:  始終捕捉到最接近的幻燈片
scrollSnap: 'mandatory';
```

## 滾動布局 (實驗性)

默認情況下，每個幻燈片都將設置為與視窗一樣高。這在大多數情況下看起來很不錯，但這可能意味著你的幻燈片上下會有一些空白空間（取決於視窗和幻燈片套件的長寬比）。

如果你更喜歡一個更密集的布局，並且多個幻燈片同時可見，將 `scrollLayout` 選項設置為 `compact`。這將使每個幻燈片的寬度與視窗一致，高度根据你的長寬比（幻燈片寬度/高度）需要而設定。

你可以在下面的範例中看到兩種模式之間的區別。從緊湊布局開始。

```js
Reveal.initialize({
  view: 'scroll',
  scrollLayout: 'compact',
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height": 300, "scrollLayout": "compact"}'>
  <div class="slides">
    <section>
      <h2>幻燈片一</h2>
    </section
    <section data-background="indigo">
      <h2>幻燈片二</h2>
    </section>
    <section data-background="salmon">
      <h2>幻燈片三</h2>
    </section>
    <section data-background="indigo">
      <h2>

幻燈片四</h2>
</section>

  </div>
</div>

以下是使用默認 `scrollLayout` ('full') 的相同內容。

```js
Reveal.initialize({
  view: 'scroll',
  scrollLayout: 'full', // 這是默認值
});
```

<div class="reveal reveal-example" data-config='{"view": "scroll", "width": 1000, "height: 300, "scrollLayout": "full"}'>
  <div class="slides">
    <section>
      <h2>幻燈片一</h2>
    </section>
    <section data-background="indigo">
      <h2>幻燈片二</h2>
    </section>
    <section data-background="salmon">
      <h2>幻燈片三</h2>
    </section>
    <section data-background="indigo">
      <h2>幻燈片四</h2>
    </section>
  </div>
</div>

## 範例

如果你正在尋找可滾動的 reveal.js 幻燈片範例，這裡有一個很好的範例：https://slides.com/news/scroll-mode/scroll
