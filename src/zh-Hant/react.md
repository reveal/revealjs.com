---
id: react
title: React
layout: default
---

# React

`@revealjs/react` 是 reveal.js 的官方 React 封裝套件。以 React 組件描述你的簡報，其餘的交由套件處理。

## 安裝

安裝套件及其相依套件：

```bash
npm i @revealjs/react reveal.js react react-dom
# 或
yarn add @revealjs/react reveal.js react react-dom
```

此套件僅包含 React 綁定，你仍需自行匯入 reveal.js 的 CSS、主題，以及簡報所需的插件。

## 基本配置

渲染一個帶有一個或多個 `Slide` 子組件的 `Deck`，並匯入 reveal.js 核心樣式：

```tsx
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h1>你好</h1>
        <p>我的第一個 React reveal 簡報。</p>
      </Slide>

      <Slide background="#111827">
        <h2>第二張投影片</h2>
      </Slide>
    </Deck>
  );
}
```

若要使用垂直投影片，請將 `Slide` 組件包裝在 `Stack` 中：

```tsx
import { Deck, Slide, Stack } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Slide>介紹</Slide>

      <Stack>
        <Slide>垂直 1</Slide>
        <Slide>垂直 2</Slide>
      </Stack>
    </Deck>
  );
}
```

## 配置

透過 `Deck` 上的 `config` 屬性傳遞任何 [reveal.js 配置選項](/config/)。插件透過 `plugins` 單獨註冊，並在初始化時套用一次，符合 reveal.js 的插件生命週期。

{% raw %}
```tsx
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

export function Presentation() {
  return (
    <Deck
      config={{
        width: 1280,
        height: 720,
        hash: true,
        transition: 'slide',
      }}
      plugins={[RevealHighlight]}
    >
      <Slide>已配置的簡報</Slide>
    </Deck>
  );
}
```
{% endraw %}

`Slide` 支援便捷的背景屬性，如 `background`、`backgroundImage` 和 `backgroundColor`，同時仍可將 `data-*` 原始屬性（如 `data-transition` 和 `data-auto-animate`）傳遞給底層的 `<section>` 元素。

## 事件

在 `Deck` 上使用事件屬性來響應 reveal.js 的生命週期和導航事件：

```tsx
import { Deck, Slide } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck
      onReady={(deck) => console.log('準備好了', deck)}
      onSlideChange={(event) => console.log('投影片已切換', event.indexh, event.indexv)}
      onFragmentShown={(event) => console.log('片段顯示', event.fragment)}
    >
      <Slide>介紹</Slide>
      <Slide>下一張</Slide>
    </Deck>
  );
}
```

可用的事件屬性：`onReady`、`onSync`、`onSlideSync`、`onSlideChange`、`onSlideTransitionEnd`、`onFragmentShown`、`onFragmentHidden`、`onOverviewShown`、`onOverviewHidden`、`onPaused`、`onResumed`。

## Reveal API

在簡報組件樹內使用 `useReveal()` 從你自己的組件中呼叫 reveal.js API：

```tsx
import { Deck, Slide, useReveal } from '@revealjs/react';

function NextButton() {
  const deck = useReveal();

  return <button onClick={() => deck?.next()}>下一張投影片</button>;
}

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h2>由 React 控制</h2>
        <NextButton />
      </Slide>
    </Deck>
  );
}
```

若要在組件樹外部存取 reveal.js 實例，請將 `deckRef` 傳遞給 `Deck`：

```tsx
import { useRef } from 'react';
import { Deck, Slide } from '@revealjs/react';
import type { RevealApi } from 'reveal.js';

export function Presentation() {
  const deckRef = useRef<RevealApi>(null);

  return (
    <Deck deckRef={deckRef}>
      <Slide>你好</Slide>
    </Deck>
  );
}
```

## 運作原理

- `Deck` 在掛載時建立一個 reveal.js 實例，並在卸載時銷毀它。
- 每次影響 `children` 或 `config` 的 React 重新渲染後，`Deck` 都會呼叫 `reveal.sync()` 以保持 reveal.js 的內部投影片模型與 DOM 同步。
- `config` 在每次渲染時進行淺層比較，因此只有在值實際發生變化時才會呼叫 `reveal.configure()`。
- `plugins` 僅在初始化時使用，在首次掛載時捕獲一次，後續渲染將忽略此屬性。
- 事件屬性在初始化後透過 `deck.on()` 綁定，並透過 `deck.off()` 清除。在渲染之間更改回調將自動替換監聽器。
