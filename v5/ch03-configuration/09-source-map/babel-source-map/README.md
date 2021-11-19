# babel-source-map

## src/index.js

```js
const add = (a, b) => a + b;
```

## package.json

```json
{
  "scripts": {
    "build": "babel src -d lib --source-maps --source-root /"
  }
  // ...
}
```

使用 babel 轉換程式碼，並輸出 source map 資訊。

## 結果

```plaintext
lib
|- index.js
|- index.js.map
```

經由 babel 的轉換，會產生轉換後的代碼以及其的 source map 檔案。
