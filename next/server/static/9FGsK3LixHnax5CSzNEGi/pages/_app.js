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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5+Yu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REGISTER_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOGIN_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOGIN_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RELOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGOUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGOUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return STOCK_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return STOCK_LIST_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return STOCK_LIST_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return STOCK_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return STOCK_CREATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return STOCK_CREATE_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return STOCK_CREATE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return STOCK_CREATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STOCK_EDIT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return STOCK_EDIT_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return STOCK_EDIT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return STOCK_EDIT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return STOCK_DELETE_REQUEST; });
/* unused harmony export STOCK_DELETE_FETCHING */
/* unused harmony export STOCK_DELETE_FAILED */
/* unused harmony export STOCK_DELETE_SUCCESS */
/* unused harmony export STOCK_GET_BY_ID_REQUEST */
/* unused harmony export STOCK_GET_BY_ID_FETCHING */
/* unused harmony export STOCK_GET_BY_ID_FAILED */
/* unused harmony export STOCK_GET_BY_ID_SUCCESS */
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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BDHH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./redux/saga/actionTypes.ts
var actionTypes = __webpack_require__("5+Yu");

// CONCATENATED MODULE: ./redux/actions/login.action.ts

const login = payload => ({
  type: actionTypes["c" /* LOGIN_REQUEST */],
  payload
});
const loginFetching = () => ({
  type: actionTypes["b" /* LOGIN_FETCHING */]
});
const loginSuccess = payload => ({
  type: actionTypes["d" /* LOGIN_SUCCESS */],
  payload
});
const loginFailed = () => ({
  type: actionTypes["a" /* LOGIN_FAILED */]
});
const relogin = payload => ({
  type: actionTypes["k" /* RELOGIN_REQUEST */],
  payload
});
const logout = () => ({
  type: actionTypes["e" /* LOGOUT_REQUEST */]
});
const logoutSuccess = () => ({
  type: actionTypes["f" /* LOGOUT_SUCCESS */]
});
/* harmony default export */ var login_action = ({
  login,
  loginFetching,
  loginSuccess,
  loginFailed,
  relogin,
  logout,
  logoutSuccess
});
// CONCATENATED MODULE: ./redux/actions/register.action.ts

const register = payload => ({
  type: actionTypes["i" /* REGISTER_REQUEST */],
  payload
});
const registerFetching = () => ({
  type: actionTypes["h" /* REGISTER_FETCHING */]
});
const registerSuccess = payload => ({
  type: actionTypes["j" /* REGISTER_SUCCESS */],
  payload
});
const registerFailed = () => ({
  type: actionTypes["g" /* REGISTER_FAILED */]
});
/* harmony default export */ var register_action = ({
  register,
  registerFetching,
  registerSuccess,
  registerFailed
});
// CONCATENATED MODULE: ./redux/actions/stockList.action.ts

const feedStockList = () => ({
  type: actionTypes["w" /* STOCK_LIST_REQUEST */]
});
const stockListFetching = () => ({
  type: actionTypes["v" /* STOCK_LIST_FETCHING */]
});
const stockListSuccess = payload => ({
  type: actionTypes["x" /* STOCK_LIST_SUCCESS */],
  payload
});
const stockListFailed = () => ({
  type: actionTypes["u" /* STOCK_LIST_FAILED */]
});
/* harmony default export */ var stockList_action = ({
  feedStockList,
  stockListFetching,
  stockListSuccess,
  stockListFailed
});
// CONCATENATED MODULE: ./redux/actions/stockCreate.action.ts

const createStock = payload => ({
  type: actionTypes["n" /* STOCK_CREATE_REQUEST */],
  payload
});
const stockCreateFetching = () => ({
  type: actionTypes["m" /* STOCK_CREATE_FETCHING */]
});
const stockCreateSuccess = payload => ({
  type: actionTypes["o" /* STOCK_CREATE_SUCCESS */],
  payload
});
const stockCreateFailed = () => ({
  type: actionTypes["l" /* STOCK_CREATE_FAILED */]
});
/* harmony default export */ var stockCreate_action = ({
  createStock,
  stockCreateFetching,
  stockCreateSuccess,
  stockCreateFailed
});
// EXTERNAL MODULE: ./utils/httpClient.ts
var httpClient = __webpack_require__("S01t");

// CONCATENATED MODULE: ./redux/actions/stockEdit.action.ts


