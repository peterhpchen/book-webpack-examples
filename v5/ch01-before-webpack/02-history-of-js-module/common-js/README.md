# common-js

## add.js

```js
// ch01-before-webpack/02-history-of-js-module/common-js/add.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

使用 `module.exports` 輸出 `add()` 函式。

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/common-js/index.js
const add = require('./add');

console.log(add(1, 2)); // 3
```

使用 `require()` 函式引入 `add.js` 模組，並使用。
