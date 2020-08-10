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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik-material-ui */ "formik-material-ui");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik_material_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions/index.ts");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/cookie */ "./utils/cookie.js");
var _jsxFileName = "D:\\learn_all_course\\cmnextstock-master\\cmnextstock\\pages\\login.tsx";

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
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["default"].relogin({
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
        dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_11__["default"].login(values));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
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
      autoFocus: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      component: formik_material_ui__WEBPACK_IMPORTED_MODULE_7__["TextField"],
      name: "password",
      margin: "normal",
      required: true,
      fullWidth: true,
      label: "Password",
      type: "password",
      id: "password",
      autoComplete: "current-password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      type: "submit",
      fullWidth: true,
      variant: "contained",
      color: "primary",
      className: classes.submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, "Sign In"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      fullWidth: true,
      size: "small",
      color: "primary",
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/register");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, "Register"));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-830871713" + " " + (classes.container || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: "/static/img/next_login.jpg",
    title: "Contemplative Reptile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, props => showForm(props)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "830871713",
    __self: this
  }, "body{min-height:100vh;position:relative;margin:0;background-size:cover;background-image:url(\"/static/img/bg4.jpg\");text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxsZWFybl9hbGxfY291cnNlXFxjbW5leHRzdG9jay1tYXN0ZXJcXGNtbmV4dHN0b2NrXFxwYWdlc1xcbG9naW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJVyxBQUdnQyxpQkFDQyxrQkFDVCxTQUNhLHNCQUNzQiw0Q0FDMUIsa0JBQ3BCIiwiZmlsZSI6IkQ6XFxsZWFybl9hbGxfY291cnNlXFxjbW5leHRzdG9jay1tYXN0ZXJcXGNtbmV4dHN0b2NrXFxwYWdlc1xcbG9naW4udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvZ2luU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9sb2dpbi5zdHlsZVwiO1xuaW1wb3J0IGxvZ2luQ1NTIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljL2Nzcy9sb2dpbi5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiZm9ybWlrLW1hdGVyaWFsLXVpXCI7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnNcIjtcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tIFwiLi4vdXRpbHMvY29va2llXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRva2VuPzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDIwMCxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHRva2VuIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbG9naW5SZWR1Y2VyID0gdXNlU2VsZWN0b3IoKHsgbG9naW5SZWR1Y2VyIH0pID0+IGxvZ2luUmVkdWNlcik7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBkaXNwYXRjaChhY3Rpb25zLnJlbG9naW4oeyB0b2tlbiB9KSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaG93Rm9ybSA9ICh7IHZhbHVlcywgc2V0RmllbGRWYWx1ZSwgaXNWYWxpZCwgZGlydHkgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmxvZ2luKHZhbHVlcykpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIC8+XG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGNvbXBvbmVudD17VGV4dEZpZWxkfVxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvcmVnaXN0ZXJcIik7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgaW1hZ2U9XCIvc3RhdGljL2ltZy9uZXh0X2xvZ2luLmpwZ1wiXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH19XG4gICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsocHJvcHMpID0+IHNob3dGb3JtKHByb3BzKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy9pbWcvYmc0LmpwZ1wiKTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG4vLyBDYWxsZWQgaW4gc2VydmVyLXNpZGVcbkxvZ2luLmdldEluaXRpYWxQcm9wcyA9IChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4ge1xuICBsZXQgdG9rZW47XG4gIGNvbnN0IGlzU2VydmVyID0gISFjdHgucmVxO1xuICBpZiAoaXNTZXJ2ZXIgJiYgY3R4LnJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIHRva2VuID0gZ2V0Q29va2llKFwidG9rZW5cIiwgY3R4LnJlcSk7XG4gIH1cbiAgY29uc29sZS5sb2coXCJDTUNvb2tpZSA6IHRva2VuIFwiICsgdG9rZW4pO1xuICByZXR1cm4geyB0b2tlbiB9O1xufTtcbiJdfQ== */\n/*@ sourceURL=D:\\\\learn_all_course\\\\cmnextstock-master\\\\cmnextstock\\\\pages\\\\login.tsx */")));
} // Called in server-side

