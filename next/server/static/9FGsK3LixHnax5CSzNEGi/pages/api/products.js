module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9j+0");


/***/ }),

/***/ "9j+0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ja1v");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  res.statusCode = 200;
  res.json(_dummy__WEBPACK_IMPORTED_MODULE_0__["products"]);
});

/***/ }),

/***/ "ja1v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
const products = [{
  id: 34,
  name: "Kan4",
  image: "34.jpg",
  price: 1001,
  stock: 2222,
  createdAt: "2020-04-12T09:27:19.282Z",
  updatedAt: "2020-05-23T02:35:50.817Z"
}, {
  id: 33,
  name: "Lek",
  image: "33.jpg",
  price: 9,
  stock: 10,
  createdAt: "2020-04-12T09:26:25.884Z",
  updatedAt: "2020-04-12T09:26:25.902Z"
}, {
  id: 32,
  name: "test",
  image: "32.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-07-06T07:01:15.246Z",
  updatedAt: "2019-07-06T07:01:15.254Z"
}, {
  id: 15,
  name: "DotMatrix LED Display",
  image: "15.jpg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:47:17.724Z",
  updatedAt: "2019-06-18T10:52:58.750Z"
}, {
  id: 14,
  name: "4-Channel 5VDC Relay Module Relay Active High / LOW",
  image: "14.jpg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:47:04.875Z",
  updatedAt: "2019-06-18T10:52:51.287Z"
}, {
  id: 13,
  name: "4-Channel 5VDC Relay Module Relay Active High / LOW",
  image: "13.jpg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:46:56.965Z",
  updatedAt: "2019-06-18T10:52:42.876Z"
}, {
  id: 12,
  name: "Arduino Sensor Kit V5.0",
  image: "12.jpg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:46:47.527Z",
  updatedAt: "2019-06-18T10:52:34.724Z"
}, {
  id: 11,
  name: "Arduino Sensor Shield V5.0",
  image: "11.jpg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:46:37.189Z",
  updatedAt: "2019-06-18T10:52:23.963Z"
}, {
  id: 10,
  name: "Arduino ProtoShield Mini UNO Prototype Shield พร้อม Mini Breadboard",
  image: "10.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:46:24.700Z",
  updatedAt: "2019-06-18T10:52:17.741Z"
}, {
  id: 9,
  name: "IR Flame Detector Module (ตรวจจับเปลวไฟด้วย Infrared)",
  image: "9.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:46:14.643Z",
  updatedAt: "2019-06-18T10:52:09.724Z"
}, {
  id: 8,
  name: "ESP8266 web Sever serial WiFi Expansion board - shield ESP-12E for arduino R3",
  image: "8.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:45:59.950Z",
  updatedAt: "2019-06-18T10:52:01.280Z"
}, {
  id: 7,
  name: "WeMos D1 R2 WiFi ESP8266 Development Board Compatible Arduino UNO",
  image: "7.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:45:50.393Z",
  updatedAt: "2019-06-18T10:45:50.397Z"
}, {
  id: 6,
  name: "NodeMCU Development Kit V2 แถมสาย USB (Node MCU)",
  image: "6.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:45:35.408Z",
  updatedAt: "2019-06-18T10:45:35.411Z"
}, {
  id: 5,
  name: "Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB",
  image: "5.jpeg",
  price: 100,
  stock: 10,
  createdAt: "2019-06-18T10:45:17.063Z",
  updatedAt: "2019-06-18T10:45:17.082Z"
}];

/***/ })

/******/ });