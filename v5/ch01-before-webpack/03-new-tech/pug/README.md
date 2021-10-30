# pug

## src/index.pug

```pug
//- ch01-before-webpack/03-new-tech/pug/src/index.pug
html
  head
    title Hello, #{ name }!
  body
```

使用 Pug 語法定義元素配置。

## package.json

```json
{
  "scripts": {
    "build": "pug -O '{\"name\": \"Pug\"}' src -o dist"
  }
  // ...
}
```

Scripts `build` 執行 `pug` 指令，使用 `-O` 帶入參數物件，轉換目錄 `src` 中的 Pug 檔案並使用 `-o` 配置輸出至目錄 `dist` 。

## 結果

### dist/index.html

<!-- prettier-ignore -->
```html
<html><head><title>Hello, Pug!</title></head><body></body></html>
```

經過 Pug 轉換，並藉由傳入的參數物件所形成的 HTML 。
