# browserifly

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
// ch01-before-webpack/05-tools/browserify/main.js
var add = require('./add.js');
var subtract = require('./subtract.js');
var multiply = require('./multiply.js');
var divide = require('./divide.js');

console.log(add(5, subtract(4, multiply(3, divide(2, 1)))));
```

使用 CommonJS 語法引入 `add.js` 、 `subtract.js` 、 `multiply.js` 與 `divide.js` 四個檔案，來取得 `add()` 、 `subtract()` 、 `multiply()` 與 `divide()` 四個函式功能。

## package.json

```json
{
  // ...
  "scripts": {
    "prestart": "browserify main.js > bundle.js"
    // ...
  }
  // ...
}
```

在 `prestart` 執行 `browserify` 指令，將 `main.js` 作為入口模組，打包並輸出成 `bundle.js` 。

## index.html

```html
<!-- ch01-before-webpack/05-tools/browserify/index.html -->
<!DOCTYPE html>
<html>
  <body>
    <script src="./bundle.js"></script>
  </body>
</html>
```

引入打包後的檔案 `bundle.js` 。

## 結果

藉由 browserify 的打包，讓原本只能在 Node.js 使用的 CommonJS 模組語法也能正常的執行在瀏覽器上。
