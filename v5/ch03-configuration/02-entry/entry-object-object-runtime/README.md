# entry-object-object-runtme

## webpack.config.demo.js

```js
// ch03-configuration/02-entry/entry-object-object-runtime/webpack.config.demo.js
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
    common: {
      import: './app/msgCommon.js',
      runtime: 'runtime',
    },
  },
};
```

使用 `runtime` 分出 runtime 的程式碼為獨立的 bundle 。這裡要注意設有 `dependOn` 的 bundle 本來就不會有 runtime 程式碼，因此要分離 runtime ，請設定在沒有 `dependOn` 的 bundle 或是其相依的 bundle 。

## dist/index.html

```html
<!-- ch03-configuration/02-entry/entry-object-object-runtime/dist/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="runtime.js"></script>
    <script src="common.js"></script>
    <script src="main.js"></script>
  </head>
  <body> </body>
</html>
```

## dist/index2.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="runtime.js"></script>
    <script src="common.js"></script>
    <script src="main2.js"></script>
  </head>
  <body> </body>
</html>
```

在引入 bundle 前，需要先引入 runtime 。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset runtime.js 6.4 KiB [emitted] (name: runtime)
asset main2.js 2.16 KiB [emitted] (name: main2)
asset main.js 2.14 KiB [emitted] (name: main)
asset common.js 1.43 KiB [emitted] (name: common)
Entrypoint main 2.14 KiB = main.js
Entrypoint main2 2.16 KiB = main2.js
Entrypoint common 7.83 KiB = runtime.js 6.4 KiB common.js 1.43 KiB
runtime modules 3.03 KiB 5 modules
cacheable modules 274 bytes
  ./app/msgCommon.js 24 bytes [built] [code generated]
  ./app/index2.js 107 bytes [built] [code generated]
  ./app/index.js 104 bytes [built] [code generated]
  ./app/msg2.js 20 bytes [built] [code generated]
  ./app/msg.js 19 bytes [built] [code generated]
webpack 5.62.1 compiled successfully in 130 ms
```

分離出 `runtime.js` ，這內部為 runtime 的程式碼。
