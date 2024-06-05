---
id: speaker-view
title: 演講者視圖
layout: default
---

# 演講者視圖

reveal.js 提供了一個演講者筆記插件，可以在單獨的瀏覽器視窗中展示每張幻燈片的筆記。筆記視窗還會預覽下一張即將展示的幻燈片，所以即使你沒有寫筆記，這也可能是有幫助的。按鍵盤上的「S」鍵打開演講者視圖。

演講者視圖打開後，演講計時器即開始運行。你可以通過點擊計時器來重置它。

筆記是通過在幻燈片下附加一個 `<aside>` 元素來定義的，如下所示。如果你更喜歡使用 Markdown 來寫筆記，可以向 aside 元素添加 `data-markdown` 屬性。

或者，你可以在幻燈片的 `data-notes` 屬性中添加你的筆記，如 `<section data-notes="Something important"></section>`。

在本地使用時，此功能要求 reveal.js [從本地網頁伺服器運行](/zh-hant/installation/#full-setup)。

```html/3-5
<section>
  <h2>某個幻燈片</h2>

  <aside class="notes">
    嘘，這是你的私人筆記 📝
  </aside>
</section>
```

如果你正在使用 [Markdown](/zh-hant/markdown/) 插件，你可以利用特殊的分隔符添加筆記：

```html/0-1,7-8
<section data-markdown="example.md" data-separator="^\n\n\n"
         data-separator-vertical="^\n\n" data-separator-notes="^Note:">
# 標題
## 副標題

這裡是一些內容...

Note:
這將僅在筆記視窗中顯示。
</section>
```

## 添加演講者筆記插件

該插件已經與 reveal.js 捆綁在一起。要啟用演講者筆記插件，將插件源添加到 `index.html` 中並將插件添加到 reveal.js 的初始化中。

```html
<script src="plugin/notes/notes.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealNotes],
  });
</script>
```

## 分享和列印演講者筆記

筆記僅對演講者在演講者視圖中可見。如果你希望與他人分享你的筆記，可以將 reveal.js 初始化時的 `showNotes` 配置值設置為 `true`。筆記將顯示在簡報的底部。

當啟用 `showNotes` 時，筆記也會包含在你 [輸出的 PDF](/zh-hant/pdf-export/) 中。默認情況下，筆記在幻燈片上方的一個框中打印。如果你更喜歡在幻燈片之後的單獨頁面上打印它們，設置 `showNotes: "separate-page"`。

## 演講者筆記時鐘和計時器

演講者筆記視窗還會顯示：

- 自演講開始以來經過的時間。如果你將鼠標懸停在此部分上方，將顯示一個計時器重置按鈕。
- 當前的實時時間
- （可選）節

奏計時器，指示當前演示的節奏是否準時（顯示為綠色），如果不是，演講者應該加速（顯示為紅色）或可以放慢（藍色）。

節奏計時器可以通過在 `Reveal` 配置塊中配置 `defaultTiming` 參數來啟用，該參數指定每張幻燈片的秒數。120 可以是一個合理的經驗法則。或者，你可以通過設置 `totalTime` 來啟用計時器，這設置了你的演示總長度（也以秒為單位）。如果兩個值都指定了，`totalTime` 將優先，`defaultTiming` 將被忽略。無論基準時間函式如何，都可以通過設置幻燈片 `<section>` 的 `data-timing` 屬性（同樣是以秒為單位）來給出時間。

## 伺服器端演講者筆記

在某些情況下，可能希望在與演示的設備不同的設備上運行筆記。基於 Node.js 的筆記插件允許你使用與其客戶端對應物相同的筆記定義來做到這一點。請參見 <https://github.com/reveal/notes-server>.
