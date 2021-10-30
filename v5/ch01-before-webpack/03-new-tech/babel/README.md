# babel

## src/index.js

```js
// ch01-before-webpack/03-new-tech/babel/src/index.js
const add = (a, b) => {
  // ES2015: Arrow Function
  return a + b;
};

console.log(add(1, 2)); // 3
```

建立 Arrow Function `add` 。

## babel.config.js

```js
module.exports = {
  presets: [['@babel/preset-env']],
};
```

Babel 配置檔，設定 presets `@babel/preset-env` 。

## package.json

```json
{
  "scripts": {
    "build": "babel src -d dist"
  }
  // ...
}
```

Scripts `build` 執行 `babel` 指令，將目錄 `src` 中的檔案轉換並放於目錄 `dist` 中。

## 結果

### dist/index.js

```js
'use strict';

var add = function add(a, b) {
  // ES2015: Arrow Function
  return a + b;
};

console.log(add(1, 2)); // 3
```

`src/index.js` 由 Babel 建置後，原來的 Arrow Function 被轉為一般函式的寫法。
