# react-jsx

## index.html

```html
<!-- ch01-before-webpack/03-new-tech/react-jsx/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
    </script>
  </body>
</html>
```

使用 JSX 語法設定元素渲染方式。
