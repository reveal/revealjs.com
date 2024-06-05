---
id: keyboard
title: 鍵盤綁定
layout: default
---

# 鍵盤綁定

如果你對任何默認的鍵盤綁定不滿意，可以使用 `keyboard` 配置選項來覆蓋它們。

```javascript/1-5
Reveal.configure({
  keyboard: {
    27: () => { console.log('esc') }, // 當按下 ESC 時執行自定義操作
    13: 'next', // 當按下 ENTER 鍵時進入下一張幻燈片
    32: null // 當按下 SPACE 時不執行任何操作（即禁用 reveal.js 的默認綁定）
  }
});
```

鍵盤對象是鍵碼及其對應*動作*的映射。動作可以有三種不同的類型。

| 類型   | 動作                                         |
| :----- | :------------------------------------------- |
| 函數   | 觸發一個回調函數。                           |
| 字符串 | 調用 [reveal.js API](/zh-hant/api/) 中的指定函式名。 |
| null   | 禁用該鍵（阻止默認的 reveal.js 動作）        |

{.key-value}

## 通過 JavaScript 添加鍵盤綁定

也可以使用 JavaScript 添加和移除自定義鍵盤綁定。自定義鍵盤綁定將覆蓋默認的鍵盤綁定，但會被 `keyboard` 配置選項中用戶定義的綁定覆蓋。

```javascript
Reveal.addKeyBinding(binding, callback);
Reveal.removeKeyBinding(keyCode);
```

例如

```javascript
// 綁定參數提供以下屬性
//      keyCode: 用於綁定到回調的鍵碼
//          key: 在幫助覆蓋中顯示的鍵標籤
//  description: 在幫助覆蓋中顯示的操作描述
Reveal.addKeyBinding(
  { keyCode: 84, key: 'T', description: '啟動計時器' },
  () => {
    // 啟動計時器
  }
);

// 綁定參數也可以是直接的鍵碼，無需提供幫助描述
Reveal.addKeyBinding(82, () => {
  // 重置計時器
});
```

這允許插件直接向 Reveal 添加鍵盤綁定，使它們可以：

- 利用 Reveal 的鍵處理預處理邏輯（例如，在暫停時忽略按鍵）
- 包括在幫助覆蓋中（可選）
