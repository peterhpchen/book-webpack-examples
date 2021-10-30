# postcss

## src/style.css

```css
/* ch01-before-webpack/03-new-tech/postcss/src/style.css */

/* CSS variables */
:root {
  --demoColor: blue;
}

.demo {
  color: blue;
  color: var(--demoColor);
}
```

這是個有 CSS variables 語法的 CSS 樣式表。

## postcss.config.js

```js
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [postcssPresetEnv(/* pluginOptions */)],
};
```

PostCSS 配置檔，設定 plugin `postcss-preset-env` 。

## package.json

```json
{
  "scripts": {
    "build": "postcss src/style.css --dir dist"
  }
  // ...
}
```

Scripts `build` 執行 `postcss` 指令，將 `src/style.css` 轉換，並把結果放於目錄 `dist` 。

## 結果

### dist/style.css

```css
/* CSS variables */
:root {
  --demoColor: blue;
}

.demo {
  color: blue;
  color: var(--demoColor);
}
```

經過 PostCSS 的轉換，將原本使用 CSS variable 設定的 `color` 轉為 `color: blue;` 。
