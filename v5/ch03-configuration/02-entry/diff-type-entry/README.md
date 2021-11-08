# diff-type-entry

## webpack.config.demo.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/app.js', './src/app.css'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

其中一個 `entry` 設為 CSS 樣式表。

## 結果

```bash
> webpack --config webpack.config.demo.js

asset main.css 34 bytes [emitted] (name: main)
asset main.js 19 bytes [emitted] [minimized] (name: main)
Entrypoint main 53 bytes = main.css 34 bytes main.js 19 bytes
orphan modules 2.78 KiB (javascript) 937 bytes (runtime) [orphan] 7 modules
cacheable modules 70 bytes (javascript) 33 bytes (css/mini-extract)
  ./src/app.js 20 bytes [built] [code generated]
  ./src/app.css 50 bytes [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js!./src/app.css 33 bytes [built] [code generated]
```

CSS 樣式表被輸出為 `main.css` 。
