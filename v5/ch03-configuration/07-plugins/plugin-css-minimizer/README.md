# plugin-css-minimizer

## webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
```

使用 `mini-css-extract-plugin` ，並將它所提供的 loader 處理經由 `css-loader` 處理後的 `.css` 檔案，將樣式表輸出為獨立檔案，另外設定 `css-minimizer-webpack-plugin` 作為 minimizer 。

## src/index.css

```css
#app {
  color: white;
  background-color: black;
}
```

## 結果

```bash
asset main.js 109 bytes [emitted] (name: main)
asset main.css 38 bytes [emitted] [minimized] (name: main)
Entrypoint main 147 bytes = main.css 38 bytes main.js 109 bytes
orphan modules 2.85 KiB (javascript) 937 bytes (runtime) [orphan] 8 modules
cacheable modules 22 bytes (javascript) 52 bytes (css/mini-extract)
  ./src/index.js 22 bytes [built] [code generated]
  css ./node_modules/css-loader/dist/cjs.js!./src/index.css 52 bytes [built] [code generated]
```

### dist/main.css

<!-- prettier-ignore -->
```css
#app{background-color:#000;color:#fff}
```

`src/index.css` 經過 loader 與 plugin 的處理，輸出為獨立的檔案 `main.css` 輸出，並且可以看到經由了 `css-minimizer-webpack-plugin` 的壓縮。
