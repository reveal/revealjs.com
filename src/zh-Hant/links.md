---
id: links
title: 內部鏈接
layout: default
---

# 內部鏈接

您可以創建從一張幻燈片到另一張的鏈接。首先給目標幻燈片一個唯一的 `id` 屬性。接著，您可以創建一個錨點，其 href 格式為 `#/<id>`。這是一個完整的實用範例：

```html/1,8
<section>
	<a href="#/grand-finale">前往最後一張幻燈片</a>
</section>
<section>
	<h2>幻燈片 2</h2>
</section>
<section id="grand-finale">
	<h2>結尾</h2>
	<a href="#/0">回到第一張</a>
</section>
```

<div class="reveal reveal-example" data-config='{"respondToHashChanges": true}'>
  <div class="slides">
    <section>
		<a href="#/grand-finale">前往最後一張幻燈片</a>
	</section>
	<section>
		<h2>幻燈片 2</h2>
	</section>
	<section id="grand-finale">
		<h2>結尾</h2>
		<a href="#/0">回到第一張</a>
	</section>
  </div>
</div>

## 編號鏈接

也可以根據幻燈片索引創建鏈接。以編號鏈接的 href 格式為 `#/0`，其中 0 是水平幻燈片編號。要鏈接到[垂直幻燈片](/vertical-slides/)，使用 `#/0/0`，其中第二個數字是垂直幻燈片目標的索引。

```html
<a href="#/2">前往第二張幻燈片</a>
<a href="#/3/2">前往第三張幻燈片中的第二個垂直幻燈片</a>
```

## 導航鏈接

您可以添加相對導航鏈接，這與內置的方向控制箭頭的工作方式類似。這是通過在 `.reveal` 容器內的任何可點擊 HTML 元素上添加以下類之一來實現的。

```html
<button class="navigate-left">左</button>
<button class="navigate-right">右</button>
<button class="navigate-up">上</button>
<button class="navigate-down">下</button>

<!-- 前一個垂直或水平幻燈片 -->
<button class="navigate-prev">上一個</button>

<!-- 下一個垂直或水平幻燈片 -->
<button class="navigate-next">下一個</button>
```

每個導航元素都會自動根據當前幻燈片的導航路線有效性獲得 `enabled` 類。例如，如果您在第一張幻燈片上，只有 `navigate-right` 會獲得 `enabled` 類，因為向左導航是不可能的。這樣可以直观地告诉用户哪些导航选项是可用的，增强了用户界面的友好性和互动性。

這種方法的優點在於它讓簡報的互動性增強，使得觀眾可以更靈活地控制簡報的進程，同時還能保持簡報的整體流暢性。通过合理使用这些导航链接，可以使簡報更加动态和吸引人，進而提高信息传递的效率和效果。
