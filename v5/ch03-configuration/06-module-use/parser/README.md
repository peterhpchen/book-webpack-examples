# parser

## src/index.js

```js
import hello from './hello.js';

console.log(hello);
```

## src/hello.js

```js
export default 'hello';
```

## webpack.config.parser.js

```js
module.exports = {
  mode: 'none',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        parser: {
          harmony: false,
        },
      },
    ],
  },
};
```

輸出為 `bundle.js` ，並將 `.js` 的 `parser.harmony` 設為 `false` ，表示不要解析 ESM 模組。

## 一般的結果

```bash
> webpack --mode none

asset main.js 3.05 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 77 bytes
  ./src/index.js 53 bytes [built] [code generated]
  ./src/hello.js 24 bytes [built] [code generated]
```

### dist/main.js

<!-- prettier-ignore -->
```js
// ...
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


console.log(_hello_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
```

`src/index.js` 有被解析，並且將其引入的 `src/hello.js` 也一併解析並轉換成 bundle 的內容。

## 設定 parser 不解析 ESM 的結果

```bash
> webpack --config webpack.config.parser.js

asset bundle.js 137 bytes [emitted] (name: main)
./src/index.js 53 bytes [built] [code generated]
```

### dist/bundle.js

<!-- prettier-ignore -->
```js
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
import hello from "./hello.js";

console.log(hello);

/******/ })()
;
```

由於 `src/index.js` 沒有被解析，因此不會處理 `src/hello.js` ，並且 `src/index.js` 的內容也會維持原樣輸出至 bundle 。
