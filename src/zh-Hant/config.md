---
id: config
title: 配置
layout: default
---

# 配置選項

可以通過使用大量的參數來微調簡報。這些選項可以在你[初始化](/zh-hant/initialization/) reveal.js 時包含進去。也可以在運行時[重新配置](#%E9%87%8D%E6%96%B0%E9%85%8D%E7%BD%AE)。

注意，**所有**屬性值都是**可選的**，以下顯示默認值。

```javascript
Reveal.initialize({

  // 顯示簡報控制箭頭
  controls: true,

  // 通過提供提示來幫助用戶學習控制，例如當他們首次遇到垂直幻燈片時使下箭頭彈跳
  controlsTutorial: true,

  // 決定控制出現的位置，"edges" 或 "bottom-right"
  controlsLayout: 'bottom-right',

  // 向後導覽箭頭的可見性規則；"faded", "hidden" 或 "visible"
  controlsBackArrows: 'faded',

  // 顯示簡報進度條
  progress: true,

  // 顯示當前幻燈片的頁碼
  // - true:    顯示幻燈片編號
  // - false:   隱藏幻燈片編號
  //
  // 可選地設置為指定編號格式的字符串：
  // - "h.v":   水平 . 垂直幻燈片編號（默認）
  // - "h/v":   水平 / 垂直幻燈片編號
  // - "c":     扁平化幻燈片編號
  // - "c/t":   扁平化幻燈片編號 / 總幻燈片數
  //
  // 或者，你可以提供一個返回當前幻燈片的幻燈片編號的函數。
  // 該函數應該接受一個幻燈片對象並返回一個字符串 [幻燈片編號] 或
  // 三個字符串 [n1,delimiter,n2]。見 #formatSlideNumber()。
  slideNumber: false,

  // 可用於限制幻燈片編號出現的上下文
  // - "all":      總是顯示幻燈片編號
  // - "print":    僅在打印到 PDF 時
  // - "speaker":  僅在演講者視圖中
  showSlideNumber: 'all',

  // 使用基於 1 的索引為 # 鏈接以匹配幻燈片編號（默認是基於 0 的）
  hashOneBasedIndex: false,

  // 將當前幻燈片編號添加到 URL 哈希中，以便重新加載頁面/複製 URL 將返回到相同的幻燈片
  hash: false,

  // 標記是否應監控哈希並相應地更改幻燈片
  respondToHashChanges: true,

  // 啟用跳轉到幻燈片的導覽快捷鍵
  jumpToSlide: true,

  // 將每次幻燈片更改推送到瀏覽器歷史記錄。意味著 `hash: true`
  history: false,

  // 啟用用於導覽的鍵盤快捷

鍵
  keyboard: true,

  // 可選函數，當返回 false 時阻止鍵盤事件
  //
  // 如果你將此設置為 'focused'，我們只會在嵌入式幻燈片聚焦時捕獲鍵盤事件
  keyboardCondition: null,

  // 禁用默認的 reveal.js 幻燈片佈局（縮放和居中）
  // 以便你可以使用自定義 CSS 佈局
  disableLayout: false,

  // 啟用幻燈片概覽模式
  overview: true,

  // 幻燈片的垂直居中
  center: true,

  // 啟用具有觸控輸入的設備上的觸控導覽
  touch: true,

  // 循環播放簡報
  loop: false,

  // 將簡報方向更改為從右到左
  rtl: false,

  // 更改我們的導覽方向的行為。
  //
  // "default"
  // 左/右箭頭鍵在水平幻燈片之間步進，上/下箭頭鍵在垂直幻燈片之間步進。空格鍵步進
  // 通過所有幻燈片（水平和垂直）。
  //
  // "linear"
  // 移除上/下箭頭。左/右箭頭步進通過所有幻燈片（水平和垂直）。
  //
  // "grid"
  // 啟用時，從一個垂直堆疊向相鄰的垂直堆疊進行左/右步進時，將使你處於相同的垂直
  // 索引。
  //
  // 考慮一個有六張幻燈片按兩個垂直堆疊排序的套件：
  // 1.1    2.1
  // 1.2    2.2
  // 1.3    2.3
  //
  // 如果你在幻燈片 1.3 上並向右導覽，你通常會從 1.3 -> 2.1。如果使用 "grid"，相同的導覽將帶你
  // 從 1.3 -> 2.3。
  navigationMode: 'default',

  // 每次加載簡報時隨機化幻燈片的順序
  shuffle: false,

  // 全域開啟或關閉片段
  fragments: true,

  // 標記是否將當前片段包含在 URL 中，
  // 以便重新加載後你會回到相同的片段位置
  fragmentInURL: true,

  // 標記簡報是否在嵌入模式下運行，
  // 即包含在屏幕的有限部分內
  embedded: false,

  // 標記是否應在按下問號鍵時顯示幫助覆蓋
  help: true,

  // 標記是否應該可以暫停簡報（黑屏）
  pause: true,

  // 標記是否應向所有觀眾顯示演講者筆記
  showNotes: false,

  // 全域覆蓋用於自動播放嵌入式媒體（視頻/音頻/iframe）
  // - null:   媒體只有在存在 data-autoplay 時才會自動播放
  // - true:   所有媒體將自動播放，無論個別設定如何
  // - false:  無論個別設定如何，都不會自動播放媒體
  autoPlayMedia: null,

  // 全球覆蓋用於預加載懶加載 iframes
  // - null:   帶有 data-src 和 data-preload 的 iframes 將在進入 viewDistance 範圍內時加載，只帶有 data-src 的 iframes 將在可見時加載
  // - true:   所有帶有 data-src 的 iframes 將在進入 viewDistance 範圍內時加載
  // - false:  所有帶有 data-src 的 iframes 將只在可見時加載
  preloadIframes: null,

  // 可用於全域禁用自動動畫
  autoAnimate: true,

  // 可選提供一個自定義元素匹配器，
  // 將用於決定我們可以在哪些元素之間進行動畫。
  autoAnimateMatcher: null,

  // 我們自動動畫過渡的預設設定，可以通過數據參數
  // 在每張幻燈片或每個元素上進行覆蓋
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,

  // 可以自動動畫的 CSS 屬性。位置 & 縮放
  // 分別匹配，因此無需包括
  // 像 top/right/bottom/left, width/height 或 margin 這樣的樣式。
  autoAnimateStyles: [
    'opacity',
    'color',
    'background-color',
    'padding',
    'font-size',
    'line-height',
    'letter-spacing',
    'border-width',
    'border-color',
    'border-radius',
    'outline',
    'outline-offset'
  ],

  // 控制自動進入下一幻燈片
  // - 0:      自動播放只在當前幻燈片或片段上存在 data-autoslide HTML 屬性時發生
  // - 1+:     所有幻燈片將以給定間隔自動進行
  // - false:  即使存在 data-autoslide，也不進行自動播放
  autoSlide: 0,

  // 用戶輸入後停止自動播放
  autoSlideStoppable: true,

  // 自動播放時用於導覽的函式（默認為 navigateNext）
  autoSlideMethod: null,

  // 指定你認為你將花在每張幻燈片上的平均時間（秒）。這用於在演講者視圖中顯示配速計時器
  defaultTiming: null,

  // 啟用通過鼠標滾輪進行幻燈片導覽
  mouseWheel: false,

  // 在 iframe 預覽覆蓋層中打開鏈接
  // 添加 `data-preview-link` 和 `data-preview-link="false"` 以自定義每個鏈接
  previewLinks: false,

  // 通過 window.postMessage 暴露 reveal.js API


  postMessage: true,

  // 通過 postMessage 將所有 reveal.js 事件派發給父視窗
  postMessageEvents: false,

  // 當頁面可見性改變時聚焦 body 以確保鍵盤快捷鍵工作
  focusBodyOnPageVisibilityChange: true,

  // 過渡樣式
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // 過渡速度
  transitionSpeed: 'default', // default/fast/slow

  // 全頁幻燈片背景的過渡樣式
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // 單張幻燈片可以擴展到多個頁面時打印到 PDF 的最大頁數，
  // 預設為無限制
  pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,

  // 打印每個片段到一張幻燈片
  pdfSeparateFragments: true,

  // 用於減少導出 PDF 頁面內容高度的偏移量。
  // 這存在於根據你如何打印到 PDF 來解釋環境差異。
  // CLI 打印選項，如 phantomjs 和 wkpdf，可以精確地
  // 結束在文檔的總高度，而在瀏覽器中打印必須在
  // 一個像素之前結束。
  pdfPageHeightOffset: -1,

  // 離當前幻燈片可見的幻燈片數
  viewDistance: 3,

  // 在行動裝置上離當前幻燈片可見的幻燈片數。
  // 建議將此數字設置為比 viewDistance 更低的數字以節省資源。
  mobileViewDistance: 2,

  // 用於顯示幻燈片的顯示模式
  display: 'block',

  // 如果不活動則隱藏光標
  hideInactiveCursor: true,

  // 隱藏光標的時間（毫秒）
  hideCursorTime: 5000

});
```

## 重新配置

使用 `configure` 函式可以在初始化後更新配置。

```javascript
// 關閉 autoSlide
Reveal.configure({ autoSlide: 0 });

// 每 5 秒開始自動播放
Reveal.configure({ autoSlide: 5000 });
```
