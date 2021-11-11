# css-module

## src/index.js

```js
import style from './style.css';

function addClass(id, targetClass) {
  const app = document.getElementById(id);
  app.classList.add(targetClass);
}

addClass('app', style.demo);
```

引入 `src/style.css` ，並以 css module 的方式取得樣式的 class ，將其加入目標 HTML document 中。

## src/style.css

```css
.demo {
  color: blue;
}
```

## webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
    ],
  },
};
```

使用 `module.test` 設定觸發的模組條件為 `.css` 結尾的檔案，並使用 `module.use` 設定 `css-loader` 與 `style-loader` ，並為 `css-loader` 加上設定 `module` 為 `true` ，啟動 css module 。

## 結果

```bash
asset main.js 4.11 KiB [emitted] [minimized] (name: main)
runtime modules 663 bytes 3 modules
orphan modules 1.17 KiB [orphan] 1 module
modules by path ./node_modules/ 8.07 KiB
  modules by path ./node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
  modules by path ./node_modules/css-loader/dist/runtime/*.js 2.33 KiB
    ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 2.26 KiB [built] [code generated]
modules by path ./src/ 1.87 KiB
  ./src/index.js + 1 modules 1.34 KiB [built] [code generated]
  ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./src/style.css 540 bytes [built] [code generated]
```

```html
<html>
  <head>
    <style>
      .ljcHwELqpYBhrYUbvm8A {
        color: blue;
      }
    </style>
  </head>
  <body>
    <div id="app" class="ljcHwELqpYBhrYUbvm8A">Hello, world!</div>
    <script src="./main.js"></script>
  </body>
</html>
```

開啟伺服器後（ `npm start` ），可以觀察到內容以 css module 的方式載入樣式。
