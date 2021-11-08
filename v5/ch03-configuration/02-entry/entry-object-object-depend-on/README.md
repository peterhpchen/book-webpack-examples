# entry-object-object-depend-on

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-object-depend-on/webpack.config.demo.js
module.exports = {
  mode: 'development',
  entry: {
    main: {
      import: './app/index.js',
      dependOn: 'common',
    },
    main2: {
      import: './app/index2.js',
      dependOn: 'common',
    },
    common: './app/msgCommon.js',
  },
};
```

設定 bundle `main` 與 `main2` 相依於 `common` 。

## dist/index.html

```html
<!-- ch03-configuration/02-entry/entry-object-object-depend-on/dist/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="common.js"></script>
    <script src="main.js"></script>
  </head>
  <body> </body>
</html>
```

由於相依關係，因此在叫用 `main.js` 前，需要先引入 `common.js` 。

## dist/index2.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="common.js"></script>
    <script src="main2.js"></script>
  </head>
  <body> </body>
</html>
```

由於相依關係，因此在叫用 `main2.js` 前，需要先引入 `common.js` 。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset common.js 7.26 KiB [emitted] (name: common)
asset main2.js 2.08 KiB [emitted] (name: main2)
asset main.js 2.07 KiB [emitted] (name: main)
runtime modules 3.03 KiB 5 modules
cacheable modules 274 bytes
  ./app/msgCommon.js 24 bytes [built] [code generated]
  ./app/index2.js 107 bytes [built] [code generated]
  ./app/index.js 104 bytes [built] [code generated]
  ./app/msg2.js 20 bytes [built] [code generated]
  ./app/msg.js 19 bytes [built] [code generated]
webpack 5.62.1 compiled successfully in 120 ms
```

由於明確設定 `common.js` 獨立輸出，因此會 `commin.js` 、 `main.js` 與 `main2.js` 三個 bundle ，並且 `main.js` 與 `main2.js` 需要 `common.js` 才能執行。

如果不引入相依的 `common.js` ，雖然不會出錯，但程式不能正常執行。
