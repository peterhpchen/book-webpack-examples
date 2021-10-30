# var-conflict

## index.js

```js
// ch01-before-webpack/02-history-of-js-module/var-conflict/index.js
var outputStr = 'Hello, world!';

function output() {
  console.log(outputStr);
}
```

設置變數 `outputStr` 與函式 `output()` 。

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/var-conflict/index.html -->
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
      output(); // 'World, hello!'
    </script>
  </body>
</html>
```

在引入 `index.js` 後，於 `<script>` 內兩次叫用 `output()` 函式，分別在定義 local 的 `outputStr` 之前與之後。

`outputStr` 的第一次叫用還維持 `index.js` 內部所定義的輸出 `Hello, world!` ，到了第二次叫用時，因為 local 定義了自己的 `outputStr` ，使得原本的值被覆蓋，因而輸出 `World, hello!` 。
