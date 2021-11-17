# watch-options

監控模式的相關設定是由 `watchOptions` 屬性配置。

## webpack.config.aggregate-timeout.js

```js
module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 5000,
  },
};
```

設定等待建置的時間為 5 秒（ 5000 毫秒），預設為 200 毫秒。

## webpack.config.aggregate-timeout.js 執行結果

修改程式碼後，如果在 5 秒內再次修改程式碼，會需要再等 5 秒才會啟動重新建置。此設定的用意是為了避免過小的變動觸動監控，而一再的進行建置，因此 webpack 會等待一定的時間，如果時間內沒有變化時再去觸發重新建置，藉以減少無謂的建置。

## webpack.config.ignored.js

```js
module.exports = {
  watch: true,
  watchOptions: {
    // ignored: /ignore/,
    // ignored: '**/ignore/**/*.js',
    ignored: ['**/ignore/**/*.js', 'node_modules/**'],
  },
};
```

設定目錄 `ignore` 內的 `.js` 檔案與目錄 `node_modules` 下的檔案要排除在監控的範圍內。 `ignored` 可以用 RegExp （註解的第一行）、字串（註解的第二行）與陣列做設定。

## webpack.config.ignored.js 執行結果

當修改 `ignored` 所設定範圍內的檔案時，會被監控模式所忽略，並不會執行建置。

## webpack.config.poll.js

```js
module.exports = {
  watch: true,
  watchOptions: {
    poll: 1000,
  },
};
```

設定 `poll` 每 1 秒觸發監控模式觀察檔案是否被改變。

## webpack.config.poll.js 執行結果

一般情況下，監控模式可以感知到檔案是否改變而啟動重新建置，但是在少數情形下，監控會失效，這時啟用 `poll` 以固定時間來偵測是否有修改代碼，以維持監控的功能正常運作。
