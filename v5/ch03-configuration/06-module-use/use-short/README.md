# use-short

## webpack.config.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'loader'),
            options: {
              name: 'a',
            },
          },
        ],
      },
    ],
  },
};
```

使用 `use` 設定物件，加入 `loader` 與 `options` 設定 loader 。

## webpack.config.short.js

```js
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: path.resolve(__dirname, 'loader'),
        options: {
          name: 'a',
        },
      },
    ],
  },
};
```

如果規則中只有單個 loader ，可以使用 `loader` 與 `options` 設定，減少 `use` 一層。
