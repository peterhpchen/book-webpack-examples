# cli-config

## 指令

```bash
webpack
# 等於
webpack build
# 等於
webpack --entry src/index.js
```

使用預設的起始模組 `src/index.js` 建置專案。

```bash
webpack help
```

顯示有用的資訊，供使用者了解如何使用 webpack CLI 。

```bash
webpack --entry ./src/index2.js
# 等於
webpack ./src/index2.js
```

使用 `--entry` 參數作為起始模組。

```bash
webpack --entry ./src/index.js ./src/index2.js
# 等於
webpack --entry ./src/index.js --entry ./src/index2.js
# 等於
webpack ./src/index.js ./src/index2.js
```

設定多個模組作為入口點。

```bash
webpack --output-path ./build
```

`--output-path` 設定輸出目錄。

```bash
webpack --mode development
```

`--mode` 設定建置模式。