const editStock = payload => ({
  type: actionTypes["s" /* STOCK_EDIT_REQUEST */],
  payload
});
const stockEditFetching = () => ({
  type: actionTypes["r" /* STOCK_EDIT_FETCHING */]
});
const stockEditSuccess = payload => ({
  type: actionTypes["t" /* STOCK_EDIT_SUCCESS */],
  payload
});
const stockEditFailed = () => ({
  type: actionTypes["q" /* STOCK_EDIT_FAILED */]
});
const doGetStockById = async id => {
  const response = await httpClient["a" /* default */].get(`/stock/product/${id}`);
  return response.data;
};
/* harmony default export */ var stockEdit_action = ({
  editStock,
  stockEditFetching,
  stockEditSuccess,
  stockEditFailed,
  doGetStockById
});
// CONCATENATED MODULE: ./redux/actions/stockDelete.action.ts

const deleteStock = (payload, dispatch) => ({
  type: actionTypes["p" /* STOCK_DELETE_REQUEST */],
  payload,
  dispatch
});
/* harmony default export */ var stockDelete_action = ({
  deleteStock
});
// CONCATENATED MODULE: ./redux/actions/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ var actions = __webpack_exports__["a"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, login_action), register_action), stockList_action), stockCreate_action), stockEdit_action), stockDelete_action));

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S01t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setInterceptor; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bS2Z");
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cph9");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("BDHH");




const httpClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://cmnextstock-backend.herokuapp.com/api/v2"
});
const setInterceptor = dispatch => {
  httpClient.interceptors.request.use(req => {
    const token = Object(_cookie__WEBPACK_IMPORTED_MODULE_2__[/* getCookie */ "a"])(_contants__WEBPACK_IMPORTED_MODULE_1__[/* kToken */ "b"]);
    if (token) req.headers = {
      'x-access-token': token
    };
    return req;
  });
  httpClient.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (403 === error.response.status || 401 === error.response.status || 500 === error.response.status) {
      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].logout());
    } else {
      return Promise.reject(error);
    }
  });
};
/* harmony default export */ __webpack_exports__["a"] = (httpClient);

/***/ }),

/***/ "bS2Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return kToken; });
/* unused harmony export kUsername */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return kResultOk; });
/* unused harmony export kResultNok */
const kToken = 'token';
const kUsername = 'username';
const kResultOk = 'ok';
const kResultNok = 'nok';

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/saga/actionTypes.ts
var actionTypes = __webpack_require__("5+Yu");

