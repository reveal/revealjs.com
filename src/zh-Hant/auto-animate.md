---
id: auto-animate
title: 自動動畫
layout: default
---

# 自動動畫 <span class="r-version-badge new">4.0.0</span>

reveal.js 可以自動在幻燈片之間添加動畫。你只需在兩個相鄰的幻燈片 `<section>` 元素上添加 `data-auto-animate`，自動動畫將會對兩者間的所有匹配元素進行動畫處理。

這裡有一個簡單的例子，讓你更好地理解如何使用它。

```html
<section data-auto-animate>
  <h1>自動動畫</h1>
</section>
<section data-auto-animate>
  <h1 style="margin-top: 100px; color: red;">自動動畫</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>自動動畫</h1>
    </section>
    <section data-auto-animate>
      <h1 style="margin-top: 100px; color: red;">自動動畫</h1>
    </section>
  </div>
</div>

這個例子使用了 `margin-top` 屬性來移動元素，但內部 reveal.js 將使用 CSS transform 屬性來確保平滑移動。這種動畫方式適用於大多數支援動畫的 CSS 屬性如 `position`、`font-size`、`line-height`、`color`、`background-color`、`padding` 和 `margin` 等。

### 移動動畫

動畫不僅限於樣式變化。自動動畫也可以用來自動移動元素到新位置，隨著內容的添加、移除或在幻燈片上重新排列。所有這些都不需要任何行內 CSS。

```html
<section data-auto-animate>
  <h1>隱式</h1>
</section>
<section data-auto-animate>
  <h1>隱式</h1>
  <h1>動畫</h1>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <h1>隱式</h1>
    </section>
    <section data-auto-animate>
      <h1>隱式</h1>
      <h1>動畫</h1>
    </section>
  </div>
</div>

## 元素如何匹配

當你在兩個自動動畫幻燈片之間導覽時，我們將盡力自動找到兩個幻燈片中的匹配元素。對於文本，如果文本內容和節點類型都相同，我們將其視為匹配。對於圖片、視頻和 iframes，我們比較 `src` 屬性。除此以外我們還會考慮元素在 DOM 中出現的順序。

在無法自動匹配的情況下，你可以給你想要動畫之間的對象添加匹配的 `data-id` 屬性。我們優先匹配 `data-id` 值而不是自動匹配。

這裡是一個例子，我們給兩個區塊設置了匹配的 ID，因為自動匹配沒有內容可依據。

```html
<section data-auto-animate>
  <div data-id="box" style="height: 50px; background: salmon;"></div>
</section>
<section data-auto-animate>
  <div data-id="box" style="height: 200px; background: blue;"></div>
</section>
```

<div class="reveal reveal-example">

  <div class="slides">
    <section data-auto-animate>
	  <div data-id="box" style="height: 50px; background: salmon;"></div>
	</section>
	<section data-auto-animate>
	  <div data-id="box" style="height: 200px; background: blue;"></div>
	</section>
  </div>
</div>

## 動畫設定

你可以覆蓋特定的動畫設定，例如動畫曲線和持續時間，無論是對整個簡報、每張幻燈片還是每個動畫元素。以下配置屬性可以用來改變特定幻燈片或元素的設置：

