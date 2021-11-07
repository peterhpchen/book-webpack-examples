# dev-server-auto

## webpack.config.js

```js
// ch02-getting-started/07-use-dev-server/dev-server-config/webpack.config.js
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
  devServer: {
    port: 9000,
    hot: true,
    watchContentBase: true,
  },
};
```

使用 `copy-webpack-plugin` 將 `public/index.html` 加入建置流程，這樣一來可以被 `webpack-dev-server` 識別，就不需要特別使用 `contentBase` 屬性設定路徑。
