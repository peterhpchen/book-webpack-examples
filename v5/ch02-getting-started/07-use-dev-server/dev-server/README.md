# dev-server

## package.json

```json
{
  "scripts": {
    "start": "webpack serve --mode development --port 9000 --content-base ./dist --hot --watch-content-base"
  }
  // ...
}
```

Scripts `start` 使用 `webpack serve` 啟動 `webpack-dev-server` 並對其加入各式參數。

## 結果

執行 `npm start` 後，使用 CLI 上所設定的參數啟動 `webpack-dev-server` 。
