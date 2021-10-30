# require-js

## add.js

```js
// ch01-before-webpack/02-history-of-js-module/require-js/add.js
define(function () {
  return function (a, b) {
    return a + b;
  };
});
```

使用 `define()` 函式導出模組。

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/require-js/index.js
requirejs(['add'], function (add) {
  console.log(add(1, 2)); // 3
});
```

使用 `requirejs()` 函式導入模組，並在加載完成後，叫用 callback 函式。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/require-js/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script data-main="index" src="https://unpkg.com/requirejs"></script>
  </head>
  <body></body>
</html>
```

引入 RequireJS 後，設定入口 `data-main` 為 `index.js` 模組。
