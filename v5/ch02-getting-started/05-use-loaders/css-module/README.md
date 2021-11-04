# css-module

## dist/index.html

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <div id="app">Hello, world!</div>
    <script src="./main.js"></script>
  </body>
</html>
```

`id` 為 `app` 的元素內容為 `Hello, world!` 。

## src/style.css

```css
.demo {
  color: blue;
}
```

設定 class 為 `demo` 的樣式。

## webpack.config.demo.js

```js
// ch02-getting-started/05-use-loaders/css-module/webpack.config.demo.js
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

`css-loader` 設定 `module` 參數，啟用 CSS module 的載入方式。

## src/index.js

```js
import style from './style.css';

function addClass(id, targetClass) {
  const app = document.getElementById(id);
  app.classList.add(targetClass);
}

addClass('app', style.demo);
```

引入 `src/style.css` 樣式，由於是 CSS module 的方式，因此為想要使用 `.demo` 樣式的元素 `#app` 加入 CSS module 所產生的 `class` 。

## 結果

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
    <!-- ... -->
  </body>
</html>
```

建置後，使用 `http-server` 開啟 `dist/index.html` ，可以看到原本 `src/style.css` 的 `.demo` 變為一串 hash ，並且這 hash 被作為 `#app` 元素的 class 所設定，以此實現 CSS module 。
