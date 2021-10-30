# redundant-import

## index.html

```html
<!-- ch01-before-webpack/04-performance/redundant-import/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <!-- Redundant Import -->
    <script src="https://unpkg.com/lodash@4.17.21/lodash.js"></script>
  </head>
  <body>
    <script>
      console.log('Hello, world!');
    </script>
  </body>
</html>
```

引入了實際上沒有使用的第三方庫 Lodash ，造成多餘的請求花費。
