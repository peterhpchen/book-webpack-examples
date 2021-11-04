# css-module-inline

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

## src/index.js

```js
// ch02-getting-started/05-use-loaders/css-module-inline/src/index.js

// import style from "style-loader!css-loader?modules!./style.css"; // query parameter
// import style from "style-loader!css-loader?modules=true!./style.css"; // query parameter
import style from 'style-loader!css-loader?{"modules":true}!./style.css'; // JSON object

function addClass(id, targetClass) {
  const app = document.getElementById(id);
  app.classList.add(targetClass);
}

addClass('app', style.demo);
```

為 `css-loader` 帶入 `module` 的參數，如此一來 `css-loader` 會以 CSS module 的方式處理載入的 `src/style.css` ，接著為想要使用 `.demo` 樣式的元素 `#app` 加入 CSS module 所產生的 `class` 。

inline 的 loader 參數有 query parameter 與 JSON object 兩種設定方法，其中 query parameter 如果帶入布林值 `true` 可以忽略值 `=true` 的定義。

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
