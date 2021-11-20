# devtool

## src/index.js

```js
import alpha from './const/alpha.js';
import beta from './const/beta.js';

const output = (mainTitle, subTitle) =>
  ['index', mainTitle, subTitle].joi(' - ');

console.log(output(alpha, beta));
```

引入 `src/alpha.js` 與 `src/beta.js` ，並且在使用 `join()` 時錯寫為 `joi()` ，此會造成錯誤，以便追蹤 source map 的效果。

## src/const/alpha.js

```js
export default 'alpha';
```

## src/const/beta.js

```js
export default 'beta';
```

## babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

使用 `preset-env` 作為 babel 的轉換。

## webpack.config.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devtools = [
  false,
  'source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'nosources-source-map',
  'nosources-cheap-source-map',
  'nosources-cheap-module-source-map',
  'eval',
  'eval-source-map',
  'eval-cheap-source-map',
  'eval-cheap-module-source-map',
  'eval-nosources-source-map',
  'eval-nosources-cheap-source-map',
  'eval-nosources-cheap-module-source-map',
  'hidden-source-map',
  'hidden-cheap-source-map',
  'hidden-cheap-module-source-map',
  'hidden-nosources-source-map',
  'hidden-nosources-cheap-source-map',
  'hidden-nosources-cheap-module-source-map',
  'inline-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'inline-nosources-source-map',
  'inline-nosources-cheap-source-map',
  'inline-nosources-cheap-module-source-map',
];

module.exports = devtools.map((devtool) => ({
  mode: 'none',
  output: {
    filename: `${devtool || '[name]'}.js`,
  },
  devtool,
  optimization: {
    moduleIds: 'named',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${devtool}.html`,
    }),
  ],
}));
```

使用多個不同的 `devtool` 設定來輸出 bundle ，並且將所有 `.js` 檔案經由 `babel-loader` 轉換，以便測試不同設定所帶來的 source map 效果。

## 結果

這裡列出各 `devtool` 設定所產生的 source map 的不同：

- `false` ：不產生 source map 。
- `'source-map'` ：完整的 source map ，對應到欄的細度。
- `'cheap-source-map'` ：對應至行的細度，並且雖然可以對應回原本的檔案，但是檔案內容已經經過轉換。
- `'cheap-module-source-map'` ：對應至行的細度，並且可以對應回原本未轉換的檔案。
- `'nosources-source-map'` ：產生完整的 source map 檔案，但是不會有原始碼的內容。
- `'nosources-cheap-source-map'` ：與 `'cheap-source-map'` 相同，但是不產生原始碼內容。
- `'nosources-cheap-module-source-map'` ：與 `'cheap-module-source-map'` 相同，但是不產生原始碼內容。
- `'eval'` ：以 `eval()` 包住代碼，並在最後加上來源位置，因此可以知道代碼來源檔案，但並不會對應至程式碼位置。
- `'eval-source-map'` ：與 `'eval'` 一樣，並在代碼後面加入完整的 source map 資訊，細度到欄數。
- `'eval-cheap-source-map'` ：與 `'cheap-source-map'` 相同，只是內容改為以 `eval()` 包住。
- `'eval-cheap-module-source-map'` ：與 `'cheap-module-source-map'` 相同，只是內容改以 `eval()` 包住。
- `'eval-nosources-source-map'` ：與 `'cheap-nosources-source-map'` 相同，只是內容改以 `eval()` 包住。
- `'eval-nosources-cheap-source-map'` ：與 `'nosources-cheap-source-map'` 相同，只是內容改以 `eval()` 包住。
- `'eval-nosources-cheap-module-source-map'` ：與 `'nosources-cheap-module-source-map'` 相同，只是內容改以 `eval()` 包住。
- `'hidden-source-map'` ：與 `'source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'hidden-cheap-source-map'` ：與 `'cheap-source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'hidden-cheap-module-source-map'` ：與 `'cheap-module-source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'hidden-nosources-source-map'` ：與 `'nosources-source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'hidden-nosources-cheap-source-map'` ：與 `'nosources-cheap-source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'hidden-nosources-cheap-module-source-map'` ：與 `'nosources-cheap-module-source-map'` 相同，只是不在 bundle 中產生對應 `.map` 檔的註解。
- `'inline-source-map'` ：與 `'source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
- `'inline-cheap-source-map'` ：與 `'cheap-source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
- `'inline-cheap-module-source-map'` ：與 `'cheap-module-source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
- `'inline-nosources-source-map'` ：與 `'nosources-source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
- `'inline-nosources-cheap-source-map'` ：與 `'nosources-cheap-source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
- `'inline-nosources-cheap-module-source-map'` ：與 `'nosources-cheap-module-source-map'` 相同，只是在 bundle 中的註解直接產生 source map 資訊，而沒有產出獨立的 `.map` 檔。
