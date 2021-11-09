# output-filename-hash

## src/index.js

```js
import './style/style.css';

console.log('index');
```

## src/index2.js

```js
import './style/style.css';

console.log('index2');
```

## src/style/style.css

```css
.hello-world {
  /* color: black; */
  color: green;
}
```

## webpack.config.js

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
    main2: './src/index2.js',
  },
  output: {
    // filename: '[fullhash].js',
    // filename: '[chunkhash].js',
    filename: '[contenthash].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: '[fullhash].css',
      // filename: '[chunkhash].css',
      filename: '[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   publicPath: '/',
            // },
          },
          'css-loader',
        ],
      },
    ],
  },
};
```

使用 `mini-css-extract-plugin` 將 CSS 樣式表輸出為獨立的 bundle 。

## 演示方式

本範例操作方式為：

1. 設定特定的 hash template string （ `[fullhash]` 、 `[chunkhash]` 、 `[contenthash]`）。
2. 啟動建置，並記下產生檔案的檔案名。
3. 修改 `style.css` ，重新建置。
4. 比較修改前與修改後的檔案名稱。

## 結果

|                                         | `[fullhash]`                                                      | `[chunkhash]`                                            | `[contenthash]`            |
| --------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------- | -------------------------- |
| 修改前 chunk `main` 的 bundle 檔名      | Error: Conflict: Multiple chunks emit assets to the same filename | `143a72824b895cef86f1.js`                                | `5984142158978d4e883f.js`  |
| 修改後 chunk `main` 的 bundle 檔名      | Error: Conflict: Multiple chunks emit assets to the same filename | `867de7af2dfce1a5ce1c.js`                                | `5984142158978d4e883f.js`  |
| 修改前 chunk `main2` 的 bundle 檔名     | Error: Conflict: Multiple chunks emit assets to the same filename | `44a66f6c4ecf35714a2f.js`                                | `c92c109006d97ccd6245.js`  |
| 修改後 chunk `main2` 的 bundle 檔名     | Error: Conflict: Multiple chunks emit assets to the same filename | `d3c57c317e150e398612.js`                                | `c92c109006d97ccd6245.js`  |
| 修改前 chunk `style.css` 的 bundle 檔名 | Error: Conflict: Multiple chunks emit assets to the same filename | `143a72824b895cef86f1.css` 與 `44a66f6c4ecf35714a2f.css` | `f76d9f8ca771d2172106.css` |
| 修改後 chunk `style.css` 的 bundle 檔名 | Error: Conflict: Multiple chunks emit assets to the same filename | `867de7af2dfce1a5ce1c.css` 與 `d3c57c317e150e398612.css` | `3a54aaaf9645b1c1636c.css` |

- `[fullhash]` ：因為多個 bundle 會產生同檔名的檔案，因而出錯。
- `[chunkhash]` ：因為整個 chunk 同一個 hash 值，因此 `style.css` 改變後，會連帶影響 `main` 與 `main2` 的輸出。
- `[contenthash]` ：依照內容生成 hash 值，因此 `style.css` 改變僅會改變其本身的檔名，不會影響 `main` 與 `main2` 的輸出。
