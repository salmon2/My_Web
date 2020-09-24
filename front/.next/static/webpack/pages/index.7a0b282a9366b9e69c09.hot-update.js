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
    return state.user.fetchinUpdate;
  });

  var Logout = function Logout() {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["logOutAction"])());
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
    setTimeout(function () {
      dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["InfoAction"])(JSON.parse(sessionStorage.getItem('userid'))));
      console.log(user);
    }, 1000);
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/banner.jpg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    bg: "light",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\uD648"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/FreeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/Review",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "\uAC15\uC758\uD6C4\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/TimeTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "\uC2DC\uAC04\uD45C")), !islogined ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 40
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 43
    }
  }, "\uB85C\uADF8\uC778"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 28
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    onClick: Logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 31
    }
  }, "\uB85C\uADF8\uC544\uC6C3")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 57,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }, "\uC0AC\uC6A9\uC790\uC774\uB984"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 68,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 10
    }
  }, "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBSYXlvdXQuanMiXSwibmFtZXMiOlsiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiQnV0dG9uIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJpc2xvZ2luZWQiLCJzZXRMb2dpbiIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZmV0Y2hpblVwZGF0ZSIsIkxvZ291dCIsImxvZ091dEFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJJbmZvQWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJ3aWR0aCIsIm1hcmdpblRvcCIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGlFQUFNLENBQUNDLHNEQUFELENBQVQsbUJBQWxCO0tBQU1GLFk7O0FBSU4sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEbUMsa0JBRUxDLHNEQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFFNUJDLFNBRjRCO0FBQUEsTUFFakJDLFFBRmlCOztBQUduQyxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUVBLEtBQUssQ0FBQ0YsSUFBTixDQUFXRyxhQUFiO0FBQUEsR0FBTixDQUF4Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCVCxZQUFRLENBQUNVLG1FQUFZLEVBQWIsQ0FBUjtBQUNB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QyxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFERCxDQUZELENBVkQsQ0FERCxDQU5ELEVBMEJDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFCRCxDQURELENBYkQsQ0FERDtBQStDQSxDQW5FRDs7R0FBTXpCLFM7VUFDWUcsdUQsRUFFSkssdUQ7OztNQUhSUixTO0FBcUVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YTBiMjgyYTkzNjZiOWU2OWMwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBGb3JtLCBCdXR0b24sIEZvcm1Db250cm9sLCBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuLy9pbXBvcnQgeyBzZXRUZXN0IH0gZnJvbSAnLi4vcmVkdWNlcnMvdGVzdCdcclxuaW1wb3J0IHsgbG9nT3V0QWN0aW9uLCBJbmZvQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IFtpc2xvZ2luZWQsIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXIuZmV0Y2hpblVwZGF0ZSk7XHJcblxyXG5cdGNvbnN0IExvZ291dCA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGxvZ091dEFjdGlvbigpKTtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGRpc3BhdGNoKEluZm9BY3Rpb24oSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyaWQnKSkpKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH0sIFtdKTtcclxuXHRcclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj48aW1nIHNyYz1cIi9iYW5uZXIuanBnXCIgd2lkdGg9XCIxMDAlXCIvPjwvTGluaz5cclxuXHRcdFx0PE5hdmJhciBiZz1cImxpZ2h0XCIgdmFyaWFudD1cImxpZ2h0XCI+XHJcblx0XHRcdFx0PE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPu2ZiDwvTmF2YmFyLkJyYW5kPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL0ZyZWVCb2FyZFwiPuyekOycoOqyjOyLnO2MkDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL1Jldmlld1wiPuqwleydmO2bhOq4sDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL1RpbWVUYWJsZVwiPuyLnOqwhO2RnDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHR7IWlzbG9naW5lZCA/IDxMaW5rIGhyZWY9XCIuL2xvZ2luXCI+PGE+PFN0eWxlZEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCI+66Gc6re47J24PC9TdHlsZWRCdXR0b24+PC9hPjwvTGluaz5cclxuXHRcdFx0XHQ6IDxMaW5rIGhyZWY9XCIuL2xvZ2luXCI+PGE+PFN0eWxlZEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgb25DbGljayA9IHtMb2dvdXR9PuuhnOq3uOyVhOybgzwvU3R5bGVkQnV0dG9uPjwvYT48L0xpbms+fVxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHJcblx0XHRcdDxDb250YWluZXIgZmx1aWQ+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezN9IHN0eWxlPXt7cGFkZGluZzpcIjBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0e2lzbG9naW5lZCA/IDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCIvY2F0LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UaXRsZT7sgqzsmqnsnpDsnbTrpoQ8L0NhcmQuVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLlRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx07J6Q6riw7IaM6rCcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPiA6XHJcblx0XHRcdFx0XHRcdFx0PENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScsIG1hcmdpblRvcDogXCIxMHB4XCIsIHBvc2l0aW9uOiBcImZpeGVkXCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cIi9jYXQucG5nXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLlRpdGxlPuuhnOq3uOyduOydhCDtlbTso7zshLjsmpQ8L0NhcmQuVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9