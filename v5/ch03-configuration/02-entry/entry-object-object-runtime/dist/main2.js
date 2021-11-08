'use strict';
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['main2'],
  {
    /***/ './app/index2.js':
      /*!***********************!*\
  !*** ./app/index2.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _msgCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msgCommon.js */ "./app/msgCommon.js");\n/* harmony import */ var _msg2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msg2.js */ "./app/msg2.js");\n\n\n\nconsole.log(`${_msgCommon_js__WEBPACK_IMPORTED_MODULE_0__["default"]}${_msg2_js__WEBPACK_IMPORTED_MODULE_1__["default"]}`);\n\n\n//# sourceURL=webpack:///./app/index2.js?'
        );

        /***/
      },

    /***/ './app/msg2.js':
      /*!*********************!*\
  !*** ./app/msg2.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("2");\n\n\n//# sourceURL=webpack:///./app/msg2.js?'
        );

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ __webpack_require__.O(0, ['common'], () =>
      __webpack_exec__('./app/index2.js')
    );
    /******/ var __webpack_exports__ = __webpack_require__.O();
    /******/
  },
]);
