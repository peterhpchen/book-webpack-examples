# dev-server-config

## webpack.config.js

```js
// ch02-getting-started/07-use-dev-server/dev-server-config/webpack.config.js
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
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    watchContentBase: true,
  },
};
```

使用配置檔設定 `webpack-dev-server` 的配置。

## src/index.js

```json
{
  "scripts": {
    "start": "webpack serve"
  }
  // ...
}
```

因為設定在配置檔中，因此 CLI 不需要再做設定。

## 結果

與直接在 CLI 上設定的方式相比，配置檔較為簡潔且易讀。
