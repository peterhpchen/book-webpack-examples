# simple-app

## index.js

```js
// ch02-getting-started/02-first-webpack/simple-app/public/index.js
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', 'world', '!'], '');

  return element;
}

document.body.appendChild(component());
```

使用 Lodash 的 `_.join()` 合併字串，產生 HTML 內容，並 append 至 `body` 元素中。

## index.html

```html
<!-- ch02-getting-started/02-first-webpack/simple-app/public/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

引入 Lodash 庫與 `index.js` 。
