# 書籍「從 0 到 Webpack 」範例集

此庫為「**從 0 到 Webpack** 」一書的範例集。

![cover](assets/MP22161.jpeg)

「**從 0 到 Webpack** 」是本介紹 webpack 的專書。

## 書籍連結

* [天瓏書局](https://www.tenlong.com.tw/products/9789864348626)
* [博客來](https://www.books.com.tw/products/0010901554)

## v5 範例目錄

### [第一章：寫在 webpack 之前](v5/ch01-before-webpack)

#### [第二節： JavaScript 的模組化之路](v5/ch01-before-webpack/02-history-of-js-module)

##### 腳本式 JavaScript 所遭遇的問題

* [inline-script](v5/ch01-before-webpack/02-history-of-js-module/inline-script) ：JavaScript 內嵌於 HTML 中的 `<script>` 標籤。
* [script-tag](v5/ch01-before-webpack/02-history-of-js-module/script-tag) ：使用 `<script>` 的 `src` 屬性引入外部 JavaScript 。
* [scope](v5/ch01-before-webpack/02-history-of-js-module/scope) ：在內嵌的 `<script>` 中使用外部 JavaScript 定義的變數。
* [var-conflict](v5/ch01-before-webpack/02-history-of-js-module/var-conflict) ：演示在全域中定義的變數互相覆蓋的問題。
* [iife](v5/ch01-before-webpack/v5/ch01-before-webpack/02-history-of-js-module/iife) ：演示使用 IIFE 處理內部變數衝突。
* [implicit-import](v5/ch01-before-webpack/02-history-of-js-module/implicit-import) ：演示在使用隱性引入時所潛藏的引用錯誤問題。
* [import-order](v5/ch01-before-webpack/02-history-of-js-module/import-order) ：演示 `<script>` 順序錯置所產生的問題。

##### JavaScript 的模組系統

* [common-js](v5/ch01-before-webpack/02-history-of-js-module/common-js) ：演示使用 CommonJS 的導出與導入模組。
* [require-js](v5/ch01-before-webpack/02-history-of-js-module/require-js) ：演示使用 RequireJS 的導出與導入模組。
* [es-module](v5/ch01-before-webpack/02-history-of-js-module/es-module) ：演示使用 ES Module 的導出與導入模組。

#### [第三節：新技術的崛起](v5/ch01-before-webpack/03-new-tech)

##### 各環境語言支援度不一

* [babel](v5/ch01-before-webpack/03-new-tech/babel) ：演示使用 Babel 將新的 JavaScript 語法轉為舊語法。
* [postcss](v5/ch01-before-webpack/03-new-tech/postcss) ：演示使用 PostCSS 將新的 CSS 語法轉為舊語法。

##### JavaScript 的弱型別特性

* [type-script](v5/ch01-before-webpack/03-new-tech/type-script) ：演示使用 TypeScript 為程式帶來型別檢查。

##### CSS 缺乏程式語言機制

* [sass-example](v5/ch01-before-webpack/03-new-tech/sass-example) ：演示使用 SASS 語法經由轉譯後變為一般的 CSS 語法。

##### CSS 是靜態的

* [emotion](v5/ch01-before-webpack/03-new-tech/emotion) ：演示使用 Emotion 在 JavaScript 中撰寫 CSS 樣式。

##### HTML 是靜態的

* [pug](v5/ch01-before-webpack/03-new-tech/pug) ：演示使用 Pug 作為 HTML 的模板引擎。
* [vue-template-syntax](v5/ch01-before-webpack/03-new-tech/vue-template-syntax) ：演示使用 Vue.js 的模板語法撰寫 HTML 。
* [react-jsx](v5/ch01-before-webpack/03-new-tech/react-jsx) ：演示在 JavaScript 內使用 JSX 配置 HTML 的生成。

#### [第四節：提升網頁效能](v5/ch01-before-webpack/04-performance)

##### 生產環境

* [min](v5/ch01-before-webpack/04-performance/min) ：使用壓縮後的 `.min.js` 程式碼，減少請求的負擔。
* [redundant-import](v5/ch01-before-webpack/04-performance/redundant-import) ：演示多餘的載入會增加請求的時間。
* [partial-use](v5/ch01-before-webpack/04-performance/partial-use) ：演示只載入欲使用的程式碼可以減少請求的時間。
* [multiple-import](v5/ch01-before-webpack/04-performance/multiple-import) ：演示多次載入會損耗請求的效率。
* [single-page](v5/ch01-before-webpack/04-performance/single-page) ：演示單頁應用可能載入不必要的資源。
* [single-page-async](v5/ch01-before-webpack/04-performance/single-page-async) ：演示當要使用資源時，再以延遲載入的方式請求資源，以此減少無用的請求。

#### [第五節：各類工具的出現](v5/ch01-before-webpack/05-tools)

##### 工具的互相配合

* [npm-scripts](v5/ch01-before-webpack/05-tools/npm-scripts) ：演示使用 npm 的 `package.json` 中的 `scripts` 屬性配置建置／執行流程。
* [gulp-example](v5/ch01-before-webpack/05-tools/gulp-example) ：演示使用 Gulp 建立建置／執行流程。
* [browserify](v5/ch01-before-webpack/05-tools/browserify) ：演示使用 Browserify 轉換 JavaScript 的 CommonJS 模組變為可執行於瀏覽器的原生語法。
* [gulp-browserify](v5/ch01-before-webpack/05-tools/gulp-browserify) ：演示 Gulp 與 Browserify 搭配的使用方式，將 Gulp 作為任務執行器， Browserify 作為模組綑綁器。

### [第二章：認識 webpack](v5/ch02-getting-started)

#### [第二節：第一個 webpack 應用程式](v5/ch02-getting-started/02-first-webpack)

#### [第三節：安裝 webpack](v5/ch02-getting-started/03-install-webpack)

#### [第四節：使用 webpack](v5/ch02-getting-started/04-use-webpack)

#### [第五節：使用 Loaders](v5/ch02-getting-started/05-use-loaders)

#### [第六節：使用 Plugins](v5/ch02-getting-started/06-use-plugins)

#### [第七節：使用 DevServer](v5/ch02-getting-started/07-use-dev-server)

### [第三章：配置 webpack](v5/ch03-configuration)

#### [第一節：配置物件](v5/ch03-configuration/01-configuration-object)

#### [第二節：入口 Entry](v5/ch03-configuration/02-entry)

#### [第三節：輸出 Output](v5/ch03-configuration/03-output)

#### [第四節：解析 Resolve](v5/ch03-configuration/04-resolve)

#### [第五節：模組 Module 的規則判定](v5/ch03-configuration/05-module)

#### [第六節：模組 Module 的處理](v5/ch03-configuration/06-module-use)

#### [第七節：插件 Plugins](v5/ch03-configuration/07-plugins)

#### [第八節：監聽 Watch](v5/ch03-configuration/08-watch)

#### [第九節： Source Map](v5/ch03-configuration/09-source-map)

#### [第十節： Dev Tool](v5/ch03-configuration/10-devtool)

#### [第十一節：最佳化 Optimization 與模式 Mode](v5/ch03-configuration/11-optimization)

#### [第十二節：配置檔的種類](v5/ch03-configuration/12-configuration-types)

#### [第十三節：使用 Node.js API 操作 webpack](v5/ch03-configuration/13-use-node-api)

### [第四章：真實世界的 webpack](v5/ch04-real-world)

#### [第一節：使用 JavaScript](v5/ch04-real-world/01-javascript)

#### [第二節：使用 Style](v5/ch04-real-world/02-style)

#### [第三節：使用 Image](v5/ch04-real-world/03-image)

#### [第四節：配置多模式專案](v5/ch04-real-world/04-config-setup)

#### [第五節： Module Federation](v5/ch04-real-world/05-module-federation)

### [第五章：使用 webpack 優化環境體驗](v5/ch05-optimization)

#### [第一節：建立 webpack 開發環境](v5/ch05-optimization/01-development)

#### [第二節：建立 webpack 生產環境 - 減小體積](v5/ch05-optimization/02-production-minimize)

#### [第三節：建立 webpack 生產環境 - 切割代碼](v5/ch05-optimization/03-production-code-splitting)

#### [第四節：建立 webpack 生產環境 - 快取](v5/ch05-optimization/04-production-caching)

#### [第五節：建立 webpack 生產環境 - 追蹤建置](v5/ch05-optimization/05-production-analyze)

### [第六章：解構 webpack](v5/ch06-inside)

#### [第一節： Bundle 導讀](v5/ch06-inside/01-read-bundle)

#### [第二節：自己動手寫 webpack](v5/ch06-inside/02-write-your-webpack)

#### [第三節： Loader 的內部構造](v5/ch06-inside/03-inside-loader)

#### [第四節： Plugin 的內部構造](v5/ch06-inside/04-inside-plugin)

### [第七章：寫在 webpack 之後](v5/ch07-after-webpack)

#### [第一節：使用 Snowpack 以原生模組系統建置專案](v5/ch07-after-webpack/01-snowpack)
