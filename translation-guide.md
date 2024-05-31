# Translation Guide

If you want to contribute to the translation of the reveal.js website and docs, follow these steps:

## 1. Edit `src/_data/locales.js`

Open the `locales.js` file located in `src/_data/` directory.

```js
module.exports = [
  {
    label: 'English',
    code: 'en',
  },
  {
    label: '繁體中文',
    code: 'zh-Hant',
  },
];
```

Add a new entry for the language you want to translate to. Include the language label and its corresponding code.

## 2. Edit `src/_data/i18n/index.js`

Open the `index.js` file located in `src/_data/i18n/` directory.

```js
module.exports = {
  'Getting Started': {
    'zh-Hant': '開始',
    en: 'Getting Started',
  },
  Home: {
    'zh-Hant': '首頁',
    en: 'Home',
  },
  Demo: {
    'zh-Hant': '示範',
    en: 'Demo',
  },
  Installation: {
    'zh-Hant': '安裝',
    en: 'Installation',
  },
  // ...
};
```

Translate the strings for each page title and navigation item into the desired language.

## 3. Create Language Folder and JSON File

Create a folder with the language code in `/src`. For example, `/zh-Hant`. Then, create a `<lang code>.json` file (e.g., `zh-Hant.json`) and add the following content:

```json
{
  "dir": "ltr",
  "lang": "zh-Hant",
  "locale": "zh-Hant"
}
```

Replace `"zh-Hant"` with the appropriate language code.

## 4. Translate Markdown Pages

Copy all Markdown pages from `/src` to the newly created language folder. Translate the content of each page into the desired language.

## 5. Translate Demo Slide

Translate the demo slide located at `src/_includes/demo.html`. This slide is used to showcase the reveal.js features. Name the translated file `demo.<lang code>.html` (e.g., `demo.zh-Hant.html`).

Once you have completed these steps, your translation contribution will be ready for review and integration into the reveal.js website and docs.
