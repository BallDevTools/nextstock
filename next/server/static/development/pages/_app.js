module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux */ "./redux/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\learn_all_course\\cmnextstock-master\\cmnextstock\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function CMApp({
  Component,
  pageProps
}) {
  // https://material-ui.com/customization/theming/
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["createMuiTheme"])({
    palette: {
      primary: {
        main: "#135ab8"
      },
      secondary: {
        main: "#e85f5f"
      }
    }
  });
  Object(_utils_httpClient__WEBPACK_IMPORTED_MODULE_3__["setInterceptor"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])());
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }))));
}

CMApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext);
  return _objectSpread({}, appProps);
};

/* harmony default export */ __webpack_exports__["default"] = (_redux__WEBPACK_IMPORTED_MODULE_2__["wrapper"].withRedux(CMApp));

/***/ }),

/***/ "./redux/actions/index.ts":
/*!********************************!*\
  !*** ./redux/actions/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.action */ "./redux/actions/login.action.ts");
/* harmony import */ var _register_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.action */ "./redux/actions/register.action.ts");
/* harmony import */ var _stockList_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stockList.action */ "./redux/actions/stockList.action.ts");
/* harmony import */ var _stockCreate_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stockCreate.action */ "./redux/actions/stockCreate.action.ts");
/* harmony import */ var _stockEdit_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stockEdit.action */ "./redux/actions/stockEdit.action.ts");
/* harmony import */ var _stockDelete_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stockDelete.action */ "./redux/actions/stockDelete.action.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _login_action__WEBPACK_IMPORTED_MODULE_0__["default"]), _register_action__WEBPACK_IMPORTED_MODULE_1__["default"]), _stockList_action__WEBPACK_IMPORTED_MODULE_2__["default"]), _stockCreate_action__WEBPACK_IMPORTED_MODULE_3__["default"]), _stockEdit_action__WEBPACK_IMPORTED_MODULE_4__["default"]), _stockDelete_action__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./redux/actions/login.action.ts":
/*!***************************************!*\
  !*** ./redux/actions/login.action.ts ***!
  \***************************************/
/*! exports provided: login, loginFetching, loginSuccess, loginFailed, relogin, logout, logoutSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFetching", function() { return loginFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailed", function() { return loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relogin", function() { return relogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccess", function() { return logoutSuccess; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");

const login = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"],
  payload
});
const loginFetching = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FETCHING"]
});
const loginSuccess = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"],
  payload
});
const loginFailed = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILED"]
});
const relogin = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["RELOGIN_REQUEST"],
  payload
});
const logout = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_REQUEST"]
});
const logoutSuccess = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  login,
  loginFetching,
  loginSuccess,
  loginFailed,
  relogin,
  logout,
  logoutSuccess
});

/***/ }),

/***/ "./redux/actions/register.action.ts":
/*!******************************************!*\
  !*** ./redux/actions/register.action.ts ***!
  \******************************************/
/*! exports provided: register, registerFetching, registerSuccess, registerFailed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFetching", function() { return registerFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFailed", function() { return registerFailed; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");

const register = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_REQUEST"],
  payload
});
const registerFetching = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FETCHING"]
});
const registerSuccess = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"],
  payload
});
const registerFailed = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FAILED"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  register,
  registerFetching,
  registerSuccess,
  registerFailed
});

/***/ }),

/***/ "./redux/actions/stockCreate.action.ts":
/*!*********************************************!*\
  !*** ./redux/actions/stockCreate.action.ts ***!
  \*********************************************/
/*! exports provided: createStock, stockCreateFetching, stockCreateSuccess, stockCreateFailed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStock", function() { return createStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockCreateFetching", function() { return stockCreateFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockCreateSuccess", function() { return stockCreateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockCreateFailed", function() { return stockCreateFailed; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");

const createStock = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_REQUEST"],
  payload
});
const stockCreateFetching = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_FETCHING"]
});
const stockCreateSuccess = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_SUCCESS"],
  payload
});
const stockCreateFailed = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_FAILED"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  createStock,
  stockCreateFetching,
  stockCreateSuccess,
  stockCreateFailed
});

/***/ }),

/***/ "./redux/actions/stockDelete.action.ts":
/*!*********************************************!*\
  !*** ./redux/actions/stockDelete.action.ts ***!
  \*********************************************/
/*! exports provided: deleteStock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteStock", function() { return deleteStock; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");

const deleteStock = (payload, dispatch) => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_DELETE_REQUEST"],
  payload,
  dispatch
});
/* harmony default export */ __webpack_exports__["default"] = ({
  deleteStock
});

/***/ }),

/***/ "./redux/actions/stockEdit.action.ts":
/*!*******************************************!*\
  !*** ./redux/actions/stockEdit.action.ts ***!
  \*******************************************/
/*! exports provided: editStock, stockEditFetching, stockEditSuccess, stockEditFailed, doGetStockById, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editStock", function() { return editStock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockEditFetching", function() { return stockEditFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockEditSuccess", function() { return stockEditSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockEditFailed", function() { return stockEditFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doGetStockById", function() { return doGetStockById; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");


const editStock = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_REQUEST"],
  payload
});
const stockEditFetching = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_FETCHING"]
});
const stockEditSuccess = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_SUCCESS"],
  payload
});
const stockEditFailed = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_FAILED"]
});
const doGetStockById = async id => {
  const response = await _utils_httpClient__WEBPACK_IMPORTED_MODULE_1__["default"].get(`/stock/product/${id}`);
  return response.data;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  editStock,
  stockEditFetching,
  stockEditSuccess,
  stockEditFailed,
  doGetStockById
});

/***/ }),

/***/ "./redux/actions/stockList.action.ts":
/*!*******************************************!*\
  !*** ./redux/actions/stockList.action.ts ***!
  \*******************************************/
/*! exports provided: feedStockList, stockListFetching, stockListSuccess, stockListFailed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedStockList", function() { return feedStockList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockListFetching", function() { return stockListFetching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockListSuccess", function() { return stockListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockListFailed", function() { return stockListFailed; });
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");

const feedStockList = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_REQUEST"]
});
const stockListFetching = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_FETCHING"]
});
const stockListSuccess = payload => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_SUCCESS"],
  payload
});
const stockListFailed = () => ({
  type: _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_FAILED"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  feedStockList,
  stockListFetching,
  stockListSuccess,
  stockListFailed
});

/***/ }),

/***/ "./redux/index.ts":
/*!************************!*\
  !*** ./redux/index.ts ***!
  \************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.ts");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saga */ "./redux/saga/index.ts");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);






const makeStore = context => {
  // 1: Create the middleware
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(); // 2: Add an extra parameter for applying middleware:

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))); // 3: Run your sagas on server

  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_4__["default"]); // 4: now return the store:

  return store;
}; // export an assembled wrapper

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _register_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.reducer */ "./redux/reducers/register.reducer.ts");
/* harmony import */ var _login_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.reducer */ "./redux/reducers/login.reducer.ts");
/* harmony import */ var _stockList_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stockList.reducer */ "./redux/reducers/stockList.reducer.ts");
/* harmony import */ var _stockCreate_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stockCreate.reducer */ "./redux/reducers/stockCreate.reducer.ts");
/* harmony import */ var _stockEdit_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stockEdit.reducer */ "./redux/reducers/stockEdit.reducer.ts");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  registerReducer: _register_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  loginReducer: _login_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  stockListReducer: _stockList_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  stockCreateReducer: _stockCreate_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  stockEditReducer: _stockEdit_reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./redux/reducers/login.reducer.ts":
/*!*****************************************!*\
  !*** ./redux/reducers/login.reducer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  token: null,
  username: null,
  isFetching: false,
  isFailed: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FETCHING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload.result,
        isFetching: false,
        isFailed: true,
        token: payload.token,
        username: payload.username
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
      return initialState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/register.reducer.ts":
/*!********************************************!*\
  !*** ./redux/reducers/register.reducer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FETCHING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REGISTER_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload.result,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/stockCreate.reducer.ts":
/*!***********************************************!*\
  !*** ./redux/reducers/stockCreate.reducer.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_FETCHING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_CREATE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/stockEdit.reducer.ts":
/*!*********************************************!*\
  !*** ./redux/reducers/stockEdit.reducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_FETCHING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_EDIT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/reducers/stockList.reducer.ts":
/*!*********************************************!*\
  !*** ./redux/reducers/stockList.reducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../saga/actionTypes */ "./redux/saga/actionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_FETCHING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case _saga_actionTypes__WEBPACK_IMPORTED_MODULE_0__["STOCK_LIST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./redux/saga/actionTypes.ts":
/*!***********************************!*\
  !*** ./redux/saga/actionTypes.ts ***!
  \***********************************/
/*! exports provided: REGISTER_REQUEST, REGISTER_FETCHING, REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_REQUEST, LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILED, RELOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, STOCK_LIST_REQUEST, STOCK_LIST_FETCHING, STOCK_LIST_FAILED, STOCK_LIST_SUCCESS, STOCK_CREATE_REQUEST, STOCK_CREATE_FETCHING, STOCK_CREATE_FAILED, STOCK_CREATE_SUCCESS, STOCK_EDIT_REQUEST, STOCK_EDIT_FETCHING, STOCK_EDIT_FAILED, STOCK_EDIT_SUCCESS, STOCK_DELETE_REQUEST, STOCK_DELETE_FETCHING, STOCK_DELETE_FAILED, STOCK_DELETE_SUCCESS, STOCK_GET_BY_ID_REQUEST, STOCK_GET_BY_ID_FETCHING, STOCK_GET_BY_ID_FAILED, STOCK_GET_BY_ID_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FETCHING", function() { return REGISTER_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAILED", function() { return REGISTER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FETCHING", function() { return LOGIN_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELOGIN_REQUEST", function() { return RELOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_REQUEST", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_LIST_REQUEST", function() { return STOCK_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_LIST_FETCHING", function() { return STOCK_LIST_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_LIST_FAILED", function() { return STOCK_LIST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_LIST_SUCCESS", function() { return STOCK_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_CREATE_REQUEST", function() { return STOCK_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_CREATE_FETCHING", function() { return STOCK_CREATE_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_CREATE_FAILED", function() { return STOCK_CREATE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_CREATE_SUCCESS", function() { return STOCK_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_EDIT_REQUEST", function() { return STOCK_EDIT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_EDIT_FETCHING", function() { return STOCK_EDIT_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_EDIT_FAILED", function() { return STOCK_EDIT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_EDIT_SUCCESS", function() { return STOCK_EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_DELETE_REQUEST", function() { return STOCK_DELETE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_DELETE_FETCHING", function() { return STOCK_DELETE_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_DELETE_FAILED", function() { return STOCK_DELETE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_DELETE_SUCCESS", function() { return STOCK_DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_GET_BY_ID_REQUEST", function() { return STOCK_GET_BY_ID_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_GET_BY_ID_FETCHING", function() { return STOCK_GET_BY_ID_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_GET_BY_ID_FAILED", function() { return STOCK_GET_BY_ID_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCK_GET_BY_ID_SUCCESS", function() { return STOCK_GET_BY_ID_SUCCESS; });
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_FETCHING = 'REGISTER_FETCHING';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILED = 'REGISTER_FAILED';
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_FETCHING = 'LOGIN_FETCHING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const RELOGIN_REQUEST = 'RELOGIN_REQUEST';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const STOCK_LIST_REQUEST = 'STOCK_LIST_REQUEST';
const STOCK_LIST_FETCHING = 'STOCK_LIST_FETCHING';
const STOCK_LIST_FAILED = 'STOCK_LIST_FAILED';
const STOCK_LIST_SUCCESS = 'STOCK_LIST_SUCCESS';
const STOCK_CREATE_REQUEST = 'STOCK_CREATE_REQUEST';
const STOCK_CREATE_FETCHING = 'STOCK_CREATE_FETCHING';
const STOCK_CREATE_FAILED = 'STOCK_CREATE_FAILED';
const STOCK_CREATE_SUCCESS = 'STOCK_CREATE_SUCCESS';
const STOCK_EDIT_REQUEST = 'STOCK_EDIT_REQUEST';
const STOCK_EDIT_FETCHING = 'STOCK_EDIT_FETCHING';
const STOCK_EDIT_FAILED = 'STOCK_EDIT_FAILED';
const STOCK_EDIT_SUCCESS = 'STOCK_EDIT_SUCCESS';
const STOCK_DELETE_REQUEST = 'STOCK_DELETE_REQUEST';
const STOCK_DELETE_FETCHING = 'STOCK_DELETE_FETCHING';
const STOCK_DELETE_FAILED = 'STOCK_DELETE_FAILED';
const STOCK_DELETE_SUCCESS = 'STOCK_DELETE_SUCCESS';
const STOCK_GET_BY_ID_REQUEST = 'STOCK_GET_BY_ID_REQUEST';
const STOCK_GET_BY_ID_FETCHING = 'STOCK_GET_BY_ID_FETCHING';
const STOCK_GET_BY_ID_FAILED = 'STOCK_GET_BY_ID_FAILED';
const STOCK_GET_BY_ID_SUCCESS = 'STOCK_GET_BY_ID_SUCCESS';

/***/ }),

