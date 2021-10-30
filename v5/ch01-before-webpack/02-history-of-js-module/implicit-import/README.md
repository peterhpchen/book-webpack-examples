# implicit-import

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/implicit-import/index.js
function output() {
  console.log('Hello, world!');
}
```

定義函式 `output()` 。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/implicit-import/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <!-- <script src="index.js"></script> -->
  </head>
  <body>
    <script>
      output(); // Uncaught ReferenceError: output is not defined
    </script>
  </body>
</html>
```

將引入 `index.js` 的行註解掉後，依然叫用 `output()` 函式。

由於腳本式的開發是預設叫用的資源會存在於全域中，因此沒有檢查機制，導致錯誤只能在執行後才知道。
