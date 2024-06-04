---
id: methods
title: API 方法
layout: default
---

# API

我們提供了一個廣泛的 JavaScript API 來控制導覽和檢查簡報的當前狀態。如果你正在編輯單份簡報，可以通過全域對象 `Reveal` 來訪問 API。

### 導覽

```javascript
// 導覽到指定幻燈片
Reveal.slide(indexh, indexv, indexf);

// 相對導覽
Reveal.left();
Reveal.right();
Reveal.up();
Reveal.down();
Reveal.prev();
Reveal.next();

// 片段導覽
Reveal.navigateFragment(indexf); // (-1 表示隱藏所有片段)
Reveal.prevFragment();
Reveal.nextFragment();

// 檢查我們可以向哪些方向導覽
// {top: false, right: true, bottom: false, left: false}
Reveal.availableRoutes();

// 檢查我們可以向哪些片段方向導覽
// {prev: false, next: true}
Reveal.availableFragments();
```

### 其他

```javascript
// 如果你添加或移除幻燈片，調用此函數以更新控制、進度等
Reveal.sync();
// 調用此函數以同步僅一個幻燈片
Reveal.syncSlide((slide = currentSlide));
// 調用此函數以同步僅一個幻燈片的片段
Reveal.syncFragments((slide = currentSlide));

// 調用此函數根據視窗大小更新簡報比例
Reveal.layout();

// 隨機排序幻燈片
Reveal.shuffle();

// 返回當前配置選項
Reveal.getConfig();

// 獲取簡報的當前比例
Reveal.getScale();

// 返回一個對象，其中包含縮放後的簡報寬度和高度
Reveal.getComputedSlideSize();

Reveal.getIndices((slide = currentSlide)); // 幻燈片的坐標（例如 { h: 0, v: 0, f: 0 }）
Reveal.getProgress(); // （0 表示第一張幻燈片，1 表示最後一張）

// 幻燈片屬性的鍵值對數組
Reveal.getSlidesAttributes();

// 返回指定索引的幻燈片背景元素
Reveal.getSlideBackground(indexh, indexv);

// 返回幻燈片的演講筆記
Reveal.getSlideNotes((slide = currentSlide));

// 檢索查詢字符串為鍵值對映射
Reveal.getQueryHash();

// 返回幻燈片的 URL 路徑
Reveal.getSlidePath((slide = currentSlide));
```

### 幻燈片

```javascript
// 返回匹配指定索引的幻燈片元素
Reveal.getSlide(indexh, indexv);

// 檢索前一個和當前的幻燈片元素
Reveal.getPreviousSlide();
Reveal.getCurrentSlide();

// 返回套件中所有水平/垂直幻燈片
Reveal.getHorizontalSlides();
Reveal.getVerticalSlides();

// 總幻燈片數
Reveal.getTotalSlides();
Reveal.getSlidePastCount();

// 所有幻燈片的數組
Reveal.getSlides();
```

### 幻燈片狀態

```javascript
// 檢查簡報是否包含兩個或更多
// 水平/垂直幻燈片
Reveal.hasHorizontalSlides();
Reveal.hasVerticalSlides();

// 檢查套件是否至少在任一軸上導覽過一次
Reveal.hasNavig;

atedHorizontally();
Reveal.hasNavigatedVertically();

Reveal.isFirstSlide();
Reveal.isLastSlide();
Reveal.isVerticalSlide();
Reveal.isLastVerticalSlide();
```

### 模式

```javascript
// 顯示一個幫助介面，包含鍵盤快捷鍵，可以傳遞 true/false 來強制開啟/關閉
Reveal.toggleHelp();

// 切換簡報狀態，可以傳遞 true/false 來強制開啟/關閉
Reveal.toggleOverview();
Reveal.toggleAutoSlide();
Reveal.togglePause();

Reveal.isOverview();
Reveal.isAutoSliding();
Reveal.isPaused();
```

### DOM 元素

```javascript
// 檢索關鍵 DOM 元素
Reveal.getRevealElement(); // <div class="reveal">
Reveal.getSlidesElement(); // <div class="slides">
Reveal.getViewportElement(); // <div class="reveal-viewport">
Reveal.getBackgroundsElement(); // <div class="backgrounds">
```

## 閱讀更多

- [插件 API](/zh-hant/plugins/#api)
