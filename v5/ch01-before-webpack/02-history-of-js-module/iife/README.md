# iife

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/iife/index.js
var output = (function () {
  var outputStr = 'Hello, world!';

  return function output() {
    console.log(outputStr);
  };
})();
```

使用 IIFE 包住變數 `outputStr` ，並回傳 `output()` 函式。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/iife/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="index.js"></script>
  </head>
  <body>
    <script>
      output(); // 'Hello, world!'
      var outputStr = 'World, hello!';
      console.log(outputStr); // 'World, hello!'
      output(); // 'Hello, world!'
    </script>
  </body>
</html>
```

在引入 `index.js` 後，於 `<script>` 內兩次叫用 `output()` 函式，分別在定義 local 的 `outputStr` 之前與之後。

因為 IIFE 隔開了作用域，因此 `output()` 函式的兩次叫用都輸出 `index.js` 中所定義的 `Hello, world!` ，避免了變數覆蓋的問題。
