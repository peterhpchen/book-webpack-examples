# emotion

## index.html

```html
<!-- ch01-before-webpack/03-new-tech/emotion/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/@emotion/css@11.1.3/dist/emotion-css.umd.min.js"></script>
  </head>
  <body>
    <div id="root">Hello Emotion</div>
    <script>
      const app = document.getElementById('root');
      const color = 'red';
      const myClassName = emotion.css`
  color: ${color};
`;
      app.classList.add(myClassName);
    </script>
  </body>
</html>
```

在 JavaScript 中使用 `emotion.css` 定義 CSS 樣式。
