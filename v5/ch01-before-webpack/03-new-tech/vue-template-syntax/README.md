# vue-template-syntax

## index.html

```html
<!-- ch01-before-webpack/03-new-tech/vue-template-syntax/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <span>Message: {{ msg }}</span>
    </div>
    <script>
      new Vue({
        el: '#app',
        data: {
          msg: 'Hello Vue.js!',
        },
      });
    </script>
  </body>
</html>
```

使用 Vue 的模板語法設定元素的渲染方式。
