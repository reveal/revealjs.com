---
id: react-legacy
title: React（手動設置）
layout: default
---

# React（手動設置）

<div class="r-callout">
  此頁面描述 reveal.js 6.0 之前的手動設置方式。如果你正在開始新專案，請改用官方的 <a href="/react/"><strong>@revealjs/react</strong></a> 套件。
</div>

## 透過 npm 安裝

你可以在像 `main.tsx` 或 `app.tsx` 這樣的 JavaScript/TypeScript 源文件中添加和初始化 reveal.js。

你可以全域地執行，即在應用/組件函數之外，或者在其中之一內部。在後一種情況下，你必須小心不要堆疊初始化。只初始化一次簡報。如果需要重新配置，請使用 `configure` 函數或在再次初始化之前 `destroy` 簡報。

首先，使用 `npm` 安裝 reveal.js：

```bash
npm install reveal.js
```

#### 匯入

你將需要以下匯入：

```ts
import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css'; // "black" 主題只是一個範例
```

#### 初始化

最後，添加最適合你項目需求的[初始化代碼](/initialization/)。

如果你決定在返回 JSX 的應用或組件函數內部初始化幻燈片集，我們建議你使用 `useEffect` 這個 hook 來進行。這將確保在容器首次渲染後進行初始化。

還建議使用 refs 來維護對幻燈片集容器 `div` 和相應的 `reveal` 實例的引用。這些 refs 可以幫助確保每個幻燈片集只初始化一次。

#### 完整工作範例

```tsx
// App.tsx
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import type { RevealApi } from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

function App() {
  const deckDivRef = useRef<HTMLDivElement>(null); // 幻燈片集容器 div 的引用
  const deckRef = useRef<RevealApi | null>(null); // 幻燈片集 reveal 實例的引用

  useEffect(() => {
    // 防止在嚴格模式下重複初始化
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: 'slide',
      // 其他配置選項
    });

    deckRef.current.initialize().then(() => {
      // 事件處理器和插件設置的好位置
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy 調用失敗。');
      }
    };
  }, []);

  return (
    // 你的簡報大小是基於父元素的寬度和高度。確保父元素高度不為 0。
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>幻燈片 1</section>
        <section>幻燈片 2</section>
      </div>
    </div>
  );
}

export default App;
```

注意在 `Reveal` 構造器中使用 `deckDivRef`。如果你想在同一個 React 應用中添加多個幻燈片集，這一點非常重要。

## React Portals

如果你只想在特定幻燈片中添加一些組件，我們建議將 reveal.js 的 DOM 樹保持在 React 之外，並使用 [React Portals](https://react.dev/reference/react-dom/createPortal) 將 React 組件放置在特定部分。
