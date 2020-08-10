webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Clearn_all_course%5Ccmnextstock-master%5Ccmnextstock%5Cpages%5C_error.tsx!./":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Clearn_all_course%5Ccmnextstock-master%5Ccmnextstock%5Cpages%5C_error.tsx ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\learn_all_course\\cmnextstock-master\\cmnextstock\\pages\\_error.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


// Called in client-side
function Error(_ref) {
  _s();

  var statusCode = _ref.statusCode;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    setTimeout(function () {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }, 2000);
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, "Error : ", statusCode);
} // Called in server-side

_s(Error, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Error;

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  }; //   if (statusCode == 404) {
  //     res.writeHead(301, { Location: "/" });
  //     res.end();
  //     return {};
  //   } else {
  //     return { statusCode };
  //   }
};

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/*!******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=D%3A%5Clearn_all_course%5Ccmnextstock-master%5Ccmnextstock%5Cpages%5C_error.tsx ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=D%3A%5Clearn_all_course%5Ccmnextstock-master%5Ccmnextstock%5Cpages%5C_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5Clearn_all_course%5Ccmnextstock-master%5Ccmnextstock%5Cpages%5C_error.tsx!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJFcnJvciIsInN0YXR1c0NvZGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhDQUEwRTtBQUNqRztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFNQTtBQUNlLFNBQVNBLEtBQVQsT0FBb0Q7QUFBQTs7QUFBQSxNQUFuQ0MsVUFBbUMsUUFBbkNBLFVBQW1DO0FBQ2pFQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSkQsRUFJRyxFQUpIO0FBTUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFjTCxVQUFkLENBQVA7QUFDRCxDLENBRUQ7O0dBVndCRCxLOztLQUFBQSxLOztBQVd4QkEsS0FBSyxDQUFDTyxlQUFOLEdBQXdCLGlCQUFrQjtBQUFBLE1BQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUN4QyxNQUFNUixVQUFVLEdBQUdPLEdBQUcsR0FBR0EsR0FBRyxDQUFDUCxVQUFQLEdBQW9CUSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ1IsVUFBUCxHQUFvQixHQUFqRTtBQUNBLFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVAsQ0FGd0MsQ0FJeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQVhEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZXJyb3IuanMuYTU3YjIxNGRhNjZmYzE3N2ZiMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRDpcXFxcbGVhcm5fYWxsX2NvdXJzZVxcXFxjbW5leHRzdG9jay1tYXN0ZXJcXFxcY21uZXh0c3RvY2tcXFxccGFnZXNcXFxcX2Vycm9yLnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdHVzQ29kZTogc3RyaW5nO1xufVxuXG4vLyBDYWxsZWQgaW4gY2xpZW50LXNpZGVcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSwgMjAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPGRpdj5FcnJvciA6IHtzdGF0dXNDb2RlfTwvZGl2Pjtcbn1cblxuLy8gQ2FsbGVkIGluIHNlcnZlci1zaWRlXG5FcnJvci5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG5cbiAgLy8gICBpZiAoc3RhdHVzQ29kZSA9PSA0MDQpIHtcbiAgLy8gICAgIHJlcy53cml0ZUhlYWQoMzAxLCB7IExvY2F0aW9uOiBcIi9cIiB9KTtcbiAgLy8gICAgIHJlcy5lbmQoKTtcbiAgLy8gICAgIHJldHVybiB7fTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xuICAvLyAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9