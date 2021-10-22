<img src="assets/MP22161.jpeg" width="280" title="Cover Image" align="right">

# 書籍「從 0 到 Webpack 」範例集

此庫為「**從 0 到 Webpack** 」一書的範例集。

本書可以在下面的連結中找到：

- [天瓏書局](https://www.tenlong.com.tw/products/9789864348626)
- [博客來](https://www.books.com.tw/products/0010901554)

「**從 0 到 Webpack** 」是本介紹 webpack 的專書。

## 補漏

- 頁數 _2-25_ 「使用 DevServer 」小節範例代碼對應遺漏，應為 [`ch02-getting-started/02-first-webpack/dev-server`](v5/ch02-getting-started/02-first-webpack/dev-server) 。
- 頁數 _3-3_ 「使用配置物件」小節的第一個程式碼區塊應與最後一行 `npx webpack --config webpack.config.demo.js` 分為兩個區塊。
- 頁數 _3-70_ 最上方的程式碼區塊在 `// ch03-configuration/06-module-use/use-func/src/hello.js` 之前與之後應該分為兩個區塊。
- 頁數 _3-83_ 「配置 Plugins 的正確姿勢」小節中的 awesome webpack 連結應為 `https://webpack.js.org/awesome-webpack/#webpack-plugins` 。
- 頁數 _3-136_ 「 optimization.usedExports 」小節的最後應該要加上「可以參考範例 `ch03-configuration/11-optimization/used-exports` 」。
- 頁數 _4-15_ 最上方的 `post-loader` 應改為 `postcss-loader` 。

## 範例目錄

### [第一章：寫在 webpack 之前](v5/ch01-before-webpack)

#### [第二節： JavaScript 的模組化之路](v5/ch01-before-webpack/02-history-of-js-module)

- [inline-script](v5/ch01-before-webpack/02-history-of-js-module/inline-script) ： JavaScript 內嵌於 HTML 中的 `<script>` 標籤。
- [script-tag](v5/ch01-before-webpack/02-history-of-js-module/script-tag) ：使用 `<script>` 的 `src` 屬性引入外部 JavaScript 。
- [scope](v5/ch01-before-webpack/02-history-of-js-module/scope) ：在內嵌的 `<script>` 中使用外部 JavaScript 定義的變數，展示 JavaScript 腳本式引入方法的全域特性。
- [var-conflict](v5/ch01-before-webpack/02-history-of-js-module/var-conflict) ：演示在全域中定義的變數互相覆蓋的問題。
- [iife](v5/ch01-before-webpack/v5/ch01-before-webpack/02-history-of-js-module/iife) ：演示使用 IIFE 處理內部變數衝突。
- [implicit-import](v5/ch01-before-webpack/02-history-of-js-module/implicit-import) ：演示在使用隱性引入時所潛藏的引用錯誤問題。
- [import-order](v5/ch01-before-webpack/02-history-of-js-module/import-order) ：演示 `<script>` 順序錯置所產生的問題。
- [common-js](v5/ch01-before-webpack/02-history-of-js-module/common-js) ：演示使用 CommonJS 的導出與導入模組。
- [require-js](v5/ch01-before-webpack/02-history-of-js-module/require-js) ：演示使用 RequireJS 的導出與導入模組。
- [es-module](v5/ch01-before-webpack/02-history-of-js-module/es-module) ：演示使用 ES Module 的導出與導入模組。

#### [第三節：新技術的崛起](v5/ch01-before-webpack/03-new-tech)

- [babel](v5/ch01-before-webpack/03-new-tech/babel) ：演示使用 Babel 將新的 JavaScript 語法轉為舊語法。
- [postcss](v5/ch01-before-webpack/03-new-tech/postcss) ：演示使用 PostCSS 將新的 CSS 語法轉為舊語法。
- [type-script](v5/ch01-before-webpack/03-new-tech/type-script) ：演示使用 TypeScript 為程式帶來型別檢查。
- [sass-example](v5/ch01-before-webpack/03-new-tech/sass-example) ：演示使用 SASS 語法經由轉譯後變為一般的 CSS 語法。
- [emotion](v5/ch01-before-webpack/03-new-tech/emotion) ：演示使用 Emotion 在 JavaScript 中撰寫 CSS 樣式。
- [pug](v5/ch01-before-webpack/03-new-tech/pug) ：演示使用 Pug 作為 HTML 的模板引擎。
- [vue-template-syntax](v5/ch01-before-webpack/03-new-tech/vue-template-syntax) ：演示使用 Vue.js 的模板語法撰寫 HTML 。
- [react-jsx](v5/ch01-before-webpack/03-new-tech/react-jsx) ：演示在 JavaScript 內使用 JSX 配置 HTML 的生成。

#### [第四節：提升網頁效能](v5/ch01-before-webpack/04-performance)

- [min](v5/ch01-before-webpack/04-performance/min) ：使用壓縮後的 `.min.js` 程式碼，減少請求的負擔。
- [redundant-import](v5/ch01-before-webpack/04-performance/redundant-import) ：演示多餘的載入會增加請求的時間。
- [partial-use](v5/ch01-before-webpack/04-performance/partial-use) ：演示只載入欲使用的程式碼可以減少請求的時間。
- [multiple-import](v5/ch01-before-webpack/04-performance/multiple-import) ：演示多次載入會損耗請求的效率。
- [single-page](v5/ch01-before-webpack/04-performance/single-page) ：演示單頁應用可能載入不必要的資源。
- [single-page-async](v5/ch01-before-webpack/04-performance/single-page-async) ：演示當要使用資源時，再以延遲載入的方式請求資源，以此減少無用的請求。

#### [第五節：各類工具的出現](v5/ch01-before-webpack/05-tools)

- [npm-scripts](v5/ch01-before-webpack/05-tools/npm-scripts) ：演示使用 npm 的 `package.json` 中的 `scripts` 屬性配置建置／執行流程。
- [gulp-example](v5/ch01-before-webpack/05-tools/gulp-example) ：演示使用 Gulp 建立建置／執行流程。
- [browserify](v5/ch01-before-webpack/05-tools/browserify) ：演示使用 Browserify 轉換 JavaScript 的 CommonJS 模組變為可執行於瀏覽器的原生語法。
- [gulp-browserify](v5/ch01-before-webpack/05-tools/gulp-browserify) ：演示 Gulp 與 Browserify 搭配的使用方式，將 Gulp 作為任務執行器， Browserify 作為模組綑綁器。

### [第二章：認識 webpack](v5/ch02-getting-started)

#### [第二節：第一個 webpack 應用程式](v5/ch02-getting-started/02-first-webpack)

> 此節範例整體為一個範例，各個範例為前次範例的修改。

- [simple-app](v5/ch02-getting-started/02-first-webpack/simple-app) ：使用原始的腳本式 JavaScript 寫成的範例。
- [zero-config](v5/ch02-getting-started/02-first-webpack/zero-config) ：將 **simple-app** 修改為使用 webpack 建置。
- [load-style](v5/ch02-getting-started/02-first-webpack/load-style) ：使用 loader 為 **zero-config** 載入樣式表。
- [copy-html](v5/ch02-getting-started/02-first-webpack/copy-html) ：使用 plugin 為 **load-style** 複製 HTML 至 `bundle` 目錄。
- [use-mode](v5/ch02-getting-started/02-first-webpack/use-mode) ：使用 webpack 的模式設定 **copy-html** 的最佳化方案。
- [dev-server](v5/ch02-getting-started/02-first-webpack/dev-server) ：使用 DevServer 做為 **use-mode** 開發伺服器。

#### [第三節：安裝 webpack](v5/ch02-getting-started/03-install-webpack)

- [local-install](v5/ch02-getting-started/03-install-webpack/local-install) ：安裝 webpack 後的專案。
- [install-specific-version](v5/ch02-getting-started/03-install-webpack/install-specific-version) ：安裝特定版本 webpack 後的專案。
- [update-webpack](v5/ch02-getting-started/03-install-webpack/update-webpack) ：更新 webpack 前的專案。
- [latest-version](v5/ch02-getting-started/03-install-webpack/latest-version) ：安裝尚未釋出的 webpack 版本。
- [specific-branch](v5/ch02-getting-started/03-install-webpack/specific-branch) ：安裝特定 branch 的 webpack 。
- [specific-tag](v5/ch02-getting-started/03-install-webpack/specific-tag) ：安裝特定 tag 的 webpack 。

#### [第四節：使用 webpack](v5/ch02-getting-started/04-use-webpack)

- [cli-config](v5/ch02-getting-started/04-use-webpack/cli-config) ：使用 CLI 參數配置 webpack 。
- [config-file](v5/ch02-getting-started/04-use-webpack/config-file) ：使用配置檔設定 webpack 。
- [cli-plus-file](v5/ch02-getting-started/04-use-webpack/cli-plus-file) ： CLI 參數與配置檔一起使用設定 webpack 。

#### [第五節：使用 Loaders](v5/ch02-getting-started/05-use-loaders)

- [loader-css-inline](v5/ch02-getting-started/05-use-loaders/loader-css-inline) ：將 loader 使用 inline 的方式載入樣式表。
- [loader-style-inline](v5/ch02-getting-started/05-use-loaders/loader-style-inline) ：將複數 loader 使用 inline 的方式載入樣式表並自動插入 DOM 中。
- [css-module-inline](v5/ch02-getting-started/05-use-loaders/css-module-inline) ：使用 inline 參數設定 loader 。
- [css-module](v5/ch02-getting-started/05-use-loaders/css-module) ：使用配置檔設定 loader 。
- [loader-css](v5/ch02-getting-started/05-use-loaders/loader-css) ：（未收入）將 loader 使用配置檔的方式載入樣式表。
- [loader-style](v5/ch02-getting-started/05-use-loaders/loader-style) ：（未收入）將複數 loader 使用配置檔的方式載入樣式表並自動插入 DOM 中。

#### [第六節：使用 Plugins](v5/ch02-getting-started/06-use-plugins)

- [use-config](v5/ch02-getting-started/06-use-plugins/use-config) ：配置檔中設定 plugin 。
- [multiple-plugins](v5/ch02-getting-started/06-use-plugins/multiple-plugins) ：設定複數個 plugin 。
- [internal-plugins](v5/ch02-getting-started/06-use-plugins/internal-plugins) ：使用 webpack 內建的 plugin 。

#### [第七節：使用 DevServer](v5/ch02-getting-started/07-use-dev-server)

- [dev-server-config](v5/ch02-getting-started/07-use-dev-server/dev-server-config) ：使用 DevServer 作為開發伺服器，並使用配置檔設定 Hot Module Replacement 。
- [dev-server-auto](v5/ch02-getting-started/07-use-dev-server/dev-server-auto) ：使用 `CopyWebpackPlugin` 使建置流程包含 `index.html` ，避免需要配置 `contentBase` 。
- [dev-server](v5/ch02-getting-started/07-use-dev-server/dev-server) ：演示 DevServer 預設的自動重整功能。

### [第三章：配置 webpack](v5/ch03-configuration)

#### [第一節：配置物件](v5/ch03-configuration/01-configuration-object)

- [config-file](v5/ch03-configuration/01-configuration-object/config-file) ：使用 CLI 載入導出配置物件的配置檔。
- [node-api](v5/ch03-configuration/01-configuration-object/node-api) ：使用 Node.js API 載入配置物件。
- [webpack-init](v5/ch03-configuration/01-configuration-object/webpack-init) ：（未收入）可以啟動 `webpack init` 產生 **created-by-webpack-init** 專案的專案。
- [created-by-webpack-init](v5/ch03-configuration/01-configuration-object/created-by-webpack-init) ：（未收入）由 `webpack init` 所產生的專案。

#### [第二節：入口 Entry](v5/ch03-configuration/02-entry)

- [entry-default](v5/ch03-configuration/02-entry/entry-default) ： 預設的 `entry` 配置。
- [entry-string](v5/ch03-configuration/02-entry/entry-string) ：使用字串設置 `entry` 。
- [entry-array](v5/ch03-configuration/02-entry/entry-array) ：使用陣列設置多個入口。
- [entry-object](v5/ch03-configuration/02-entry/entry-object) ：使用物件以指定的 `key` 值設定不同的入口，並以 `key` 為區別輸出複數個 bundle 。
- [entry-object-array](v5/ch03-configuration/02-entry/entry-object-array) ：使用物件以指定的 `key` 值配置有名稱的 bundle ，並以陣列設定多個入口。
- [entry-object-object](v5/ch03-configuration/02-entry/entry-object-object) ：以物件為物件的值的範例。
- [entry-object-object-string](v5/ch03-configuration/02-entry/entry-object-object-string) ：以物件為物件的值時， `import` 屬性可以設定入口點。
- [entry-object-object-array](v5/ch03-configuration/02-entry/entry-object-object-array) ：以物件為物件的值時， `import` 屬性以陣列設定多個入口點。
- [entry-object-object-filename](v5/ch03-configuration/02-entry/entry-object-object-filename) ：以物件為物件的值時， `filename` 屬性可以設定 bundle 的檔案名稱。
- [entry-object-object-depend-on](v5/ch03-configuration/02-entry/entry-object-object-depend-on) ：以物件為物件的值時，使用 `dependOn` 設定相依資源。
- [entry-object-object-runtime](v5/ch03-configuration/02-entry/entry-object-object-runtime) ：以物件為物件的值時，使用 `runtime` 屬性提取 runtime 的程式碼為獨立的檔案。
- [entry-func](v5/ch03-configuration/02-entry/entry-func) ：使用函式設定 `entry` ，延遲入口點的載入時機。
- [entry-func-array](v5/ch03-configuration/02-entry/entry-func-array) ：使用函式設定 `entry` ，並且以陣列為回傳值，延遲多個入口點的載入時機。
- [entry-func-promise](v5/ch03-configuration/02-entry/entry-func-promise) ：使用函式設定 `entry` ，並且傳回 promise ，以非同步的方式載入入口點。
- [diff-type-entry](v5/ch03-configuration/02-entry/diff-type-entry) ：設定非 JavaScript 類型的入口點。
- [context](v5/ch03-configuration/02-entry/context) ：使用 `context` 設定基底路徑。

#### [第三節：輸出 Output](v5/ch03-configuration/03-output)

- [output-default](v5/ch03-configuration/03-output/output-default) ：預設的 `output` 配置。
- [output-path](v5/ch03-configuration/03-output/output-path) ：使用 `output` 的 `path` 屬性設置輸出目錄。
- [output-path-hash](v5/ch03-configuration/03-output/output-path-hash) ：以 `[fullhash]` 設定輸出目錄。
- [output-filename](v5/ch03-configuration/03-output/output-filename) ：使用 `output` 的 `filename` 設定輸出的 bundle 名稱。
- [output-filename-multi](v5/ch03-configuration/03-output/output-filename-multi) ：使用 template string 設定多個輸出時的 bundle 名稱。
- [output-filename-func](v5/ch03-configuration/03-output/output-filename-func) ：使用函式決定輸出的 bundle 名稱。
- [output-filename-template](v5/ch03-configuration/03-output/output-filename-template) ： 以不同的 template string 展示輸出的 bundle 名稱。
- [output-filename-hash](v5/ch03-configuration/03-output/output-filename-hash) ：比較不同的 hash template string 所輸出的值。
- [output-publicpath](v5/ch03-configuration/03-output/output-publicpath) ：以 `publicPath` 設定伺服器中請求的位置。
- [output-chunkfilename](v5/ch03-configuration/03-output/output-chunkfilename) ：以 `chunkFilename` 設定 **non-initial** 的名稱。

#### [第四節：解析 Resolve](v5/ch03-configuration/04-resolve)

- [absolute](v5/ch03-configuration/04-resolve/absolute) ：使用絕對路徑引入模組。
- [relative](v5/ch03-configuration/04-resolve/relative) ：使用相對路徑引入模組。
- [module](v5/ch03-configuration/04-resolve/module) ：使用模組路徑引入模組。
- [resolve-alias](v5/ch03-configuration/04-resolve/resolve-alias) ：使用 `resolve.alias` 設定路徑別名。
- [resolve-alias-npm](v5/ch03-configuration/04-resolve/resolve-alias-npm) ：將模組路徑設為路徑別名來引入第三方庫。
- [resolve-modules](v5/ch03-configuration/04-resolve/resolve-modules) ：使用 `resolve.module` 設定找尋模組的目錄。
- [resolve-main-fields](v5/ch03-configuration/04-resolve/resolve-main-fields) ：使用 `resolve.mainFields` 決定 npm 模組的引入檔案。
- [mainfiles](v5/ch03-configuration/04-resolve/mainfiles) ：使用 `resolve.mainFiles` 決定預設引入檔案。
- [extensions](v5/ch03-configuration/04-resolve/extensions) ：使用 `resolve.extensions` 設定預設副檔名。

#### [第五節：模組 Module 的規則判定](v5/ch03-configuration/05-module)

- [css-module](v5/ch03-configuration/05-module/css-module) ：演示 `module` 屬性的 `test` 與 `use` 。
- [rules-test-include](v5/ch03-configuration/05-module/rules-test-include) ：使用 `module` 屬性的 `include` 包含模組。
- [rules-exclude](v5/ch03-configuration/05-module/rules-exclude) ：使用 `module` 屬性的 `exclude` 排除模組。
- [rules-resource-query](v5/ch03-configuration/05-module/rules-resource-query) ：使用 `module` 屬性的 `resourceQuery` 判斷 query 參數是否匹配。
- [rules-test-include-exclude](v5/ch03-configuration/05-module/rules-test-include-exclude) ：使用多個判斷類屬性決定模組是否匹配。
- [rules-issuer-and](v5/ch03-configuration/05-module/rules-issuer-and) ：使用 `issuer` 判斷請求資源是否匹配。
- [rules-multiple](v5/ch03-configuration/05-module/rules-multiple) ：演示同個資源同時匹配多個條件。
- [rules-oneof](v5/ch03-configuration/05-module/rules-oneof) ：使用 `oneOf` 屬性在同時匹配多個條件時只作用其中一個。
- [loader-call](v5/ch03-configuration/05-module/loader-call) ：（未收入）演示多條件匹配與 `oneOf` 同時作用的效果。

#### [第六節：模組 Module 的處理](v5/ch03-configuration/06-module-use)

- [use-string](v5/ch03-configuration/06-module-use/use-string) ：使用字串設定 loader 的來源。
- [use-obj](v5/ch03-configuration/06-module-use/use-obj) ：使用物件設定 loader 的來源與設定參數。
- [use-func](v5/ch03-configuration/06-module-use/use-func) ：使用函式設定 loader 。
- [use-array](v5/ch03-configuration/06-module-use/use-array) ：使用陣列設定多個 loader 。
- [use-short](v5/ch03-configuration/06-module-use/use-short) ：使用簡寫減少 `use` 一層的 loader 設定。
- [loader-order](v5/ch03-configuration/06-module-use/loader-order) ：使用 `enforce` 改變預設 loader 的載入順序。
- [no-parse](v5/ch03-configuration/06-module-use/no-parse) ：使用 `noParse` 屬性避免解析特定模組。
- [parser](v5/ch03-configuration/06-module-use/parser) ：使用 `parser` 決定特定模組語意如何設定。
- [use-loader-options](v5/ch03-configuration/06-module-use/use-loader-options) ：（未收入）演示使用 `options` 設定 loader 。

#### [第七節：插件 Plugins](v5/ch03-configuration/07-plugins)

- [plugin-copy](v5/ch03-configuration/07-plugins/plugin-copy) ：演示使用 `CopyPlugin` 複製檔案至目標目錄中。
- [plugin-css](v5/ch03-configuration/07-plugins/plugin-css) ：演示在 loader 中設定 `MiniCssExtractPlugin` 所提供的 loader 。
- [plugin-css-minimizer](v5/ch03-configuration/07-plugins/plugin-css-minimizer) ：演示在 `optimization` 中使用 `CssMinimizerPlugin` 作為 minimizer 。

#### [第八節：監聽 Watch](v5/ch03-configuration/08-watch)

- [simple-watch](v5/ch03-configuration/08-watch/simple-watch) ：設定 `watch` 屬性，開啟監控功能。
- [watch-options](v5/ch03-configuration/08-watch/watch-options) ：演示各個監控功能屬性的效果。
- [dev-server](v5/ch03-configuration/08-watch/dev-server) ：演示使用 DevServer 預設開啟監控模式。

#### [第九節： Source Map](v5/ch03-configuration/09-source-map)

- [without-source-map](v5/ch03-configuration/09-source-map/without-source-map) ：演示在開發時，沒有 source map 的困難。
- [source-map](v5/ch03-configuration/09-source-map/source-map) ：演示使用 source map 解決開發時程式碼對應至原始碼的問題。
- [babel-source-map](v5/ch03-configuration/09-source-map/babel-source-map) ：以 Babel 說明 source map 的原理。
- [simple-source-map](v5/ch03-configuration/09-source-map/simple-source-map) ：（未收入）操作 webpack 建置帶有 source map 的 bundle 。

#### [第十節： Dev Tool](v5/ch03-configuration/10-devtool)

- [devtool](v5/ch03-configuration/10-devtool/devtool) ：演示不同的 `devtool` 效果。

#### [第十一節：最佳化 Optimization 與模式 Mode](v5/ch03-configuration/11-optimization)

- [module-ids](v5/ch03-configuration/11-optimization/module-ids) ：演示使用 `moduleIds` 屬性修改 webpack 中生成 module id 的方式。
- [chunk-ids](v5/ch03-configuration/11-optimization/chunk-ids) ：演示使用 `chunkIds` 屬性修改 webpack 中 chunk 的 id 生成方式。
- [node-env](v5/ch03-configuration/11-optimization/node-env) ：使用 `node-env` 修改環境變數。
- [flag-included-chunks](v5/ch03-configuration/11-optimization/flag-included-chunks) ：使用 `flagIncludeChunks` 來決定是否要分出各個 chunk 資源。
- [side-effects](v5/ch03-configuration/11-optimization/side-effects) ：對非全域的模組刪減未引入的變數。
- [used-exports](v5/ch03-configuration/11-optimization/used-exports) ： 避免未引入的模組引入。
- [concatenate-modules](v5/ch03-configuration/11-optimization/concatenate-modules) ：使用 `concatenateModules` 將模組合併。
- [minimize](v5/ch03-configuration/11-optimization/minimize) ：使用 `minimize` 將輸出 bundle 壓縮。

#### [第十二節：配置檔的種類](v5/ch03-configuration/12-configuration-types)

- [cli-file](v5/ch03-configuration/12-configuration-types/cli-file) ：使用導出配置物件的檔案作為配置檔。
- [export-function](v5/ch03-configuration/12-configuration-types/export-function) ：使用導出函式的檔案作為配置檔。
- [export-promise](v5/ch03-configuration/12-configuration-types/export-promise) ：使用 Promise 導出，非同步取得配置的內容。
- [export-array](v5/ch03-configuration/12-configuration-types/export-array) ：使用陣列導出多個配置，並同時執行多種建置。
- [parallelism](v5/ch03-configuration/12-configuration-types/parallelism) ：藉由導出 `parallelism` 來控制同步建置的數量。

#### [第十三節：使用 Node.js API 操作 webpack](v5/ch03-configuration/13-use-node-api)

- [node-interface](v5/ch03-configuration/13-use-node-api/node-interface) ：使用 Node.js API 叫用 webpack 執行建置。
- [node-interface-callback](v5/ch03-configuration/13-use-node-api/node-interface-callback) ：使用 Node.js API 中的 Callback 函式取得建置資訊並輸出。
- [node-interface-run](v5/ch03-configuration/13-use-node-api/node-interface-run) ：叫用 `run` 執行建置。
- [node-interface-watch](v5/ch03-configuration/13-use-node-api/node-interface-watch) ：使用 `watch` 啟動監控模式並執行建置。
- [node-interface-multiple](v5/ch03-configuration/13-use-node-api/node-interface-multiple) ：使用陣列格式的配置執行複數個建置。
- [node-plugins](v5/ch03-configuration/13-use-node-api/node-plugins) ：使用 `apply` 為 `compiler` 注入 plugin 。
- [node-interface-error-handling](v5/ch03-configuration/13-use-node-api/node-interface-error-handling) ：演示 Node.js API 錯誤訊息的處理。

### [第四章：真實世界的 webpack](v5/ch04-real-world)

#### [第一節：使用 JavaScript](v5/ch04-real-world/01-javascript)

- [babel-plugin](v5/ch04-real-world/01-javascript/babel-plugin) ：使用 CLI 載入 Babel plugin 來轉換程式碼。
- [babel-config](v5/ch04-real-world/01-javascript/babel-config) ：使用配置檔載入 Babel plugin 來轉換程式碼。
- [babel-preset](v5/ch04-real-world/01-javascript/babel-preset) ：使用 Babel preset 替換複數個 plugin 。
- [babel-browserslist](v5/ch04-real-world/01-javascript/babel-browserslist) ：使用 Babel 與 Browserslist 配置目標環境。
- [babel-polyfill](v5/ch04-real-world/01-javascript/babel-polyfill) ：使用 Babel polyfill 對新的語意做轉換。
- [babel-webpack](v5/ch04-real-world/01-javascript/babel-webpack) ：使用 webpack 配置 Babel 做建置。

#### [第二節：使用 Style](v5/ch04-real-world/02-style)

- [postcss-cli-example](v5/ch04-real-world/02-style/postcss-cli-example) ：使用 PostCSS 的 CLI 配置轉換 CSS 程式碼。
- [postcss-plugin](v5/ch04-real-world/02-style/postcss-plugin) ：添加 PostCSS plugin 執行特定的轉換。
- [postcss-config](v5/ch04-real-world/02-style/postcss-config) ：使用配置檔配置 PostCSS 的轉換方式。
- [postcss-browserslist](v5/ch04-real-world/02-style/postcss-browserslist) ：使用 PostCSS 與 Browserslist 配置目標環境。
- [postcss-webpack-loader](v5/ch04-real-world/02-style/postcss-webpack-loader) ：在 webpack 中使用 `postcss-loader` 處理 CSS 。
- [postcss-css-loader](v5/ch04-real-world/02-style/postcss-css-loader) ：在 webpack 中配置 `css-loader` 讀取 CSS 。
- [postcss-style-loader](v5/ch04-real-world/02-style/postcss-style-loader) ：在 webpack 中配置 `style-loader` 載入 CSS 至頁面。
- [extract-css](v5/ch04-real-world/02-style/extract-css) ：使用 `mini-css-extract-plugin` 拆分 CSS 為獨立檔案。

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
