# import-order

## index.html

```html
<!-- ch01-before-webpack/02-history-of-js-module/import-order/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script>
      var outputStr = _.join(['Hello', ', ', 'world', '!'], ''); // Uncaught ReferenceError: _ is not defined
    </script>
    <script src="https://unpkg.com/lodash"></script>
  </head>
  <body>
    <script>
      console.log(outputStr); // undefined
    </script>
  </body>
</html>
```

在 `<script>` 中使用 Lodash 的 `_.join()` 函式，但是引入 Lodash 的 `<script>` 與叫用的 `<script>` 順序反置。

因為在使用 `_.join()` 時，尚未引入 Loadash ，由於沒有檢查的機制，導致只能在執行時發現錯誤。
