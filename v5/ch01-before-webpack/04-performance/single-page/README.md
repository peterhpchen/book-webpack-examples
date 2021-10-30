# single-page

## index.html

```html
<!-- ch01-before-webpack/04-performance/single-page/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="math.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script>
      var app = document.getElementById('app');
      var homeHTML = '<h1>Home</h1><a href="#math">Go to Math</a>';
      var mathHTML = '<h1>Math</h1><a href="#home">Go to Home</a><script>';

      function renderPage() {
        app.innerHTML = '';
        if (!location.hash || location.hash === '#home') {
          // Home
          app.innerHTML = homeHTML;
        } else if (location.hash === '#math') {
          // Math
          app.innerHTML = mathHTML;
          setTimeout(() => {
            console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));
          }, 0);
        }
      }

      window.onhashchange = renderPage;
      renderPage();
    </script>
  </body>
</html>
```

引入 `math.js` ，並實作一個簡易的 single page ，有 `#home` 與 `#math` 兩個路由，只有在 `#math` 頁面中會需要使用 `math.js` 所提供的函式。

## 結果

由於初始時就引入了 `math.js` ，因此就算只有瀏覽 `#home` 頁面，也會請求 `math.js` 資源，浪費效能。
