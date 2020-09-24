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

/***/ }),

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
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["InfoAction"])(JSON.parse(sessionStorage.getItem('userid')))); //변하고 바로 보이지 않는다.
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
  }, "\uAE08\uC624\uACF5\uB300 \uD558\uB298")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: "sm",
    className: "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 12
    }
  }), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 12
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA91 \uD83D\uDC4D1 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA92 \uD83D\uDC4D2 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA93 \uD83D\uDC4D3 \uC791\uC131\uC790: \uC544\uBB34\uAC1C"))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILRUE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILRUE, USER_REQUEST, USER_SUCCESS, USER_FAILRUE, LOG_OUT, logInAction, SignupAction, InfoAction, logOutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILRUE", function() { return LOG_IN_FAILRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_REQUEST", function() { return SIGNUP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_SUCCESS", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_FAILRUE", function() { return SIGNUP_FAILRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REQUEST", function() { return USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SUCCESS", function() { return USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_FAILRUE", function() { return USER_FAILRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInAction", function() { return logInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAction", function() { return SignupAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoAction", function() { return InfoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutAction", function() { return logOutAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  user: {
    id: '',
    //primary key
    email: '',
    password: '',
    stdnum: 0,
    major: '',
    nickname: ''
  },
  fetchinUpdate: false,
  //로그인 중 상태확인
  isLoggedIn: false
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILRUE = 'LOG_IN_FAILRUE';
var SIGNUP_REQUEST = 'SIGNUP_REQUEST';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILRUE = 'SIGNUP_FAILRUE';
var USER_REQUEST = 'USER_REQUEST';
var USER_SUCCESS = 'USER_SUCCESS';
var USER_FAILRUE = 'USER_FAILRUE';
var LOG_OUT = 'LOG_OUT';
var logInAction = function logInAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var SignupAction = function SignupAction(data) {
  return {
    type: SIGNUP_REQUEST,
    data: data
  };
};
_c = SignupAction;
var InfoAction = function InfoAction(data) {
  return {
    type: USER_REQUEST,
    data: data
  };
};
_c2 = InfoAction;
var logOutAction = function logOutAction() {
  return {
    type: LOG_OUT,
    user: null
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: true,
        isLoggedIn: false
      });

    case LOG_IN_SUCCESS:
      sessionStorage.setItem('islogined', true);
      sessionStorage.setItem('userid', action.data);
      alert('login_success');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
      return _objectSpread(_objectSpread({}, state), {}, {
        user: {
          id: action.data
        },
        fetchinUpdate: false,
        isLoggedIn: true
      });

    case LOG_IN_FAILRUE:
      alert('login_fail');
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false,
        isLoggedIn: false
      });

    case SIGNUP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: true
      });

    case SIGNUP_SUCCESS:
      alert('signup_success');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false
      });

    case SIGNUP_FAILRUE:
      alert('signup_fail');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signup");
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false
      });

    case USER_REQUEST:
      console.log('user_info_r');
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: true
      });

    case USER_SUCCESS:
      console.log('user_info_s');
      console.log(action.data);
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.data,
        fetchinUpdate: false,
        isLoggedIn: false
      });

    case USER_FAILRUE:
      console.log('user_info_fail');
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false
      });

    case LOG_OUT:
      sessionStorage.setItem('islogined', false);
      sessionStorage.removeItem('userid');
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2;

