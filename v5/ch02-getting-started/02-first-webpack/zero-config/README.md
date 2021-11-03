# zero-config

## src/index.js

```js
// ch02-getting-started/02-first-webpack/zero-config/src/index.js
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', ', ', 'world', '!'], '');

  return element;
}

document.body.appendChild(component());
```

使用 ES Module 載入 Lodash 庫，並在生成元素內容時使用 `_.join()` 。

## dist/index.html

```html
<!-- ch02-getting-started/02-first-webpack/zero-config/dist/index.html -->
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <script src="./main.js"></script>
  </body>
</html>
```

由於 webpack 會幫忙載入 Lodash 庫，因此不需要在這裡引入，並且因為 webpack 預設產出的 bundle 名稱為 `main.js` ，因此 HTML 中要引入此檔來執行程式。

## package.json

```json
{
  "scripts": {
    "build": "webpack"
    // ...
  }
  // ...
}
```

使用 `webpack` 指令建置預設入口模組 `src/index.js` 。

## 結果

```bash
asset main.js 69.5 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1010 bytes 5 modules
cacheable modules 532 KiB
  ./src/index.js 291 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
```

執行 `webpack` 建置後，預設會將 `src/index.js` 作為入口點，將其中引入的 Lodash 庫一起打包，並將 bundle 檔案內容放於 `dist/main.js` 中。
