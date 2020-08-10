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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "11/B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YeXC");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("thJL");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("s051");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("VxNu");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("BDHH");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("cph9");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
function Login({
  token
}) {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const loginReducer = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(({
    loginReducer
  }) => loginReducer);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    debugger;
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].relogin({
      token
    }));
  }, []);

  const showForm = ({
    values,
    setFieldValue,
    isValid,
    dirty
  }) => {
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
      onSubmit: event => {
        event.preventDefault();
        dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].login(values));
      }
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "username",
      margin: "normal",
      required: true,
      fullWidth: true,
      id: "username",
      label: "Username",
      autoComplete: "email",
      autoFocus: true
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "password",
      margin: "normal",
      required: true,
      fullWidth: true,
      label: "Password",
      type: "password",
      id: "password",
      autoComplete: "current-password"
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit
    }, "Sign In"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      fullWidth: true,
      size: "small",
      color: "primary",
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/register");
      }
    }, "Register"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-830871713" + " " + (classes.container || "")
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: "/static/img/next_login.jpg",
    title: "Contemplative Reptile"
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  }, props => showForm(props)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "830871713"
  }, ["body{min-height:100vh;position:relative;margin:0;background-size:cover;background-image:url(\"/static/img/bg4.jpg\");text-align:center;}"])));
} // Called in server-side

Login.getInitialProps = ctx => {
  let token;
  const isServer = !!ctx.req;

  if (isServer && ctx.req.headers.cookie) {
    token = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_12__[/* getCookie */ "a"])("token", ctx.req);
  }

  console.log("CMCookie : token " + token);
  return {
    token
  };
};

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("11/B");


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "VxNu":
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

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

/***/ "s051":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

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