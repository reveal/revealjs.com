---
id: links
title: 內部鏈接
layout: default
---

# 內部鏈接

你可以創建從一張幻燈片到另一張的鏈接。首先給目標幻燈片一個唯一的 `id` 屬性。接著，你可以創建一個錨點，其 href 格式為 `#/<id>`。這是一個完整的實用範例：

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

也可以根據幻燈片索引創建鏈接。以編號鏈接的 href 格式為 `#/0`，其中 0 是水平幻燈片編號。要鏈接到[垂直幻燈片](/zh-hant/vertical-slides/)，使用 `#/0/0`，其中第二個數字是垂直幻燈片目標的索引。

```html
<a href="#/2">前往第二張幻燈片</a>
<a href="#/3/2">前往第三張幻燈片中的第二個垂直幻燈片</a>
```

## 導覽鏈接

你可以添加相對導覽鏈接，這與內置的方向控制箭頭的工作方式類似。這是通過在 `.reveal` 容器內的任何可點擊 HTML 元素上添加以下類之一來實現的。

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

每個導覽元素都會自動根據當前幻燈片的導覽路線有效性獲得 `enabled` 的 class。例如，如果你在第一張幻燈片上，只有 `navigate-right` 會獲得 `enabled` 的 class，因為向左導覽是不可能的。這樣可以直觀的告诉使用者往哪些方向是可行的。
