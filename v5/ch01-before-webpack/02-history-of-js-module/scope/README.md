# scope

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/scope/index.js
var outputStr = 'Hello, world!';
```

設定變數 `outputStr` 。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/scope/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <body>
    <script>
      console.log(outputStr);
    </script>
  </body>
</html>
```

使用 `<script>` 的 `src` 引入外部 JavaScript 檔案 `index.js` ，並在內嵌的 `<script>` 中使用 `index.js` 定義的變數 `outputStr` ，展示 JavaScript 腳本式引入方法的全域特性。
