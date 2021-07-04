/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const/alpha.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ch03-configuration/10-devtool/devtool/src/const/alpha.js
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('alpha');

/***/ }),

/***/ "./src/const/beta.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ch03-configuration/10-devtool/devtool/src/const/beta.js
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('beta');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _const_alpha_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/const/alpha.js");
/* harmony import */ var _const_beta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/const/beta.js");
// ch03-configuration/10-devtool/devtool/src/index.js



var output = function output(mainTitle, subTitle) {
  return ['index', mainTitle, subTitle].joi(' - ');
};

console.log(output(_const_alpha_js__WEBPACK_IMPORTED_MODULE_0__.default, _const_beta_js__WEBPACK_IMPORTED_MODULE_1__.default));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZ0b29sLy4vc3JjL2NvbnN0L2FscGhhLmpzIiwid2VicGFjazovL2RldnRvb2wvLi9zcmMvY29uc3QvYmV0YS5qcyIsIndlYnBhY2s6Ly9kZXZ0b29sL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RldnRvb2wvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RldnRvb2wvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXZ0b29sL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGV2dG9vbC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJvdXRwdXQiLCJtYWluVGl0bGUiLCJzdWJUaXRsZSIsImpvaSIsImNvbnNvbGUiLCJsb2ciLCJhbHBoYSIsImJldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpRUFBZSxPQUFmLEU7Ozs7Ozs7Ozs7O0FDREE7QUFDQSxpRUFBZSxNQUFmLEU7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxTQUFELEVBQVlDLFFBQVo7QUFBQSxTQUNiLENBQUMsT0FBRCxFQUFVRCxTQUFWLEVBQXFCQyxRQUFyQixFQUErQkMsR0FBL0IsQ0FBbUMsS0FBbkMsQ0FEYTtBQUFBLENBQWY7O0FBR0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFNLENBQUNNLG9EQUFELEVBQVFDLG1EQUFSLENBQWxCLEUiLCJmaWxlIjoiaW5saW5lLW5vc291cmNlcy1zb3VyY2UtbWFwLmpzIiwic291cmNlUm9vdCI6IiJ9