$RefreshReg$(_c, "SignupAction");
$RefreshReg$(_c2, "InfoAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBSYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNsb2dpbmVkIiwic2V0TG9naW4iLCJMb2dvdXQiLCJsb2dPdXRBY3Rpb24iLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VFZmZlY3QiLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsIkhvbWUiLCJsb2dpbiIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiSW5mb0FjdGlvbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIkNhcmQiLCJIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJpZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGRudW0iLCJtYWpvciIsIm5pY2tuYW1lIiwiZmV0Y2hpblVwZGF0ZSIsImlzTG9nZ2VkSW4iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxSVUUiLCJTSUdOVVBfUkVRVUVTVCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxSVUUiLCJVU0VSX1JFUVVFU1QiLCJVU0VSX1NVQ0NFU1MiLCJVU0VSX0ZBSUxSVUUiLCJMT0dfT1VUIiwibG9nSW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsIlNpZ251cEFjdGlvbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJzZXRJdGVtIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsaUVBQU0sQ0FBQ0Msc0RBQUQsQ0FBVCxtQkFBbEI7S0FBTUYsWTs7QUFJTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURtQyxrQkFFTEMsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUU1QkMsU0FGNEI7QUFBQSxNQUVqQkMsUUFGaUI7O0FBS25DLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEJMLFlBQVEsQ0FBQ00sbUVBQVksRUFBYixDQUFSO0FBQ0FGLFlBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixXQUF2QixDQUFYLENBQUQsQ0FBUjtBQUNBLEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmUCxZQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsV0FBdkIsQ0FBWCxDQUFELENBQVI7QUFDQSxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBS0EsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLFNBQUssRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWYsQ0FERCxFQUVDLE1BQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsT0FBWDtBQUFtQixXQUFPLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsc0RBQUQsQ0FBUSxLQUFSO0FBQWMsUUFBSSxFQUFDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQUVFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURELEVBRUMsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUZELEVBR0MsTUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxRQUFJLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhELENBRkYsRUFPRSxDQUFDUCxTQUFELEdBQWEsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHLE1BQUMsWUFBRDtBQUFjLFdBQU8sRUFBQyxpQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBSCxDQUFyQixDQUFiLEdBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHLE1BQUMsWUFBRDtBQUFjLFdBQU8sRUFBQyxpQkFBdEI7QUFBd0MsV0FBTyxFQUFJRSxNQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFILENBQXJCLENBUkgsQ0FGRCxFQWFDLE1BQUMseURBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRU4sUUFERixDQURELENBREQsRUFNQyxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxTQUFLLEVBQUU7QUFBQ2EsYUFBTyxFQUFDO0FBQVQsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFVCxTQUFTLEdBQUcsTUFBQyxvREFBRDtBQUFNLFNBQUssRUFBRTtBQUFFVSxXQUFLLEVBQUUsT0FBVDtBQUFrQkMsZUFBUyxFQUFFLE1BQTdCO0FBQXFDQyxjQUFRLEVBQUU7QUFBL0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1osTUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsT0FBRyxFQUFDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEWSxFQUVaLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURELEVBRUMsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FGRCxDQUZZLENBQUgsR0FTVixNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUVGLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxlQUFTLEVBQUUsTUFBN0I7QUFBcUNDLGNBQVEsRUFBRTtBQUEvQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sR0FBTjtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixPQUFHLEVBQUMsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBREQsQ0FGRCxDQVZELENBREQsQ0FORCxFQTBCQyxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQkQsQ0FERCxDQWJELENBREQ7QUErQ0EsQ0E5REQ7O0dBQU1qQixTO1VBQ1lHLHVEOzs7TUFEWkgsUztBQWdFU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTWtCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUs7QUFBQTs7QUFDakIsTUFBTWhCLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLGtCQUVRQyxzREFBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVWZSxLQUZVO0FBQUEsTUFFSmIsUUFGSTs7QUFHakIsTUFBTWMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFFQSxLQUFLLENBQUNGLElBQU4sQ0FBV0EsSUFBYjtBQUFBLEdBQU4sQ0FBeEI7QUFDQVAseURBQVMsQ0FBQyxZQUFNO0FBQ2ZYLFlBQVEsQ0FBQ3FCLGlFQUFVLENBQUNkLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsUUFBdkIsQ0FBWCxDQUFELENBQVgsQ0FBUixDQURlLENBQ3FEO0FBQ3BFLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQyxTQUNBLG1FQUNDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVFLE1BQUMseURBQUQ7QUFBVyxvQkFBZ0IsRUFBQyxHQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnRUFBRDtBQUNDLFNBQUssRUFBRTtBQUNORyxXQUFLLEVBQUUsT0FERDtBQUVOQyxlQUFTLEVBQUUsTUFGTDtBQUdOUSxZQUFNLEVBQUUsTUFIRjtBQUlOQyxrQkFBWSxFQUFFO0FBSlIsS0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0EsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsT0FBRyxFQUFDLFFBQW5DO0FBQTRDLE9BQUcsRUFBQyxhQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLGdFQUFELENBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUdBRkQsQ0FGRCxDQVRBLEVBaUJBLE1BQUMsZ0VBQUQsQ0FBVSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQStCLE9BQUcsRUFBQyxRQUFuQztBQUE0QyxPQUFHLEVBQUMsYUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUMsTUFBQyxnRUFBRCxDQUFVLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUVBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZELENBRkQsQ0FqQkEsRUF5QkEsTUFBQyxnRUFBRCxDQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsT0FBRyxFQUFDLFFBQW5DO0FBQTRDLE9BQUcsRUFBQyxhQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLGdFQUFELENBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBRkQsQ0FGRCxDQXpCQSxFQWlDQSxNQUFDLGdFQUFELENBQVUsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixPQUFHLEVBQUMsUUFBbkM7QUFBNEMsT0FBRyxFQUFDLGFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsZ0VBQUQsQ0FBVSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURELENBRkQsQ0FqQ0EsQ0FERCxFQTBDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFELENBQVcsTUFBWDtBQUFrQixNQUFFLEVBQUVDLG9EQUFJLENBQUNDLE1BQTNCO0FBQW1DLFlBQVEsRUFBQyxHQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURELEVBS0MsTUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0IsWUFBUSxFQUFDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxREFBRDtBQUFPLGNBQVUsRUFBQyxJQUFsQjtBQUF3QixhQUFTLEVBQUMsbUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBREQsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQURELENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnRkFERCxDQVBGLENBSEQsQ0FERCxDQURELENBTEQsQ0ExQ0YsRUFvRUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5REFBRCxDQUFXLE1BQVg7QUFBa0IsTUFBRSxFQUFFRCxvREFBSSxDQUFDQyxNQUEzQjtBQUFtQyxZQUFRLEVBQUMsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERCxDQXBFRixDQUZGLENBREQsQ0FEQTtBQWtGRCxDQTFGRDs7R0FBTVQsSTtVQUNZZix1RCxFQUVKa0IsdUQ7OztLQUhSSCxJO0FBNEZTQSxtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDTyxJQUFNVSxZQUFZLEdBQUc7QUFDMUJSLE1BQUksRUFBQztBQUNIUyxNQUFFLEVBQUUsRUFERDtBQUNLO0FBQ1JDLFNBQUssRUFBRSxFQUZKO0FBR0hDLFlBQVEsRUFBRSxFQUhQO0FBSUhDLFVBQU0sRUFBRSxDQUpMO0FBS0hDLFNBQUssRUFBRyxFQUxMO0FBTUhDLFlBQVEsRUFBRTtBQU5QLEdBRHFCO0FBVzFCQyxlQUFhLEVBQUUsS0FYVztBQVdGO0FBQ3hCQyxZQUFVLEVBQUU7QUFaYyxDQUFyQjtBQWVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUdBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFoQjtBQUdBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUVuQyxTQUFPO0FBQ0xDLFFBQUksRUFBRVosY0FERDtBQUVMVyxRQUFJLEVBQUVBO0FBRkQsR0FBUDtBQUlELENBTk07QUFRQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixJQUFELEVBQVU7QUFFcEMsU0FBTztBQUNMQyxRQUFJLEVBQUVULGNBREQ7QUFFTFEsUUFBSSxFQUFFQTtBQUZELEdBQVA7QUFJRCxDQU5NO0tBQU1FLFk7QUFPTixJQUFNM0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3lCLElBQUQsRUFBVTtBQUNsQyxTQUFPO0FBQ0xDLFFBQUksRUFBRU4sWUFERDtBQUVMSyxRQUFJLEVBQUVBO0FBRkQsR0FBUDtBQUlELENBTE07TUFBTXpCLFU7QUFRTixJQUFNZixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLFNBQU87QUFDTHlDLFFBQUksRUFBRUgsT0FERDtBQUVMMUIsUUFBSSxFQUFFO0FBRkQsR0FBUDtBQUlELENBTE07O0FBT1AsSUFBTStCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQStCO0FBQUEsTUFBOUI3QixLQUE4Qix1RUFBeEJNLFlBQXdCO0FBQUEsTUFBVndCLE1BQVU7O0FBQzdDLFVBQU9BLE1BQU0sQ0FBQ0gsSUFBZDtBQUNJLFNBQUtaLGNBQUw7QUFFSSw2Q0FDT2YsS0FEUDtBQUVJYSxxQkFBYSxFQUFFLElBRm5CO0FBR0lDLGtCQUFVLEVBQUU7QUFIaEI7O0FBS0osU0FBS0UsY0FBTDtBQUNFM0Isb0JBQWMsQ0FBQzBDLE9BQWYsQ0FBdUIsV0FBdkIsRUFBb0MsSUFBcEM7QUFDQTFDLG9CQUFjLENBQUMwQyxPQUFmLENBQXVCLFFBQXZCLEVBQWlDRCxNQUFNLENBQUNKLElBQXhDO0FBQ0FNLFdBQUssQ0FBQyxlQUFELENBQUw7QUFDQUMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQSw2Q0FDS2xDLEtBREw7QUFFRUYsWUFBSSxFQUFDO0FBQUNTLFlBQUUsRUFBR3VCLE1BQU0sQ0FBQ0o7QUFBYixTQUZQO0FBR0ViLHFCQUFhLEVBQUUsS0FIakI7QUFJRUMsa0JBQVUsRUFBRTtBQUpkOztBQU1GLFNBQUtHLGNBQUw7QUFDRWUsV0FBSyxDQUFDLFlBQUQsQ0FBTDtBQUNFLDZDQUNPaEMsS0FEUDtBQUVJYSxxQkFBYSxFQUFFLEtBRm5CO0FBR0lDLGtCQUFVLEVBQUU7QUFIaEI7O0FBS0osU0FBS0ksY0FBTDtBQUNFLDZDQUNLbEIsS0FETDtBQUVFYSxxQkFBYSxFQUFDO0FBRmhCOztBQUlGLFNBQUtNLGNBQUw7QUFDSWEsV0FBSyxDQUFDLGdCQUFELENBQUw7QUFDQUMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDQSw2Q0FDS2xDLEtBREw7QUFFRWEscUJBQWEsRUFBQztBQUZoQjs7QUFJSixTQUFLTyxjQUFMO0FBQ0VZLFdBQUssQ0FBQyxhQUFELENBQUw7QUFDQUMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDQSw2Q0FDS2xDLEtBREw7QUFFRWEscUJBQWEsRUFBQztBQUZoQjs7QUFJRixTQUFLUSxZQUFMO0FBQ0VjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQSw2Q0FDS3BDLEtBREw7QUFFRWEscUJBQWEsRUFBQztBQUZoQjs7QUFJRixTQUFLUyxZQUFMO0FBQ0VhLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlOLE1BQU0sQ0FBQ0osSUFBbkI7QUFDQSw2Q0FDSzFCLEtBREw7QUFFRUYsWUFBSSxFQUFDZ0MsTUFBTSxDQUFDSixJQUZkO0FBR0ViLHFCQUFhLEVBQUUsS0FIakI7QUFJRUMsa0JBQVUsRUFBQztBQUpiOztBQU1GLFNBQUtTLFlBQUw7QUFDRVksYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQSw2Q0FDS3BDLEtBREw7QUFFRWEscUJBQWEsRUFBQztBQUZoQjs7QUFJRixTQUFLVyxPQUFMO0FBQ0VuQyxvQkFBYyxDQUFDMEMsT0FBZixDQUF1QixXQUF2QixFQUFvQyxLQUFwQztBQUNBMUMsb0JBQWMsQ0FBQ2dELFVBQWYsQ0FBMEIsUUFBMUI7QUFDQSw2Q0FDT3JDLEtBRFA7QUFFSWMsa0JBQVUsRUFBRTtBQUZoQjs7QUFJRjtBQUNJLGFBQU9kLEtBQVA7QUExRVI7QUE0RUQsQ0E3RUQ7O0FBK0VlNkIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjIxZmI4ZjUxN2RjYWY1ZGFiYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgRm9ybSwgQnV0dG9uLCBGb3JtQ29udHJvbCwgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbi8vaW1wb3J0IHsgc2V0VGVzdCB9IGZyb20gJy4uL3JlZHVjZXJzL3Rlc3QnXHJcbmltcG9ydCB7IGxvZ091dEFjdGlvbiwgSW5mb0FjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCBbaXNsb2dpbmVkLCBzZXRMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHRjb25zdCBMb2dvdXQgPSAoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChsb2dPdXRBY3Rpb24oKSk7XHJcblx0XHRzZXRMb2dpbihKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lzbG9naW5lZCcpKSk7XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0TG9naW4oSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdpc2xvZ2luZWQnKSkpO1xyXG5cdH0sIFtdKTtcclxuXHRcclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj48aW1nIHNyYz1cIi9iYW5uZXIuanBnXCIgd2lkdGg9XCIxMDAlXCIvPjwvTGluaz5cclxuXHRcdFx0PE5hdmJhciBiZz1cImxpZ2h0XCIgdmFyaWFudD1cImxpZ2h0XCI+XHJcblx0XHRcdFx0PE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPu2ZiDwvTmF2YmFyLkJyYW5kPlxyXG5cdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL0ZyZWVCb2FyZFwiPuyekOycoOqyjOyLnO2MkDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL1Jldmlld1wiPuqwleydmO2bhOq4sDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHRcdDxOYXYuTGluayBocmVmPVwiL1RpbWVUYWJsZVwiPuyLnOqwhO2RnDwvTmF2Lkxpbms+XHJcblx0XHRcdFx0XHQ8L05hdj5cclxuXHRcdFx0XHR7IWlzbG9naW5lZCA/IDxMaW5rIGhyZWY9XCIuL2xvZ2luXCI+PGE+PFN0eWxlZEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCI+66Gc6re47J24PC9TdHlsZWRCdXR0b24+PC9hPjwvTGluaz5cclxuXHRcdFx0XHQ6IDxMaW5rIGhyZWY9XCIuL2xvZ2luXCI+PGE+PFN0eWxlZEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgb25DbGljayA9IHtMb2dvdXR9PuuhnOq3uOyVhOybgzwvU3R5bGVkQnV0dG9uPjwvYT48L0xpbms+fVxyXG5cdFx0XHQ8L05hdmJhcj5cclxuXHJcblx0XHRcdDxDb250YWluZXIgZmx1aWQ+XHJcblx0XHRcdFx0PFJvdz5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezl9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2wgeHM9ezN9IHN0eWxlPXt7cGFkZGluZzpcIjBweFwifX0+XHJcblx0XHRcdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHRcdFx0e2lzbG9naW5lZCA/IDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCIvY2F0LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UaXRsZT7sgqzsmqnsnpDsnbTrpoQ8L0NhcmQuVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLlRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx07J6Q6riw7IaM6rCcXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPiA6XHJcblx0XHRcdFx0XHRcdFx0PENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxOHJlbScsIG1hcmdpblRvcDogXCIxMHB4XCIsIHBvc2l0aW9uOiBcImZpeGVkXCIgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIHNyYz1cIi9jYXQucG5nXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxDYXJkLlRpdGxlPuuhnOq3uOyduOydhCDtlbTso7zshLjsmpQ8L0NhcmQuVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdFx0PENvbD5cclxuXHRcdFx0XHRcdDwvQ29sPlxyXG5cdFx0XHRcdDwvUm93PlxyXG5cdFx0XHQ8L0NvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwUmF5b3V0JztcclxuaW1wb3J0IHsgQ2FyZCwgVGFicywgVGFibGUsIFRhYiwgQnV0dG9uLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBJbmZvQWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+e1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHRjb25zdCBbbG9naW4sc2V0TG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZT0+c3RhdGUudXNlci51c2VyKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goSW5mb0FjdGlvbihKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJpZCcpKSkpOyAvL+uzgO2VmOqzoCDrsJTroZwg67O07J207KeAIOyViuuKlOuLpC5cclxuXHR9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QXBwTGF5b3V0PlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PVwiMFwiPlxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICc5MDBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnNDBweCcsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9XCIvMS5qcGdcIiBhbHQ9XCJGaXJzdCBzbGlkZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDM+7Jik66aE7J20PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPuyYpOumhDHrj5nsl5Ag7IK06rOgIOyeiOuKlCDqs6DslpHsnbQg7Jik66aE7J20PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9XCIvMi5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDM+6riI7Jik6rO16rO864yA7ZWZ6rWQIOyatOuPmeyepTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5CeSDsl7DshJw8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgc3JjPVwiLzMuanBnXCIgYWx0PVwiVGhpcmQgc2xpZGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzPuuqqOy5tDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD7snpDqs6Ag7J6I64qUIOuqqOy5tDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz1cIi80LmpwZ1wiIGFsdD1cIlRoaXJkIHNsaWRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMz7quIjsmKTqs7XrjIAg7ZWY64qYPC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWw+XHJcblx0XHRcdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTsnpDsnKDqsozsi5ztjJBcclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZSByZXNwb25zaXZlPVwic21cIiAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPuq4gOygnOuqqTEg8J+RjTEg7J6R7ISx7J6QOiDslYTrrLTqsJw8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPuq4gOygnOuqqTIg8J+RjTIg7J6R7ISx7J6QOiDslYTrrLTqsJw8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPuq4gOygnOuqqTMg8J+RjTMg7J6R7ISx7J6QOiDslYTrrLTqsJw8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Q2FyZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdOqwleydmO2bhOq4sFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9BY2NvcmRpb24uVG9nZ2xlPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHRcdDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgXHJcblx0XHRcdDwvQXBwTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOntcclxuICAgIGlkOiAnJywgLy9wcmltYXJ5IGtleVxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgc3RkbnVtOiAwLFxyXG4gICAgbWFqb3I6ICAnJyxcclxuICAgIG5pY2tuYW1lOiAnJyxcclxuICB9LFxyXG5cclxuXHJcbiAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsICAgLy/roZzqt7jsnbgg7KSRIOyDge2DnO2ZleyduFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMUlVFID0gJ0xPR19JTl9GQUlMUlVFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX0ZBSUxSVUUgPSAnU0lHTlVQX0ZBSUxSVUUnXHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9SRVFVRVNUID0gJ1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVTRVJfU1VDQ0VTUyA9ICdVU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVU0VSX0ZBSUxSVUUgPSAnVVNFUl9GQUlMUlVFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbnVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgSW5mb0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VULFxyXG4gICAgdXNlcjogbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzbG9naW5lZCcsIHRydWUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJpZCcsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhbGVydCgnbG9naW5fc3VjY2VzcycpXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6e2lkIDogYWN0aW9uLmRhdGF9LFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFJVRTpcclxuICAgICAgICBhbGVydCgnbG9naW5fZmFpbCcpXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgICAgIGFsZXJ0KCdzaWdudXBfc3VjY2VzcycpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgZmV0Y2hpblVwZGF0ZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX0ZBSUxSVUU6XHJcbiAgICAgICAgYWxlcnQoJ3NpZ251cF9mYWlsJylcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9zaWdudXBcIilcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6ZmFsc2UsXHJcbiAgICAgICAgIH1cclxuICAgICAgY2FzZSBVU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJfaW5mb19yJylcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyX2luZm9fcycpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjphY3Rpb24uZGF0YSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgVVNFUl9GQUlMUlVFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyX2luZm9fZmFpbCcpXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUOlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzbG9naW5lZCcsIGZhbHNlKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyaWQnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlIDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9