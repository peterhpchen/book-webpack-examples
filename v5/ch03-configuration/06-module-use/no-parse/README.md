# no-parse

## webpack.config.noparse.js

```js
module.exports = {
  module: {
    noParse: /lodash/,
  },
};
```

以 `module.noParse` 設定不要解析的模組，藉以減少建置所需花費的時間。