/***/ "./redux/saga/index.ts":
/*!*****************************!*\
  !*** ./redux/saga/index.ts ***!
  \*****************************/
/*! exports provided: watchRegisterRequest, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchRegisterRequest", function() { return watchRegisterRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _register_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.saga */ "./redux/saga/register.saga.ts");
/* harmony import */ var _stockList_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stockList.saga */ "./redux/saga/stockList.saga.ts");
/* harmony import */ var _stockCreate_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stockCreate.saga */ "./redux/saga/stockCreate.saga.ts");
/* harmony import */ var _stockEdit_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stockEdit.saga */ "./redux/saga/stockEdit.saga.ts");
/* harmony import */ var _stockDelete_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stockDelete.saga */ "./redux/saga/stockDelete.saga.ts");
/* harmony import */ var _login_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.saga */ "./redux/saga/login.saga.ts");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actionTypes */ "./redux/saga/actionTypes.ts");







 // Register

function* watchRegisterRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["REGISTER_REQUEST"], _register_saga__WEBPACK_IMPORTED_MODULE_1__["sagaRegister"]);
} // Login

function* watchLoginRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["LOGIN_REQUEST"], _login_saga__WEBPACK_IMPORTED_MODULE_6__["sagaLogin"]);
} // ReLogin


function* watchReLoginRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["RELOGIN_REQUEST"], _login_saga__WEBPACK_IMPORTED_MODULE_6__["sagaReLogin"]);
} // Logout


function* watchLogoutRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["LOGOUT_REQUEST"], _login_saga__WEBPACK_IMPORTED_MODULE_6__["sagaLogout"]);
} // StockList


function* watchStockListRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["STOCK_LIST_REQUEST"], _stockList_saga__WEBPACK_IMPORTED_MODULE_2__["sagaStockList"]);
} // StockCreate


function* watchStockCreateRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["STOCK_CREATE_REQUEST"], _stockCreate_saga__WEBPACK_IMPORTED_MODULE_3__["sagaStockCreate"]);
} // StockEdit


function* watchStockEditRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["STOCK_EDIT_REQUEST"], _stockEdit_saga__WEBPACK_IMPORTED_MODULE_4__["sagaStockEdit"]);
} // StockDelete


function* watchStockDeleteRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actionTypes__WEBPACK_IMPORTED_MODULE_7__["STOCK_DELETE_REQUEST"], _stockDelete_saga__WEBPACK_IMPORTED_MODULE_5__["sagaStockDelete"]);
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([watchRegisterRequest(), watchLoginRequest(), watchReLoginRequest(), watchLogoutRequest(), watchStockListRequest(), watchStockCreateRequest(), watchStockEditRequest(), watchStockDeleteRequest()]);
}

/***/ }),

/***/ "./redux/saga/login.saga.ts":
/*!**********************************!*\
  !*** ./redux/saga/login.saga.ts ***!
  \**********************************/
/*! exports provided: sagaLogin, sagaReLogin, sagaLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaLogin", function() { return sagaLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaReLogin", function() { return sagaReLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaLogout", function() { return sagaLogout; });
/* harmony import */ var _utils_contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/contants */ "./utils/contants.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cookie */ "./utils/cookie.js");






function* sagaLogin({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginFetching());
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_3__["default"].post, '/authen/login', payload);
    const {
      result
    } = response.data;

    if (result == _utils_contants__WEBPACK_IMPORTED_MODULE_0__["kResultOk"]) {
      Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_5__["setCookie"])("token", response.data.token);
      Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_5__["setCookie"])("username", response.data.username);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginSuccess(response.data));
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/stock');
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginFailed());
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginFailed());
  }
}
function* sagaReLogin({
  payload
}) {
  const state = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["select"])();
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(10);

  if (state.loginReducer.token) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/stock');
  } else if (payload.token) {
    debugger;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginSuccess(payload));
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/stock');
  } else {
    const localToken = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_5__["getCookie"])('token');

    if (localToken) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].loginSuccess(payload));
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/stock');
    }
  }
}
function* sagaLogout() {
  Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_5__["removeCookie"])('token');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["default"].logoutSuccess());
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
}

/***/ }),

/***/ "./redux/saga/register.saga.ts":
/*!*************************************!*\
  !*** ./redux/saga/register.saga.ts ***!
  \*************************************/
/*! exports provided: sagaRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRegister", function() { return sagaRegister; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var _utils_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/contants */ "./utils/contants.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function* sagaRegister({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].registerFetching());
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].post, '/authen/register', payload);
    const {
      result
    } = response.data;

    if (result == _utils_contants__WEBPACK_IMPORTED_MODULE_3__["kResultOk"]) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].registerSuccess({
        result: response.data
      }));
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].registerFailed());
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].registerFailed());
  }
}

/***/ }),

/***/ "./redux/saga/stockCreate.saga.ts":
/*!****************************************!*\
  !*** ./redux/saga/stockCreate.saga.ts ***!
  \****************************************/
/*! exports provided: sagaStockCreate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaStockCreate", function() { return sagaStockCreate; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function* sagaStockCreate({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockCreateFetching());
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].post, '/stock/product', payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockCreateSuccess(response.data));
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/stock");
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockCreateFailed());
  }
}

/***/ }),

/***/ "./redux/saga/stockDelete.saga.ts":
/*!****************************************!*\
  !*** ./redux/saga/stockDelete.saga.ts ***!
  \****************************************/
/*! exports provided: sagaStockDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaStockDelete", function() { return sagaStockDelete; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var _utils_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/contants */ "./utils/contants.ts");




function* sagaStockDelete({
  payload,
  dispatch
}) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].delete, `/stock/product/${payload}`);
    const {
      result
    } = response.data;

    if (result == _utils_contants__WEBPACK_IMPORTED_MODULE_3__["kResultOk"]) {
      dispatch(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].feedStockList());
    }
  } catch (error) {// Nothing 
  }
}

/***/ }),

/***/ "./redux/saga/stockEdit.saga.ts":
/*!**************************************!*\
  !*** ./redux/saga/stockEdit.saga.ts ***!
  \**************************************/
/*! exports provided: sagaStockEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaStockEdit", function() { return sagaStockEdit; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function* sagaStockEdit({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockEditFetching());
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].put, '/stock/product', payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockEditSuccess(response.data));
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/stock");
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockEditFailed());
  }
}

/***/ }),

/***/ "./redux/saga/stockList.saga.ts":
/*!**************************************!*\
  !*** ./redux/saga/stockList.saga.ts ***!
  \**************************************/
/*! exports provided: sagaStockList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaStockList", function() { return sagaStockList; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/httpClient */ "./utils/httpClient.ts");



function* sagaStockList(payload) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockListFetching());
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_httpClient__WEBPACK_IMPORTED_MODULE_2__["default"].get, '/stock/product');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockListSuccess(response.data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].stockListFailed());
  }
}

/***/ }),

/***/ "./utils/contants.ts":
/*!***************************!*\
  !*** ./utils/contants.ts ***!
  \***************************/
/*! exports provided: kToken, kUsername, kResultOk, kResultNok */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kToken", function() { return kToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kUsername", function() { return kUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kResultOk", function() { return kResultOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kResultNok", function() { return kResultNok; });
const kToken = 'token';
const kUsername = 'username';
const kResultOk = 'ok';
const kResultNok = 'nok';

/***/ }),

/***/ "./utils/cookie.js":
/*!*************************!*\
  !*** ./utils/cookie.js ***!
  \*************************/
/*! exports provided: setCookie, removeCookie, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_1__);
// this file will have the task that we have to perform with cookies/ react-native you need to put your async storage code here.


const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
};

/***/ }),

/***/ "./utils/httpClient.ts":
/*!*****************************!*\
  !*** ./utils/httpClient.ts ***!
  \*****************************/
/*! exports provided: setInterceptor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterceptor", function() { return setInterceptor; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contants */ "./utils/contants.ts");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookie */ "./utils/cookie.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.ts");




const httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8085/api/v2"
});
const setInterceptor = dispatch => {
  httpClient.interceptors.request.use(req => {
    const token = Object(_cookie__WEBPACK_IMPORTED_MODULE_2__["getCookie"])(_contants__WEBPACK_IMPORTED_MODULE_1__["kToken"]);
    if (token) req.headers = {
      'x-access-token': token
    };
    return req;
  });
  httpClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (403 === error.response.status || 401 === error.response.status || 500 === error.response.status) {
      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["default"].logout());
    } else {
      return Promise.reject(error);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (httpClient);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9sb2dpbi5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9yZWdpc3Rlci5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0NyZWF0ZS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0RlbGV0ZS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0VkaXQuYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc3RvY2tMaXN0LmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9sb2dpbi5yZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL3JlZ2lzdGVyLnJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc3RvY2tDcmVhdGUucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zdG9ja0VkaXQucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9zdG9ja0xpc3QucmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYS9sb2dpbi5zYWdhLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2EvcmVnaXN0ZXIuc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhL3N0b2NrQ3JlYXRlLnNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYS9zdG9ja0RlbGV0ZS5zYWdhLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2Evc3RvY2tFZGl0LnNhZ2EudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYS9zdG9ja0xpc3Quc2FnYS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb250YW50cy50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvaHR0cENsaWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiQ01BcHAiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5Iiwic2V0SW50ZXJjZXB0b3IiLCJ1c2VEaXNwYXRjaCIsImFwcENvbnRleHQiLCJhcHBQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJsb2dpbiIsInJlZ2lzdGVyIiwic3RvY2tMaXN0Iiwic3RvY2tDcmVhdGUiLCJzdG9ja0VkaXQiLCJzdG9ja0RlbGV0ZSIsInBheWxvYWQiLCJ0eXBlIiwiYWN0aW9uVHlwZXMiLCJsb2dpbkZldGNoaW5nIiwiTE9HSU5fRkVUQ0hJTkciLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkZhaWxlZCIsIkxPR0lOX0ZBSUxFRCIsInJlbG9naW4iLCJsb2dvdXQiLCJMT0dPVVRfUkVRVUVTVCIsImxvZ291dFN1Y2Nlc3MiLCJMT0dPVVRfU1VDQ0VTUyIsInJlZ2lzdGVyRmV0Y2hpbmciLCJSRUdJU1RFUl9GRVRDSElORyIsInJlZ2lzdGVyU3VjY2VzcyIsInJlZ2lzdGVyRmFpbGVkIiwiUkVHSVNURVJfRkFJTEVEIiwiY3JlYXRlU3RvY2siLCJzdG9ja0NyZWF0ZUZldGNoaW5nIiwiU1RPQ0tfQ1JFQVRFX0ZFVENISU5HIiwic3RvY2tDcmVhdGVTdWNjZXNzIiwic3RvY2tDcmVhdGVGYWlsZWQiLCJTVE9DS19DUkVBVEVfRkFJTEVEIiwiZGVsZXRlU3RvY2siLCJkaXNwYXRjaCIsImVkaXRTdG9jayIsInN0b2NrRWRpdEZldGNoaW5nIiwiU1RPQ0tfRURJVF9GRVRDSElORyIsInN0b2NrRWRpdFN1Y2Nlc3MiLCJzdG9ja0VkaXRGYWlsZWQiLCJTVE9DS19FRElUX0ZBSUxFRCIsImRvR2V0U3RvY2tCeUlkIiwiaWQiLCJyZXNwb25zZSIsImh0dHBDbGllbnQiLCJnZXQiLCJkYXRhIiwiZmVlZFN0b2NrTGlzdCIsIlNUT0NLX0xJU1RfUkVRVUVTVCIsInN0b2NrTGlzdEZldGNoaW5nIiwiU1RPQ0tfTElTVF9GRVRDSElORyIsInN0b2NrTGlzdFN1Y2Nlc3MiLCJzdG9ja0xpc3RGYWlsZWQiLCJTVE9DS19MSVNUX0ZBSUxFRCIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImNvbWJpbmVSZWR1Y2VycyIsInJlZ2lzdGVyUmVkdWNlciIsImxvZ2luUmVkdWNlciIsInN0b2NrTGlzdFJlZHVjZXIiLCJzdG9ja0NyZWF0ZVJlZHVjZXIiLCJzdG9ja0VkaXRSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwicmVzdWx0IiwidG9rZW4iLCJ1c2VybmFtZSIsImlzRmV0Y2hpbmciLCJpc0ZhaWxlZCIsInN0YXRlIiwiTE9HSU5fU1VDQ0VTUyIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJhY3Rpb25zIiwiUkVHSVNURVJfUkVRVUVTVCIsIkxPR0lOX1JFUVVFU1QiLCJSRUxPR0lOX1JFUVVFU1QiLCJTVE9DS19MSVNUX1NVQ0NFU1MiLCJTVE9DS19DUkVBVEVfUkVRVUVTVCIsIlNUT0NLX0NSRUFURV9TVUNDRVNTIiwiU1RPQ0tfRURJVF9SRVFVRVNUIiwiU1RPQ0tfRURJVF9TVUNDRVNTIiwiU1RPQ0tfREVMRVRFX1JFUVVFU1QiLCJTVE9DS19ERUxFVEVfRkVUQ0hJTkciLCJTVE9DS19ERUxFVEVfRkFJTEVEIiwiU1RPQ0tfREVMRVRFX1NVQ0NFU1MiLCJTVE9DS19HRVRfQllfSURfUkVRVUVTVCIsIlNUT0NLX0dFVF9CWV9JRF9GRVRDSElORyIsIlNUT0NLX0dFVF9CWV9JRF9GQUlMRUQiLCJTVE9DS19HRVRfQllfSURfU1VDQ0VTUyIsIndhdGNoUmVnaXN0ZXJSZXF1ZXN0IiwidGFrZUV2ZXJ5Iiwic2FnYVJlZ2lzdGVyIiwid2F0Y2hMb2dpblJlcXVlc3QiLCJzYWdhTG9naW4iLCJ3YXRjaFJlTG9naW5SZXF1ZXN0Iiwic2FnYVJlTG9naW4iLCJ3YXRjaExvZ291dFJlcXVlc3QiLCJzYWdhTG9nb3V0Iiwid2F0Y2hTdG9ja0xpc3RSZXF1ZXN0Iiwic2FnYVN0b2NrTGlzdCIsIndhdGNoU3RvY2tDcmVhdGVSZXF1ZXN0Iiwic2FnYVN0b2NrQ3JlYXRlIiwid2F0Y2hTdG9ja0VkaXRSZXF1ZXN0Iiwic2FnYVN0b2NrRWRpdCIsIndhdGNoU3RvY2tEZWxldGVSZXF1ZXN0Iiwic2FnYVN0b2NrRGVsZXRlIiwiYWxsIiwicHV0IiwiY2FsbCIsInBvc3QiLCJrUmVzdWx0T2siLCJzZXRDb29raWUiLCJSb3V0ZXIiLCJlcnJvciIsInNlbGVjdCIsImRlbGF5IiwibG9jYWxUb2tlbiIsImdldENvb2tpZSIsInJlbW92ZUNvb2tpZSIsImRlbGV0ZSIsImtUb2tlbiIsImtVc2VybmFtZSIsImtSZXN1bHROb2siLCJrZXkiLCJ2YWx1ZSIsInJlcSIsImdldENvb2tpZUZyb21Ccm93c2VyIiwiZ2V0Q29va2llRnJvbVNlcnZlciIsImNvb2tpZSIsImhlYWRlcnMiLCJ1bmRlZmluZWQiLCJyYXdDb29raWUiLCJzcGxpdCIsImZpbmQiLCJjIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiTkVYVF9QVUJMSUNfQVBQX0JBU0VfQVBJX1VSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsaUJBQWlCLG1CQUFPLENBQUMsaUVBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVDOztBQUNBOzs7QUFlQTs7Ozs7QUFJQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNQSxTQUFTLEdBQUcsTUFBTSwyQ0FBeEIsR0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQVA7QUFBTyxHQUFQO0FBR2E7O0FBQUEsa0JBQTJDQyxlQUFNQyxTQUFqRCxDQUdiO0FBSUE7QUFDQTtBQUNBO0FBQ0FDLG1CQUFpQixvQkFBNEM7QUFDM0Q7QUFHRkM7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBcUQsS0FBM0Q7QUFHQSx3QkFDRSxxRUFHSTtBQUNBO0FBQ0ksTUFBRUMsT0FBTyxJQUFULFdBQXdCO0FBQUVDLFNBQUcsRUFBRUMsU0FBUyxDQUF4QyxNQUF3QztBQUFoQixLQUF4QixHQU5WLEVBQ0UsRUFERjtBQWZGOztBQUFBOzs7QUFIbUJDLEcsQ0FJWkMsbUJBSllELEdBSVVFLGtCQUpWRjtBQUFBQSxHLENBS1pHLGVBTFlILEdBS01FLGtCQUxORjtBQStCckI7QUFDQTs7QUFFQSxVQUEyQztBQUN6Q0ksZUFBYSxHQUFHLHFCQUFTLE1BQU07QUFDN0JDLFdBQU8sQ0FBUEE7QUFERkQsR0FBZ0IsQ0FBaEJBO0FBTUFFLFNBQU8sR0FBRyxxQkFBUyxNQUFNO0FBQ3ZCRCxXQUFPLENBQVBBO0FBREZDLEdBQVUsQ0FBVkE7QUFPRixDLENBQUE7OztBQUNPLHNCQUEyQjtBQUNoQyxZQUEyQ0YsYUFBYTtBQUN4RCxTQUFPRyxDQUFDLENBQVI7QUFHSzs7QUFBQSwyQkFBbUM7QUFDeEM7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQU87QUFDTCxnQkFBWTtBQUNWLGdCQUEyQ0QsT0FBTztBQUNsRDtBQUhHOztBQUtMLG1CQUFlO0FBQ2IsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBUEc7O0FBU0wsaUJBQWE7QUFDWCxnQkFBMkNBLE9BQU87QUFDbEQ7QUFYRzs7QUFhTEUsUUFBSSxFQUFFLE1BQU07QUFDVixnQkFBMkNGLE9BQU87QUFDbERHLFlBQU0sQ0FBTkE7QUFmRztBQWlCTEMsUUFBSSxFQUFFLGFBQThCO0FBQ2xDLGdCQUEyQ0osT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLFVBQVAsRUFBT0EsQ0FBUDtBQW5CRztBQXFCTEUsVUFBTSxFQUFFLGNBQStCO0FBQ3JDLGdCQUEyQ0wsT0FBTztBQUNsRCxZQUFNTSxTQUFTLEdBQUdDLEVBQUUsVUFBcEI7QUFDQSxZQUFNQyxPQUFPLEdBQUdELEVBQUUsSUFBbEI7QUFFQSxhQUFPSixNQUFNLENBQU5BLGdCQUFQLE9BQU9BLENBQVA7QUExQkc7QUE0QkxNLFdBQU8sRUFBRSxhQUE4QjtBQUNyQyxnQkFBMkNULE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxhQUFQLEVBQU9BLENBQVA7QUE5Qkc7QUFnQ0xPLGFBQVMsRUFBRSxjQUErQjtBQUN4QyxnQkFBMkNWLE9BQU87QUFDbEQsWUFBTVcsWUFBWSxHQUFHSixFQUFFLFVBQXZCO0FBQ0EsWUFBTUssVUFBVSxHQUFHTCxFQUFFLElBQXJCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxzQkFBUCxVQUFPQSxDQUFQO0FBckNKO0FBQU8sR0FBUDtBQXdDRCxDOzs7Ozs7Ozs7OztBQzdIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLFNBQVNVLEtBQVQsQ0FBZTtBQUFFekIsV0FBRjtBQUFhRjtBQUFiLENBQWYsRUFBbUQ7QUFDakQ7QUFDQSxRQUFNNEIsS0FBSyxHQUFHQyx3RUFBYyxDQUFDO0FBQzNCQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BDLFlBQUksRUFBRTtBQURDLE9BREY7QUFJUEMsZUFBUyxFQUFFO0FBQ1RELFlBQUksRUFBRTtBQURHO0FBSko7QUFEa0IsR0FBRCxDQUE1QjtBQVdBRSwwRUFBYyxDQUFDQywrREFBVyxFQUFaLENBQWQ7QUFDQSxTQUNFLG1FQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVQLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZTVCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERjtBQU9EOztBQUVEMkIsS0FBSyxDQUFDaEIsZUFBTixHQUF3QixNQUFPeUIsVUFBUCxJQUFzQjtBQUM1QztBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNN0IsK0NBQUcsQ0FBQ0csZUFBSixDQUFvQnlCLFVBQXBCLENBQXZCO0FBRUEsMkJBQVlDLFFBQVo7QUFDRCxDQUxEOztBQU9lQyw2R0FBTyxDQUFDQyxTQUFSLENBQWtCWixLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsdUpBQ1JhLHFEQURQLEdBRU9DLHdEQUZQLEdBR09DLHlEQUhQLEdBSU9DLDJEQUpQLEdBS09DLHlEQUxQLEdBTU9DLDJEQU5QLEc7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUwsS0FBSyxHQUFJTSxPQUFELEtBQWM7QUFDL0JDLE1BQUksRUFBRUMsK0RBRHlCO0FBRS9CRjtBQUYrQixDQUFkLENBQWQ7QUFLQSxNQUFNRyxhQUFhLEdBQUcsT0FBTztBQUNoQ0YsTUFBSSxFQUFFQyxnRUFBMEJFO0FBREEsQ0FBUCxDQUF0QjtBQUlBLE1BQU1DLFlBQVksR0FBSUwsT0FBRCxLQUFjO0FBQ3RDQyxNQUFJLEVBQUVDLCtEQURnQztBQUV0Q0Y7QUFGc0MsQ0FBZCxDQUFyQjtBQUtBLE1BQU1NLFdBQVcsR0FBRyxPQUFPO0FBQzlCTCxNQUFJLEVBQUVDLDhEQUF3Qks7QUFEQSxDQUFQLENBQXBCO0FBSUEsTUFBTUMsT0FBTyxHQUFJUixPQUFELEtBQWM7QUFDakNDLE1BQUksRUFBRUMsaUVBRDJCO0FBRWpDRjtBQUZpQyxDQUFkLENBQWhCO0FBS0EsTUFBTVMsTUFBTSxHQUFHLE9BQU87QUFDekJSLE1BQUksRUFBRUMsZ0VBQTBCUTtBQURQLENBQVAsQ0FBZjtBQUlBLE1BQU1DLGFBQWEsR0FBRyxPQUFPO0FBQ2hDVixNQUFJLEVBQUVDLGdFQUEwQlU7QUFEQSxDQUFQLENBQXRCO0FBSVE7QUFDWGxCLE9BRFc7QUFFWFMsZUFGVztBQUdYRSxjQUhXO0FBSVhDLGFBSlc7QUFLWEUsU0FMVztBQU1YQyxRQU5XO0FBT1hFO0FBUFcsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNaEIsUUFBUSxHQUFJSyxPQUFELEtBQWM7QUFDbENDLE1BQUksRUFBRUMsa0VBRDRCO0FBRWxDRjtBQUZrQyxDQUFkLENBQWpCO0FBS0EsTUFBTWEsZ0JBQWdCLEdBQUcsT0FBTztBQUNuQ1osTUFBSSxFQUFFQyxtRUFBNkJZO0FBREEsQ0FBUCxDQUF6QjtBQUtBLE1BQU1DLGVBQWUsR0FBSWYsT0FBRCxLQUFjO0FBQ3pDQyxNQUFJLEVBQUVDLGtFQURtQztBQUV6Q0Y7QUFGeUMsQ0FBZCxDQUF4QjtBQUtBLE1BQU1nQixjQUFjLEdBQUcsT0FBTztBQUNqQ2YsTUFBSSxFQUFFQyxpRUFBMkJlO0FBREEsQ0FBUCxDQUF2QjtBQUlRO0FBQ1h0QixVQURXO0FBRVhrQixrQkFGVztBQUdYRSxpQkFIVztBQUlYQztBQUpXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUUsV0FBVyxHQUFJbEIsT0FBRCxLQUFjO0FBQ3JDQyxNQUFJLEVBQUVDLHNFQUQrQjtBQUVyQ0Y7QUFGcUMsQ0FBZCxDQUFwQjtBQUtBLE1BQU1tQixtQkFBbUIsR0FBRyxPQUFPO0FBQ3RDbEIsTUFBSSxFQUFFQyx1RUFBaUNrQjtBQURELENBQVAsQ0FBNUI7QUFJQSxNQUFNQyxrQkFBa0IsR0FBSXJCLE9BQUQsS0FBYztBQUM1Q0MsTUFBSSxFQUFFQyxzRUFEc0M7QUFFNUNGO0FBRjRDLENBQWQsQ0FBM0I7QUFLQSxNQUFNc0IsaUJBQWlCLEdBQUcsT0FBTztBQUNwQ3JCLE1BQUksRUFBRUMscUVBQStCcUI7QUFERCxDQUFQLENBQTFCO0FBSVE7QUFDWEwsYUFEVztBQUVYQyxxQkFGVztBQUdYRSxvQkFIVztBQUlYQztBQUpXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUUsV0FBVyxHQUFHLENBQUN4QixPQUFELEVBQVV5QixRQUFWLE1BQXdCO0FBQy9DeEIsTUFBSSxFQUFFQyxzRUFEeUM7QUFFL0NGLFNBRitDO0FBRy9DeUI7QUFIK0MsQ0FBeEIsQ0FBcEI7QUFNUTtBQUNYRDtBQURXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNRSxTQUFTLEdBQUkxQixPQUFELEtBQWM7QUFDbkNDLE1BQUksRUFBRUMsb0VBRDZCO0FBRW5DRjtBQUZtQyxDQUFkLENBQWxCO0FBS0EsTUFBTTJCLGlCQUFpQixHQUFHLE9BQU87QUFDcEMxQixNQUFJLEVBQUVDLHFFQUErQjBCO0FBREQsQ0FBUCxDQUExQjtBQUlBLE1BQU1DLGdCQUFnQixHQUFJN0IsT0FBRCxLQUFjO0FBQzFDQyxNQUFJLEVBQUVDLG9FQURvQztBQUUxQ0Y7QUFGMEMsQ0FBZCxDQUF6QjtBQUtBLE1BQU04QixlQUFlLEdBQUcsT0FBTztBQUNsQzdCLE1BQUksRUFBRUMsbUVBQTZCNkI7QUFERCxDQUFQLENBQXhCO0FBSUEsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUN4QyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMseURBQVUsQ0FBQ0MsR0FBWCxDQUFnQixrQkFBaUJILEVBQUcsRUFBcEMsQ0FBdkI7QUFDQSxTQUFPQyxRQUFRLENBQUNHLElBQWhCO0FBQ0gsQ0FITTtBQU1RO0FBQ1hYLFdBRFc7QUFFWEMsbUJBRlc7QUFHWEUsa0JBSFc7QUFJWEMsaUJBSlc7QUFLWEU7QUFMVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1NLGFBQWEsR0FBRyxPQUFPO0FBQ2hDckMsTUFBSSxFQUFFQyxvRUFBOEJxQztBQURKLENBQVAsQ0FBdEI7QUFJQSxNQUFNQyxpQkFBaUIsR0FBRyxPQUFPO0FBQ3BDdkMsTUFBSSxFQUFFQyxxRUFBK0J1QztBQURELENBQVAsQ0FBMUI7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBSTFDLE9BQUQsS0FBYztBQUMxQ0MsTUFBSSxFQUFFQyxvRUFEb0M7QUFFMUNGO0FBRjBDLENBQWQsQ0FBekI7QUFLQSxNQUFNMkMsZUFBZSxHQUFHLE9BQU87QUFDbEMxQyxNQUFJLEVBQUVDLG1FQUE2QjBDO0FBREQsQ0FBUCxDQUF4QjtBQUlRO0FBQ1hOLGVBRFc7QUFFWEUsbUJBRlc7QUFHWEUsa0JBSFc7QUFJWEM7QUFKVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtPLE1BQU1FLFNBQXlCLEdBQUlDLE9BQUQsSUFBc0I7QUFDM0Q7QUFDQSxRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQyxDQUYyRCxDQUkzRDs7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDTixjQUFELENBQWhCLENBQTdCLENBQXpCLENBTDJELENBTzNEOztBQUNDRSxPQUFELENBQXFCSyxRQUFyQixHQUFnQ1AsY0FBYyxDQUFDUSxHQUFmLENBQW1CQyw2Q0FBbkIsQ0FBaEMsQ0FSMkQsQ0FVM0Q7O0FBQ0EsU0FBT1AsS0FBUDtBQUNILENBWk0sQyxDQWNQOztBQUNPLE1BQU16RCxPQUFPLEdBQUdpRSx3RUFBYSxDQUFNWixTQUFOLEVBQWlCO0FBQUVhLE9BQUssRUFBRTtBQUFULENBQWpCLENBQTdCLEM7Ozs7Ozs7Ozs7OztBQzFCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2VDLDRIQUFlLENBQUM7QUFDM0JDLDRFQUQyQjtBQUUzQkMsc0VBRjJCO0FBRzNCQyw4RUFIMkI7QUFJM0JDLGtGQUoyQjtBQUszQkMsOEVBQWdCQTtBQUxXLENBQUQsQ0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUdBLE1BQU1DLFlBQTBCLEdBQUc7QUFDL0JDLFFBQU0sRUFBRSxJQUR1QjtBQUUvQkMsT0FBSyxFQUFFLElBRndCO0FBRy9CQyxVQUFRLEVBQUUsSUFIcUI7QUFJL0JDLFlBQVUsRUFBRSxLQUptQjtBQUsvQkMsVUFBUSxFQUFFO0FBTHFCLENBQW5DO0FBUWUsZ0VBQUNDLEtBQUssR0FBR04sWUFBVCxFQUF1QjtBQUFFaEUsTUFBRjtBQUFRRDtBQUFSLENBQXZCLEtBQTZDO0FBQ3hELFVBQVFDLElBQVI7QUFDSSxTQUFLRyxnRUFBTDtBQUNJLDZDQUFZbUUsS0FBWjtBQUFtQkwsY0FBTSxFQUFFLElBQTNCO0FBQWlDRyxrQkFBVSxFQUFFLElBQTdDO0FBQW1EQyxnQkFBUSxFQUFFO0FBQTdEOztBQUNKLFNBQUsvRCw4REFBTDtBQUNJLDZDQUFZZ0UsS0FBWjtBQUFtQkwsY0FBTSxFQUFFLElBQTNCO0FBQWlDRyxrQkFBVSxFQUFFLEtBQTdDO0FBQW9EQyxnQkFBUSxFQUFFO0FBQTlEOztBQUNKLFNBQUtFLCtEQUFMO0FBQ0ksNkNBQVlELEtBQVo7QUFBbUJMLGNBQU0sRUFBRWxFLE9BQU8sQ0FBQ2tFLE1BQW5DO0FBQTJDRyxrQkFBVSxFQUFFLEtBQXZEO0FBQThEQyxnQkFBUSxFQUFFLElBQXhFO0FBQThFSCxhQUFLLEVBQUVuRSxPQUFPLENBQUNtRSxLQUE3RjtBQUFvR0MsZ0JBQVEsRUFBRXBFLE9BQU8sQ0FBQ29FO0FBQXRIOztBQUNKLFNBQUt4RCxnRUFBTDtBQUNJLGFBQU9xRCxZQUFQOztBQUNKO0FBQ0ksYUFBT00sS0FBUDtBQVZSO0FBWUgsQ0FiRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBR0EsTUFBTU4sWUFBNkIsR0FBRztBQUNsQ0MsUUFBTSxFQUFFLElBRDBCO0FBRWxDSSxVQUFRLEVBQUUsS0FGd0I7QUFHbENELFlBQVUsRUFBRTtBQUhzQixDQUF0QztBQU1lLGdFQUFDRSxLQUFLLEdBQUdOLFlBQVQsRUFBdUI7QUFBRWhFLE1BQUY7QUFBUUQ7QUFBUixDQUF2QixLQUE4RDtBQUN6RSxVQUFRQyxJQUFSO0FBQ0ksU0FBS2EsbUVBQUw7QUFDSSw2Q0FBWXlELEtBQVo7QUFBbUJMLGNBQU0sRUFBRSxJQUEzQjtBQUFpQ0csa0JBQVUsRUFBRSxJQUE3QztBQUFtREMsZ0JBQVEsRUFBRTtBQUE3RDs7QUFDSixTQUFLckQsaUVBQUw7QUFDSSw2Q0FBWXNELEtBQVo7QUFBbUJMLGNBQU0sRUFBRSxJQUEzQjtBQUFpQ0csa0JBQVUsRUFBRSxLQUE3QztBQUFvREMsZ0JBQVEsRUFBRTtBQUE5RDs7QUFDSixTQUFLRyxrRUFBTDtBQUNJLDZDQUFZRixLQUFaO0FBQW1CTCxjQUFNLEVBQUVsRSxPQUFPLENBQUNrRSxNQUFuQztBQUEyQ0csa0JBQVUsRUFBRSxLQUF2RDtBQUE4REMsZ0JBQVEsRUFBRTtBQUF4RTs7QUFDSjtBQUNJLGFBQU9DLEtBQVA7QUFSUjtBQVVILENBWEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUVBLE1BQU1OLFlBQWdDLEdBQUc7QUFDckNDLFFBQU0sRUFBRSxJQUQ2QjtBQUVyQ0ksVUFBUSxFQUFFLEtBRjJCO0FBR3JDRCxZQUFVLEVBQUU7QUFIeUIsQ0FBekM7QUFNZSxnRUFBQ0UsS0FBSyxHQUFHTixZQUFULEVBQXVCO0FBQUVoRSxNQUFGO0FBQVFEO0FBQVIsQ0FBdkIsS0FBaUU7QUFDNUUsVUFBUUMsSUFBUjtBQUNJLFNBQUt5RSx1RUFBTDtBQUNJLDZDQUFZSCxLQUFaO0FBQW1CTCxjQUFNLEVBQUUsSUFBM0I7QUFBaUNHLGtCQUFVLEVBQUUsSUFBN0M7QUFBbURDLGdCQUFRLEVBQUU7QUFBN0Q7O0FBQ0osU0FBS0kscUVBQUw7QUFDSSw2Q0FBWUgsS0FBWjtBQUFtQkwsY0FBTSxFQUFFLElBQTNCO0FBQWlDRyxrQkFBVSxFQUFFLEtBQTdDO0FBQW9EQyxnQkFBUSxFQUFFO0FBQTlEOztBQUNKLFNBQUtJLHNFQUFMO0FBQ0ksNkNBQVlILEtBQVo7QUFBbUJMLGNBQU0sRUFBRWxFLE9BQTNCO0FBQW9DcUUsa0JBQVUsRUFBRSxLQUFoRDtBQUF1REMsZ0JBQVEsRUFBRTtBQUFqRTs7QUFDSjtBQUNJLGFBQU9DLEtBQVA7QUFSUjtBQVVILENBWEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBLE1BQU1OLFlBQThCLEdBQUc7QUFDbkNDLFFBQU0sRUFBRSxJQUQyQjtBQUVuQ0ksVUFBUSxFQUFFLEtBRnlCO0FBR25DRCxZQUFVLEVBQUU7QUFIdUIsQ0FBdkM7QUFNZSxnRUFBQ0UsS0FBSyxHQUFHTixZQUFULEVBQXVCO0FBQUVoRSxNQUFGO0FBQVFEO0FBQVIsQ0FBdkIsS0FBK0Q7QUFDMUUsVUFBUUMsSUFBUjtBQUNJLFNBQUt5RSxxRUFBTDtBQUNJLDZDQUFZSCxLQUFaO0FBQW1CTCxjQUFNLEVBQUUsSUFBM0I7QUFBaUNHLGtCQUFVLEVBQUUsSUFBN0M7QUFBbURDLGdCQUFRLEVBQUU7QUFBN0Q7O0FBQ0osU0FBS0ksbUVBQUw7QUFDSSw2Q0FBWUgsS0FBWjtBQUFtQkwsY0FBTSxFQUFFLElBQTNCO0FBQWlDRyxrQkFBVSxFQUFFLEtBQTdDO0FBQW9EQyxnQkFBUSxFQUFFO0FBQTlEOztBQUNKLFNBQUtJLG9FQUFMO0FBQ0ksNkNBQVlILEtBQVo7QUFBbUJMLGNBQU0sRUFBRWxFLE9BQTNCO0FBQW9DcUUsa0JBQVUsRUFBRSxLQUFoRDtBQUF1REMsZ0JBQVEsRUFBRTtBQUFqRTs7QUFDSjtBQUNJLGFBQU9DLEtBQVA7QUFSUjtBQVVILENBWEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUVBLE1BQU1OLFlBQThCLEdBQUc7QUFDbkNDLFFBQU0sRUFBRSxJQUQyQjtBQUVuQ0ksVUFBUSxFQUFFLEtBRnlCO0FBR25DRCxZQUFVLEVBQUU7QUFIdUIsQ0FBdkM7QUFNZSxnRUFBQ0UsS0FBSyxHQUFHTixZQUFULEVBQXVCO0FBQUVoRSxNQUFGO0FBQVFEO0FBQVIsQ0FBdkIsS0FBK0Q7QUFDMUUsVUFBUUMsSUFBUjtBQUNJLFNBQUt5RSxxRUFBTDtBQUNJLDZDQUFZSCxLQUFaO0FBQW1CTCxjQUFNLEVBQUUsSUFBM0I7QUFBaUNHLGtCQUFVLEVBQUUsSUFBN0M7QUFBbURDLGdCQUFRLEVBQUU7QUFBN0Q7O0FBQ0osU0FBS0ksbUVBQUw7QUFDSSw2Q0FBWUgsS0FBWjtBQUFtQkwsY0FBTSxFQUFFLElBQTNCO0FBQWlDRyxrQkFBVSxFQUFFLEtBQTdDO0FBQW9EQyxnQkFBUSxFQUFFO0FBQTlEOztBQUNKLFNBQUtJLG9FQUFMO0FBQ0ksNkNBQVlILEtBQVo7QUFBbUJMLGNBQU0sRUFBRWxFLE9BQTNCO0FBQW9DcUUsa0JBQVUsRUFBRSxLQUFoRDtBQUF1REMsZ0JBQVEsRUFBRTtBQUFqRTs7QUFDSjtBQUNJLGFBQU9DLEtBQVA7QUFSUjtBQVVILENBWEQsRTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1JLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU03RCxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNMkQsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTXhELGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNMkQsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTXhFLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNb0UsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTWpFLFlBQVksR0FBRyxjQUFyQjtBQUVBLE1BQU1zRSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTW5FLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNRSxjQUFjLEdBQUcsZ0JBQXZCO0FBR0EsTUFBTTJCLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1FLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1HLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1rQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNM0QscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTXlELG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1yRCxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNRyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNbUQsa0JBQWtCLEdBQUcsb0JBQTNCO0FBR0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDLEM7Ozs7Ozs7Ozs7OztBQ3hDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNPLFVBQVVDLG9CQUFWLEdBQWlDO0FBQ3BDLFFBQU1DLG9FQUFTLENBQUMxRiw2REFBRCxFQUErQjJGLDJEQUEvQixDQUFmO0FBQ0gsQyxDQUVEOztBQUNBLFVBQVVDLGlCQUFWLEdBQThCO0FBQzFCLFFBQU1GLG9FQUFTLENBQUMxRiwwREFBRCxFQUE0QjZGLHFEQUE1QixDQUFmO0FBQ0gsQyxDQUdEOzs7QUFDQSxVQUFVQyxtQkFBVixHQUFnQztBQUM1QixRQUFNSixvRUFBUyxDQUFDMUYsNERBQUQsRUFBOEIrRix1REFBOUIsQ0FBZjtBQUNILEMsQ0FFRDs7O0FBQ0EsVUFBVUMsa0JBQVYsR0FBK0I7QUFDM0IsUUFBTU4sb0VBQVMsQ0FBQzFGLDJEQUFELEVBQTZCaUcsc0RBQTdCLENBQWY7QUFDSCxDLENBR0Q7OztBQUNBLFVBQVVDLHFCQUFWLEdBQWtDO0FBQzlCLFFBQU1SLG9FQUFTLENBQUMxRiwrREFBRCxFQUFpQ21HLDZEQUFqQyxDQUFmO0FBQ0gsQyxDQUVEOzs7QUFDQSxVQUFVQyx1QkFBVixHQUFvQztBQUNoQyxRQUFNVixvRUFBUyxDQUFDMUYsaUVBQUQsRUFBbUNxRyxpRUFBbkMsQ0FBZjtBQUNILEMsQ0FFRDs7O0FBQ0EsVUFBVUMscUJBQVYsR0FBa0M7QUFDOUIsUUFBTVosb0VBQVMsQ0FBQzFGLCtEQUFELEVBQWlDdUcsNkRBQWpDLENBQWY7QUFDSCxDLENBR0Q7OztBQUNBLFVBQVVDLHVCQUFWLEdBQW9DO0FBQ2hDLFFBQU1kLG9FQUFTLENBQUMxRixpRUFBRCxFQUFtQ3lHLGlFQUFuQyxDQUFmO0FBQ0g7O0FBRWMsVUFBVW5ELFFBQVYsR0FBcUI7QUFDaEMsUUFBTW9ELDhEQUFHLENBQUMsQ0FDTmpCLG9CQUFvQixFQURkLEVBRU5HLGlCQUFpQixFQUZYLEVBR05FLG1CQUFtQixFQUhiLEVBSU5FLGtCQUFrQixFQUpaLEVBS05FLHFCQUFxQixFQUxmLEVBTU5FLHVCQUF1QixFQU5qQixFQU9ORSxxQkFBcUIsRUFQZixFQVFORSx1QkFBdUIsRUFSakIsQ0FBRCxDQUFUO0FBVUgsQzs7Ozs7Ozs7Ozs7O0FDaEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLFVBQVVYLFNBQVYsQ0FBb0I7QUFBRS9GO0FBQUYsQ0FBcEIsRUFBc0M7QUFDekMsTUFBSTtBQUNBLFVBQU02Ryw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ3ZFLGFBQVIsRUFBRCxDQUFUO0FBQ0EsVUFBTStCLFFBQVEsR0FBRyxNQUFNNEUsK0RBQUksQ0FBQzNFLHlEQUFVLENBQUM0RSxJQUFaLEVBQWtCLGVBQWxCLEVBQW1DL0csT0FBbkMsQ0FBM0I7QUFDQSxVQUFNO0FBQUVrRTtBQUFGLFFBQWFoQyxRQUFRLENBQUNHLElBQTVCOztBQUNBLFFBQUk2QixNQUFNLElBQUk4Qyx5REFBZCxFQUF5QjtBQUNyQkMscUVBQVMsQ0FBQyxPQUFELEVBQVUvRSxRQUFRLENBQUNHLElBQVQsQ0FBYzhCLEtBQXhCLENBQVQ7QUFDQThDLHFFQUFTLENBQUMsVUFBRCxFQUFhL0UsUUFBUSxDQUFDRyxJQUFULENBQWMrQixRQUEzQixDQUFUO0FBQ0EsWUFBTXlDLDhEQUFHLENBQUNuQyxnREFBTyxDQUFDckUsWUFBUixDQUFxQjZCLFFBQVEsQ0FBQ0csSUFBOUIsQ0FBRCxDQUFUO0FBQ0E2RSx3REFBTSxDQUFDOUksSUFBUCxDQUFZLFFBQVo7QUFDSCxLQUxELE1BS087QUFDSCxZQUFNeUksOERBQUcsQ0FBQ25DLGdEQUFPLENBQUNwRSxXQUFSLEVBQUQsQ0FBVDtBQUNIO0FBQ0osR0FaRCxDQVlFLE9BQU82RyxLQUFQLEVBQWM7QUFDWixVQUFNTiw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ3BFLFdBQVIsRUFBRCxDQUFUO0FBQ0g7QUFDSjtBQUVNLFVBQVUyRixXQUFWLENBQXNCO0FBQUVqRztBQUFGLENBQXRCLEVBQXdDO0FBQzNDLFFBQU11RSxLQUFLLEdBQUcsTUFBTTZDLGlFQUFNLEVBQTFCO0FBQ0EsUUFBTUMsZ0VBQUssQ0FBQyxFQUFELENBQVg7O0FBQ0EsTUFBSTlDLEtBQUssQ0FBQ1YsWUFBTixDQUFtQk0sS0FBdkIsRUFBOEI7QUFDMUIrQyxzREFBTSxDQUFDOUksSUFBUCxDQUFZLFFBQVo7QUFDSCxHQUZELE1BRU8sSUFBSTRCLE9BQU8sQ0FBQ21FLEtBQVosRUFBbUI7QUFDdEI7QUFDQSxVQUFNMEMsOERBQUcsQ0FBQ25DLGdEQUFPLENBQUNyRSxZQUFSLENBQXFCTCxPQUFyQixDQUFELENBQVQ7QUFDQWtILHNEQUFNLENBQUM5SSxJQUFQLENBQVksUUFBWjtBQUNILEdBSk0sTUFJQTtBQUNILFVBQU1rSixVQUFVLEdBQUdDLCtEQUFTLENBQUMsT0FBRCxDQUE1Qjs7QUFDQSxRQUFJRCxVQUFKLEVBQWdCO0FBQ1osWUFBTVQsOERBQUcsQ0FBQ25DLGdEQUFPLENBQUNyRSxZQUFSLENBQXFCTCxPQUFyQixDQUFELENBQVQ7QUFDQWtILHdEQUFNLENBQUM5SSxJQUFQLENBQVksUUFBWjtBQUNIO0FBQ0o7QUFDSjtBQUVNLFVBQVUrSCxVQUFWLEdBQXVCO0FBQzFCcUIsb0VBQVksQ0FBQyxPQUFELENBQVo7QUFDQSxRQUFNWCw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQy9ELGFBQVIsRUFBRCxDQUFUO0FBQ0F1RyxvREFBTSxDQUFDOUksSUFBUCxDQUFZLFFBQVo7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNqREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLFVBQVV5SCxZQUFWLENBQXVCO0FBQUU3RjtBQUFGLENBQXZCLEVBQXlDO0FBQzVDLE1BQUk7QUFDQSxVQUFNNkcsOERBQUcsQ0FBQ25DLGdEQUFPLENBQUM3RCxnQkFBUixFQUFELENBQVQ7QUFDQSxVQUFNcUIsUUFBUSxHQUFHLE1BQU00RSwrREFBSSxDQUFDM0UseURBQVUsQ0FBQzRFLElBQVosRUFBa0Isa0JBQWxCLEVBQXNDL0csT0FBdEMsQ0FBM0I7QUFDQSxVQUFNO0FBQUVrRTtBQUFGLFFBQWFoQyxRQUFRLENBQUNHLElBQTVCOztBQUNBLFFBQUk2QixNQUFNLElBQUk4Qyx5REFBZCxFQUF5QjtBQUNyQixZQUFNSCw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQzNELGVBQVIsQ0FBd0I7QUFBRW1ELGNBQU0sRUFBRWhDLFFBQVEsQ0FBQ0c7QUFBbkIsT0FBeEIsQ0FBRCxDQUFUO0FBQ0E2RSx3REFBTSxDQUFDOUksSUFBUCxDQUFZLFFBQVo7QUFDSCxLQUhELE1BR087QUFDSCxZQUFNeUksOERBQUcsQ0FBQ25DLGdEQUFPLENBQUMxRCxjQUFSLEVBQUQsQ0FBVDtBQUNIO0FBQ0osR0FWRCxDQVVFLE9BQU9tRyxLQUFQLEVBQWM7QUFDWixVQUFNTiw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQzFELGNBQVIsRUFBRCxDQUFUO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sVUFBVXVGLGVBQVYsQ0FBMEI7QUFBRXZHO0FBQUYsQ0FBMUIsRUFBNEM7QUFDL0MsTUFBSTtBQUNBLFVBQU02Ryw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ3ZELG1CQUFSLEVBQUQsQ0FBVDtBQUNBLFVBQU1rRyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1uRixRQUFRLEdBQUcsTUFBTTRFLCtEQUFJLENBQUMzRSx5REFBVSxDQUFDNEUsSUFBWixFQUFrQixnQkFBbEIsRUFBb0MvRyxPQUFwQyxDQUEzQjtBQUNBLFVBQU02Ryw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ3JELGtCQUFSLENBQTJCYSxRQUFRLENBQUNHLElBQXBDLENBQUQsQ0FBVDtBQUNBNkUsc0RBQU0sQ0FBQzlJLElBQVAsQ0FBWSxRQUFaO0FBQ0gsR0FORCxDQU1FLE9BQU8rSSxLQUFQLEVBQWM7QUFDWixVQUFNTiw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ3BELGlCQUFSLEVBQUQsQ0FBVDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLFVBQVVxRixlQUFWLENBQTBCO0FBQUUzRyxTQUFGO0FBQVd5QjtBQUFYLENBQTFCLEVBQXNEO0FBQ3pELE1BQUk7QUFDQSxVQUFNUyxRQUFRLEdBQUcsTUFBTTRFLCtEQUFJLENBQUMzRSx5REFBVSxDQUFDc0YsTUFBWixFQUFxQixrQkFBaUJ6SCxPQUFRLEVBQTlDLENBQTNCO0FBQ0EsVUFBTTtBQUFFa0U7QUFBRixRQUFhaEMsUUFBUSxDQUFDRyxJQUE1Qjs7QUFDQSxRQUFJNkIsTUFBTSxJQUFJOEMseURBQWQsRUFBeUI7QUFDckJ2RixjQUFRLENBQUNpRCxnREFBTyxDQUFDcEMsYUFBUixFQUFELENBQVI7QUFDSDtBQUNKLEdBTkQsQ0FNRSxPQUFPNkUsS0FBUCxFQUFjLENBQ1o7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxVQUFVVixhQUFWLENBQXdCO0FBQUV6RztBQUFGLENBQXhCLEVBQTBDO0FBQzdDLE1BQUk7QUFDQSxVQUFNNkcsOERBQUcsQ0FBQ25DLGdEQUFPLENBQUMvQyxpQkFBUixFQUFELENBQVQ7QUFDQSxVQUFNTyxRQUFRLEdBQUcsTUFBTTRFLCtEQUFJLENBQUMzRSx5REFBVSxDQUFDMEUsR0FBWixFQUFpQixnQkFBakIsRUFBbUM3RyxPQUFuQyxDQUEzQjtBQUNBLFVBQU02Ryw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQzdDLGdCQUFSLENBQXlCSyxRQUFRLENBQUNHLElBQWxDLENBQUQsQ0FBVDtBQUNBNkUsc0RBQU0sQ0FBQzlJLElBQVAsQ0FBWSxRQUFaO0FBQ0gsR0FMRCxDQUtFLE9BQU8rSSxLQUFQLEVBQWM7QUFDWixVQUFNTiw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQzVDLGVBQVIsRUFBRCxDQUFUO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7QUNmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHTyxVQUFVdUUsYUFBVixDQUF3QnJHLE9BQXhCLEVBQWlDO0FBQ3BDLE1BQUk7QUFDQSxVQUFNNkcsOERBQUcsQ0FBQ25DLGdEQUFPLENBQUNsQyxpQkFBUixFQUFELENBQVQ7QUFDQSxVQUFNTixRQUFRLEdBQUcsTUFBTTRFLCtEQUFJLENBQUMzRSx5REFBVSxDQUFDQyxHQUFaLEVBQWlCLGdCQUFqQixDQUEzQjtBQUNBLFVBQU15RSw4REFBRyxDQUFDbkMsZ0RBQU8sQ0FBQ2hDLGdCQUFSLENBQXlCUixRQUFRLENBQUNHLElBQWxDLENBQUQsQ0FBVDtBQUVILEdBTEQsQ0FLRSxPQUFPOEUsS0FBUCxFQUFjO0FBQ1osVUFBTU4sOERBQUcsQ0FBQ25DLGdEQUFPLENBQUMvQixlQUFSLEVBQUQsQ0FBVDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7O0FDZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU0rRSxNQUFNLEdBQUcsT0FBZjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLE1BQU1YLFNBQVMsR0FBRyxJQUFsQjtBQUNBLE1BQU1ZLFVBQVUsR0FBRyxLQUFuQixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRU8sTUFBTVgsU0FBUyxHQUFHLENBQUNZLEdBQUQsRUFBTUMsS0FBTixLQUFnQjtBQUN2QyxhQUFxQixFQUtwQjtBQUNGLENBUE07QUFTQSxNQUFNTixZQUFZLEdBQUlLLEdBQUQsSUFBUztBQUNuQyxhQUFxQixFQUlwQjtBQUNGLENBTk07QUFRQSxNQUFNTixTQUFTLEdBQUcsQ0FBQ00sR0FBRCxFQUFNRSxHQUFOLEtBQWM7QUFDckMsU0FBTyxRQUNIQyxTQURHLEdBRUhDLG1CQUFtQixDQUFDSixHQUFELEVBQU1FLEdBQU4sQ0FGdkI7QUFHRCxDQUpNOztBQU1QLE1BQU1DLG9CQUFvQixHQUFJSCxHQUFELElBQVM7QUFDcEMsU0FBT0ssZ0RBQU0sQ0FBQzlGLEdBQVAsQ0FBV3lGLEdBQVgsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTUksbUJBQW1CLEdBQUcsQ0FBQ0osR0FBRCxFQUFNRSxHQUFOLEtBQWM7QUFDeEMsTUFBSSxDQUFDQSxHQUFHLENBQUNJLE9BQUosQ0FBWUQsTUFBakIsRUFBeUI7QUFDdkIsV0FBT0UsU0FBUDtBQUNEOztBQUNELFFBQU1DLFNBQVMsR0FBR04sR0FBRyxDQUFDSSxPQUFKLENBQVlELE1BQVosQ0FDZkksS0FEZSxDQUNULEdBRFMsRUFFZkMsSUFGZSxDQUVUQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixHQUFTQyxVQUFULENBQXFCLEdBQUViLEdBQUksR0FBM0IsQ0FGRyxDQUFsQjs7QUFHQSxNQUFJLENBQUNRLFNBQUwsRUFBZ0I7QUFDZCxXQUFPRCxTQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsU0FBUyxDQUFDQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVA7QUFDRCxDQVhELEM7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0EsTUFBTW5HLFVBQVUsR0FBR3dHLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUM5QkMsU0FBTyxFQUFFQyw4QkFBd0NDO0FBRG5CLENBQWIsQ0FBbkI7QUFJTyxNQUFNM0osY0FBYyxHQUFJcUMsUUFBRCxJQUFjO0FBQzFDVSxZQUFVLENBQUM2RyxZQUFYLENBQXdCQyxPQUF4QixDQUFnQ0MsR0FBaEMsQ0FBcUNuQixHQUFELElBQVM7QUFDM0MsVUFBTTVELEtBQUssR0FBR29ELHlEQUFTLENBQUNHLGdEQUFELENBQXZCO0FBQ0EsUUFBSXZELEtBQUosRUFBVzRELEdBQUcsQ0FBQ0ksT0FBSixHQUFjO0FBQUUsd0JBQWtCaEU7QUFBcEIsS0FBZDtBQUNYLFdBQU80RCxHQUFQO0FBQ0QsR0FKRDtBQU9BNUYsWUFBVSxDQUFDNkcsWUFBWCxDQUF3QjlHLFFBQXhCLENBQWlDZ0gsR0FBakMsQ0FBcUMsVUFBVWhILFFBQVYsRUFBb0I7QUFDdkQsV0FBT0EsUUFBUDtBQUNELEdBRkQsRUFFRyxVQUFVaUYsS0FBVixFQUFpQjtBQUNsQixRQUFJLFFBQVFBLEtBQUssQ0FBQ2pGLFFBQU4sQ0FBZWlILE1BQXZCLElBQWlDLFFBQVFoQyxLQUFLLENBQUNqRixRQUFOLENBQWVpSCxNQUF4RCxJQUFrRSxRQUFRaEMsS0FBSyxDQUFDakYsUUFBTixDQUFlaUgsTUFBN0YsRUFBcUc7QUFDbkcxSCxjQUFRLENBQUNpRCxzREFBTyxDQUFDakUsTUFBUixFQUFELENBQVI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPMkksT0FBTyxDQUFDQyxNQUFSLENBQWVsQyxLQUFmLENBQVA7QUFDRDtBQUNGLEdBUkQ7QUFVRCxDQWxCTTtBQW9CUWhGLHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9yZWR1eFwiO1xuaW1wb3J0IGh0dHBDbGllbnQsIHsgc2V0SW50ZXJjZXB0b3IgfSBmcm9tIFwiLi8uLi91dGlscy9odHRwQ2xpZW50XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHt9XG5cbmZ1bmN0aW9uIENNQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgLy8gaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vY3VzdG9taXphdGlvbi90aGVtaW5nL1xuICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIG1haW46IFwiIzEzNWFiOFwiLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBtYWluOiBcIiNlODVmNWZcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgc2V0SW50ZXJjZXB0b3IodXNlRGlzcGF0Y2goKSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuQ01BcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgLy8gY2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG5cbiAgcmV0dXJuIHsgLi4uYXBwUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KENNQXBwKTtcbiIsImltcG9ydCBsb2dpbiBmcm9tICcuL2xvZ2luLmFjdGlvbic7XG5pbXBvcnQgcmVnaXN0ZXIgZnJvbSAnLi9yZWdpc3Rlci5hY3Rpb24nO1xuaW1wb3J0IHN0b2NrTGlzdCBmcm9tICcuL3N0b2NrTGlzdC5hY3Rpb24nO1xuaW1wb3J0IHN0b2NrQ3JlYXRlIGZyb20gJy4vc3RvY2tDcmVhdGUuYWN0aW9uJztcbmltcG9ydCBzdG9ja0VkaXQgZnJvbSAnLi9zdG9ja0VkaXQuYWN0aW9uJztcbmltcG9ydCBzdG9ja0RlbGV0ZSBmcm9tICcuL3N0b2NrRGVsZXRlLmFjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAuLi5sb2dpbixcbiAgICAuLi5yZWdpc3RlcixcbiAgICAuLi5zdG9ja0xpc3QsXG4gICAgLi4uc3RvY2tDcmVhdGUsXG4gICAgLi4uc3RvY2tFZGl0LFxuICAgIC4uLnN0b2NrRGVsZXRlXG59IiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL3NhZ2EvYWN0aW9uVHlwZXNcIlxuXG5leHBvcnQgY29uc3QgbG9naW4gPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9GRVRDSElOR1xufSlcblxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2VzcyA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1MsXG4gICAgcGF5bG9hZFxufSlcblxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9GQUlMRURcbn0pXG5cbmV4cG9ydCBjb25zdCByZWxvZ2luID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuUkVMT0dJTl9SRVFVRVNULFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9SRVFVRVNUXG59KVxuXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2VzcyA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1Ncbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2dpbixcbiAgICBsb2dpbkZldGNoaW5nLFxuICAgIGxvZ2luU3VjY2VzcyxcbiAgICBsb2dpbkZhaWxlZCxcbiAgICByZWxvZ2luLFxuICAgIGxvZ291dCxcbiAgICBsb2dvdXRTdWNjZXNzXG59OyIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9zYWdhL2FjdGlvblR5cGVzXCJcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuUkVHSVNURVJfUkVRVUVTVCxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGZXRjaGluZyA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuUkVHSVNURVJfRkVUQ0hJTkcsXG59KVxuXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5SRUdJU1RFUl9TVUNDRVNTLFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlckZhaWxlZCA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuUkVHSVNURVJfRkFJTEVEXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgcmVnaXN0ZXJGZXRjaGluZyxcbiAgICByZWdpc3RlclN1Y2Nlc3MsXG4gICAgcmVnaXN0ZXJGYWlsZWRcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vc2FnYS9hY3Rpb25UeXBlc1wiXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdG9jayA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0NSRUFURV9SRVFVRVNULFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0NyZWF0ZUZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19DUkVBVEVfRkVUQ0hJTkdcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0NyZWF0ZVN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19DUkVBVEVfU1VDQ0VTUyxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tDcmVhdGVGYWlsZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0NSRUFURV9GQUlMRUQsXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlU3RvY2ssXG4gICAgc3RvY2tDcmVhdGVGZXRjaGluZyxcbiAgICBzdG9ja0NyZWF0ZVN1Y2Nlc3MsXG4gICAgc3RvY2tDcmVhdGVGYWlsZWQsXG59OyIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9zYWdhL2FjdGlvblR5cGVzXCJcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVN0b2NrID0gKHBheWxvYWQsIGRpc3BhdGNoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0RFTEVURV9SRVFVRVNULFxuICAgIHBheWxvYWQsXG4gICAgZGlzcGF0Y2hcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWxldGVTdG9ja1xufSIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9zYWdhL2FjdGlvblR5cGVzXCJcbmltcG9ydCBodHRwQ2xpZW50IGZyb20gXCIuLi8uLi91dGlscy9odHRwQ2xpZW50XCJcblxuZXhwb3J0IGNvbnN0IGVkaXRTdG9jayA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0VESVRfUkVRVUVTVCxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tFZGl0RmV0Y2hpbmcgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0VESVRfRkVUQ0hJTkdcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0VkaXRTdWNjZXNzID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU1RPQ0tfRURJVF9TVUNDRVNTLFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0VkaXRGYWlsZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0VESVRfRkFJTEVELFxufSlcblxuZXhwb3J0IGNvbnN0IGRvR2V0U3RvY2tCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBodHRwQ2xpZW50LmdldChgL3N0b2NrL3Byb2R1Y3QvJHtpZH1gKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGVkaXRTdG9jayxcbiAgICBzdG9ja0VkaXRGZXRjaGluZyxcbiAgICBzdG9ja0VkaXRTdWNjZXNzLFxuICAgIHN0b2NrRWRpdEZhaWxlZCxcbiAgICBkb0dldFN0b2NrQnlJZFxufTsiLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vc2FnYS9hY3Rpb25UeXBlc1wiXG5cbmV4cG9ydCBjb25zdCBmZWVkU3RvY2tMaXN0ID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19MSVNUX1JFUVVFU1QsXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tMaXN0RmV0Y2hpbmcgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0xJU1RfRkVUQ0hJTkdcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0xpc3RTdWNjZXNzID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU1RPQ0tfTElTVF9TVUNDRVNTLFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBzdG9ja0xpc3RGYWlsZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0xJU1RfRkFJTEVELFxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZlZWRTdG9ja0xpc3QsXG4gICAgc3RvY2tMaXN0RmV0Y2hpbmcsXG4gICAgc3RvY2tMaXN0U3VjY2VzcyxcbiAgICBzdG9ja0xpc3RGYWlsZWQsXG59OyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIFN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgTWFrZVN0b3JlLCBjcmVhdGVXcmFwcGVyLCBDb250ZXh0IH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4vc2FnYVwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IFRhc2sgfSBmcm9tICdyZWR1eC1zYWdhJztcbmV4cG9ydCBpbnRlcmZhY2UgU2FnYVN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHNhZ2FUYXNrPzogVGFzaztcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZTogTWFrZVN0b3JlPGFueT4gPSAoY29udGV4dDogQ29udGV4dCkgPT4ge1xuICAgIC8vIDE6IENyZWF0ZSB0aGUgbWlkZGxld2FyZVxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuICAgIC8vIDI6IEFkZCBhbiBleHRyYSBwYXJhbWV0ZXIgZm9yIGFwcGx5aW5nIG1pZGRsZXdhcmU6XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpKTtcblxuICAgIC8vIDM6IFJ1biB5b3VyIHNhZ2FzIG9uIHNlcnZlclxuICAgIChzdG9yZSBhcyBTYWdhU3RvcmUpLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuICAgIC8vIDQ6IG5vdyByZXR1cm4gdGhlIHN0b3JlOlxuICAgIHJldHVybiBzdG9yZTtcbn07XG5cbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyPGFueT4obWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pOyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWdpc3RlclJlZHVjZXIgZnJvbSAnLi9yZWdpc3Rlci5yZWR1Y2VyJztcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSAnLi9sb2dpbi5yZWR1Y2VyJztcbmltcG9ydCBzdG9ja0xpc3RSZWR1Y2VyIGZyb20gJy4vc3RvY2tMaXN0LnJlZHVjZXInO1xuaW1wb3J0IHN0b2NrQ3JlYXRlUmVkdWNlciBmcm9tICcuL3N0b2NrQ3JlYXRlLnJlZHVjZXInO1xuaW1wb3J0IHN0b2NrRWRpdFJlZHVjZXIgZnJvbSAnLi9zdG9ja0VkaXQucmVkdWNlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgICByZWdpc3RlclJlZHVjZXIsXG4gICAgbG9naW5SZWR1Y2VyLFxuICAgIHN0b2NrTGlzdFJlZHVjZXIsXG4gICAgc3RvY2tDcmVhdGVSZWR1Y2VyLFxuICAgIHN0b2NrRWRpdFJlZHVjZXIsXG59KTsiLCJpbXBvcnQgeyBMT0dJTl9TVUNDRVNTLCBMT0dJTl9GRVRDSElORywgTE9HSU5fRkFJTEVELCBMT0dPVVRfU1VDQ0VTUyB9IGZyb20gJy4uL3NhZ2EvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTG9naW5SZWR1Y2VyIH0gZnJvbSAnLi4vLi4vdHlwZXMvbG9naW4ucmVkdWNlci50eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9naW5SZWR1Y2VyID0ge1xuICAgIHJlc3VsdDogbnVsbCxcbiAgICB0b2tlbjogbnVsbCxcbiAgICB1c2VybmFtZTogbnVsbCxcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpc0ZhaWxlZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBMT0dJTl9GRVRDSElORzpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IG51bGwsIGlzRmV0Y2hpbmc6IHRydWUsIGlzRmFpbGVkOiBmYWxzZSB9XG4gICAgICAgIGNhc2UgTE9HSU5fRkFJTEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCwgaXNGZXRjaGluZzogZmFsc2UsIGlzRmFpbGVkOiB0cnVlIH1cbiAgICAgICAgY2FzZSBMT0dJTl9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogcGF5bG9hZC5yZXN1bHQsIGlzRmV0Y2hpbmc6IGZhbHNlLCBpc0ZhaWxlZDogdHJ1ZSwgdG9rZW46IHBheWxvYWQudG9rZW4sIHVzZXJuYW1lOiBwYXlsb2FkLnVzZXJuYW1lIH1cbiAgICAgICAgY2FzZSBMT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGVcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59OyIsImltcG9ydCB7IFJlZ2lzdGVyUmVkdWNlciB9IGZyb20gJy4vLi4vLi4vdHlwZXMvcmVnaXN0ZXIucmVkdWNlci50eXBlcyc7XG5pbXBvcnQgeyBSRUdJU1RFUl9TVUNDRVNTLCBSRUdJU1RFUl9GRVRDSElORywgUkVHSVNURVJfRkFJTEVEIH0gZnJvbSAnLi4vc2FnYS9hY3Rpb25UeXBlcyc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpc3RlclJlZHVjZXIgPSB7XG4gICAgcmVzdWx0OiBudWxsLFxuICAgIGlzRmFpbGVkOiBmYWxzZSxcbiAgICBpc0ZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KTogUmVnaXN0ZXJSZWR1Y2VyID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBSRUdJU1RFUl9GRVRDSElORzpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IG51bGwsIGlzRmV0Y2hpbmc6IHRydWUsIGlzRmFpbGVkOiBmYWxzZSB9XG4gICAgICAgIGNhc2UgUkVHSVNURVJfRkFJTEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCwgaXNGZXRjaGluZzogZmFsc2UsIGlzRmFpbGVkOiB0cnVlIH1cbiAgICAgICAgY2FzZSBSRUdJU1RFUl9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogcGF5bG9hZC5yZXN1bHQsIGlzRmV0Y2hpbmc6IGZhbHNlLCBpc0ZhaWxlZDogZmFsc2UgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvY2tDcmVhdGVSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vdHlwZXMvc3RvY2tDcmVhdGUucmVkdWNlci50eXBlcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3NhZ2EvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0b2NrQ3JlYXRlUmVkdWNlciA9IHtcbiAgICByZXN1bHQ6IG51bGwsXG4gICAgaXNGYWlsZWQ6IGZhbHNlLFxuICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pOiBTdG9ja0NyZWF0ZVJlZHVjZXIgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvbnMuU1RPQ0tfQ1JFQVRFX0ZFVENISU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCwgaXNGZXRjaGluZzogdHJ1ZSwgaXNGYWlsZWQ6IGZhbHNlIH1cbiAgICAgICAgY2FzZSBhY3Rpb25zLlNUT0NLX0NSRUFURV9GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0OiBudWxsLCBpc0ZldGNoaW5nOiBmYWxzZSwgaXNGYWlsZWQ6IHRydWUgfVxuICAgICAgICBjYXNlIGFjdGlvbnMuU1RPQ0tfQ1JFQVRFX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0OiBwYXlsb2FkLCBpc0ZldGNoaW5nOiBmYWxzZSwgaXNGYWlsZWQ6IGZhbHNlIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0b2NrRWRpdFJlZHVjZXIgfSBmcm9tICcuLi8uLi90eXBlcy9zdG9ja0VkaXQucmVkdWNlci50eXBlcyc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL3NhZ2EvYWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0b2NrRWRpdFJlZHVjZXIgPSB7XG4gICAgcmVzdWx0OiBudWxsLFxuICAgIGlzRmFpbGVkOiBmYWxzZSxcbiAgICBpc0ZldGNoaW5nOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIHsgdHlwZSwgcGF5bG9hZCB9KTogU3RvY2tFZGl0UmVkdWNlciA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9ucy5TVE9DS19FRElUX0ZFVENISU5HOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCwgaXNGZXRjaGluZzogdHJ1ZSwgaXNGYWlsZWQ6IGZhbHNlIH1cbiAgICAgICAgY2FzZSBhY3Rpb25zLlNUT0NLX0VESVRfRkFJTEVEOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogbnVsbCwgaXNGZXRjaGluZzogZmFsc2UsIGlzRmFpbGVkOiB0cnVlIH1cbiAgICAgICAgY2FzZSBhY3Rpb25zLlNUT0NLX0VESVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZXN1bHQ6IHBheWxvYWQsIGlzRmV0Y2hpbmc6IGZhbHNlLCBpc0ZhaWxlZDogZmFsc2UgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU3RvY2tMaXN0UmVkdWNlciB9IGZyb20gJy4uLy4uL3R5cGVzL3N0b2NrTGlzdC5yZWR1Y2VyLnR5cGVzJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vc2FnYS9hY3Rpb25UeXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogU3RvY2tMaXN0UmVkdWNlciA9IHtcbiAgICByZXN1bHQ6IG51bGwsXG4gICAgaXNGYWlsZWQ6IGZhbHNlLFxuICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgeyB0eXBlLCBwYXlsb2FkIH0pOiBTdG9ja0xpc3RSZWR1Y2VyID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNUT0NLX0xJU1RfRkVUQ0hJTkc6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0OiBudWxsLCBpc0ZldGNoaW5nOiB0cnVlLCBpc0ZhaWxlZDogZmFsc2UgfVxuICAgICAgICBjYXNlIGFjdGlvbnMuU1RPQ0tfTElTVF9GQUlMRUQ6XG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzdWx0OiBudWxsLCBpc0ZldGNoaW5nOiBmYWxzZSwgaXNGYWlsZWQ6IHRydWUgfVxuICAgICAgICBjYXNlIGFjdGlvbnMuU1RPQ0tfTElTVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3VsdDogcGF5bG9hZCwgaXNGZXRjaGluZzogZmFsc2UsIGlzRmFpbGVkOiBmYWxzZSB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgUkVHSVNURVJfUkVRVUVTVCA9ICdSRUdJU1RFUl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZFVENISU5HID0gJ1JFR0lTVEVSX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUkVHSVNURVJfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMRUQgPSAnUkVHSVNURVJfRkFJTEVEJ1xuXG5leHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZFVENISU5HID0gJ0xPR0lOX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMRUQgPSAnTE9HSU5fRkFJTEVEJ1xuXG5leHBvcnQgY29uc3QgUkVMT0dJTl9SRVFVRVNUID0gJ1JFTE9HSU5fUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dPVVRfUkVRVUVTVCA9ICdMT0dPVVRfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9ICdMT0dPVVRfU1VDQ0VTUydcblxuXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9SRVFVRVNUID0gJ1NUT0NLX0xJU1RfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBTVE9DS19MSVNUX0ZFVENISU5HID0gJ1NUT0NLX0xJU1RfRkVUQ0hJTkcnXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9GQUlMRUQgPSAnU1RPQ0tfTElTVF9GQUlMRUQnXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9TVUNDRVNTID0gJ1NUT0NLX0xJU1RfU1VDQ0VTUydcblxuXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX1JFUVVFU1QgPSAnU1RPQ0tfQ1JFQVRFX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX0ZFVENISU5HID0gJ1NUT0NLX0NSRUFURV9GRVRDSElORydcbmV4cG9ydCBjb25zdCBTVE9DS19DUkVBVEVfRkFJTEVEID0gJ1NUT0NLX0NSRUFURV9GQUlMRUQnXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MgPSAnU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MnXG5cbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX1JFUVVFU1QgPSAnU1RPQ0tfRURJVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0VESVRfRkVUQ0hJTkcgPSAnU1RPQ0tfRURJVF9GRVRDSElORydcbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX0ZBSUxFRCA9ICdTVE9DS19FRElUX0ZBSUxFRCdcbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX1NVQ0NFU1MgPSAnU1RPQ0tfRURJVF9TVUNDRVNTJ1xuXG5cbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfUkVRVUVTVCA9ICdTVE9DS19ERUxFVEVfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfRkVUQ0hJTkcgPSAnU1RPQ0tfREVMRVRFX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0RFTEVURV9GQUlMRUQgPSAnU1RPQ0tfREVMRVRFX0ZBSUxFRCdcbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfU1VDQ0VTUyA9ICdTVE9DS19ERUxFVEVfU1VDQ0VTUydcblxuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9SRVFVRVNUID0gJ1NUT0NLX0dFVF9CWV9JRF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9GRVRDSElORyA9ICdTVE9DS19HRVRfQllfSURfRkVUQ0hJTkcnXG5leHBvcnQgY29uc3QgU1RPQ0tfR0VUX0JZX0lEX0ZBSUxFRCA9ICdTVE9DS19HRVRfQllfSURfRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9TVUNDRVNTID0gJ1NUT0NLX0dFVF9CWV9JRF9TVUNDRVNTJyIsImltcG9ydCB7IHRha2VFdmVyeSwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHsgc2FnYVJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zYWdhJztcbmltcG9ydCB7IHNhZ2FTdG9ja0xpc3QgfSBmcm9tICcuL3N0b2NrTGlzdC5zYWdhJztcbmltcG9ydCB7IHNhZ2FTdG9ja0NyZWF0ZSB9IGZyb20gJy4vc3RvY2tDcmVhdGUuc2FnYSc7XG5pbXBvcnQgeyBzYWdhU3RvY2tFZGl0IH0gZnJvbSAnLi9zdG9ja0VkaXQuc2FnYSc7XG5pbXBvcnQgeyBzYWdhU3RvY2tEZWxldGUgfSBmcm9tICcuL3N0b2NrRGVsZXRlLnNhZ2EnO1xuaW1wb3J0IHsgc2FnYUxvZ2luLCBzYWdhUmVMb2dpbiwgc2FnYUxvZ291dCB9IGZyb20gJy4vbG9naW4uc2FnYSc7XG5pbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi9hY3Rpb25UeXBlc1wiXG5cblxuLy8gUmVnaXN0ZXJcbmV4cG9ydCBmdW5jdGlvbiogd2F0Y2hSZWdpc3RlclJlcXVlc3QoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlJFR0lTVEVSX1JFUVVFU1QsIHNhZ2FSZWdpc3Rlcilcbn1cblxuLy8gTG9naW5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luUmVxdWVzdCgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCwgc2FnYUxvZ2luKVxufVxuXG5cbi8vIFJlTG9naW5cbmZ1bmN0aW9uKiB3YXRjaFJlTG9naW5SZXF1ZXN0KCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25UeXBlcy5SRUxPR0lOX1JFUVVFU1QsIHNhZ2FSZUxvZ2luKVxufVxuXG4vLyBMb2dvdXRcbmZ1bmN0aW9uKiB3YXRjaExvZ291dFJlcXVlc3QoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR09VVF9SRVFVRVNULCBzYWdhTG9nb3V0KVxufVxuXG5cbi8vIFN0b2NrTGlzdFxuZnVuY3Rpb24qIHdhdGNoU3RvY2tMaXN0UmVxdWVzdCgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuU1RPQ0tfTElTVF9SRVFVRVNULCBzYWdhU3RvY2tMaXN0KVxufVxuXG4vLyBTdG9ja0NyZWF0ZVxuZnVuY3Rpb24qIHdhdGNoU3RvY2tDcmVhdGVSZXF1ZXN0KCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25UeXBlcy5TVE9DS19DUkVBVEVfUkVRVUVTVCwgc2FnYVN0b2NrQ3JlYXRlKVxufVxuXG4vLyBTdG9ja0VkaXRcbmZ1bmN0aW9uKiB3YXRjaFN0b2NrRWRpdFJlcXVlc3QoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlNUT0NLX0VESVRfUkVRVUVTVCwgc2FnYVN0b2NrRWRpdClcbn1cblxuXG4vLyBTdG9ja0RlbGV0ZVxuZnVuY3Rpb24qIHdhdGNoU3RvY2tEZWxldGVSZXF1ZXN0KCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25UeXBlcy5TVE9DS19ERUxFVEVfUkVRVUVTVCwgc2FnYVN0b2NrRGVsZXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgd2F0Y2hSZWdpc3RlclJlcXVlc3QoKSxcbiAgICAgICAgd2F0Y2hMb2dpblJlcXVlc3QoKSxcbiAgICAgICAgd2F0Y2hSZUxvZ2luUmVxdWVzdCgpLFxuICAgICAgICB3YXRjaExvZ291dFJlcXVlc3QoKSxcbiAgICAgICAgd2F0Y2hTdG9ja0xpc3RSZXF1ZXN0KCksXG4gICAgICAgIHdhdGNoU3RvY2tDcmVhdGVSZXF1ZXN0KCksXG4gICAgICAgIHdhdGNoU3RvY2tFZGl0UmVxdWVzdCgpLFxuICAgICAgICB3YXRjaFN0b2NrRGVsZXRlUmVxdWVzdCgpXG4gICAgXSlcbn0iLCJpbXBvcnQgeyBrUmVzdWx0T2ssIGtSZXN1bHROb2sgfSBmcm9tICcuLi8uLi91dGlscy9jb250YW50cyc7XG5pbXBvcnQgeyBwdXQsIGNhbGwsIHNlbGVjdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cENsaWVudFwiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHNldENvb2tpZSwgcmVtb3ZlQ29va2llLCBnZXRDb29raWUgfSBmcm9tICcuLi8uLi91dGlscy9jb29raWUnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhTG9naW4oeyBwYXlsb2FkIH06IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ2luRmV0Y2hpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGh0dHBDbGllbnQucG9zdCwgJy9hdXRoZW4vbG9naW4nLCBwYXlsb2FkKVxuICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICBpZiAocmVzdWx0ID09IGtSZXN1bHRPaykge1xuICAgICAgICAgICAgc2V0Q29va2llKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VybmFtZVwiLCByZXNwb25zZS5kYXRhLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ2luU3VjY2VzcyhyZXNwb25zZS5kYXRhKSlcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc3RvY2snKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMubG9naW5GYWlsZWQoKSlcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ2luRmFpbGVkKCkpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIHNhZ2FSZUxvZ2luKHsgcGF5bG9hZCB9OiBhbnkpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHlpZWxkIHNlbGVjdCgpO1xuICAgIHlpZWxkIGRlbGF5KDEwKVxuICAgIGlmIChzdGF0ZS5sb2dpblJlZHVjZXIudG9rZW4pIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9zdG9jaycpXG4gICAgfSBlbHNlIGlmIChwYXlsb2FkLnRva2VuKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLmxvZ2luU3VjY2VzcyhwYXlsb2FkKSlcbiAgICAgICAgUm91dGVyLnB1c2goJy9zdG9jaycpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbG9jYWxUb2tlbiA9IGdldENvb2tpZSgndG9rZW4nKVxuICAgICAgICBpZiAobG9jYWxUb2tlbikge1xuICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMubG9naW5TdWNjZXNzKHBheWxvYWQpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zdG9jaycpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogc2FnYUxvZ291dCgpIHtcbiAgICByZW1vdmVDb29raWUoJ3Rva2VuJylcbiAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXRTdWNjZXNzKCkpXG4gICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG59IiwiaW1wb3J0IHsgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zXCJcbmltcG9ydCBodHRwQ2xpZW50IGZyb20gXCIuLi8uLi91dGlscy9odHRwQ2xpZW50XCJcbmltcG9ydCB7IGtSZXN1bHRPaywga1Jlc3VsdE5vayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvY29udGFudHMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhUmVnaXN0ZXIoeyBwYXlsb2FkIH06IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLnJlZ2lzdGVyRmV0Y2hpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGh0dHBDbGllbnQucG9zdCwgJy9hdXRoZW4vcmVnaXN0ZXInLCBwYXlsb2FkKVxuICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gcmVzcG9uc2UuZGF0YVxuICAgICAgICBpZiAocmVzdWx0ID09IGtSZXN1bHRPaykge1xuICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMucmVnaXN0ZXJTdWNjZXNzKHsgcmVzdWx0OiByZXNwb25zZS5kYXRhIH0pKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5yZWdpc3RlckZhaWxlZCgpKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMucmVnaXN0ZXJGYWlsZWQoKSlcbiAgICB9XG59IiwiaW1wb3J0IHsgcHV0LCBjYWxsLCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cENsaWVudFwiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhU3RvY2tDcmVhdGUoeyBwYXlsb2FkIH06IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLnN0b2NrQ3JlYXRlRmV0Y2hpbmcoKSlcbiAgICAgICAgeWllbGQgZGVsYXkoMjAwMClcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGh0dHBDbGllbnQucG9zdCwgJy9zdG9jay9wcm9kdWN0JywgcGF5bG9hZClcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuc3RvY2tDcmVhdGVTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICBSb3V0ZXIucHVzaChcIi9zdG9ja1wiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLnN0b2NrQ3JlYXRlRmFpbGVkKCkpXG4gICAgfVxufSIsImltcG9ydCB7IHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cENsaWVudFwiXG5pbXBvcnQgeyBrUmVzdWx0T2ssIGtSZXN1bHROb2sgfSBmcm9tICcuLi8uLi91dGlscy9jb250YW50cyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhU3RvY2tEZWxldGUoeyBwYXlsb2FkLCBkaXNwYXRjaCB9OiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoaHR0cENsaWVudC5kZWxldGUsIGAvc3RvY2svcHJvZHVjdC8ke3BheWxvYWR9YClcbiAgICAgICAgY29uc3QgeyByZXN1bHQgfSA9IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBrUmVzdWx0T2spIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbnMuZmVlZFN0b2NrTGlzdCgpKVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm90aGluZyBcbiAgICB9XG59IiwiaW1wb3J0IHsgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zXCJcbmltcG9ydCBodHRwQ2xpZW50IGZyb20gXCIuLi8uLi91dGlscy9odHRwQ2xpZW50XCJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiogc2FnYVN0b2NrRWRpdCh7IHBheWxvYWQgfTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMuc3RvY2tFZGl0RmV0Y2hpbmcoKSlcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGh0dHBDbGllbnQucHV0LCAnL3N0b2NrL3Byb2R1Y3QnLCBwYXlsb2FkKVxuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5zdG9ja0VkaXRTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKVxuICAgICAgICBSb3V0ZXIucHVzaChcIi9zdG9ja1wiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLnN0b2NrRWRpdEZhaWxlZCgpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tIFwiLi4vYWN0aW9uc1wiXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cENsaWVudFwiXG5cblxuZXhwb3J0IGZ1bmN0aW9uKiBzYWdhU3RvY2tMaXN0KHBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5zdG9ja0xpc3RGZXRjaGluZygpKVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoaHR0cENsaWVudC5nZXQsICcvc3RvY2svcHJvZHVjdCcpXG4gICAgICAgIHlpZWxkIHB1dChhY3Rpb25zLnN0b2NrTGlzdFN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5zdG9ja0xpc3RGYWlsZWQoKSlcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IGtUb2tlbiA9ICd0b2tlbidcbmV4cG9ydCBjb25zdCBrVXNlcm5hbWUgPSAndXNlcm5hbWUnXG5leHBvcnQgY29uc3Qga1Jlc3VsdE9rID0gJ29rJ1xuZXhwb3J0IGNvbnN0IGtSZXN1bHROb2sgPSAnbm9rJ1xuIiwiLy8gdGhpcyBmaWxlIHdpbGwgaGF2ZSB0aGUgdGFzayB0aGF0IHdlIGhhdmUgdG8gcGVyZm9ybSB3aXRoIGNvb2tpZXMvIHJlYWN0LW5hdGl2ZSB5b3UgbmVlZCB0byBwdXQgeW91ciBhc3luYyBzdG9yYWdlIGNvZGUgaGVyZS5cblxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyBnZXRNYXhMaXN0ZW5lcnMgfSBmcm9tIFwicHJvY2Vzc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xuICAgICAgZXhwaXJlczogMSxcbiAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgY29va2llLnJlbW92ZShrZXksIHtcbiAgICAgIGV4cGlyZXM6IDEsXG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcbiAgcmV0dXJuIHByb2Nlc3MuYnJvd3NlclxuICAgID8gZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KVxuICAgIDogZ2V0Q29va2llRnJvbVNlcnZlcihrZXksIHJlcSk7XG59O1xuXG5jb25zdCBnZXRDb29raWVGcm9tQnJvd3NlciA9IChrZXkpID0+IHtcbiAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcbn07XG5cbmNvbnN0IGdldENvb2tpZUZyb21TZXJ2ZXIgPSAoa2V5LCByZXEpID0+IHtcbiAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHJhd0Nvb2tpZSA9IHJlcS5oZWFkZXJzLmNvb2tpZVxuICAgIC5zcGxpdChcIjtcIilcbiAgICAuZmluZCgoYykgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcbiAgaWYgKCFyYXdDb29raWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiByYXdDb29raWUuc3BsaXQoXCI9XCIpWzFdO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHsga1Rva2VuIH0gZnJvbSAnLi9jb250YW50cydcbmltcG9ydCB7IGdldENvb2tpZSwgcmVtb3ZlQ29va2llIH0gZnJvbSAnLi9jb29raWUnO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcblxuXG5jb25zdCBodHRwQ2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0JBU0VfQVBJX1VSTFxufSlcblxuZXhwb3J0IGNvbnN0IHNldEludGVyY2VwdG9yID0gKGRpc3BhdGNoKSA9PiB7XG4gIGh0dHBDbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChyZXEpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGdldENvb2tpZShrVG9rZW4pXG4gICAgaWYgKHRva2VuKSByZXEuaGVhZGVycyA9IHsgJ3gtYWNjZXNzLXRva2VuJzogdG9rZW4gfVxuICAgIHJldHVybiByZXFcbiAgfSlcblxuXG4gIGh0dHBDbGllbnQuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICg0MDMgPT09IGVycm9yLnJlc3BvbnNlLnN0YXR1cyB8fCA0MDEgPT09IGVycm9yLnJlc3BvbnNlLnN0YXR1cyB8fCA1MDAgPT09IGVycm9yLnJlc3BvbnNlLnN0YXR1cykge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5sb2dvdXQoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBDbGllbnRcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==