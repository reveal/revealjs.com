---
id: presentation-state
title: 簡報狀態
layout: default
---

# 簡報狀態

可以通過使用 `getState` 函式來獲取簡報的當前狀態。狀態對象包含將簡報恢復到首次調用 `getState` 時的所有必要信息。有點像快照。它是一個簡單的對象，可以輕易地被序列化並持久化或通過網頁發送。

```javascript
// 移動到第 1 張幻燈片
Reveal.slide(1);

let state = Reveal.getState();
// {indexh: 1, indexv: 0, indexf: undefined, paused: false, overview: false}

// 移動到第 3 張幻燈片
Reveal.slide(3);

// 這將恢復保存的狀態，再次放置在第 1 張幻燈片
Reveal.setState(state);
```
