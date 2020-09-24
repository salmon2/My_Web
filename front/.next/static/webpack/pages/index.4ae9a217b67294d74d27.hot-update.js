webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppRayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppRayout */ "./components/AppRayout.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "D:\\project\\My_Web\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      login = _useState[0],
      setLogin = _useState[1];

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.user;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["InfoAction"])(JSON.parse(sessionStorage.getItem('userid')))); //변하고 바로 보이지 않음
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppRayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    defaultActiveKey: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      width: '900px',
      marginTop: '10px',
      margin: 'auto',
      marginBottom: '40px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/1.jpg",
    alt: "First slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "\uC624\uB984\uC774"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\uC624\uB9841\uB3D9\uC5D0 \uC0B4\uACE0 \uC788\uB294 \uACE0\uC591\uC774 \uC624\uB984\uC774"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/2.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "\uAE08\uC624\uACF5\uACFC\uB300\uD559\uAD50 \uC6B4\uB3D9\uC7A5"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "By \uC5F0\uC11C"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/3.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "\uBAA8\uCE74"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\uC790\uACE0 \uC788\uB294 \uBAA8\uCE74"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/4.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "\uAE08\uC624\uACF5\uB300 \uD558\uB298")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: search_Majorlist,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }
  }, "hi"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: "sm",
    className: "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 12
    }
  }), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 12
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA91 \uD83D\uDC4D1 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA92 \uD83D\uDC4D2 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA93 \uD83D\uDC4D3 \uC791\uC131\uC790: \uC544\uBB34\uAC1C"))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "\uAC15\uC758\uD6C4\uAE30")))));
};

_s(Home, "ayMpwCxLwJzvLd4O0weulTHIp0Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImxvZ2luIiwic2V0TG9naW4iLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZUVmZmVjdCIsIkluZm9BY3Rpb24iLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsInNlYXJjaF9NYWpvcmxpc3QiLCJDYXJkIiwiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFLO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVWQyxLQUZVO0FBQUEsTUFFSkMsUUFGSTs7QUFHakIsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNGLElBQU4sQ0FBV0EsSUFBYjtBQUFBLEdBQU4sQ0FBeEI7QUFDQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2ZSLFlBQVEsQ0FBQ1MsaUVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixRQUF2QixDQUFYLENBQUQsQ0FBWCxDQUFSLENBRGUsQ0FDcUQ7QUFDcEUsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlDLFNBQ0EsbUVBQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUUsTUFBQyx5REFBRDtB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ZDc0ZDI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwUmF5b3V0JztcclxuaW1wb3J0IHsgQ2FyZCwgVGFicywgVGFibGUsIFRhYiwgQnV0dG9uLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBJbmZvQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCBbbG9naW4sc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlci51c2VyKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goSW5mb0FjdGlvbihKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJpZCcpKSkpOyAvL+uzgO2VmOqzoCDrsJTroZwg67O07J207KeAIOyViuydjFxyXG5cdH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBcHBMYXlvdXQ+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9XCIwXCI+XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzkwMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAnYXV0bycsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICc0MHB4JyxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz1cIi8xLmpwZ1wiIGFsdD1cIkZpcnN0IHNsaWRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMz7smKTrpoTsnbQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+7Jik66aEMeuPmeyXkCDsgrTqs6Ag7J6I64qUIOqzoOyWkeydtCDsmKTrpoTsnbQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz1cIi8yLmpwZ1wiIGFsdD1cIlRoaXJkIHNsaWRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMz7quIjsmKTqs7Xqs7zrjIDtlZnqtZAg7Jq064+Z7J6lPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPkJ5IOyXsOyEnDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9XCIvMy5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDM+66qo7Lm0PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPuyekOqzoCDsnojripQg66qo7Lm0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgc3JjPVwiLzQuanBnXCIgYWx0PVwiVGhpcmQgc2xpZGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzPuq4iOyYpOqzteuMgCDtlZjripg8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2sgPXtzZWFyY2hfTWFqb3JsaXN0fT5oaTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT1cIjFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx07J6Q7Jyg6rKM7Iuc7YyQXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGUgcmVzcG9uc2l2ZT1cInNtXCIgIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkxIPCfkY0xIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkyIPCfkY0yIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkzIPCfkY0zIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTqsJXsnZjtm4TquLBcclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuICAgICAgICAgIFxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=