webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppRayout.js":
/*!*********************************!*\
  !*** ./components/AppRayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "D:\\project\\My_Web\\front\\components\\AppRayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-left: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 //import { setTest } from '../reducers/test'


var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"])(_templateObject());
_c = StyledButton;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      islogined = _useState[0],
      setLogin = _useState[1];

  var Logout = function Logout() {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["logOutAction"])());
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/banner.jpg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    bg: "light",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\uD648"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/FreeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/Review",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "\uAC15\uC758\uD6C4\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/TimeTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "\uC2DC\uAC04\uD45C")), !islogined ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 40
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 43
    }
  }, "\uB85C\uADF8\uC778"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 28
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    onClick: Logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 31
    }
  }, "\uB85C\uADF8\uC544\uC6C3")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, children)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 3,
    style: {
      padding: "0px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, islogined ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    style: {
      width: '18rem',
      marginTop: "10px",
      position: "fixed"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 10
    }
  }, "\uC0AC\uC6A9\uC790\uC774\uB984"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, "\uC790\uAE30\uC18C\uAC1C"))) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    style: {
      width: '18rem',
      marginTop: "10px",
      position: "fixed"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 10
    }
  }, "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }))));
};

_s(AppLayout, "tcooi5gJeV/j497gzbhpN9Mv3wU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c2 = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2;

$RefreshReg$(_c, "StyledButton");
$RefreshReg$(_c2, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBSYXlvdXQuanMiXSwibmFtZXMiOlsiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiQnV0dG9uIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJpc2xvZ2luZWQiLCJzZXRMb2dpbiIsIkxvZ291dCIsImxvZ091dEFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpblRvcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGlFQUFNLENBQUNDLHNEQUFELENBQVQsbUJBQWxCO0tBQU1GLFk7O0FBSU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEbUMsa0JBRUxDLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJDLFNBRjRCO0FBQUEsTUFFakJDLFFBRmlCOztBQUtuQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCTCxZQUFRLENBQUNNLG1FQUFZLEVBQWIsQ0FBUjtBQUNBRixZQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsV0FBdkIsQ0FBWCxDQUFELENBQVI7QUFDQSxHQUhEOztBQUtBQyx5REFBUyxDQUFDLFlBQU07QUFDZlAsWUFBUSxDQUFDRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFdBQXZCLENBQVgsQ0FB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TyxFQUFDLEtBQWxCO0FBQXdCLE9BQUcsRUFBQyxVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFksRUFFWixNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERCxFQUVDLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkQsQ0FGWSxDQUFILEdBU1YsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFRixXQUFLLEVBQUUsT0FBVDtBQUFrQkMsZUFBUyxFQUFFLE1BQTdCO0FBQXFDQyxjQUFRLEVBQUU7QUFBL0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsT0FBRyxFQUFDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURELENBRkQsQ0FWRCxDQURELENBTkQsRUEwQkMsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMUJELENBREQsQ0FiRCxDQUREO0FBK0NBLENBOUREOztHQUFNakIsUztVQUNZRyx1RDs7O01BRFpILFM7QUFnRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjZTA5NGI2MGYzODM1OTg2ZjM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIEZvcm0sIEJ1dHRvbiwgRm9ybUNvbnRyb2wsIENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG4vL2ltcG9ydCB7IHNldFRlc3QgfSBmcm9tICcuLi9yZWR1Y2Vycy90ZXN0J1xyXG5pbXBvcnQgeyBsb2dPdXRBY3Rpb24sIEluZm9BY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblx0Y29uc3QgW2lzbG9naW5lZCwgc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblx0Y29uc3QgTG9nb3V0ID0gKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2gobG9nT3V0QWN0aW9uKCkpO1xyXG5cdFx0c2V0TG9naW4oSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpc2xvZ2luZWQnKSkpO1xyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHR9LCBbXSk7XHJcblx0XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIvYmFubmVyLmpwZ1wiIHdpZHRoPVwiMTAwJVwiLz48L0xpbms+XHJcblx0XHRcdDxOYXZiYXIgYmc9XCJsaWdodFwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG5cdFx0XHRcdDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj7tmYg8L05hdmJhci5CcmFuZD5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9GcmVlQm9hcmRcIj7snpDsnKDqsozsi5ztjJA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9SZXZpZXdcIj7qsJXsnZjtm4TquLA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9UaW1lVGFibGVcIj7si5zqsITtkZw8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0eyFpc2xvZ2luZWQgPyA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPuuhnOq3uOyduDwvU3R5bGVkQnV0dG9uPjwvYT48L0xpbms+XHJcblx0XHRcdFx0OiA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2sgPSB7TG9nb3V0fT7roZzqt7jslYTsm4M8L1N0eWxlZEJ1dHRvbj48L2E+PC9MaW5rPn1cclxuXHRcdFx0PC9OYXZiYXI+XHJcblxyXG5cdFx0XHQ8Q29udGFpbmVyIGZsdWlkPlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXs5fT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXszfSBzdHlsZT17e3BhZGRpbmc6XCIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdHtpc2xvZ2luZWQgPyA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE4cmVtJywgbWFyZ2luVG9wOiBcIjEwcHhcIiwgcG9zaXRpb246IFwiZml4ZWRcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPVwiL2NhdC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuVGl0bGU+7IKs7Jqp7J6Q7J2066aEPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOyekOq4sOyGjOqwnFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD4gOlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCIvY2F0LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UaXRsZT7roZzqt7jsnbjsnYQg7ZW07KO87IS47JqUPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==