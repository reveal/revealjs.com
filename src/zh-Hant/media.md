---
id: media
title: 媒體
layout: default
---

# 媒體

我們提供了便利的機制來自動播放和懶加載基於幻燈片可見性和鄰近性的 HTML 媒體元素和 iframe。這適用於[\<video\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)、[\<audio\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)和[\<iframe\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)元素。

## 自動播放

如果你希望媒體元素在幻燈片顯示時自動開始播放，請添加`data-autoplay`：

```html
<video
  data-autoplay
  src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
></video>
```

如果你想要全域啟用或禁用所有嵌入媒體的自動播放，可以使用`autoPlayMedia`配置選項。如果將此選項設置為`true`，所有媒體將無視個別的`data-autoplay`屬性而自動播放。如果設置為`autoPlayMedia: false`，則沒有媒體將自動播放。

```js
Reveal.initialize({
  autoPlayMedia: true,
});
```

請注意，嵌入的 HTML `<video>`/`<audio>`和 YouTube/Vimeo iframe 在你離開幻燈片時會自動暫停。可以通過為你的元素添加一個`data-ignore`屬性來禁用此功能。

## 懶加載

在包含大量媒體或 iframe 內容的簡報中，懶加載很重要。懶加載意味著 reveal.js 只會為最靠近當前幻燈片的幾張幻燈片加載內容。預加載的幻燈片數量由`viewDistance`配置選項確定。

要啟用懶加載，你只需要將`src`屬性更改為`data-src`，如下所示。這支持圖像、視頻、音頻和 iframe 元素。

```html/1-2,4-5
<section>
  <img data-src="image.png">
  <iframe data-src="https://hakim.se"></iframe>
  <video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
  </video>
</section>
```

### 懶加載 iframe

請注意，懶加載的 iframe 將忽略`viewDistance`配置，只有在其包含的幻燈片變為可見時才會加載。iframe 也會在幻燈片隱藏後立即卸載。

當我們懶加載視頻或音頻元素時，reveal.js 不會開始播放這些內容，直到幻燈片變為可見。然而，對於 iframe，由於它可能包含任何類型的內容，因此無法控制。這意味著如果我們在幻燈片在屏幕上可見之前加載了 iframe，它可能會在背景中開始播放媒體和聲音。

你可以使用`data-preload`屬性覆蓋此行為。下面的 iframe 將根據`viewDistance`加載。

```html/1
<section>
  <iframe data-src="https://hakim.se" data-preload></iframe>
</section>
```

你也可以通過`preloadIframes`配置選項全域更改默認設置。如果設置為`true`，所有帶有`data-src`屬性的 iframe 都將在`viewDistance`範圍內預加載，無論個別的`data-preload`屬性如何。如果設置為`false`，所有 iframe 只有在它們變得可見時才會加載。
