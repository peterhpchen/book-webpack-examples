# es-module

## add.js

```js
// ch01-before-webpack/02-history-of-js-module/es-module/add.js
export default function (a, b) {
  return a + b;
}
```

使用 `export default` 導出預設模組。

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/es-module/index.js
import add from './add.js';

console.log(add(1, 2)); // 3
```

使用 `import` 導入模組。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/es-module/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="index.js" type="module"></script>
    <script src="add.js" type="module"></script>
  </head>
  <body></body>
</html>
```

使用 `type` 設定為 `module` 的 `<script>` 引用 `index.js` 與 `add.js` 。
