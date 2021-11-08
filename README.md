<img src="assets/MP22161.jpeg" width="280" title="Cover Image" align="right">

# 書籍「從 0 到 Webpack 」範例集

此庫為「**從 0 到 Webpack** 」一書的範例集。

本書可以在下面的連結中找到：

- [天瓏書局](https://www.tenlong.com.tw/products/9789864348626)
- [博客來](https://www.books.com.tw/products/0010901554)

「**從 0 到 Webpack** 」是本介紹 webpack 的專書。

## 補漏

- 頁數 _2-25_ 「使用 DevServer 」小節的最後應該要加上「可以參考範例 `ch02-getting-started/02-first-webpack/dev-server` 」。
- 頁數 _3-3_ 「使用配置物件」小節的第一個程式碼區塊應與最後一行 `npx webpack --config webpack.config.demo.js` 分為兩個區塊。
- 頁數 _3-70_ 最上方的程式碼區塊在 `// ch03-configuration/06-module-use/use-func/src/hello.js` 之前與之後應該分為兩個區塊。
- 頁數 _3-83_ 「配置 Plugins 的正確姿勢」小節中的 awesome webpack 連結應為 `https://webpack.js.org/awesome-webpack/#webpack-plugins` 。
- 頁數 _3-136_ 「 optimization.usedExports 」小節的最後應該要加上「可以參考範例 `ch03-configuration/11-optimization/used-exports` 」。
- 頁數 _4-15_ 最上方的 `post-loader` 應改為 `postcss-loader` 。
- 頁數 _5-6_ 「配置改變時自動建置」小節的最後應該要加上「可以參考範例 `ch05-optimization/01-development/reload-config` 」。
- 頁數 _5-41_ 「輸出資訊」小節段落「從而針對問題做解決」下面應要加上「可以參考範例 `ch05-optimization/05-production-analyze/cli-args` 」。
- 頁數 _5-42_ 「輸出資訊」小節的最後應該要加上「可以參考範例 `ch05-optimization/05-production-analyze/cli-args-json` 」。
- 頁數 _5-44_ 「警示 bundle 過大」小節的最後應該要加上「可以參考範例 `ch05-optimization/05-production-analyze/bundlesize-demo` 」。

## 範例目錄

### [第一章：寫在 webpack 之前](v5/ch01-before-webpack)

任何技術的誕生都有其原因。

#### 第一節：網頁應用程式架構的變遷

> 網頁渲染的工作逐漸由後端轉為前端主導。

介紹網頁應用程式因為時代的演進所形成的架構變化。

#### [第二節： JavaScript 的模組化之路](v5/ch01-before-webpack/02-history-of-js-module)

> JavaScript 逐漸從腳本由上而下的執行方式演進為具有模組化設計的程式語言。

由於 JavaScript 的專案規模增大，而促使原本腳本式的寫法向模組化的趨勢前進。

| 頁數   | 範例                                                                               | 描述                                                                                           |
| ------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| _1-15_ | [inline-script](v5/ch01-before-webpack/02-history-of-js-module/inline-script)      | JavaScript 內嵌於 HTML 中的 `<script>` 標籤                                                    |
| _1-15_ | [script-tag](v5/ch01-before-webpack/02-history-of-js-module/script-tag)            | 使用 `<script>` 的 `src` 屬性引入外部 JavaScript                                               |
| _1-16_ | [scope](v5/ch01-before-webpack/02-history-of-js-module/scope)                      | 在內嵌的 `<script>` 中使用外部 JavaScript 定義的變數，展示 JavaScript 腳本式引入方法的全域特性 |
| _1-16_ | [var-conflict](v5/ch01-before-webpack/02-history-of-js-module/var-conflict)        | 演示在全域中定義的變數互相覆蓋的問題                                                           |
| _1-17_ | [iife](v5/ch01-before-webpack/v5/ch01-before-webpack/02-history-of-js-module/iife) | 演示使用 IIFE 處理內部變數衝突                                                                 |
| _1-18_ | [implicit-import](v5/ch01-before-webpack/02-history-of-js-module/implicit-import)  | 演示在使用隱性引入時所潛藏的引用錯誤問題                                                       |
| _1-18_ | [import-order](v5/ch01-before-webpack/02-history-of-js-module/import-order)        | 演示 `<script>` 順序錯置所產生的問題                                                           |
| _1-22_ | [common-js](v5/ch01-before-webpack/02-history-of-js-module/common-js)              | 演示使用 CommonJS 的導出與導入模組                                                             |
| _1-23_ | [require-js](v5/ch01-before-webpack/02-history-of-js-module/require-js)            | 演示使用 RequireJS 的導出與導入模組                                                            |
| _1-24_ | [es-module](v5/ch01-before-webpack/02-history-of-js-module/es-module)              | 演示使用 ES Module 的導出與導入模組                                                            |

#### [第三節：新技術的崛起](v5/ch01-before-webpack/03-new-tech)

> 因應網頁使用規模擴大，許多新技術被發明以增進開發效率。

許多新技術與發明出現在網頁開發中。

| 頁數   | 範例                                                                          | 描述                                            |
| ------ | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| _1-28_ | [babel](v5/ch01-before-webpack/03-new-tech/babel)                             | 演示使用 Babel 將新的 JavaScript 語法轉為舊語法 |
| _1-29_ | [postcss](v5/ch01-before-webpack/03-new-tech/postcss)                         | 演示使用 PostCSS 將新的 CSS 語法轉為舊語法      |
| _1-30_ | [type-script](v5/ch01-before-webpack/03-new-tech/type-script)                 | 演示使用 TypeScript 為程式帶來型別檢查          |
| _1-31_ | [sass-example](v5/ch01-before-webpack/03-new-tech/sass-example)               | 演示使用 SASS 語法經由轉譯後變為一般的 CSS 語法 |
| _1-33_ | [emotion](v5/ch01-before-webpack/03-new-tech/emotion)                         | 演示使用 Emotion 在 JavaScript 中撰寫 CSS 樣式  |
| _1-35_ | [pug](v5/ch01-before-webpack/03-new-tech/pug)                                 | 演示使用 Pug 作為 HTML 的模板引擎               |
| _1-35_ | [vue-template-syntax](v5/ch01-before-webpack/03-new-tech/vue-template-syntax) | 演示使用 Vue.js 的模板語法撰寫 HTML             |
| _1-36_ | [react-jsx](v5/ch01-before-webpack/03-new-tech/react-jsx)                     | 演示在 JavaScript 內使用 JSX 配置 HTML 的生成   |

#### [第四節：提升網頁效能](v5/ch01-before-webpack/04-performance)

> 減少等待，增加效率。

針對不同的環境，所需的處理也有所不同，生產環境就是執行的效率優先，而開發環境則是以能提升開發效率的功能為優先。

| 頁數   | 範例                                                                         | 描述                                                               |
| ------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| _1-39_ | [min](v5/ch01-before-webpack/04-performance/min)                             | 使用壓縮後的 `.min.js` 程式碼，減少請求的負擔                      |
| _1-40_ | [redundant-import](v5/ch01-before-webpack/04-performance/redundant-import)   | 演示多餘的載入會增加請求的時間                                     |
| _1-40_ | [partial-use](v5/ch01-before-webpack/04-performance/partial-use)             | 演示只載入欲使用的程式碼可以減少請求的時間                         |
| _1-42_ | [multiple-import](v5/ch01-before-webpack/04-performance/multiple-import)     | 演示多次載入會損耗請求的效率                                       |
| _1-43_ | [single-page](v5/ch01-before-webpack/04-performance/single-page)             | 演示單頁應用可能載入不必要的資源                                   |
| _1-44_ | [single-page-async](v5/ch01-before-webpack/04-performance/single-page-async) | 演示當要使用資源時，再以延遲載入的方式請求資源，以此減少無用的請求 |

#### [第五節：各類工具的出現](v5/ch01-before-webpack/05-tools)

> 各類工具幫助開發者構築自動化流程。

由於前面幾節所介紹的改變發生，網頁應用也需要依賴工具的幫助來增加效率。

| 頁數   | 範例                                                               | 描述                                                                                       |
| ------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| _1-51_ | [npm-scripts](v5/ch01-before-webpack/05-tools/npm-scripts)         | 演示使用 npm 的 `package.json` 中的 `scripts` 屬性配置建置／執行流程                       |
| _1-52_ | [gulp-example](v5/ch01-before-webpack/05-tools/gulp-example)       | 演示使用 Gulp 建立建置／執行流程                                                           |
| _1-54_ | [browserify](v5/ch01-before-webpack/05-tools/browserify)           | 演示使用 Browserify 轉換 JavaScript 的 CommonJS 模組變為可執行於瀏覽器的原生語法           |
| _1-55_ | [gulp-browserify](v5/ch01-before-webpack/05-tools/gulp-browserify) | 演示 Gulp 與 Browserify 搭配的使用方式，將 Gulp 作為任務執行器， Browserify 作為模組綑綁器 |

### [第二章：認識 webpack](v5/ch02-getting-started)

學習 webpack 的基礎概念與配置方式。

#### [第二節：第一個 webpack 應用程式](v5/ch02-getting-started/02-first-webpack)

本節以實作的方式展示 webpack 的各項主要功能。

| 頁數   | 範例                                                                | 描述                                                     |
| ------ | ------------------------------------------------------------------- | -------------------------------------------------------- |
| _2-13_ | [simple-app](v5/ch02-getting-started/02-first-webpack/simple-app)   | 使用原始的腳本式 JavaScript 寫成的範例                   |
| _2-18_ | [zero-config](v5/ch02-getting-started/02-first-webpack/zero-config) | 將 **simple-app** 修改為使用 webpack 建置                |
| _2-21_ | [load-style](v5/ch02-getting-started/02-first-webpack/load-style)   | 使用 loader 為 **zero-config** 載入樣式表                |
| _2-23_ | [copy-html](v5/ch02-getting-started/02-first-webpack/copy-html)     | 使用 plugin 為 **load-style** 複製 HTML 至 `bundle` 目錄 |
| _2-25_ | [use-mode](v5/ch02-getting-started/02-first-webpack/use-mode)       | 使用 webpack 的模式設定 **copy-html** 的最佳化方案       |
| _2-26_ | [dev-server](v5/ch02-getting-started/02-first-webpack/dev-server)   | 使用 DevServer 做為 **use-mode** 開發伺服器              |

#### [第三節：安裝 webpack](v5/ch02-getting-started/03-install-webpack)

本節介紹如何安裝 webpack 。

| 頁數   | 範例                                                                                            | 描述                          |
| ------ | ----------------------------------------------------------------------------------------------- | ----------------------------- |
| _2-29_ | [local-install](v5/ch02-getting-started/03-install-webpack/local-install)                       | 安裝 webpack 後的專案         |
| _2-29_ | [install-specific-version](v5/ch02-getting-started/03-install-webpack/install-specific-version) | 安裝特定版本 webpack 後的專案 |
| _2-29_ | [update-webpack](v5/ch02-getting-started/03-install-webpack/update-webpack)                     | 更新 webpack 前的專案         |
| _2-31_ | [latest-version](v5/ch02-getting-started/03-install-webpack/latest-version)                     | 安裝尚未釋出的 webpack 版本   |
| _2-31_ | [specific-branch](v5/ch02-getting-started/03-install-webpack/specific-branch)                   | 安裝特定 branch 的 webpack    |
| _2-31_ | [specific-tag](v5/ch02-getting-started/03-install-webpack/specific-tag)                         | 安裝特定 tag 的 webpack       |

#### [第四節：使用 webpack](v5/ch02-getting-started/04-use-webpack)

使用 CLI 與配置文件操作 webpack 。

| 頁數   | 範例                                                                  | 描述                                 |
| ------ | --------------------------------------------------------------------- | ------------------------------------ |
| _2-36_ | [cli-config](v5/ch02-getting-started/04-use-webpack/cli-config)       | 使用 CLI 參數配置 webpack            |
| _2-38_ | [config-file](v5/ch02-getting-started/04-use-webpack/config-file)     | 使用配置檔設定 webpack               |
| _2-39_ | [cli-plus-file](v5/ch02-getting-started/04-use-webpack/cli-plus-file) | CLI 參數與配置檔一起使用設定 webpack |

#### [第五節：使用 Loaders](v5/ch02-getting-started/05-use-loaders)

講解 Loaders 的使用方式。

| 頁數       | 範例                                                                              | 描述                                                        |
| ---------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| _2-44_     | [loader-css-inline](v5/ch02-getting-started/05-use-loaders/loader-css-inline)     | 將 loader 使用 inline 的方式載入樣式表                      |
| _2-45_     | [loader-style-inline](v5/ch02-getting-started/05-use-loaders/loader-style-inline) | 將複數 loader 使用 inline 的方式載入樣式表並自動插入 DOM 中 |
| _2-46_     | [css-module-inline](v5/ch02-getting-started/05-use-loaders/css-module-inline)     | 使用 inline 參數設定 loader                                 |
| _2-47_     | [css-module](v5/ch02-getting-started/05-use-loaders/css-module)                   | 使用配置檔設定 loader                                       |
| （未收入） | [loader-css](v5/ch02-getting-started/05-use-loaders/loader-css)                   | 將 loader 使用配置檔的方式載入樣式表                        |
| （未收入） | [loader-style](v5/ch02-getting-started/05-use-loaders/loader-style)               | 將複數 loader 使用配置檔的方式載入樣式表並自動插入 DOM 中   |

#### [第六節：使用 Plugins](v5/ch02-getting-started/06-use-plugins)

講述如何配置 `plugins` 。

| 頁數   | 範例                                                                        | 描述                       |
| ------ | --------------------------------------------------------------------------- | -------------------------- |
| _2-50_ | [use-config](v5/ch02-getting-started/06-use-plugins/use-config)             | 配置檔中設定 plugin        |
| _2-51_ | [multiple-plugins](v5/ch02-getting-started/06-use-plugins/multiple-plugins) | 設定複數個 plugin          |
| _2-52_ | [internal-plugins](v5/ch02-getting-started/06-use-plugins/internal-plugins) | 使用 webpack 內建的 plugin |

#### [第七節：使用 DevServer](v5/ch02-getting-started/07-use-dev-server)

介紹 DevServer 與它的使用方式。

| 頁數   | 範例                                                                             | 描述                                                                              |
| ------ | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| _2-55_ | [dev-server](v5/ch02-getting-started/07-use-dev-server/dev-server)               | 演示 DevServer 預設的自動重整功能                                                 |
| _2-55_ | [dev-server-config](v5/ch02-getting-started/07-use-dev-server/dev-server-config) | 使用 DevServer 作為開發伺服器，並使用配置檔設定 Hot Module Replacement            |
| _2-56_ | [dev-server-auto](v5/ch02-getting-started/07-use-dev-server/dev-server-auto)     | 使用 `CopyWebpackPlugin` 使建置流程包含 `index.html` ，避免需要配置 `contentBase` |

### [第三章：配置 webpack](v5/ch03-configuration)

深入講解配置中的各個選項功能。

#### [第一節：配置物件](v5/ch03-configuration/01-configuration-object)

配置物件為設定 webpack 的主要手段。

| 頁數  | 範例                                                                                             | 描述                                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| _3-3_ | [config-file](v5/ch03-configuration/01-configuration-object/config-file)                         | 使用 CLI 載入導出配置物件的配置檔                                                                                         |
| _3-3_ | [node-api](v5/ch03-configuration/01-configuration-object/node-api)                               | 使用 Node.js API 載入配置物件                                                                                             |
| _3-8_ | [webpack-init](v5/ch03-configuration/01-configuration-object/webpack-init)                       | 可以啟動 `webpack init` 產生 **created-by-webpack-init** 專案的專案                                                       |
| _3-8_ | [created-by-webpack-init](v5/ch03-configuration/01-configuration-object/created-by-webpack-init) | 由 `webpack init` 所產生的專案，說明請參考範例 [webpack-init](v5/ch03-configuration/01-configuration-object/webpack-init) |

#### [第二節：入口 Entry](v5/ch03-configuration/02-entry)

講解 webpack 配置項 `entry` 的使用方式。

| 頁數   | 範例                                                                                          | 描述                                                                        |
| ------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| _3-10_ | [entry-default](v5/ch03-configuration/02-entry/entry-default)                                 | 預設的 `entry` 配置                                                         |
| _3-11_ | [entry-string](v5/ch03-configuration/02-entry/entry-string)                                   | 使用字串設置 `entry`                                                        |
| _3-12_ | [entry-array](v5/ch03-configuration/02-entry/entry-array)                                     | 使用陣列設置多個入口                                                        |
| _3-13_ | [entry-object](v5/ch03-configuration/02-entry/entry-object)                                   | 使用物件以指定的 `key` 值設定不同的入口，並以 `key` 為區別輸出複數個 bundle |
| _3-14_ | [entry-object-array](v5/ch03-configuration/02-entry/entry-object-array)                       | 使用物件以指定的 `key` 值配置有名稱的 bundle ，並以陣列設定多個入口         |
| _3-15_ | [entry-object-object-string](v5/ch03-configuration/02-entry/entry-object-object-string)       | 以物件為物件的值時， `import` 屬性可以設定入口點                            |
| _3-15_ | [entry-object-object-array](v5/ch03-configuration/02-entry/entry-object-object-array)         | 以物件為物件的值時， `import` 屬性以陣列設定多個入口點                      |
| _3-15_ | [entry-object-object-filename](v5/ch03-configuration/02-entry/entry-object-object-filename)   | 以物件為物件的值時， `filename` 屬性可以設定 bundle 的檔案名稱              |
| _3-16_ | [entry-object-object-depend-on](v5/ch03-configuration/02-entry/entry-object-object-depend-on) | 以物件為物件的值時，使用 `dependOn` 設定相依資源                            |
| _3-17_ | [entry-object-object-runtime](v5/ch03-configuration/02-entry/entry-object-object-runtime)     | 以物件為物件的值時，使用 `runtime` 屬性提取 runtime 的程式碼為獨立的檔案    |
| _3-19_ | [entry-func](v5/ch03-configuration/02-entry/entry-func)                                       | 使用函式設定 `entry` ，延遲入口點的載入時機                                 |
| _3-19_ | [entry-func-array](v5/ch03-configuration/02-entry/entry-func-array)                           | 使用函式設定 `entry` ，並且以陣列為回傳值，延遲多個入口點的載入時機         |
| _3-20_ | [entry-func-promise](v5/ch03-configuration/02-entry/entry-func-promise)                       | 使用函式設定 `entry` ，並且傳回 promise ，以非同步的方式載入入口點          |
| _3-20_ | [diff-type-entry](v5/ch03-configuration/02-entry/diff-type-entry)                             | 設定非 JavaScript 類型的入口點                                              |
| _3-21_ | [context](v5/ch03-configuration/02-entry/context)                                             | 使用 `context` 設定基底路徑                                                 |

#### [第三節：輸出 Output](v5/ch03-configuration/03-output)

講解 webpack 配置項 `output` 的使用方式。

| 頁數   | 範例                                                                                 | 描述                                               |
| ------ | ------------------------------------------------------------------------------------ | -------------------------------------------------- |
| _3-23_ | [output-default](v5/ch03-configuration/03-output/output-default)                     | 預設的 `output` 配置                               |
| _3-24_ | [output-path](v5/ch03-configuration/03-output/output-path)                           | 使用 `output` 的 `path` 屬性設置輸出目錄           |
| _3-25_ | [output-path-hash](v5/ch03-configuration/03-output/output-path-hash)                 | 以 `[fullhash]` 設定輸出目錄                       |
| _3-26_ | [output-filename](v5/ch03-configuration/03-output/output-filename)                   | 使用 `output` 的 `filename` 設定輸出的 bundle 名稱 |
| _3-27_ | [output-filename-multi](v5/ch03-configuration/03-output/output-filename-multi)       | 使用 template string 設定多個輸出時的 bundle 名稱  |
| _3-28_ | [output-filename-func](v5/ch03-configuration/03-output/output-filename-func)         | 使用函式決定輸出的 bundle 名稱                     |
| _3-29_ | [output-filename-template](v5/ch03-configuration/03-output/output-filename-template) | 以不同的 template string 展示輸出的 bundle 名稱    |
| _3-32_ | [output-filename-hash](v5/ch03-configuration/03-output/output-filename-hash)         | 比較不同的 hash template string 所輸出的值         |
| _3-35_ | [output-publicpath](v5/ch03-configuration/03-output/output-publicpath)               | 以 `publicPath` 設定伺服器中請求的位置             |
| _3-27_ | [output-chunkfilename](v5/ch03-configuration/03-output/output-chunkfilename)         | 以 `chunkFilename` 設定 **non-initial** 的名稱     |

#### [第四節：解析 Resolve](v5/ch03-configuration/04-resolve)

講解 webpack 是如何知道引入的模組位置，以及 `resolve` 屬性的意義及設定方式。

| 頁數   | 範例                                                                        | 描述                                              |
| ------ | --------------------------------------------------------------------------- | ------------------------------------------------- |
| _3-40_ | [absolute](v5/ch03-configuration/04-resolve/absolute)                       | 使用絕對路徑引入模組                              |
| _3-41_ | [relative](v5/ch03-configuration/04-resolve/relative)                       | 使用相對路徑引入模組                              |
| _3-41_ | [module](v5/ch03-configuration/04-resolve/module)                           | 使用模組路徑引入模組                              |
| _3-43_ | [resolve-alias](v5/ch03-configuration/04-resolve/resolve-alias)             | 使用 `resolve.alias` 設定路徑別名                 |
| _3-44_ | [resolve-alias-npm](v5/ch03-configuration/04-resolve/resolve-alias-npm)     | 將模組路徑設為路徑別名來引入第三方庫              |
| _3-45_ | [resolve-modules](v5/ch03-configuration/04-resolve/resolve-modules)         | 使用 `resolve.module` 設定找尋模組的目錄          |
| _3-47_ | [resolve-main-fields](v5/ch03-configuration/04-resolve/resolve-main-fields) | 使用 `resolve.mainFields` 決定 npm 模組的引入檔案 |
| _3-48_ | [mainfiles](v5/ch03-configuration/04-resolve/mainfiles)                     | 使用 `resolve.mainFiles` 決定預設引入檔案         |
| _3-49_ | [extensions](v5/ch03-configuration/04-resolve/extensions)                   | 使用 `resolve.extensions` 設定預設副檔名          |

#### [第五節：模組 Module 的規則判定](v5/ch03-configuration/05-module)

本節為 `module` 屬性的設定方式解說的第一部分，講解 `module` 屬性中的規則如何匹配。

| 頁數       | 範例                                                                                     | 描述                                                         |
| ---------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| _3-51_     | [css-module](v5/ch03-configuration/05-module/css-module)                                 | 演示 `module` 屬性的 `test` 與 `use`                         |
| _3-52_     | [rules-test-include](v5/ch03-configuration/05-module/rules-test-include)                 | 使用 `module` 屬性的 `include` 包含模組                      |
| _3-53_     | [rules-exclude](v5/ch03-configuration/05-module/rules-exclude)                           | 使用 `module` 屬性的 `exclude` 排除模組                      |
| _3-54_     | [rules-resource-query](v5/ch03-configuration/05-module/rules-resource-query)             | 使用 `module` 屬性的 `resourceQuery` 判斷 query 參數是否匹配 |
| _3-56_     | [rules-test-include-exclude](v5/ch03-configuration/05-module/rules-test-include-exclude) | 使用多個判斷類屬性決定模組是否匹配                           |
| _3-58_     | [rules-issuer-and](v5/ch03-configuration/05-module/rules-issuer-and)                     | 使用 `issuer` 判斷請求資源是否匹配                           |
| _3-59_     | [rules-multiple](v5/ch03-configuration/05-module/rules-multiple)                         | 演示同個資源同時匹配多個條件                                 |
| _3-61_     | [rules-oneof](v5/ch03-configuration/05-module/rules-oneof)                               | 使用 `oneOf` 屬性在同時匹配多個條件時只作用其中一個          |
| （未收入） | [loader-call](v5/ch03-configuration/05-module/loader-call)                               | 演示多條件匹配與 `oneOf` 同時作用的效果                      |

#### [第六節：模組 Module 的處理](v5/ch03-configuration/06-module-use)

本節為 `module` 屬性的設定方式解說的第二篇，講解 `module` 屬性如何設定處理程序。

| 頁數       | 範例                                                                         | 描述                                      |
| ---------- | ---------------------------------------------------------------------------- | ----------------------------------------- |
| _3-67_     | [use-string](v5/ch03-configuration/06-module-use/use-string)                 | 使用字串設定 loader 的來源                |
| _3-68_     | [use-obj](v5/ch03-configuration/06-module-use/use-obj)                       | 使用物件設定 loader 的來源與設定參數      |
| _3-69_     | [use-func](v5/ch03-configuration/06-module-use/use-func)                     | 使用函式設定 loader                       |
| _3-70_     | [use-array](v5/ch03-configuration/06-module-use/use-array)                   | 使用陣列設定多個 loader                   |
| _3-72_     | [use-short](v5/ch03-configuration/06-module-use/use-short)                   | 使用簡寫減少 `use` 一層的 loader 設定     |
| _3-74_     | [loader-order](v5/ch03-configuration/06-module-use/loader-order)             | 使用 `enforce` 改變預設 loader 的載入順序 |
| _3-77_     | [no-parse](v5/ch03-configuration/06-module-use/no-parse)                     | 使用 `noParse` 屬性避免解析特定模組       |
| _3-78_     | [parser](v5/ch03-configuration/06-module-use/parser)                         | 使用 `parser` 決定特定模組語意如何設定    |
| （未收入） | [use-loader-options](v5/ch03-configuration/06-module-use/use-loader-options) | 演示使用 `options` 設定 loader            |

#### [第七節：插件 Plugins](v5/ch03-configuration/07-plugins)

本節說明如何配置 Plugins 。

| 頁數   | 範例                                                                          | 描述                                                             |
| ------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| _3-81_ | [plugin-copy](v5/ch03-configuration/07-plugins/plugin-copy)                   | 演示使用 `CopyPlugin` 複製檔案至目標目錄中                       |
| _3-81_ | [plugin-css](v5/ch03-configuration/07-plugins/plugin-css)                     | 演示在 loader 中設定 `MiniCssExtractPlugin` 所提供的 loader      |
| _3-82_ | [plugin-css-minimizer](v5/ch03-configuration/07-plugins/plugin-css-minimizer) | 演示在 `optimization` 中使用 `CssMinimizerPlugin` 作為 minimizer |

#### [第八節：監聽 Watch](v5/ch03-configuration/08-watch)

講解 webpack 的監聽模式，以及 `watch` 屬性與 `watchOptions` 設定項與設定方式。

| 頁數   | 範例                                                          | 描述                                |
| ------ | ------------------------------------------------------------- | ----------------------------------- |
| _3-85_ | [simple-watch](v5/ch03-configuration/08-watch/simple-watch)   | 設定 `watch` 屬性，開啟監控功能     |
| _3-87_ | [watch-options](v5/ch03-configuration/08-watch/watch-options) | 演示各個監控功能屬性的效果          |
| _3-89_ | [dev-server](v5/ch03-configuration/08-watch/dev-server)       | 演示使用 DevServer 預設開啟監控模式 |

#### [第九節： Source Map](v5/ch03-configuration/09-source-map)

講解 Source Map 的功用及原理。

| 頁數       | 範例                                                                         | 描述                                                   |
| ---------- | ---------------------------------------------------------------------------- | ------------------------------------------------------ |
| _3-91_     | [without-source-map](v5/ch03-configuration/09-source-map/without-source-map) | 演示在開發時，沒有 source map 的困難                   |
| _3-93_     | [source-map](v5/ch03-configuration/09-source-map/source-map)                 | 演示使用 source map 解決開發時程式碼對應至原始碼的問題 |
| _3-97_     | [babel-source-map](v5/ch03-configuration/09-source-map/babel-source-map)     | 以 Babel 說明 source map 的原理                        |
| （未收入） | [simple-source-map](v5/ch03-configuration/09-source-map/simple-source-map)   | 操作 webpack 建置帶有 source map 的 bundle             |

#### [第十節： Dev Tool](v5/ch03-configuration/10-devtool)

講解在 webpack 中使用 `devTools` 屬性設定 Source Map 的方式。

| 頁數    | 範例                                                | 描述                      |
| ------- | --------------------------------------------------- | ------------------------- |
| _3-107_ | [devtool](v5/ch03-configuration/10-devtool/devtool) | 演示不同的 `devtool` 效果 |

#### [第十一節：最佳化 Optimization 與模式 Mode](v5/ch03-configuration/11-optimization)

講述如何使用 webpack 的 `optimization` 配置各種輸出以配合設定最佳化，並以 Mode 輔助做特定的環境配置。

| 頁數    | 範例                                                                               | 描述                                                          |
| ------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| _3-125_ | [module-ids](v5/ch03-configuration/11-optimization/module-ids)                     | 演示使用 `moduleIds` 屬性修改 webpack 中生成 module id 的方式 |
| _3-127_ | [chunk-ids](v5/ch03-configuration/11-optimization/chunk-ids)                       | 演示使用 `chunkIds` 屬性修改 webpack 中 chunk 的 id 生成方式  |
| _3-130_ | [node-env](v5/ch03-configuration/11-optimization/node-env)                         | 使用 `node-env` 修改環境變數                                  |
| _3-131_ | [flag-included-chunks](v5/ch03-configuration/11-optimization/flag-included-chunks) | 使用 `flagIncludeChunks` 來決定是否要分出各個 chunk 資源      |
| _3-134_ | [side-effects](v5/ch03-configuration/11-optimization/side-effects)                 | 對非全域的模組刪減未引入的變數                                |
| _3-136_ | [used-exports](v5/ch03-configuration/11-optimization/used-exports)                 | 避免未引入的模組引入                                          |
| _3-136_ | [concatenate-modules](v5/ch03-configuration/11-optimization/concatenate-modules)   | 使用 `concatenateModules` 將模組合併                          |
| _3-137_ | [minimize](v5/ch03-configuration/11-optimization/minimize)                         | 使用 `minimize` 將輸出 bundle 壓縮                            |

#### [第十二節：配置檔的種類](v5/ch03-configuration/12-configuration-types)

本節說明多種類型的配置檔使用方式。

| 頁數    | 範例                                                                            | 描述                                        |
| ------- | ------------------------------------------------------------------------------- | ------------------------------------------- |
| _3-140_ | [cli-file](v5/ch03-configuration/12-configuration-types/cli-file)               | 使用導出配置物件的檔案作為配置檔            |
| _3-141_ | [export-function](v5/ch03-configuration/12-configuration-types/export-function) | 使用導出函式的檔案作為配置檔                |
| _3-143_ | [export-promise](v5/ch03-configuration/12-configuration-types/export-promise)   | 使用 Promise 導出，非同步取得配置的內容     |
| _3-144_ | [export-array](v5/ch03-configuration/12-configuration-types/export-array)       | 使用陣列導出多個配置，並同時執行多種建置    |
| _3-144_ | [parallelism](v5/ch03-configuration/12-configuration-types/parallelism)         | 藉由導出 `parallelism` 來控制同步建置的數量 |

#### [第十三節：使用 Node.js API 操作 webpack](v5/ch03-configuration/13-use-node-api)

學習如何使用 Node.js API 來操作 webpack 。

| 頁數    | 範例                                                                                                 | 描述                                                  |
| ------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| _3-146_ | [node-interface](v5/ch03-configuration/13-use-node-api/node-interface)                               | 使用 Node.js API 叫用 webpack 執行建置                |
| _3-147_ | [node-interface-callback](v5/ch03-configuration/13-use-node-api/node-interface-callback)             | 使用 Node.js API 中的 Callback 函式取得建置資訊並輸出 |
| _3-148_ | [node-interface-run](v5/ch03-configuration/13-use-node-api/node-interface-run)                       | 叫用 `run` 執行建置                                   |
| _3-148_ | [node-interface-watch](v5/ch03-configuration/13-use-node-api/node-interface-watch)                   | 使用 `watch` 啟動監控模式並執行建置                   |
| _3-151_ | [node-interface-multiple](v5/ch03-configuration/13-use-node-api/node-interface-multiple)             | 使用陣列格式的配置執行複數個建置                      |
| _3-152_ | [node-plugins](v5/ch03-configuration/13-use-node-api/node-plugins)                                   | 使用 `apply` 為 `compiler` 注入 plugin                |
| _3-154_ | [node-interface-error-handling](v5/ch03-configuration/13-use-node-api/node-interface-error-handling) | 演示 Node.js API 錯誤訊息的處理                       |

### [第四章：真實世界的 webpack](v5/ch04-real-world)

以開發時會遇到的實際情形進行 webpack 的配置示範。

#### [第一節：使用 JavaScript](v5/ch04-real-world/01-javascript)

說明如何配置 webpack 用來開發 JavaScript 應用程式。

| 頁數  | 範例                                                                      | 描述                                     |
| ----- | ------------------------------------------------------------------------- | ---------------------------------------- |
| _4-3_ | [babel-plugin](v5/ch04-real-world/01-javascript/babel-plugin)             | 使用 CLI 載入 Babel plugin 來轉換程式碼  |
| _4-4_ | [babel-config](v5/ch04-real-world/01-javascript/babel-config)             | 使用配置檔載入 Babel plugin 來轉換程式碼 |
| _4-5_ | [babel-preset](v5/ch04-real-world/01-javascript/babel-preset)             | 使用 Babel preset 替換複數個 plugin      |
| _4-6_ | [babel-browserslist](v5/ch04-real-world/01-javascript/babel-browserslist) | 使用 Babel 與 Browserslist 配置目標環境  |
| _4-6_ | [babel-polyfill](v5/ch04-real-world/01-javascript/babel-polyfill)         | 使用 Babel polyfill 對新的語意做轉換     |
| _4-8_ | [babel-webpack](v5/ch04-real-world/01-javascript/babel-webpack)           | 使用 webpack 配置 Babel 做建置           |

#### [第二節：使用 Style](v5/ch04-real-world/02-style)

講述如何在 webpack 中處理 Style 樣式表。

| 頁數   | 範例                                                                         | 描述                                               |
| ------ | ---------------------------------------------------------------------------- | -------------------------------------------------- |
| _4-11_ | [postcss-cli-example](v5/ch04-real-world/02-style/postcss-cli-example)       | 使用 PostCSS 的 CLI 配置轉換 CSS 程式碼            |
| _4-13_ | [postcss-plugin](v5/ch04-real-world/02-style/postcss-plugin)                 | 添加 PostCSS plugin 執行特定的轉換                 |
| _4-13_ | [postcss-config](v5/ch04-real-world/02-style/postcss-config)                 | 使用配置檔配置 PostCSS 的轉換方式                  |
| _4-14_ | [postcss-browserslist](v5/ch04-real-world/02-style/postcss-browserslist)     | 使用 PostCSS 與 Browserslist 配置目標環境          |
| _4-14_ | [postcss-webpack-loader](v5/ch04-real-world/02-style/postcss-webpack-loader) | 在 webpack 中使用 `postcss-loader` 處理 CSS        |
| _4-15_ | [postcss-css-loader](v5/ch04-real-world/02-style/postcss-css-loader)         | 在 webpack 中配置 `css-loader` 讀取 CSS            |
| _4-16_ | [postcss-style-loader](v5/ch04-real-world/02-style/postcss-style-loader)     | 在 webpack 中配置 `style-loader` 載入 CSS 至頁面   |
| _4-17_ | [extract-css](v5/ch04-real-world/02-style/extract-css)                       | 使用 `mini-css-extract-plugin` 拆分 CSS 為獨立檔案 |

#### [第三節：載入圖片資源](v5/ch04-real-world/03-image)

介紹如何使用 webpack 載入圖片資源，並對載入做最佳化處理。

| 頁數   | 範例                                                                                   | 描述                                             |
| ------ | -------------------------------------------------------------------------------------- | ------------------------------------------------ |
| _4-21_ | [load-image-by-path](v5/ch04-real-world/03-image/load-image-by-path)                   | 將圖片以原本靜態檔案的方式載入                   |
| _4-23_ | [load-image-by-url](v5/ch04-real-world/03-image/load-image-by-url)                     | 將圖片轉為 Data URL 載入                         |
| _4-24_ | [load-image-by-auto](v5/ch04-real-world/03-image/load-image-by-auto)                   | 將圖片依照大小切換靜態檔案與 Data URL 的方式載入 |
| _4-24_ | [load-image-by-auto-max-size](v5/ch04-real-world/03-image/load-image-by-auto-max-size) | 修改切換載入方式的圖片大小                       |
| _4-25_ | [load-svg](v5/ch04-real-world/03-image/load-svg)                                       | 將 SVG 圖片以 HTML tag 的格式籤入頁面            |

#### [第四節：配置多模式專案](v5/ch04-real-world/04-config-setup)

講解如何在同一專案中配置多種模式的 webpack 設定。

| 頁數   | 範例                                                    | 描述                            |
| ------ | ------------------------------------------------------- | ------------------------------- |
| _4-27_ | [function](v5/ch04-real-world/04-config-setup/function) | 使用函式設定配置檔              |
| _4-29_ | [merge](v5/ch04-real-world/04-config-setup/merge)       | 使用 `webpack-merge` 設定配置檔 |
| _4-30_ | [chain](v5/ch04-real-world/04-config-setup/chain)       | 使用 `webpack-chain` 設定配置檔 |

#### [第五節： Module Federation](v5/ch04-real-world/05-module-federation)

本節介紹 Module Federation 用途與使用方式。

| 頁數   | 範例                                                                       | 描述                   |
| ------ | -------------------------------------------------------------------------- | ---------------------- |
| _4-34_ | [host-and-remote](v5/ch04-real-world/05-module-federation/host-and-remote) | 演示 Module Federation |

### [第五章：使用 webpack 優化環境體驗](v5/ch05-optimization)

開發環境減少重新載入時的麻煩，生產環境降低請求的時間消耗。

#### [第一節：建立 webpack 開發環境](v5/ch05-optimization/01-development)

使用 webpack 建立大型專案的開發環境。

| 頁數  | 範例                                                                     | 描述                                         |
| ----- | ------------------------------------------------------------------------ | -------------------------------------------- |
| _5-2_ | [development-mode](v5/ch05-optimization/01-development/development-mode) | 使用 development 作為開發時的模式            |
| _5-3_ | [source-map](v5/ch05-optimization/01-development/source-map)             | 使用 source map 解決開發時程式碼對應問題     |
| _5-4_ | [dev-server](v5/ch05-optimization/01-development/dev-server)             | 使用 DevServer 作為開發伺服器                |
| _5-5_ | [auto-create-html](v5/ch05-optimization/01-development/auto-create-html) | 使用 `html-webpack-plugin` 產生 `index.html` |
| _5-6_ | [reload-config](v5/ch05-optimization/01-development/reload-config)       | 修改配置後自動重新建置                       |
| _5-7_ | [hmr](v5/ch05-optimization/01-development/hmr)                           | 手動設定 Hot Module Replacement              |

#### [第二節：建立 webpack 生產環境 - 減小體積](v5/ch05-optimization/02-production-minimize)

講述使用 webpack 建立生產環境中代碼減少體積的優化方式。

| 頁數   | 範例                                                                                       | 描述                                             |
| ------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| _5-10_ | [production-mode](v5/ch05-optimization/02-production-minimize/production-mode)             | 使用 production 作為生產環境的建置模式           |
| _5-11_ | [optimization-minimize](v5/ch05-optimization/02-production-minimize/optimization-minimize) | 使用 `optimization` 啟用最小化 bundle 體積的功能 |
| _5-12_ | [optimization-node-env](v5/ch05-optimization/02-production-minimize/optimization-node-env) | 使用環境變數決定執行的程式碼                     |
| _5-14_ | [css-minimize](v5/ch05-optimization/02-production-minimize/css-minimize)                   | 壓縮 CSS 的體積                                  |
| _5-15_ | [extract-css-minimize](v5/ch05-optimization/02-production-minimize/extract-css-minimize)   | 壓縮獨立抽出的 CSS 體積                          |
| _5-16_ | [minify-image](v5/ch05-optimization/02-production-minimize/minify-image)                   | 壓縮圖片的體積                                   |
| _5-17_ | [minify-svg](v5/ch05-optimization/02-production-minimize/minify-svg)                       | 壓縮 SVG 的體積                                  |

#### [第三節：建立 webpack 生產環境 - 切割代碼](v5/ch05-optimization/03-production-code-splitting)

講述如何在生產環境中適當的切割代碼，讓應用程式提升效能。

| 頁數   | 範例                                                                           | 描述                                                     |
| ------ | ------------------------------------------------------------------------------ | -------------------------------------------------------- |
| _5-20_ | [entry](v5/ch05-optimization/03-production-code-splitting/entry)               | 使用 `entry` 的物件設定，切割為複數個 bundle             |
| _5-21_ | [import](v5/ch05-optimization/03-production-code-splitting/import)             | 使用 `import()` 動態引入模組，藉以切割 bundle            |
| _5-24_ | [split-chunks](v5/ch05-optimization/03-production-code-splitting/split-chunks) | 使用 `optimization` 的 `splitChunks` 屬性手動切割 bundle |

#### [第四節：建立 webpack 生產環境 - 快取](v5/ch05-optimization/04-production-caching)

講述如何使用瀏覽器盡可能的保持快取，不用重新請求資源。

| 頁數   | 範例                                                                                | 描述                                                                                                       |
| ------ | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| _5-28_ | [caching](v5/ch05-optimization/04-production-caching/caching)                       | 演示瀏覽器快取的功能                                                                                       |
| _5-29_ | [update-caching](v5/ch05-optimization/04-production-caching/update-caching)         | 使用 `[fullhash]` template string 定義 bundle 檔名，在更新程式碼後可以產生不同檔名，促使瀏覽器重新抓取資源 |
| _5-31_ | [dependency](v5/ch05-optimization/04-production-caching/dependency)                 | 演示修改單一模組程式碼後，連其他的模組也因為 `[fullhash]` 的修改成需要重新載入                             |
| _5-32_ | [extract-dependency](v5/ch05-optimization/04-production-caching/extract-dependency) | 獨立各個 Chunk ，使未修改的模組可以繼續使用快取                                                            |
| _5-34_ | [extract-runtime](v5/ch05-optimization/04-production-caching/extract-runtime)       | 獨立輸出 runtime 的 bundle ，藉此延長快取的時間                                                            |
| _5-35_ | [inline-runtime](v5/ch05-optimization/04-production-caching/inline-runtime)         | runtime 程式碼較少，可以直接嵌入 `index.html` 中                                                           |
| _5-37_ | [stable-module-id](v5/ch05-optimization/04-production-caching/stable-module-id)     | 設定固定的 module id 避免其破壞快取                                                                        |

#### [第五節：建立 webpack 生產環境 - 追蹤建置](v5/ch05-optimization/05-production-analyze)

講述如何使用分析工具解析 bundle 內模組的組合。

| 頁數   | 範例                                                                          | 描述                                        |
| ------ | ----------------------------------------------------------------------------- | ------------------------------------------- |
| _5-39_ | [performance](v5/ch05-optimization/05-production-analyze/performance)         | 使用 `performance` 屬性設定輸出 bundle 狀態 |
| _5-41_ | [cli-args](v5/ch05-optimization/05-production-analyze/cli-args)               | 使用 CLI 參數 `progress` 輸出建置細節       |
| _5-42_ | [cli-args-json](v5/ch05-optimization/05-production-analyze/cli-args-json)     | 使用 CLI 參數 `json` 導出建置細節           |
| _5-43_ | [dashboard-demo](v5/ch05-optimization/05-production-analyze/dashboard-demo)   | 使用 `webpack-dashboard` 監控 bundle 狀態   |
| _5-44_ | [bundlesize-demo](v5/ch05-optimization/05-production-analyze/bundlesize-demo) | 使用 `bundlesize` 警示 bundle 體積過大      |

### [第六章：解構 webpack](v5/ch06-inside)

學習 webpack 內部的運作機制。

#### [第一節： Bundle 導讀](v5/ch06-inside/01-read-bundle)

本節解析 Bundle 的程式碼。

| 頁數  | 範例                                           | 描述            |
| ----- | ---------------------------------------------- | --------------- |
| _6-2_ | [simple](v5/ch06-inside/01-read-bundle/simple) | Bundle 架構說明 |

#### [第二節：自己動手寫 webpack](v5/ch06-inside/02-write-your-webpack)

本節目標在於實作一個簡易的打包工具。

| 頁數   | 範例                                                              | 描述                       |
| ------ | ----------------------------------------------------------------- | -------------------------- |
| _6-16_ | [read-file](v5/ch06-inside/02-write-your-webpack/read-file)       | 讀入入口模組               |
| _6-17_ | [ast-parser](v5/ch06-inside/02-write-your-webpack/ast-parser)     | 將程式碼內容轉為 AST       |
| _6-19_ | [tree-walker](v5/ch06-inside/02-write-your-webpack/tree-walker)   | 巡覽找出引入語法           |
| _6-20_ | [create-asset](v5/ch06-inside/02-write-your-webpack/create-asset) | 建立所有資源的資訊物件     |
| _6-22_ | [create-graph](v5/ch06-inside/02-write-your-webpack/create-graph) | 依照資源的資訊建立相依圖   |
| _6-23_ | [mapping](v5/ch06-inside/02-write-your-webpack/mapping)           | 為每個資源填入 ID 來做對應 |
| _6-27_ | [bundle](v5/ch06-inside/02-write-your-webpack/bundle)             | 實作打包機制               |
| _6-27_ | [write-file](v5/ch06-inside/02-write-your-webpack/write-file)     | 輸出 bundle 檔案           |

#### [第三節： Loader 的內部構造](v5/ch06-inside/03-inside-loader)

本節介紹 Loader 內部的運作方式。

| 頁數   | 範例                                                               | 描述                                                 |
| ------ | ------------------------------------------------------------------ | ---------------------------------------------------- |
| _6-31_ | [single](v5/ch06-inside/03-inside-loader/single)                   | 基本的 loader                                        |
| _6-33_ | [multiple](v5/ch06-inside/03-inside-loader/multiple)               | 演示連接多個 loader 時的結構與用法                   |
| _6-34_ | [async](v5/ch06-inside/03-inside-loader/async)                     | 非同步的 loader 的結構與用法                         |
| _6-35_ | [get-options](v5/ch06-inside/03-inside-loader/get-options)         | loader 內使用 `getOptions` 取得設定                  |
| _6-36_ | [context](v5/ch06-inside/03-inside-loader/context)                 | loader 內使用 `context` 取得模組所在的目錄           |
| _6-36_ | [add-dependency](v5/ch06-inside/03-inside-loader/add-dependency)   | loader 內使用 `addDependency` 設定額外的依賴         |
| _6-37_ | [pitching](v5/ch06-inside/03-inside-loader/pitching)               | 演示 loader 的 pitching 階段                         |
| _6-39_ | [pitching-args](v5/ch06-inside/03-inside-loader/pitching-args)     | 演示 loader 的 pitching 參數功能                     |
| _6-39_ | [pitching-data](v5/ch06-inside/03-inside-loader/pitching-data)     | 演示 loader 的 pitching 中使用 `data` 傳遞資料       |
| _6-40_ | [pitching-return](v5/ch06-inside/03-inside-loader/pitching-return) | 在 loader 的 pitching 階段使用回傳停止 loader 的執行 |
| _6-41_ | [emit-error](v5/ch06-inside/03-inside-loader/emit-error)           | 在 loader 內使用 `emitError` 輸出錯誤                |
| _6-42_ | [throw-error](v5/ch06-inside/03-inside-loader/throw-error)         | 在 loader 內使用 `throw` 拋出錯誤並停止執行          |
| _6-42_ | [callback-error](v5/ch06-inside/03-inside-loader/callback-error)   | 在 loader 內使用 `callback` 拋出錯誤並停止執行       |

#### [第四節： Plugin 的內部構造](v5/ch06-inside/04-inside-plugin)

本節說明 Plugin 的內容運作方式。

| 頁數   | 範例                                                       | 描述                                      |
| ------ | ---------------------------------------------------------- | ----------------------------------------- |
| _6-44_ | [hello-world](v5/ch06-inside/04-inside-plugin/hello-world) | 基本的 plugin                             |
| _6-45_ | [hooks](v5/ch06-inside/04-inside-plugin/hooks)             | 演示在 plugin 中註冊各個 hooks 的執行程式 |
| _6-47_ | [done](v5/ch06-inside/04-inside-plugin/done)               | 使用 hook `done` 演示不同的註冊方式       |

### [第七章：寫在 webpack 之後](v5/ch07-after-webpack)

新興的建置工具出現。

#### [第一節：使用 Snowpack 以原生模組系統建置專案](v5/ch07-after-webpack/01-snowpack)

講述如何使用 Snowpack 以原生模組系統建置專案。

| 頁數       | 範例                                                               | 描述                                          |
| ---------- | ------------------------------------------------------------------ | --------------------------------------------- |
| _7-4_      | [webpack-demo](v5/ch07-after-webpack/01-snowpack/webpack-demo)     | 使用 webpack 打包                             |
| _7-5_      | [snowpack-demo](v5/ch07-after-webpack/01-snowpack/snowpack-demo)   | 演示使用 snowpack 打包                        |
| _7-7_      | [snowpack-css](v5/ch07-after-webpack/01-snowpack/snowpack-css)     | 使用 snowpack 載入 CSS 樣式表                 |
| _7-8_      | [snowpack-babel](v5/ch07-after-webpack/01-snowpack/snowpack-babel) | 在 snowpack 內使用 babel 轉換 JavaScript 代碼 |
| （未收入） | [webpack-babel](v5/ch07-after-webpack/01-snowpack/webpack-babel)   | 在 webpack 內使用 babel 轉換 JavaScript 代碼  |
| （未收入） | [vite-demo](v5/ch07-after-webpack/01-snowpack/vite-demo)           | 演示使用 vite 載入專案                        |
