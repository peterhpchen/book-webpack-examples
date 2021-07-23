(() => {
  // webpackBootstrap
  'use strict';
  // 除了入口模組外的其他模組內容
  var __webpack_modules__ = [
    ,
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__); // 將此模組定義為 ES2015 Module
      // 加上名為 default 的導出值
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__, // default 內容為 __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */
      });
      /* harmony import */ var _demoName_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(2); // 取得 Id 為 2 的模組
      // ch05-inside/01-read-bundle/simple/src/message.js

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = `hello ${_demoName_js__WEBPACK_IMPORTED_MODULE_0__.demoName}`;
    },
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__); // 將此模組定義為 ES2015 Module
      // 加上名為 demoName 的導出值
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ demoName: () => /* binding */ demoName, // demoName 的內容為 demoName
        /* harmony export */
      });
      // ch05-inside/01-read-bundle/simple/src/demoName.js
      const demoName = 'simple';
    },
  ];
  /************************************************************************/
  // The module cache
  // 模組的快取
  var __webpack_module_cache__ = {};

  // The require function
  // 取得模組導出內容
  function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId]; // 取出此 Id 模組的 cache
    if (cachedModule !== undefined) {
      return cachedModule.exports; // 有 cache 的話直接回傳
    }
    // Create a new module (and put it into the cache)
    // 初始一個新的模組，並將其加入 cache 中
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {},
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__); // 執行模組內容

    // Return the exports of the module
    return module.exports; // 導出內容
  }

  /************************************************************************/
  /* webpack/runtime/define property getters */
  (() => {
    // define getter functions for harmony exports
    // 設定導出值
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        // 如果有此值，但還未加到 exports 中時
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          // 為 exports 加上此值
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  /* webpack/runtime/hasOwnProperty shorthand */
  (() => {
    // 確認物件是否有此屬性
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  /* webpack/runtime/make namespace object */
  (() => {
    // define __esModule on exports
    // 定義 exports 為 ES2015 Module
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' }); // 使 exports.toString() 輸出 Module
      }
      Object.defineProperty(exports, '__esModule', { value: true }); // 在 exports 加上 __esModule 以表示為 ES2015 Module
    };
  })();

  /************************************************************************/
  // Bundle 的導出值
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  // 入口模組 ./src/index.js
  (() => {
    __webpack_require__.r(__webpack_exports__); // 將此模組定義為 ES2015 Module
    /* harmony import */ var _message_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(1); // 取得 Id 為 1 的模組
    // ch05-inside/01-read-bundle/simple/src/index.js

    console.log(_message_js__WEBPACK_IMPORTED_MODULE_0__.default);
  })();
})();
