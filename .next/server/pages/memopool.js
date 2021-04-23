module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/memopool.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/memopool.js":
/*!***************************!*\
  !*** ./pages/memopool.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/Memopool.module.scss */ \"./styles/pages/Memopool.module.scss\");\n/* harmony import */ var _styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/app/pages/memopool.js\";\n\n\n\nfunction memopool() {\n  const {\n    0: text,\n    1: updateText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool}`,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container1}`,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container1__header}`,\n        children: \"CHAIN ID\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container1__ID}`,\n        children: \"/[chainid]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container1__activenodes}`,\n        children: \"Active nodes (1)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container1__userID}`,\n        children: \"0x823abd769 (YOU)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container2}`,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container2__header}`,\n        children: \"- START -\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container2__btn}`,\n        children: \"MINE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container3}`,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container3__header}`,\n        children: \"Memopool\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container3__output}`,\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        className: `${_styles_pages_Memopool_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.memopool__container3__input}`,\n        id: \"text-input\",\n        placeholder: \"Enter text\",\n        type: \"text\",\n        onKeyUp: ({\n          target\n        }) => updateText(target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (memopool);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tZW1vcG9vbC5qcz9hNWYxIl0sIm5hbWVzIjpbIm1lbW9wb29sIiwidGV4dCIsInVwZGF0ZVRleHQiLCJ1c2VTdGF0ZSIsIm1lbW9wb29sU3R5bGVzIiwibWVtb3Bvb2xfX2NvbnRhaW5lcjEiLCJtZW1vcG9vbF9fY29udGFpbmVyMV9faGVhZGVyIiwibWVtb3Bvb2xfX2NvbnRhaW5lcjFfX0lEIiwibWVtb3Bvb2xfX2NvbnRhaW5lcjFfX2FjdGl2ZW5vZGVzIiwibWVtb3Bvb2xfX2NvbnRhaW5lcjFfX3VzZXJJRCIsIm1lbW9wb29sX19jb250YWluZXIyIiwibWVtb3Bvb2xfX2NvbnRhaW5lcjJfX2hlYWRlciIsIm1lbW9wb29sX19jb250YWluZXIyX19idG4iLCJtZW1vcG9vbF9fY29udGFpbmVyMyIsIm1lbW9wb29sX19jb250YWluZXIzX19oZWFkZXIiLCJtZW1vcG9vbF9fY29udGFpbmVyM19fb3V0cHV0IiwibWVtb3Bvb2xfX2NvbnRhaW5lcjNfX2lucHV0IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBcUJDLHNEQUFRLENBQUMsRUFBRCxDQUFuQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFHLEdBQUVDLHlFQUFjLENBQUNKLFFBQVMsRUFBM0M7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRyxHQUFFSSx5RUFBYyxDQUFDQyxvQkFBcUIsRUFBdkQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUcsR0FBRUQseUVBQWMsQ0FBQ0UsNEJBQTZCLEVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFHLGlCQUFTLEVBQUcsR0FBRUYseUVBQWMsQ0FBQ0csd0JBQXlCLEVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFPRTtBQUFLLGlCQUFTLEVBQUcsR0FBRUgseUVBQWMsQ0FBQ0ksaUNBQWtDLEVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFVRTtBQUFLLGlCQUFTLEVBQUcsR0FBRUoseUVBQWMsQ0FBQ0ssNEJBQTZCLEVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFlRTtBQUFLLGVBQVMsRUFBRyxHQUFFTCx5RUFBYyxDQUFDTSxvQkFBcUIsRUFBdkQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUcsR0FBRU4seUVBQWMsQ0FBQ08sNEJBQTZCLEVBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUcsR0FBRVAseUVBQWMsQ0FBQ1EseUJBQTBCLEVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUF1QkU7QUFBSyxlQUFTLEVBQUcsR0FBRVIseUVBQWMsQ0FBQ1Msb0JBQXFCLEVBQXZEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFHLEdBQUVULHlFQUFjLENBQUNVLDRCQUE2QixFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFHLEdBQUVWLHlFQUFjLENBQUNXLDRCQUE2QixFQUEvRDtBQUFBLGtCQUNHZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQU9FO0FBQ0UsaUJBQVMsRUFBRyxHQUFFRyx5RUFBYyxDQUFDWSwyQkFBNEIsRUFEM0Q7QUFFRSxVQUFFLEVBQUMsWUFGTDtBQUdFLG1CQUFXLEVBQUMsWUFIZDtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsZUFBTyxFQUFFLENBQUM7QUFBRUM7QUFBRixTQUFELEtBQWdCZixVQUFVLENBQUNlLE1BQU0sQ0FBQ0MsS0FBUjtBQUxyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEOztBQUVjbEIsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9tZW1vcG9vbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vcG9vbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL01lbW9wb29sLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gbWVtb3Bvb2woKSB7XG4gIGNvbnN0IFt0ZXh0LCB1cGRhdGVUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake21lbW9wb29sU3R5bGVzLm1lbW9wb29sfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21lbW9wb29sU3R5bGVzLm1lbW9wb29sX19jb250YWluZXIxfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWVtb3Bvb2xTdHlsZXMubWVtb3Bvb2xfX2NvbnRhaW5lcjFfX2hlYWRlcn1gfT5cbiAgICAgICAgICBDSEFJTiBJRFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHttZW1vcG9vbFN0eWxlcy5tZW1vcG9vbF9fY29udGFpbmVyMV9fSUR9YH0+XG4gICAgICAgICAgL1tjaGFpbmlkXVxuICAgICAgICA8L2E+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZW1vcG9vbFN0eWxlcy5tZW1vcG9vbF9fY29udGFpbmVyMV9fYWN0aXZlbm9kZXN9YH0+XG4gICAgICAgICAgQWN0aXZlIG5vZGVzICgxKVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21lbW9wb29sU3R5bGVzLm1lbW9wb29sX19jb250YWluZXIxX191c2VySUR9YH0+XG4gICAgICAgICAgMHg4MjNhYmQ3NjkgKFlPVSlcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZW1vcG9vbFN0eWxlcy5tZW1vcG9vbF9fY29udGFpbmVyMn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21lbW9wb29sU3R5bGVzLm1lbW9wb29sX19jb250YWluZXIyX19oZWFkZXJ9YH0+XG4gICAgICAgICAgLSBTVEFSVCAtXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWVtb3Bvb2xTdHlsZXMubWVtb3Bvb2xfX2NvbnRhaW5lcjJfX2J0bn1gfT5cbiAgICAgICAgICBNSU5FXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWVtb3Bvb2xTdHlsZXMubWVtb3Bvb2xfX2NvbnRhaW5lcjN9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHttZW1vcG9vbFN0eWxlcy5tZW1vcG9vbF9fY29udGFpbmVyM19faGVhZGVyfWB9PlxuICAgICAgICAgIE1lbW9wb29sXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWVtb3Bvb2xTdHlsZXMubWVtb3Bvb2xfX2NvbnRhaW5lcjNfX291dHB1dH1gfT5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7bWVtb3Bvb2xTdHlsZXMubWVtb3Bvb2xfX2NvbnRhaW5lcjNfX2lucHV0fWB9XG4gICAgICAgICAgaWQ9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBvbktleVVwPXsoeyB0YXJnZXQgfSkgPT4gdXBkYXRlVGV4dCh0YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9wb29sO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/memopool.js\n");

