# single-page-async

## index.html

```html
<!-- ch01-before-webpack/04-performance/single-page-async/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <!-- <script src="math.js"></script> -->
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
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function () {
              if (httpRequest.readyState === XMLHttpRequest.DONE) {
                eval(httpRequest.responseText); // Execute script
                console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));
              }
            };
            httpRequest.open('GET', 'math.js');
            httpRequest.send();
          }, 0);
        }
      }

      window.onhashchange = renderPage;
      renderPage();
    </script>
  </body>
</html>
```

簡易的 single page 實作，有 `#home` 與 `#math` 兩個路由，在 `#math` 頁面中使用 `XMLHttpRequest` 非同步引入 `math.js` 並使用。

## 結果

由於採取非同步引入 `math.js` ，因此只有在 `#math` 頁面載入時會請求資源，藉以避免在其他頁面 `#home` 引入不必要的資源。
