# plugin-css

## webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

使用 `mini-css-extract-plugin` ，並將它所提供的 loader 處理經由 `css-loader` 處理後的 `.css` 檔案，將樣式表輸出為獨立檔案。

## 結果

```bash
asset main.css 53 bytes [emitted] (name: main)
asset main.js 0 bytes [emitted] [minimized] (name: main)
Entrypoint main 53 bytes = main.css 53 bytes main.js 0 bytes
orphan modules 2.85 KiB (javascript) 937 bytes (runtime) [orphan] 8 modules
cacheable modules 22 bytes (javascript) 52 bytes (css/mini-extract)
  ./src/index.js 22 bytes [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js!./src/index.css 52 bytes [built] [code generated]
```

`src/index.css` 經過 loader 與 plugin 的處理，輸出為獨立的檔案 `main.css` 輸出。
