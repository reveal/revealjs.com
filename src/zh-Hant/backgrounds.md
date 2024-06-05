---
id: backgrounds
title: 背景
layout: default
---

# 幻燈片背景

預設情況下，幻燈片內容會被限制在屏幕的一部分以適應任何顯示設備並均勻縮放。你可以通過在 `<section>` 元素上添加 `data-background` 屬性，應用全頁背景在幻燈片區域之外。支持四種不同類型的背景：顏色、圖片、視頻和 iframe。

## 顏色背景

支持所有 CSS 顏色格式，包括十六進制值、關鍵字、`rgba()` 或 `hsl()` 等。

```html/0,3
<section data-background-color="aquamarine">
  <h2>🍦</h2>
</section>
<section data-background-color="rgb(70, 70, 255)">
  <h2>🍰</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-color="aquamarine">
      <h2 style="font-size: 4em;">🍦</h2>
    </section>
    <section data-background-color="rgb(70, 70, 255)">
      <h2 style="font-size: 4em;">🍰</h2>
    </section>
  </div>
</div>

## 漸變背景

支持所有 CSS 漸變格式，包括 `linear-gradient`、`radial-gradient` 和 `conic-gradient`。

```html/0,3
<section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
  <h2>🐟</h2>
</section>
<section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
  <h2>🐳</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐟</h2>
    </section>
    <section data-background-gradient="radial-gradient(#283b95, #17b2c3)">
      <h2 style="font-size: 4em;">🐳</h2>
    </section>
  </div>
</div>

## 圖片背景

預設情況下，背景圖片被調整大小以覆蓋整個頁面。可用選項包括：

| 屬性                     | 預設值    | 描述                                                                                                  |
| :----------------------- | :-------- | :---------------------------------------------------------------------------------------------------- |
| data-background-image    |           | 顯示的圖片的 URL。幻燈片開啟時，GIF 將重新開始。                                                      |
| data-background-size     | cover     | 參見 MDN 上的 [background-size](https://developer.mozilla.org/docs/Web/CSS/background-size)。         |
| data-background-position | center    | 參見 MDN 上的 [background-position](https://developer.mozilla.org/docs/Web/CSS/background-position)。 |
| data-background-repeat   | no-repeat | 參見 MDN 上的 [background-repeat](https://developer.mozilla.org/docs/Web/CSS/background-repeat)。     |
| data-background-opacity  | 1         | 背景圖片的透明度，0-1 範圍。0 是透明的，1 是完全不透明的。                                            |

{.nowrap-1st}

```html/0,3-4
<section data-background-image="http://example.com/image.png">
  <h2>Image</h2>
</section>
<section data-background-image="http://example.com/image.png"
          data-background-size="100px" data-background-repeat="repeat">
  <h2>這張背景圖將被設置為 100px 並重複</h2>
</section>
```

## 視頻背景

自動播放全尺寸視頻作

為幻燈片背景。

| 屬性                        | 預設值 | 描述                                                       |
| :-------------------------- | :----- | :--------------------------------------------------------- |
| data-background-video       |        | 一個視頻源或逗號分隔的多個視頻源。                         |
| data-background-video-loop  | false  | 標記視頻是否應重複播放。                                   |
| data-background-video-muted | false  | 標記音頻是否應靜音。                                       |
| data-background-size        | cover  | 使用 `cover` 全屏和部分裁剪，或 `contain` 以信箱格式顯示。 |
| data-background-opacity     | 1      | 背景視頻的透明度，0-1 範圍。0 是透明的，1 是完全不透明的。 |

{.nowrap-1st}

```html/0-1
<section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4"
          data-background-video-loop data-background-video-muted>
  <h2>Video</h2>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-background-video="https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4" 
          data-background-video-loop data-background-video-muted>
      <h2>Video</h2>
    </section>
  </div>
</div>

## iframe 背景

在幻燈片背景中嵌入一個網頁，覆蓋 100% 的 reveal.js 寬度和高度。iframe 位於背景層，位於你的幻燈片後面，因此默認情況下無法與之互動。若要使你的背景可互動，可以添加 `data-background-interactive` 屬性。

| 屬性                        | 預設值 | 描述                                                                   |
| :-------------------------- | :----- | :--------------------------------------------------------------------- |
| data-background-iframe      |        | 要加載的 iframe 的 URL                                                 |
| data-background-interactive | false  | 添加此屬性可以與 iframe 內容互動。啟用此功能將阻止與幻燈片內容的互動。 |

{.nowrap-1st}

```html/0-1
<section data-background-iframe="https://slides.com"
          data-background-interactive>
  <h2>Iframe</h2>
</section>
```

iframe 會在變得可見時懶加載。如果你想提前預加載 iframe，你可以在幻燈片 `<section>` 上添加 `data-preload` 屬性。你也可以使用 `preloadiframes` 配置選項為所有 iframes 啟用全域預加載。

## 背景轉場

我們將使用交叉淡入來過渡幻燈片背景，這是預設設置。可以使用 [`backgroundTransition`](/zh-hant/transitions/#%E8%83%8C%E6%99%AF%E8%BD%89%E5%A0%B4) 配置選項更改此設置。

## 視差背景

如果你想使用視差滾動背景，初始化 reveal.js 時設置下面的前兩個屬性（另外兩個是可選的）。

```javascript/1-11
Reveal.initialize({
  // 視差背景圖片
  parallaxBackgroundImage: '', // 例如 "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"

  // 視差背景大小
  parallaxBackgroundSize: '', // CSS 語法，例如 "2100px 900px" - 目前只支持像素（不要使用 % 或 auto）

  // 每張幻燈片移動視差背景的像素數
  // - 除非指定，否則自動計算
  // - 設置為 0 禁用沿軸移動


  parallaxBackgroundHorizontal: 200,
  parallaxBackgroundVertical: 50
});
```

確保背景大小遠大於屏幕大小，以允許一定的滾動。[查看示範](/demo?parallaxBackgroundImage=https%3A%2F%2Fs3.amazonaws.com%2Fhakim-static%2Freveal-js%2Freveal-parallax-1.jpg&parallaxBackgroundSize=2100px%20900px).