| 屬性                        |   默認值 | 描述                                                                                           |
| :-------------------------- | -------: | :--------------------------------------------------------------------------------------------- |
| data-auto-animate-easing    |     ease | 一個 CSS [easing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function)。 |
| data-auto-animate-unmatched |     true | 決定沒有匹配的自動動畫目標元素是否應該淡入。設置為 false 使它們立即出現。                      |
| data-auto-animate-duration  |      1.0 | 動畫持續時間，以秒為單位。                                                                     |
| data-auto-animate-delay     |        0 | 動畫延遲，以秒為單位（只能為特定元素設置，不能在幻燈片層面設置）。                             |
| data-auto-animate-id        | _absent_ | 將自動動畫幻燈片綁定在一起的 [id](#auto-animate-id-%26-restart)。                              |
| data-auto-animate-restart   | _absent_ | [分隔](#auto-animate-id-%26-restart) 兩個相鄰的自動動畫幻燈片（即使它們有相同的 id）。         |

如果你想改變整個套件的默認設置，可以使用以下配置選項：

```javascript
Reveal.initialize({
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false,
});
```

## Auto-Animate Id & Restart

當你希望分離一組組幻燈片相鄰的自動動畫，可以使用 `data-auto-animate-id` 和 `data-auto-animate-restart` 屬性。

使用 `data-auto-animate-id`，你可以為幻燈片指定任意 id。只有當兩個相鄰幻燈片具有相同的 id 或兩者都沒有 id 時，自動動畫才會被啟動。

另一種控制自動動畫的方式是使用 `data-auto-animate-restart` 屬性。將此屬性應用於一張幻燈片將防止該幻燈片與前一幻燈片之間的自動動畫（即使它們具有相同的 id），但不會影響它與下一張幻燈片之間的動畫。

```html
<section data-auto-animate>
  <h1>組 A</h1>
</section>
<section data-auto-animate>
  <h1 style="color: #3B82F6;">組 A</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1>組 B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #10B981;">組 B</h1>
</section>
<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
  <h1>組 C</h1>
</section>
<section data-auto-animate data-auto-animate-id="two">
  <h1 style="color: #EC4899;">組 C</h1>
</section>
```

<div class="reveal reveal-example">
	<div class="slides">
		<section data-auto-animate>
			<h1>組 A</h1>
		</section>
		<section data-auto-animate>
			<h1 style="color: #3B82F6;">組 A</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1>組 B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #10B981;">組 B</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
			<h1>組 C</h1>
		</section>
		<section data-auto-animate data-auto-animate-id="two">
			<h1 style="color: #EC4899;">組 C</h1>
		</section>
	</div>
</div>

## 事件

每次你在兩個自動動畫幻燈片之間切換，都會發送 `autoanimate` 事件。

```javascript
Reveal.on('autoanimate', (event) => {
  // event.fromSlide, event.toSlide
});
```

## 範例：在程式碼區塊之間進行動畫

我們支持在程式碼區塊之間進行動畫。確保程式碼區塊啟用了 `data-line-numbers`，並且全部都具有匹配的 `data-id` 值。

```html
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]
  </code></pre>
</section>
<section data-auto-animate>
  <pre data-id="code-animation"><code data-trim data-line-numbers>
    let circumferenceReducer = ( c, planet ) => {
      return c + planet.diameter * Math.PI;
    }

    let planets = [
      { name: 'mars', diameter: 6779 },
      { name: 'earth', diameter: 12742 },
      { name: 'jupiter', diameter: 139820 }
    ]

    let c = planets.reduce( circumferenceReducer, 0 )
  </code></pre>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]
      </code></pre>
    </section>
    <section data-auto-animate>
      <pre data-id="code-animation"><code data-trim data-line-numbers>
        let circumferenceReducer = ( c, planet ) => {
          return c + planet.diameter * Math.PI;
        }

        let planets = [
          { name: 'mars', diameter: 6779 },
          { name: 'earth', diameter: 12742 },
          { name: 'jupiter', diameter: 139820 }
        ]

        let c = planets.reduce( circumferenceReducer, 0 )
      </code></pre>
    </section>

  </div>
</div>

## 範例：在列表之間進行動畫

我們單獨處裡每一個列表項目，讓你可以在不同項目之間進行動畫。

```html/2-4,10,12
<section data-auto-animate>
  <ul>
    <li>水星</li>
    <li>木星</li>
    <li>火星</li>
  </ul>
</section>
<section data-auto-animate>
  <ul>
    <li>水星</li>


 <li>地球</li>
    <li>木星</li>
    <li>土星</li>
    <li>火星</li>
  </ul>
</section>
```

<div class="reveal reveal-example">
  <div class="slides">
    <section data-auto-animate>
      <ul>
        <li>水星</li>
        <li>木星</li>
        <li>火星</li>
      </ul>
    </section>
    <section data-auto-animate>
      <ul>
        <li>水星</li>
        <li>地球</li>
        <li>木星</li>
        <li>土星</li>
        <li>火星</li>
      </ul>
    </section>
  </div>
</div>

## 進階：狀態屬性

我們在有自動動畫的不同元素上添加了狀態屬性。如果你想進一步調整動畫行為，比如通過自定義 CSS，這些屬性可以被連接使用。

在自動動畫開始之前，我們會在即將顯示的幻燈片 `<section>` 上添加 `data-auto-animate="pending"`。此時即將出現的幻燈片是可見的，所有動畫元素都已移至其起始位置。接下來我們切換到 `data-auto-animate="running"`，以表示元素開始朝其最終屬性進行動畫。

每個個別元素都裝飾有 `data-auto-animate-target` 屬性。該屬性的值是這個特定動畫的唯一 ID 或者 "unmatched" 如果元素不匹配。
