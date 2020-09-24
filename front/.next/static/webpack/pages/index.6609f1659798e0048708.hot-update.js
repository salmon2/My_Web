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

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user.user;
  });

  var Logout = function Logout() {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["logOutAction"])());
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["InfoAction"])(JSON.parse(sessionStorage.getItem('userid')))).then(console.log(user));
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/banner.jpg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    bg: "light",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\uD648"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/FreeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/Review",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "\uAC15\uC758\uD6C4\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/TimeTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\uC2DC\uAC04\uD45C")), !islogined ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 40
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 43
    }
  }, "\uB85C\uADF8\uC778"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 28
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    onClick: Logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 31
    }
  }, "\uB85C\uADF8\uC544\uC6C3")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 55,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }, "\uC0AC\uC6A9\uC790\uC774\uB984"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 66,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 10
    }
  }, "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }))));
};

_s(AppLayout, "pvl+G7BTTI6dgUMFsS/VR2Qgx8s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBSYXlvdXQuanMiXSwibmFtZXMiOlsiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiQnV0dG9uIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJpc2xvZ2luZWQiLCJzZXRMb2dpbiIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiTG9nb3V0IiwibG9nT3V0QWN0aW9uIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRWZmZWN0IiwiSW5mb0FjdGlvbiIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIndpZHRoIiwibWFyZ2luVG9wIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0Msc0RBQUQsQ0FBVCxtQkFBbEI7S0FBTUYsWTs7QUFJTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQyxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsU0FGNEI7QUFBQSxNQUVqQkMsUUFGaUI7O0FBR25DLE1BQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBRUEsS0FBSyxDQUFDRixJQUFOLENBQVdBLElBQWI7QUFBQSxHQUFOLENBQXhCOztBQUVBLE1BQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEJSLFlBQVEsQ0FBQ1MsbUVBQVksRUFBYixDQUFSO0FBQ0FMLFlBQVEsQ0FBQ00sSUFBSSxDQUFD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QTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFERCxDQUZELENBVkQsQ0FERCxDQU5ELEVBMEJDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRCxDQURELENBYkQsQ0FERDtBQStDQSxDQWpFRDs7R0FBTXhCLFM7VUFDWUcsdUQsRUFFSkssdUQ7OztNQUhSUixTO0FBbUVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NjA5ZjE2NTk3OThlMDA0ODcwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBGb3JtLCBCdXR0b24sIEZvcm1Db250cm9sLCBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuLy9pbXBvcnQgeyBzZXRUZXN0IH0gZnJvbSAnLi4vcmVkdWNlcnMvdGVzdCdcclxuaW1wb3J0IHsgbG9nT3V0QWN0aW9uLCBJbmZvQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IFtpc2xvZ2luZWQsIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXIudXNlcik7XHJcblxyXG5cdGNvbnN0IExvZ291dCA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGxvZ091dEFjdGlvbigpKTtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHRcdGRpc3BhdGNoKEluZm9BY3Rpb24oSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyaWQnKSkpKS50aGVuKGNvbnNvbGUubG9nKHVzZXIpKTtcclxuXHRcclxuXHR9LCBbXSk7XHJcblx0XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIvYmFubmVyLmpwZ1wiIHdpZHRoPVwiMTAwJVwiLz48L0xpbms+XHJcblx0XHRcdDxOYXZiYXIgYmc9XCJsaWdodFwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG5cdFx0XHRcdDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj7tmYg8L05hdmJhci5CcmFuZD5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9GcmVlQm9hcmRcIj7snpDsnKDqsozsi5ztjJA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9SZXZpZXdcIj7qsJXsnZjtm4TquLA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9UaW1lVGFibGVcIj7si5zqsITtkZw8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0eyFpc2xvZ2luZWQgPyA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPuuhnOq3uOyduDwvU3R5bGVkQnV0dG9uPjwvYT48L0xpbms+XHJcblx0XHRcdFx0OiA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2sgPSB7TG9nb3V0fT7roZzqt7jslYTsm4M8L1N0eWxlZEJ1dHRvbj48L2E+PC9MaW5rPn1cclxuXHRcdFx0PC9OYXZiYXI+XHJcblxyXG5cdFx0XHQ8Q29udGFpbmVyIGZsdWlkPlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXs5fT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXszfSBzdHlsZT17e3BhZGRpbmc6XCIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdHtpc2xvZ2luZWQgPyA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE4cmVtJywgbWFyZ2luVG9wOiBcIjEwcHhcIiwgcG9zaXRpb246IFwiZml4ZWRcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPVwiL2NhdC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuVGl0bGU+7IKs7Jqp7J6Q7J2066aEPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOyekOq4sOyGjOqwnFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD4gOlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCIvY2F0LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UaXRsZT7roZzqt7jsnbjsnYQg7ZW07KO87IS47JqUPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==