/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction validateform(form) {\n\n  var digits_reg = new RegExp('[^0-9]', 'g');\n  form.elements['Lead[age]'].value = form.elements['Lead[age]'].value.replace(digits_reg, '');\n\n  if (form.elements['Lead[name]'].value === '') {\n    alert('Укажите Имя');\n    return false;\n  }\n\n  if (form.elements['Lead[name]'].value.length < 2) {\n    alert('Укажите Имя');\n    return false;\n  }\n\n  if (form.elements['Lead[phone]'].value === '') {\n    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');\n    return false;\n  }\n\n  var phone_reg = new RegExp('[^0-9]', 'g');\n  form.elements['Lead[phone]'].value = form.elements['Lead[phone]'].value.replace(phone_reg, '');\n  if (form.elements['Lead[phone]'].value.length < 10) {\n    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');\n    return false;\n  }\n  if (form.elements['Lead[phone]'].value.length > 11) {\n    alert('Телефон не заполнен. Должен сождержать 10 цифр. Пример: 9123456789 или городской с кодом города 4951234567');\n    return false;\n  }\n\n  form.submit();\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVmb3JtKGZvcm0pIHtcblxuICB2YXIgZGlnaXRzX3JlZyA9IG5ldyBSZWdFeHAoJ1teMC05XScsICdnJyk7XG4gIGZvcm0uZWxlbWVudHNbJ0xlYWRbYWdlXSddLnZhbHVlID0gZm9ybS5lbGVtZW50c1snTGVhZFthZ2VdJ10udmFsdWUucmVwbGFjZShkaWdpdHNfcmVnLCAnJyk7XG5cblxuICBpZiAoZm9ybS5lbGVtZW50c1snTGVhZFtuYW1lXSddLnZhbHVlID09PSAnJykge1xuICAgIGFsZXJ0KCfQo9C60LDQttC40YLQtSDQmNC80Y8nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZm9ybS5lbGVtZW50c1snTGVhZFtuYW1lXSddLnZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICBhbGVydCgn0KPQutCw0LbQuNGC0LUg0JjQvNGPJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGZvcm0uZWxlbWVudHNbJ0xlYWRbcGhvbmVdJ10udmFsdWUgPT09ICcnKSB7XG4gICAgYWxlcnQoJ9Ci0LXQu9C10YTQvtC9INC90LUg0LfQsNC/0L7Qu9C90LXQvS4g0JTQvtC70LbQtdC9INGB0L7QttC00LXRgNC20LDRgtGMIDEwINGG0LjRhNGALiDQn9GA0LjQvNC10YA6IDkxMjM0NTY3ODkg0LjQu9C4INCz0L7RgNC+0LTRgdC60L7QuSDRgSDQutC+0LTQvtC8INCz0L7RgNC+0LTQsCA0OTUxMjM0NTY3Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBob25lX3JlZyA9IG5ldyBSZWdFeHAoJ1teMC05XScsICdnJyk7XG4gIGZvcm0uZWxlbWVudHNbJ0xlYWRbcGhvbmVdJ10udmFsdWUgPSBmb3JtLmVsZW1lbnRzWydMZWFkW3Bob25lXSddLnZhbHVlLnJlcGxhY2UocGhvbmVfcmVnLCAnJyk7XG4gIGlmIChmb3JtLmVsZW1lbnRzWydMZWFkW3Bob25lXSddLnZhbHVlLmxlbmd0aCA8IDEwKSB7XG4gICAgYWxlcnQoJ9Ci0LXQu9C10YTQvtC9INC90LUg0LfQsNC/0L7Qu9C90LXQvS4g0JTQvtC70LbQtdC9INGB0L7QttC00LXRgNC20LDRgtGMIDEwINGG0LjRhNGALiDQn9GA0LjQvNC10YA6IDkxMjM0NTY3ODkg0LjQu9C4INCz0L7RgNC+0LTRgdC60L7QuSDRgSDQutC+0LTQvtC8INCz0L7RgNC+0LTQsCA0OTUxMjM0NTY3Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChmb3JtLmVsZW1lbnRzWydMZWFkW3Bob25lXSddLnZhbHVlLmxlbmd0aCA+IDExKSB7XG4gICAgYWxlcnQoJ9Ci0LXQu9C10YTQvtC9INC90LUg0LfQsNC/0L7Qu9C90LXQvS4g0JTQvtC70LbQtdC9INGB0L7QttC00LXRgNC20LDRgtGMIDEwINGG0LjRhNGALiDQn9GA0LjQvNC10YA6IDkxMjM0NTY3ODkg0LjQu9C4INCz0L7RgNC+0LTRgdC60L7QuSDRgSDQutC+0LTQvtC8INCz0L7RgNC+0LTQsCA0OTUxMjM0NTY3Jyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9ybS5zdWJtaXQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);