Login.getInitialProps = ctx => {
  let token;
  const isServer = !!ctx.req;

  if (isServer && ctx.req.headers.cookie) {
    token = Object(_utils_cookie__WEBPACK_IMPORTED_MODULE_12__["getCookie"])("token", ctx.req);
  }

  console.log("CMCookie : token " + token);
  return {
    token
  };
};

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

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/login.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\learn_all_course\cmnextstock-master\cmnextstock\pages\login.tsx */"./pages/login.tsx");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "formik-material-ui":
/*!*************************************!*\
  !*** external "formik-material-ui" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik-material-ui");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4udHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9sb2dpbi5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9yZWdpc3Rlci5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0NyZWF0ZS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0RlbGV0ZS5hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9zdG9ja0VkaXQuYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvc3RvY2tMaXN0LmFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbnRhbnRzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9odHRwQ2xpZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWlrLW1hdGVyaWFsLXVpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjb250YWluZXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1pbkhlaWdodCIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0Iiwic3VibWl0IiwibWFyZ2luIiwic3BhY2luZyIsIkxvZ2luIiwidG9rZW4iLCJjbGFzc2VzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxvZ2luUmVkdWNlciIsInVzZVNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJhY3Rpb25zIiwicmVsb2dpbiIsInNob3dGb3JtIiwidmFsdWVzIiwic2V0RmllbGRWYWx1ZSIsImlzVmFsaWQiLCJkaXJ0eSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2dpbiIsIlRleHRGaWVsZCIsIlJvdXRlciIsInB1c2giLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpc1NlcnZlciIsInJlcSIsImhlYWRlcnMiLCJjb29raWUiLCJnZXRDb29raWUiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJzdG9ja0xpc3QiLCJzdG9ja0NyZWF0ZSIsInN0b2NrRWRpdCIsInN0b2NrRGVsZXRlIiwicGF5bG9hZCIsInR5cGUiLCJhY3Rpb25UeXBlcyIsImxvZ2luRmV0Y2hpbmciLCJMT0dJTl9GRVRDSElORyIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbGVkIiwiTE9HSU5fRkFJTEVEIiwibG9nb3V0IiwiTE9HT1VUX1JFUVVFU1QiLCJsb2dvdXRTdWNjZXNzIiwiTE9HT1VUX1NVQ0NFU1MiLCJyZWdpc3RlckZldGNoaW5nIiwiUkVHSVNURVJfRkVUQ0hJTkciLCJyZWdpc3RlclN1Y2Nlc3MiLCJyZWdpc3RlckZhaWxlZCIsIlJFR0lTVEVSX0ZBSUxFRCIsImNyZWF0ZVN0b2NrIiwic3RvY2tDcmVhdGVGZXRjaGluZyIsIlNUT0NLX0NSRUFURV9GRVRDSElORyIsInN0b2NrQ3JlYXRlU3VjY2VzcyIsInN0b2NrQ3JlYXRlRmFpbGVkIiwiU1RPQ0tfQ1JFQVRFX0ZBSUxFRCIsImRlbGV0ZVN0b2NrIiwiZWRpdFN0b2NrIiwic3RvY2tFZGl0RmV0Y2hpbmciLCJTVE9DS19FRElUX0ZFVENISU5HIiwic3RvY2tFZGl0U3VjY2VzcyIsInN0b2NrRWRpdEZhaWxlZCIsIlNUT0NLX0VESVRfRkFJTEVEIiwiZG9HZXRTdG9ja0J5SWQiLCJpZCIsInJlc3BvbnNlIiwiaHR0cENsaWVudCIsImdldCIsImRhdGEiLCJmZWVkU3RvY2tMaXN0IiwiU1RPQ0tfTElTVF9SRVFVRVNUIiwic3RvY2tMaXN0RmV0Y2hpbmciLCJTVE9DS19MSVNUX0ZFVENISU5HIiwic3RvY2tMaXN0U3VjY2VzcyIsInN0b2NrTGlzdEZhaWxlZCIsIlNUT0NLX0xJU1RfRkFJTEVEIiwiUkVHSVNURVJfUkVRVUVTVCIsIlJFR0lTVEVSX1NVQ0NFU1MiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIlJFTE9HSU5fUkVRVUVTVCIsIlNUT0NLX0xJU1RfU1VDQ0VTUyIsIlNUT0NLX0NSRUFURV9SRVFVRVNUIiwiU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MiLCJTVE9DS19FRElUX1JFUVVFU1QiLCJTVE9DS19FRElUX1NVQ0NFU1MiLCJTVE9DS19ERUxFVEVfUkVRVUVTVCIsIlNUT0NLX0RFTEVURV9GRVRDSElORyIsIlNUT0NLX0RFTEVURV9GQUlMRUQiLCJTVE9DS19ERUxFVEVfU1VDQ0VTUyIsIlNUT0NLX0dFVF9CWV9JRF9SRVFVRVNUIiwiU1RPQ0tfR0VUX0JZX0lEX0ZFVENISU5HIiwiU1RPQ0tfR0VUX0JZX0lEX0ZBSUxFRCIsIlNUT0NLX0dFVF9CWV9JRF9TVUNDRVNTIiwia1Rva2VuIiwia1VzZXJuYW1lIiwia1Jlc3VsdE9rIiwia1Jlc3VsdE5vayIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwicmVtb3ZlQ29va2llIiwiZ2V0Q29va2llRnJvbUJyb3dzZXIiLCJnZXRDb29raWVGcm9tU2VydmVyIiwidW5kZWZpbmVkIiwicmF3Q29va2llIiwic3BsaXQiLCJmaW5kIiwiYyIsInRyaW0iLCJzdGFydHNXaXRoIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQUF9CQVNFX0FQSV9VUkwiLCJzZXRJbnRlcmNlcHRvciIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsV0FBUyxFQUFFO0FBQ1RDLFdBQU8sRUFBRSxNQURBO0FBRVRDLGlCQUFhLEVBQUUsUUFGTjtBQUdUQyxrQkFBYyxFQUFFLFFBSFA7QUFJVEMsY0FBVSxFQUFFLFFBSkg7QUFLVEMsYUFBUyxFQUFFO0FBTEYsR0FENEI7QUFRdkNDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQVJpQztBQVd2Q0MsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURILEdBWGdDO0FBY3ZDQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBREY7QUFkK0IsQ0FBWixDQUFELENBQTVCO0FBbUJlLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBK0M7QUFDNUQsUUFBTUMsT0FBTyxHQUFHbEIsU0FBUyxFQUF6QjtBQUVBLFFBQU1tQixRQUFRLEdBQUdDLGdFQUFXLEVBQTVCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQyxnRUFBVyxDQUFDLENBQUM7QUFBRUQ7QUFBRixHQUFELEtBQXNCQSxZQUF2QixDQUFoQztBQUVBRSw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDcEI7QUFDQUwsWUFBUSxDQUFDTSx1REFBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVUO0FBQUYsS0FBaEIsQ0FBRCxDQUFSO0FBQ0QsR0FIRCxFQUdHLEVBSEg7O0FBS0EsUUFBTVUsUUFBUSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFVQyxpQkFBVjtBQUF5QkMsV0FBekI7QUFBa0NDO0FBQWxDLEdBQUQsS0FBK0M7QUFDOUQsV0FDRSxNQUFDLDJDQUFEO0FBQ0UsY0FBUSxFQUFHQyxLQUFELElBQVc7QUFDbkJBLGFBQUssQ0FBQ0MsY0FBTjtBQUNBZCxnQkFBUSxDQUFDTSx1REFBTyxDQUFDUyxLQUFSLENBQWNOLE1BQWQsQ0FBRCxDQUFSO0FBQ0QsT0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUUsTUFBQyw0Q0FBRDtBQUNFLGVBQVMsRUFBRU8sNERBRGI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUsY0FBUSxNQUpWO0FBS0UsZUFBUyxNQUxYO0FBTUUsUUFBRSxFQUFDLFVBTkw7QUFPRSxXQUFLLEVBQUMsVUFQUjtBQVFFLGtCQUFZLEVBQUMsT0FSZjtBQVNFLGVBQVMsTUFUWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsRUFpQkUsTUFBQyw0Q0FBRDtBQUNFLGVBQVMsRUFBRUEsNERBRGI7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUsY0FBUSxNQUpWO0FBS0UsZUFBUyxNQUxYO0FBTUUsV0FBSyxFQUFDLFVBTlI7QUFPRSxVQUFJLEVBQUMsVUFQUDtBQVFFLFFBQUUsRUFBQyxVQVJMO0FBU0Usa0JBQVksRUFBQyxrQkFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BakJGLEVBNkJFLE1BQUMsK0RBQUQ7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGVBQVMsTUFGWDtBQUdFLGFBQU8sRUFBQyxXQUhWO0FBSUUsV0FBSyxFQUFDLFNBSlI7QUFLRSxlQUFTLEVBQUVqQixPQUFPLENBQUNMLE1BTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGLEVBc0NFLE1BQUMsK0RBQUQ7QUFDRSxlQUFTLE1BRFg7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUdFLFdBQUssRUFBQyxTQUhSO0FBSUUsYUFBTyxFQUFFLE1BQU07QUFDYnVCLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaO0FBQ0QsT0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRDRixDQURGO0FBbURELEdBcEREOztBQXNEQSxTQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFnQm5CLE9BQU8sQ0FBQ2YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBTSxhQUFTLEVBQUVlLE9BQU8sQ0FBQ1QsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxhQUFTLEVBQUVTLE9BQU8sQ0FBQ1AsS0FEckI7QUFFRSxTQUFLLEVBQUMsNEJBRlI7QUFHRSxTQUFLLEVBQUMsdUJBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFBRTJCLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxjQUFRLEVBQUU7QUFBMUIsS0FEakI7QUFFRSxZQUFRLEVBQUdYLE1BQUQsSUFBWTtBQUNwQlksV0FBSyxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsTUFBZixDQUFELENBQUw7QUFDRCxLQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNSWUsS0FBRCxJQUFXaEIsUUFBUSxDQUFDZ0IsS0FBRCxDQU50QixDQURGLENBTkYsQ0FERjtBQUFBO0FBQUE7QUFBQSw4cU1BREYsQ0FERjtBQW9DRCxDLENBRUQ7O0FBQ0EzQixLQUFLLENBQUM0QixlQUFOLEdBQXlCQyxHQUFELElBQTBCO0FBQ2hELE1BQUk1QixLQUFKO0FBQ0EsUUFBTTZCLFFBQVEsR0FBRyxDQUFDLENBQUNELEdBQUcsQ0FBQ0UsR0FBdkI7O0FBQ0EsTUFBSUQsUUFBUSxJQUFJRCxHQUFHLENBQUNFLEdBQUosQ0FBUUMsT0FBUixDQUFnQkMsTUFBaEMsRUFBd0M7QUFDdENoQyxTQUFLLEdBQUdpQyxnRUFBUyxDQUFDLE9BQUQsRUFBVUwsR0FBRyxDQUFDRSxHQUFkLENBQWpCO0FBQ0Q7O0FBQ0RJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFzQm5DLEtBQWxDO0FBQ0EsU0FBTztBQUFFQTtBQUFGLEdBQVA7QUFDRCxDQVJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsdUpBQ1JpQixxREFEUCxHQUVPbUIsd0RBRlAsR0FHT0MseURBSFAsR0FJT0MsMkRBSlAsR0FLT0MseURBTFAsR0FNT0MsMkRBTlAsRzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNdkIsS0FBSyxHQUFJd0IsT0FBRCxLQUFjO0FBQy9CQyxNQUFJLEVBQUVDLCtEQUR5QjtBQUUvQkY7QUFGK0IsQ0FBZCxDQUFkO0FBS0EsTUFBTUcsYUFBYSxHQUFHLE9BQU87QUFDaENGLE1BQUksRUFBRUMsZ0VBQTBCRTtBQURBLENBQVAsQ0FBdEI7QUFJQSxNQUFNQyxZQUFZLEdBQUlMLE9BQUQsS0FBYztBQUN0Q0MsTUFBSSxFQUFFQywrREFEZ0M7QUFFdENGO0FBRnNDLENBQWQsQ0FBckI7QUFLQSxNQUFNTSxXQUFXLEdBQUcsT0FBTztBQUM5QkwsTUFBSSxFQUFFQyw4REFBd0JLO0FBREEsQ0FBUCxDQUFwQjtBQUlBLE1BQU12QyxPQUFPLEdBQUlnQyxPQUFELEtBQWM7QUFDakNDLE1BQUksRUFBRUMsaUVBRDJCO0FBRWpDRjtBQUZpQyxDQUFkLENBQWhCO0FBS0EsTUFBTVEsTUFBTSxHQUFHLE9BQU87QUFDekJQLE1BQUksRUFBRUMsZ0VBQTBCTztBQURQLENBQVAsQ0FBZjtBQUlBLE1BQU1DLGFBQWEsR0FBRyxPQUFPO0FBQ2hDVCxNQUFJLEVBQUVDLGdFQUEwQlM7QUFEQSxDQUFQLENBQXRCO0FBSVE7QUFDWG5DLE9BRFc7QUFFWDJCLGVBRlc7QUFHWEUsY0FIVztBQUlYQyxhQUpXO0FBS1h0QyxTQUxXO0FBTVh3QyxRQU5XO0FBT1hFO0FBUFcsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNZixRQUFRLEdBQUlLLE9BQUQsS0FBYztBQUNsQ0MsTUFBSSxFQUFFQyxrRUFENEI7QUFFbENGO0FBRmtDLENBQWQsQ0FBakI7QUFLQSxNQUFNWSxnQkFBZ0IsR0FBRyxPQUFPO0FBQ25DWCxNQUFJLEVBQUVDLG1FQUE2Qlc7QUFEQSxDQUFQLENBQXpCO0FBS0EsTUFBTUMsZUFBZSxHQUFJZCxPQUFELEtBQWM7QUFDekNDLE1BQUksRUFBRUMsa0VBRG1DO0FBRXpDRjtBQUZ5QyxDQUFkLENBQXhCO0FBS0EsTUFBTWUsY0FBYyxHQUFHLE9BQU87QUFDakNkLE1BQUksRUFBRUMsaUVBQTJCYztBQURBLENBQVAsQ0FBdkI7QUFJUTtBQUNYckIsVUFEVztBQUVYaUIsa0JBRlc7QUFHWEUsaUJBSFc7QUFJWEM7QUFKVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1FLFdBQVcsR0FBSWpCLE9BQUQsS0FBYztBQUNyQ0MsTUFBSSxFQUFFQyxzRUFEK0I7QUFFckNGO0FBRnFDLENBQWQsQ0FBcEI7QUFLQSxNQUFNa0IsbUJBQW1CLEdBQUcsT0FBTztBQUN0Q2pCLE1BQUksRUFBRUMsdUVBQWlDaUI7QUFERCxDQUFQLENBQTVCO0FBSUEsTUFBTUMsa0JBQWtCLEdBQUlwQixPQUFELEtBQWM7QUFDNUNDLE1BQUksRUFBRUMsc0VBRHNDO0FBRTVDRjtBQUY0QyxDQUFkLENBQTNCO0FBS0EsTUFBTXFCLGlCQUFpQixHQUFHLE9BQU87QUFDcENwQixNQUFJLEVBQUVDLHFFQUErQm9CO0FBREQsQ0FBUCxDQUExQjtBQUlRO0FBQ1hMLGFBRFc7QUFFWEMscUJBRlc7QUFHWEUsb0JBSFc7QUFJWEM7QUFKVyxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1FLFdBQVcsR0FBRyxDQUFDdkIsT0FBRCxFQUFVdkMsUUFBVixNQUF3QjtBQUMvQ3dDLE1BQUksRUFBRUMsc0VBRHlDO0FBRS9DRixTQUYrQztBQUcvQ3ZDO0FBSCtDLENBQXhCLENBQXBCO0FBTVE7QUFDWDhEO0FBRFcsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1DLFNBQVMsR0FBSXhCLE9BQUQsS0FBYztBQUNuQ0MsTUFBSSxFQUFFQyxvRUFENkI7QUFFbkNGO0FBRm1DLENBQWQsQ0FBbEI7QUFLQSxNQUFNeUIsaUJBQWlCLEdBQUcsT0FBTztBQUNwQ3hCLE1BQUksRUFBRUMscUVBQStCd0I7QUFERCxDQUFQLENBQTFCO0FBSUEsTUFBTUMsZ0JBQWdCLEdBQUkzQixPQUFELEtBQWM7QUFDMUNDLE1BQUksRUFBRUMsb0VBRG9DO0FBRTFDRjtBQUYwQyxDQUFkLENBQXpCO0FBS0EsTUFBTTRCLGVBQWUsR0FBRyxPQUFPO0FBQ2xDM0IsTUFBSSxFQUFFQyxtRUFBNkIyQjtBQURELENBQVAsQ0FBeEI7QUFJQSxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsRUFBUCxJQUFjO0FBQ3hDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyx5REFBVSxDQUFDQyxHQUFYLENBQWdCLGtCQUFpQkgsRUFBRyxFQUFwQyxDQUF2QjtBQUNBLFNBQU9DLFFBQVEsQ0FBQ0csSUFBaEI7QUFDSCxDQUhNO0FBTVE7QUFDWFgsV0FEVztBQUVYQyxtQkFGVztBQUdYRSxrQkFIVztBQUlYQyxpQkFKVztBQUtYRTtBQUxXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTU0sYUFBYSxHQUFHLE9BQU87QUFDaENuQyxNQUFJLEVBQUVDLG9FQUE4Qm1DO0FBREosQ0FBUCxDQUF0QjtBQUlBLE1BQU1DLGlCQUFpQixHQUFHLE9BQU87QUFDcENyQyxNQUFJLEVBQUVDLHFFQUErQnFDO0FBREQsQ0FBUCxDQUExQjtBQUlBLE1BQU1DLGdCQUFnQixHQUFJeEMsT0FBRCxLQUFjO0FBQzFDQyxNQUFJLEVBQUVDLG9FQURvQztBQUUxQ0Y7QUFGMEMsQ0FBZCxDQUF6QjtBQUtBLE1BQU15QyxlQUFlLEdBQUcsT0FBTztBQUNsQ3hDLE1BQUksRUFBRUMsbUVBQTZCd0M7QUFERCxDQUFQLENBQXhCO0FBSVE7QUFDWE4sZUFEVztBQUVYRSxtQkFGVztBQUdYRSxrQkFIVztBQUlYQztBQUpXLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNRSxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNOUIsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTStCLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU01QixlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTTZCLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU16QyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTTBDLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU12QyxZQUFZLEdBQUcsY0FBckI7QUFFQSxNQUFNd0MsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU10QyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUUsY0FBYyxHQUFHLGdCQUF2QjtBQUdBLE1BQU0wQixrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNRSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNRyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNTSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNOUIscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUcsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTTRCLG9CQUFvQixHQUFHLHNCQUE3QjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU16QixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNRyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNdUIsa0JBQWtCLEdBQUcsb0JBQTNCO0FBR0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDLEM7Ozs7Ozs7Ozs7OztBQ3hDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUMsTUFBTSxHQUFHLE9BQWY7QUFDQSxNQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsS0FBbkIsQzs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVPLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDdkMsYUFBcUIsRUFLcEI7QUFDRixDQVBNO0FBU0EsTUFBTUMsWUFBWSxHQUFJRixHQUFELElBQVM7QUFDbkMsYUFBcUIsRUFJcEI7QUFDRixDQU5NO0FBUUEsTUFBTTFFLFNBQVMsR0FBRyxDQUFDMEUsR0FBRCxFQUFNN0UsR0FBTixLQUFjO0FBQ3JDLFNBQU8sUUFDSGdGLFNBREcsR0FFSEMsbUJBQW1CLENBQUNKLEdBQUQsRUFBTTdFLEdBQU4sQ0FGdkI7QUFHRCxDQUpNOztBQU1QLE1BQU1nRixvQkFBb0IsR0FBSUgsR0FBRCxJQUFTO0FBQ3BDLFNBQU8zRSxnREFBTSxDQUFDMkMsR0FBUCxDQUFXZ0MsR0FBWCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNSSxtQkFBbUIsR0FBRyxDQUFDSixHQUFELEVBQU03RSxHQUFOLEtBQWM7QUFDeEMsTUFBSSxDQUFDQSxHQUFHLENBQUNDLE9BQUosQ0FBWUMsTUFBakIsRUFBeUI7QUFDdkIsV0FBT2dGLFNBQVA7QUFDRDs7QUFDRCxRQUFNQyxTQUFTLEdBQUduRixHQUFHLENBQUNDLE9BQUosQ0FBWUMsTUFBWixDQUNma0YsS0FEZSxDQUNULEdBRFMsRUFFZkMsSUFGZSxDQUVUQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixHQUFTQyxVQUFULENBQXFCLEdBQUVYLEdBQUksR0FBM0IsQ0FGRyxDQUFsQjs7QUFHQSxNQUFJLENBQUNNLFNBQUwsRUFBZ0I7QUFDZCxXQUFPRCxTQUFQO0FBQ0Q7O0FBQ0QsU0FBT0MsU0FBUyxDQUFDQyxLQUFWLENBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVA7QUFDRCxDQVhELEM7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0EsTUFBTXhDLFVBQVUsR0FBRzZDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUM5QkMsU0FBTyxFQUFFQyw4QkFBd0NDO0FBRG5CLENBQWIsQ0FBbkI7QUFJTyxNQUFNQyxjQUFjLEdBQUkxSCxRQUFELElBQWM7QUFDMUN3RSxZQUFVLENBQUNtRCxZQUFYLENBQXdCQyxPQUF4QixDQUFnQ0MsR0FBaEMsQ0FBcUNqRyxHQUFELElBQVM7QUFDM0MsVUFBTTlCLEtBQUssR0FBR2lDLHlEQUFTLENBQUNxRSxnREFBRCxDQUF2QjtBQUNBLFFBQUl0RyxLQUFKLEVBQVc4QixHQUFHLENBQUNDLE9BQUosR0FBYztBQUFFLHdCQUFrQi9CO0FBQXBCLEtBQWQ7QUFDWCxXQUFPOEIsR0FBUDtBQUNELEdBSkQ7QUFPQTRDLFlBQVUsQ0FBQ21ELFlBQVgsQ0FBd0JwRCxRQUF4QixDQUFpQ3NELEdBQWpDLENBQXFDLFVBQVV0RCxRQUFWLEVBQW9CO0FBQ3ZELFdBQU9BLFFBQVA7QUFDRCxHQUZELEVBRUcsVUFBVXVELEtBQVYsRUFBaUI7QUFDbEIsUUFBSSxRQUFRQSxLQUFLLENBQUN2RCxRQUFOLENBQWV3RCxNQUF2QixJQUFpQyxRQUFRRCxLQUFLLENBQUN2RCxRQUFOLENBQWV3RCxNQUF4RCxJQUFrRSxRQUFRRCxLQUFLLENBQUN2RCxRQUFOLENBQWV3RCxNQUE3RixFQUFxRztBQUNuRy9ILGNBQVEsQ0FBQ00sc0RBQU8sQ0FBQ3lDLE1BQVIsRUFBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT2lGLE9BQU8sQ0FBQ0MsTUFBUixDQUFlSCxLQUFmLENBQVA7QUFDRDtBQUNGLEdBUkQ7QUFVRCxDQWxCTTtBQW9CUXRELHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBsb2dpblN0eWxlIGZyb20gXCIuLi9zdHlsZXMvbG9naW4uc3R5bGVcIjtcbmltcG9ydCBsb2dpbkNTUyBmcm9tIFwiLi4vcHVibGljL3N0YXRpYy9jc3MvbG9naW4ubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIjtcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcImZvcm1pay1tYXRlcmlhbC11aVwiO1xuaW1wb3J0IHsgRm9ybWlrLCBGb3JtLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSBcIi4uL3V0aWxzL2Nvb2tpZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b2tlbj86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgfSxcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAzNDUsXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAyMDAsXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyB0b2tlbiB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGxvZ2luUmVkdWNlciA9IHVzZVNlbGVjdG9yKCh7IGxvZ2luUmVkdWNlciB9KSA9PiBsb2dpblJlZHVjZXIpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGVidWdnZXI7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy5yZWxvZ2luKHsgdG9rZW4gfSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2hvd0Zvcm0gPSAoeyB2YWx1ZXMsIHNldEZpZWxkVmFsdWUsIGlzVmFsaWQsIGRpcnR5IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5sb2dpbih2YWx1ZXMpKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEZpZWxkXG4gICAgICAgICAgY29tcG9uZW50PXtUZXh0RmllbGR9XG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAvPlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9e1RleHRGaWVsZH1cbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICBTaWduIEluXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICAgIGltYWdlPVwiL3N0YXRpYy9pbWcvbmV4dF9sb2dpbi5qcGdcIlxuICAgICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPEZvcm1pa1xuICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9fVxuICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHByb3BzKSA9PiBzaG93Rm9ybShwcm9wcyl9XG4gICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1nL2JnNC5qcGdcIik7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gQ2FsbGVkIGluIHNlcnZlci1zaWRlXG5Mb2dpbi5nZXRJbml0aWFsUHJvcHMgPSAoY3R4OiBOZXh0UGFnZUNvbnRleHQpID0+IHtcbiAgbGV0IHRva2VuO1xuICBjb25zdCBpc1NlcnZlciA9ICEhY3R4LnJlcTtcbiAgaWYgKGlzU2VydmVyICYmIGN0eC5yZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICB0b2tlbiA9IGdldENvb2tpZShcInRva2VuXCIsIGN0eC5yZXEpO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiQ01Db29raWUgOiB0b2tlbiBcIiArIHRva2VuKTtcbiAgcmV0dXJuIHsgdG9rZW4gfTtcbn07XG4iLCJpbXBvcnQgbG9naW4gZnJvbSAnLi9sb2dpbi5hY3Rpb24nO1xuaW1wb3J0IHJlZ2lzdGVyIGZyb20gJy4vcmVnaXN0ZXIuYWN0aW9uJztcbmltcG9ydCBzdG9ja0xpc3QgZnJvbSAnLi9zdG9ja0xpc3QuYWN0aW9uJztcbmltcG9ydCBzdG9ja0NyZWF0ZSBmcm9tICcuL3N0b2NrQ3JlYXRlLmFjdGlvbic7XG5pbXBvcnQgc3RvY2tFZGl0IGZyb20gJy4vc3RvY2tFZGl0LmFjdGlvbic7XG5pbXBvcnQgc3RvY2tEZWxldGUgZnJvbSAnLi9zdG9ja0RlbGV0ZS5hY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLi4ubG9naW4sXG4gICAgLi4ucmVnaXN0ZXIsXG4gICAgLi4uc3RvY2tMaXN0LFxuICAgIC4uLnN0b2NrQ3JlYXRlLFxuICAgIC4uLnN0b2NrRWRpdCxcbiAgICAuLi5zdG9ja0RlbGV0ZVxufSIsImltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gXCIuLi9zYWdhL2FjdGlvblR5cGVzXCJcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3QgbG9naW5GZXRjaGluZyA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fRkVUQ0hJTkdcbn0pXG5cbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3MgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTLFxuICAgIHBheWxvYWRcbn0pXG5cbmV4cG9ydCBjb25zdCBsb2dpbkZhaWxlZCA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fRkFJTEVEXG59KVxuXG5leHBvcnQgY29uc3QgcmVsb2dpbiA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFTE9HSU5fUkVRVUVTVCxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVRfUkVRVUVTVFxufSlcblxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3MgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9TVUNDRVNTXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9naW4sXG4gICAgbG9naW5GZXRjaGluZyxcbiAgICBsb2dpblN1Y2Nlc3MsXG4gICAgbG9naW5GYWlsZWQsXG4gICAgcmVsb2dpbixcbiAgICBsb2dvdXQsXG4gICAgbG9nb3V0U3VjY2Vzc1xufTsiLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vc2FnYS9hY3Rpb25UeXBlc1wiXG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFR0lTVEVSX1JFUVVFU1QsXG4gICAgcGF5bG9hZFxufSlcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRmV0Y2hpbmcgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFR0lTVEVSX0ZFVENISU5HLFxufSlcblxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTdWNjZXNzID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuUkVHSVNURVJfU1VDQ0VTUyxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGYWlsZWQgPSAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlJFR0lTVEVSX0ZBSUxFRFxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlZ2lzdGVyLFxuICAgIHJlZ2lzdGVyRmV0Y2hpbmcsXG4gICAgcmVnaXN0ZXJTdWNjZXNzLFxuICAgIHJlZ2lzdGVyRmFpbGVkXG59IiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL3NhZ2EvYWN0aW9uVHlwZXNcIlxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvY2sgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19DUkVBVEVfUkVRVUVTVCxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tDcmVhdGVGZXRjaGluZyA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU1RPQ0tfQ1JFQVRFX0ZFVENISU5HXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tDcmVhdGVTdWNjZXNzID0gKHBheWxvYWQpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MsXG4gICAgcGF5bG9hZFxufSlcblxuZXhwb3J0IGNvbnN0IHN0b2NrQ3JlYXRlRmFpbGVkID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19DUkVBVEVfRkFJTEVELFxufSlcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZVN0b2NrLFxuICAgIHN0b2NrQ3JlYXRlRmV0Y2hpbmcsXG4gICAgc3RvY2tDcmVhdGVTdWNjZXNzLFxuICAgIHN0b2NrQ3JlYXRlRmFpbGVkLFxufTsiLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vc2FnYS9hY3Rpb25UeXBlc1wiXG5cbmV4cG9ydCBjb25zdCBkZWxldGVTdG9jayA9IChwYXlsb2FkLCBkaXNwYXRjaCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19ERUxFVEVfUkVRVUVTVCxcbiAgICBwYXlsb2FkLFxuICAgIGRpc3BhdGNoXG59KVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVsZXRlU3RvY2tcbn0iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlcyBmcm9tIFwiLi4vc2FnYS9hY3Rpb25UeXBlc1wiXG5pbXBvcnQgaHR0cENsaWVudCBmcm9tIFwiLi4vLi4vdXRpbHMvaHR0cENsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBlZGl0U3RvY2sgPSAocGF5bG9hZCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19FRElUX1JFUVVFU1QsXG4gICAgcGF5bG9hZFxufSlcblxuZXhwb3J0IGNvbnN0IHN0b2NrRWRpdEZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19FRElUX0ZFVENISU5HXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tFZGl0U3VjY2VzcyA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0VESVRfU1VDQ0VTUyxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tFZGl0RmFpbGVkID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19FRElUX0ZBSUxFRCxcbn0pXG5cbmV4cG9ydCBjb25zdCBkb0dldFN0b2NrQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaHR0cENsaWVudC5nZXQoYC9zdG9jay9wcm9kdWN0LyR7aWR9YClcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlZGl0U3RvY2ssXG4gICAgc3RvY2tFZGl0RmV0Y2hpbmcsXG4gICAgc3RvY2tFZGl0U3VjY2VzcyxcbiAgICBzdG9ja0VkaXRGYWlsZWQsXG4gICAgZG9HZXRTdG9ja0J5SWRcbn07IiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSBcIi4uL3NhZ2EvYWN0aW9uVHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZmVlZFN0b2NrTGlzdCA9ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU1RPQ0tfTElTVF9SRVFVRVNULFxufSlcblxuZXhwb3J0IGNvbnN0IHN0b2NrTGlzdEZldGNoaW5nID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19MSVNUX0ZFVENISU5HXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tMaXN0U3VjY2VzcyA9IChwYXlsb2FkKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNUT0NLX0xJU1RfU1VDQ0VTUyxcbiAgICBwYXlsb2FkXG59KVxuXG5leHBvcnQgY29uc3Qgc3RvY2tMaXN0RmFpbGVkID0gKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5TVE9DS19MSVNUX0ZBSUxFRCxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmZWVkU3RvY2tMaXN0LFxuICAgIHN0b2NrTGlzdEZldGNoaW5nLFxuICAgIHN0b2NrTGlzdFN1Y2Nlc3MsXG4gICAgc3RvY2tMaXN0RmFpbGVkLFxufTsiLCJleHBvcnQgY29uc3QgUkVHSVNURVJfUkVRVUVTVCA9ICdSRUdJU1RFUl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZFVENISU5HID0gJ1JFR0lTVEVSX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1NVQ0NFU1MgPSAnUkVHSVNURVJfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9GQUlMRUQgPSAnUkVHSVNURVJfRkFJTEVEJ1xuXG5leHBvcnQgY29uc3QgTE9HSU5fUkVRVUVTVCA9ICdMT0dJTl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IExPR0lOX0ZFVENISU5HID0gJ0xPR0lOX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IExPR0lOX1NVQ0NFU1MgPSAnTE9HSU5fU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMRUQgPSAnTE9HSU5fRkFJTEVEJ1xuXG5leHBvcnQgY29uc3QgUkVMT0dJTl9SRVFVRVNUID0gJ1JFTE9HSU5fUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dPVVRfUkVRVUVTVCA9ICdMT0dPVVRfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dPVVRfU1VDQ0VTUyA9ICdMT0dPVVRfU1VDQ0VTUydcblxuXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9SRVFVRVNUID0gJ1NUT0NLX0xJU1RfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBTVE9DS19MSVNUX0ZFVENISU5HID0gJ1NUT0NLX0xJU1RfRkVUQ0hJTkcnXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9GQUlMRUQgPSAnU1RPQ0tfTElTVF9GQUlMRUQnXG5leHBvcnQgY29uc3QgU1RPQ0tfTElTVF9TVUNDRVNTID0gJ1NUT0NLX0xJU1RfU1VDQ0VTUydcblxuXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX1JFUVVFU1QgPSAnU1RPQ0tfQ1JFQVRFX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX0ZFVENISU5HID0gJ1NUT0NLX0NSRUFURV9GRVRDSElORydcbmV4cG9ydCBjb25zdCBTVE9DS19DUkVBVEVfRkFJTEVEID0gJ1NUT0NLX0NSRUFURV9GQUlMRUQnXG5leHBvcnQgY29uc3QgU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MgPSAnU1RPQ0tfQ1JFQVRFX1NVQ0NFU1MnXG5cbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX1JFUVVFU1QgPSAnU1RPQ0tfRURJVF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0VESVRfRkVUQ0hJTkcgPSAnU1RPQ0tfRURJVF9GRVRDSElORydcbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX0ZBSUxFRCA9ICdTVE9DS19FRElUX0ZBSUxFRCdcbmV4cG9ydCBjb25zdCBTVE9DS19FRElUX1NVQ0NFU1MgPSAnU1RPQ0tfRURJVF9TVUNDRVNTJ1xuXG5cbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfUkVRVUVTVCA9ICdTVE9DS19ERUxFVEVfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfRkVUQ0hJTkcgPSAnU1RPQ0tfREVMRVRFX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0RFTEVURV9GQUlMRUQgPSAnU1RPQ0tfREVMRVRFX0ZBSUxFRCdcbmV4cG9ydCBjb25zdCBTVE9DS19ERUxFVEVfU1VDQ0VTUyA9ICdTVE9DS19ERUxFVEVfU1VDQ0VTUydcblxuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9SRVFVRVNUID0gJ1NUT0NLX0dFVF9CWV9JRF9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9GRVRDSElORyA9ICdTVE9DS19HRVRfQllfSURfRkVUQ0hJTkcnXG5leHBvcnQgY29uc3QgU1RPQ0tfR0VUX0JZX0lEX0ZBSUxFRCA9ICdTVE9DS19HRVRfQllfSURfRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IFNUT0NLX0dFVF9CWV9JRF9TVUNDRVNTID0gJ1NUT0NLX0dFVF9CWV9JRF9TVUNDRVNTJyIsImV4cG9ydCBjb25zdCBrVG9rZW4gPSAndG9rZW4nXG5leHBvcnQgY29uc3Qga1VzZXJuYW1lID0gJ3VzZXJuYW1lJ1xuZXhwb3J0IGNvbnN0IGtSZXN1bHRPayA9ICdvaydcbmV4cG9ydCBjb25zdCBrUmVzdWx0Tm9rID0gJ25vaydcbiIsIi8vIHRoaXMgZmlsZSB3aWxsIGhhdmUgdGhlIHRhc2sgdGhhdCB3ZSBoYXZlIHRvIHBlcmZvcm0gd2l0aCBjb29raWVzLyByZWFjdC1uYXRpdmUgeW91IG5lZWQgdG8gcHV0IHlvdXIgYXN5bmMgc3RvcmFnZSBjb2RlIGhlcmUuXG5cbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgZ2V0TWF4TGlzdGVuZXJzIH0gZnJvbSBcInByb2Nlc3NcIjtcblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcbiAgICAgIGV4cGlyZXM6IDEsXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XG4gICAgICBleHBpcmVzOiAxLFxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKGtleSwgcmVxKSA9PiB7XG4gIHJldHVybiBwcm9jZXNzLmJyb3dzZXJcbiAgICA/IGdldENvb2tpZUZyb21Ccm93c2VyKGtleSlcbiAgICA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSAoa2V5KSA9PiB7XG4gIHJldHVybiBjb29raWUuZ2V0KGtleSk7XG59O1xuXG5jb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XG4gIGlmICghcmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCByYXdDb29raWUgPSByZXEuaGVhZGVycy5jb29raWVcbiAgICAuc3BsaXQoXCI7XCIpXG4gICAgLmZpbmQoKGMpID0+IGMudHJpbSgpLnN0YXJ0c1dpdGgoYCR7a2V5fT1gKSk7XG4gIGlmICghcmF3Q29va2llKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gcmF3Q29va2llLnNwbGl0KFwiPVwiKVsxXTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB7IGtUb2tlbiB9IGZyb20gJy4vY29udGFudHMnXG5pbXBvcnQgeyBnZXRDb29raWUsIHJlbW92ZUNvb2tpZSB9IGZyb20gJy4vY29va2llJztcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zXCI7XG5cblxuY29uc3QgaHR0cENsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9CQVNFX0FQSV9VUkxcbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRJbnRlcmNlcHRvciA9IChkaXNwYXRjaCkgPT4ge1xuICBodHRwQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgocmVxKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoa1Rva2VuKVxuICAgIGlmICh0b2tlbikgcmVxLmhlYWRlcnMgPSB7ICd4LWFjY2Vzcy10b2tlbic6IHRva2VuIH1cbiAgICByZXR1cm4gcmVxXG4gIH0pXG5cblxuICBodHRwQ2xpZW50LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBpZiAoNDAzID09PSBlcnJvci5yZXNwb25zZS5zdGF0dXMgfHwgNDAxID09PSBlcnJvci5yZXNwb25zZS5zdGF0dXMgfHwgNTAwID09PSBlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMubG9nb3V0KCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBodHRwQ2xpZW50XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWstbWF0ZXJpYWwtdWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb2Nlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9