// CONCATENATED MODULE: ./redux/reducers/register.reducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ var register_reducer = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes["h" /* REGISTER_FETCHING */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case actionTypes["g" /* REGISTER_FAILED */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case actionTypes["j" /* REGISTER_SUCCESS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        result: payload.result,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/login.reducer.ts
function login_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function login_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { login_reducer_ownKeys(Object(source), true).forEach(function (key) { login_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { login_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const login_reducer_initialState = {
  result: null,
  token: null,
  username: null,
  isFetching: false,
  isFailed: false
};
/* harmony default export */ var login_reducer = ((state = login_reducer_initialState, {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes["b" /* LOGIN_FETCHING */]:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case actionTypes["a" /* LOGIN_FAILED */]:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case actionTypes["d" /* LOGIN_SUCCESS */]:
      return login_reducer_objectSpread(login_reducer_objectSpread({}, state), {}, {
        result: payload.result,
        isFetching: false,
        isFailed: true,
        token: payload.token,
        username: payload.username
      });

    case actionTypes["f" /* LOGOUT_SUCCESS */]:
      return login_reducer_initialState;

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/stockList.reducer.ts
function stockList_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function stockList_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stockList_reducer_ownKeys(Object(source), true).forEach(function (key) { stockList_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stockList_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function stockList_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const stockList_reducer_initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ var stockList_reducer = ((state = stockList_reducer_initialState, {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes["v" /* STOCK_LIST_FETCHING */]:
      return stockList_reducer_objectSpread(stockList_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case actionTypes["u" /* STOCK_LIST_FAILED */]:
      return stockList_reducer_objectSpread(stockList_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case actionTypes["x" /* STOCK_LIST_SUCCESS */]:
      return stockList_reducer_objectSpread(stockList_reducer_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/stockCreate.reducer.ts
function stockCreate_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function stockCreate_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stockCreate_reducer_ownKeys(Object(source), true).forEach(function (key) { stockCreate_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stockCreate_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function stockCreate_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const stockCreate_reducer_initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ var stockCreate_reducer = ((state = stockCreate_reducer_initialState, {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes["m" /* STOCK_CREATE_FETCHING */]:
      return stockCreate_reducer_objectSpread(stockCreate_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case actionTypes["l" /* STOCK_CREATE_FAILED */]:
      return stockCreate_reducer_objectSpread(stockCreate_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case actionTypes["o" /* STOCK_CREATE_SUCCESS */]:
      return stockCreate_reducer_objectSpread(stockCreate_reducer_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/stockEdit.reducer.ts
function stockEdit_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function stockEdit_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { stockEdit_reducer_ownKeys(Object(source), true).forEach(function (key) { stockEdit_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { stockEdit_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function stockEdit_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const stockEdit_reducer_initialState = {
  result: null,
  isFailed: false,
  isFetching: false
};
/* harmony default export */ var stockEdit_reducer = ((state = stockEdit_reducer_initialState, {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes["r" /* STOCK_EDIT_FETCHING */]:
      return stockEdit_reducer_objectSpread(stockEdit_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: true,
        isFailed: false
      });

    case actionTypes["q" /* STOCK_EDIT_FAILED */]:
      return stockEdit_reducer_objectSpread(stockEdit_reducer_objectSpread({}, state), {}, {
        result: null,
        isFetching: false,
        isFailed: true
      });

    case actionTypes["t" /* STOCK_EDIT_SUCCESS */]:
      return stockEdit_reducer_objectSpread(stockEdit_reducer_objectSpread({}, state), {}, {
        result: payload,
        isFetching: false,
        isFailed: false
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./redux/reducers/index.ts






/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  registerReducer: register_reducer,
  loginReducer: login_reducer,
  stockListReducer: stockList_reducer,
  stockCreateReducer: stockCreate_reducer,
  stockEditReducer: stockEdit_reducer
}));
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./redux/actions/index.ts + 6 modules
var actions = __webpack_require__("BDHH");

// EXTERNAL MODULE: ./utils/httpClient.ts
var httpClient = __webpack_require__("S01t");

// EXTERNAL MODULE: ./utils/contants.ts
var contants = __webpack_require__("bS2Z");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./redux/saga/register.saga.ts





function* sagaRegister({
  payload
}) {
  try {
    yield Object(effects_["put"])(actions["a" /* default */].registerFetching());
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].post, '/authen/register', payload);
    const {
      result
    } = response.data;

    if (result == contants["a" /* kResultOk */]) {
      yield Object(effects_["put"])(actions["a" /* default */].registerSuccess({
        result: response.data
      }));
      router_default.a.push('/login');
    } else {
      yield Object(effects_["put"])(actions["a" /* default */].registerFailed());
    }
  } catch (error) {
    yield Object(effects_["put"])(actions["a" /* default */].registerFailed());
  }
}
// CONCATENATED MODULE: ./redux/saga/stockList.saga.ts



function* sagaStockList(payload) {
  try {
    yield Object(effects_["put"])(actions["a" /* default */].stockListFetching());
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].get, '/stock/product');
    yield Object(effects_["put"])(actions["a" /* default */].stockListSuccess(response.data));
  } catch (error) {
    yield Object(effects_["put"])(actions["a" /* default */].stockListFailed());
  }
}
// CONCATENATED MODULE: ./redux/saga/stockCreate.saga.ts




function* sagaStockCreate({
  payload
}) {
  try {
    yield Object(effects_["put"])(actions["a" /* default */].stockCreateFetching());
    yield Object(effects_["delay"])(2000);
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].post, '/stock/product', payload);
    yield Object(effects_["put"])(actions["a" /* default */].stockCreateSuccess(response.data));
    router_default.a.push("/stock");
  } catch (error) {
    yield Object(effects_["put"])(actions["a" /* default */].stockCreateFailed());
  }
}
// CONCATENATED MODULE: ./redux/saga/stockEdit.saga.ts




function* sagaStockEdit({
  payload
}) {
  try {
    yield Object(effects_["put"])(actions["a" /* default */].stockEditFetching());
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].put, '/stock/product', payload);
    yield Object(effects_["put"])(actions["a" /* default */].stockEditSuccess(response.data));
    router_default.a.push("/stock");
  } catch (error) {
    yield Object(effects_["put"])(actions["a" /* default */].stockEditFailed());
  }
}
// CONCATENATED MODULE: ./redux/saga/stockDelete.saga.ts




function* sagaStockDelete({
  payload,
  dispatch
}) {
  try {
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].delete, `/stock/product/${payload}`);
    const {
      result
    } = response.data;

    if (result == contants["a" /* kResultOk */]) {
      dispatch(actions["a" /* default */].feedStockList());
    }
  } catch (error) {// Nothing 
  }
}
// EXTERNAL MODULE: ./utils/cookie.js
var cookie = __webpack_require__("cph9");

// CONCATENATED MODULE: ./redux/saga/login.saga.ts






function* sagaLogin({
  payload
}) {
  try {
    yield Object(effects_["put"])(actions["a" /* default */].loginFetching());
    const response = yield Object(effects_["call"])(httpClient["a" /* default */].post, '/authen/login', payload);
    const {
      result
    } = response.data;

    if (result == contants["a" /* kResultOk */]) {
      Object(cookie["c" /* setCookie */])("token", response.data.token);
      Object(cookie["c" /* setCookie */])("username", response.data.username);
      yield Object(effects_["put"])(actions["a" /* default */].loginSuccess(response.data));
      router_default.a.push('/stock');
    } else {
      yield Object(effects_["put"])(actions["a" /* default */].loginFailed());
    }
  } catch (error) {
    yield Object(effects_["put"])(actions["a" /* default */].loginFailed());
  }
}
function* sagaReLogin({
  payload
}) {
  const state = yield Object(effects_["select"])();
  yield Object(effects_["delay"])(10);

  if (state.loginReducer.token) {
    router_default.a.push('/stock');
  } else if (payload.token) {
    debugger;
    yield Object(effects_["put"])(actions["a" /* default */].loginSuccess(payload));
    router_default.a.push('/stock');
  } else {
    const localToken = Object(cookie["a" /* getCookie */])('token');

    if (localToken) {
      yield Object(effects_["put"])(actions["a" /* default */].loginSuccess(payload));
      router_default.a.push('/stock');
    }
  }
}
function* sagaLogout() {
  Object(cookie["b" /* removeCookie */])('token');
  yield Object(effects_["put"])(actions["a" /* default */].logoutSuccess());
  router_default.a.push('/login');
}
// CONCATENATED MODULE: ./redux/saga/index.ts







 // Register

function* watchRegisterRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["i" /* REGISTER_REQUEST */], sagaRegister);
} // Login

function* watchLoginRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["c" /* LOGIN_REQUEST */], sagaLogin);
} // ReLogin


function* watchReLoginRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["k" /* RELOGIN_REQUEST */], sagaReLogin);
} // Logout


function* watchLogoutRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["e" /* LOGOUT_REQUEST */], sagaLogout);
} // StockList


function* watchStockListRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["w" /* STOCK_LIST_REQUEST */], sagaStockList);
} // StockCreate


function* watchStockCreateRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["n" /* STOCK_CREATE_REQUEST */], sagaStockCreate);
} // StockEdit


function* watchStockEditRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["s" /* STOCK_EDIT_REQUEST */], sagaStockEdit);
} // StockDelete


function* watchStockDeleteRequest() {
  yield Object(effects_["takeEvery"])(actionTypes["p" /* STOCK_DELETE_REQUEST */], sagaStockDelete);
}

function* rootSaga() {
  yield Object(effects_["all"])([watchRegisterRequest(), watchLoginRequest(), watchReLoginRequest(), watchLogoutRequest(), watchStockListRequest(), watchStockCreateRequest(), watchStockEditRequest(), watchStockDeleteRequest()]);
}
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// CONCATENATED MODULE: ./redux/index.ts






const makeStore = context => {
  // 1: Create the middleware
  const sagaMiddleware = external_redux_saga_default()(); // 2: Add an extra parameter for applying middleware:

  const store = Object(external_redux_["createStore"])(reducers, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(sagaMiddleware))); // 3: Run your sagas on server

  store.sagaTask = sagaMiddleware.run(rootSaga); // 4: now return the store:

  return store;
}; // export an assembled wrapper

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: true
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;

function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function CMApp({
  Component,
  pageProps
}) {
  // https://material-ui.com/customization/theming/
  const theme = Object(core_["createMuiTheme"])({
    palette: {
      primary: {
        main: "#135ab8"
      },
      secondary: {
        main: "#e85f5f"
      }
    }
  });
  Object(httpClient["b" /* setInterceptor */])(Object(external_react_redux_["useDispatch"])());
  return __jsx(external_react_default.a.Fragment, null, __jsx(core_["ThemeProvider"], {
    theme: theme
  }, __jsx(Component, pageProps)));
}

CMApp.getInitialProps = async appContext => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await app_default.a.getInitialProps(appContext);
  return _app_objectSpread({}, appProps);
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(CMApp));

/***/ }),

/***/ "cph9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vLI4");
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vLI4":
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });