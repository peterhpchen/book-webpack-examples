# gulp-browserifly

## add.js

```js
function add(a, b) {
  return a + b;
}
```

## subtract.js

```js
function subtract(a, b) {
  return a - b;
}
```

## multiple.js

```js
function multiply(a, b) {
  return a * b;
}
```

## divide.js

```js
function divide(a, b) {
  return a / b;
}
```

## main.js

```js
// ch01-before-webpack/05-tools/gulp-browserify/main.js
var add = require('./add.js');
var subtract = require('./subtract.js');
var multiply = require('./multiply.js');
var divide = require('./divide.js');

console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));
```

使用 CommonJS 語法引入 `add.js` 、 `subtract.js` 、 `multiply.js` 與 `divide.js` 四個檔案，來取得 `add()` 、 `subtract()` 、 `multiply()` 與 `divide()` 四個函式功能。

## gulpfile.js

```js
// ch01-before-webpack/05-tools/gulp-browserify/gulpfile.js
var { series, dest } = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var connect = require('gulp-connect');

function bundle(cb) {
  browserify('main.js').bundle().pipe(source('bundle.js')).pipe(dest('./'));
  cb();
}

function devServer(cb) {
  connect.server({ port: 8082 });
}

exports.default = series(bundle, devServer);
```

Gulp 配置檔，設定兩個任務： `bundle` 與 `devServer` ， `bundle` 叫用 browserify 打包模組， `devServer` 啟動伺服器，並將這兩個任務設定在預設主任務中。

## package.json

```json
{
  // ...
  "scripts": {
    "start": "gulp"
  }
  // ...
}
```

Scripts `start` 執行 `gulp` 指令，產生 `bundle.js` 並啟動伺服器。

## index.html

```html
<!-- ch01-before-webpack/05-tools/gulp-browserify/index.html -->
<!DOCTYPE html>
<html>
  <body>
    <script src="./bundle.js"></script>
  </body>
</html>
```

引入打包後的檔案 `bundle.js` 。

## 結果

在範例 [browserify](../browserify/README.md) 中，需要在 npm scripts 的 `prestart` 設置 browserify 打包、 `start` 執行伺服器，複雜了原本單純的 npm scripts 。

這裡使用 Gulp 管理多個指令，簡化 npm scripts 的命令，也可以配置更複雜的建置程序。