/***/ }),

/***/ "./styles/pages/Memopool.module.scss":
/*!*******************************************!*\
  !*** ./styles/pages/Memopool.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"memopool\": \"Memopool_memopool__26rNw\",\n\t\"memopool__container1\": \"Memopool_memopool__container1__2DFzJ\",\n\t\"memopool__container1__header\": \"Memopool_memopool__container1__header__oKyod\",\n\t\"memopool__container1__ID\": \"Memopool_memopool__container1__ID__3-YOU\",\n\t\"memopool__container1__activenodes\": \"Memopool_memopool__container1__activenodes__1N9ms\",\n\t\"memopool__container1__userID\": \"Memopool_memopool__container1__userID__2s7n9\",\n\t\"memopool__container2\": \"Memopool_memopool__container2__3bKaj\",\n\t\"memopool__container2__header\": \"Memopool_memopool__container2__header__3eWBf\",\n\t\"memopool__container2__btn\": \"Memopool_memopool__container2__btn__2P-ke\",\n\t\"memopool__container3\": \"Memopool_memopool__container3__18EWs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFnZXMvTWVtb3Bvb2wubW9kdWxlLnNjc3M/YWUyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9wYWdlcy9NZW1vcG9vbC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbW9wb29sXCI6IFwiTWVtb3Bvb2xfbWVtb3Bvb2xfXzI2ck53XCIsXG5cdFwibWVtb3Bvb2xfX2NvbnRhaW5lcjFcIjogXCJNZW1vcG9vbF9tZW1vcG9vbF9fY29udGFpbmVyMV9fMkRGekpcIixcblx0XCJtZW1vcG9vbF9fY29udGFpbmVyMV9faGVhZGVyXCI6IFwiTWVtb3Bvb2xfbWVtb3Bvb2xfX2NvbnRhaW5lcjFfX2hlYWRlcl9fb0t5b2RcIixcblx0XCJtZW1vcG9vbF9fY29udGFpbmVyMV9fSURcIjogXCJNZW1vcG9vbF9tZW1vcG9vbF9fY29udGFpbmVyMV9fSURfXzMtWU9VXCIsXG5cdFwibWVtb3Bvb2xfX2NvbnRhaW5lcjFfX2FjdGl2ZW5vZGVzXCI6IFwiTWVtb3Bvb2xfbWVtb3Bvb2xfX2NvbnRhaW5lcjFfX2FjdGl2ZW5vZGVzX18xTjltc1wiLFxuXHRcIm1lbW9wb29sX19jb250YWluZXIxX191c2VySURcIjogXCJNZW1vcG9vbF9tZW1vcG9vbF9fY29udGFpbmVyMV9fdXNlcklEX18yczduOVwiLFxuXHRcIm1lbW9wb29sX19jb250YWluZXIyXCI6IFwiTWVtb3Bvb2xfbWVtb3Bvb2xfX2NvbnRhaW5lcjJfXzNiS2FqXCIsXG5cdFwibWVtb3Bvb2xfX2NvbnRhaW5lcjJfX2hlYWRlclwiOiBcIk1lbW9wb29sX21lbW9wb29sX19jb250YWluZXIyX19oZWFkZXJfXzNlV0JmXCIsXG5cdFwibWVtb3Bvb2xfX2NvbnRhaW5lcjJfX2J0blwiOiBcIk1lbW9wb29sX21lbW9wb29sX19jb250YWluZXIyX19idG5fXzJQLWtlXCIsXG5cdFwibWVtb3Bvb2xfX2NvbnRhaW5lcjNcIjogXCJNZW1vcG9vbF9tZW1vcG9vbF9fY29udGFpbmVyM19fMThFV3NcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/pages/Memopool.module.scss\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });