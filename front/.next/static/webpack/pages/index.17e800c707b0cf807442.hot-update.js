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
    console.log('login_localStorage   ' + JSON.parse(sessionStorage.getItem('islogined')));
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/banner.jpg",
    width: "100%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
    bg: "light",
    variant: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\uD648"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/FreeBoard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/Review",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "\uAC15\uC758\uD6C4\uAE30"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"].Link, {
    href: "/TimeTable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "\uC2DC\uAC04\uD45C")), !islogined ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 40
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 43
    }
  }, "\uB85C\uADF8\uC778"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "./login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 28
    }
  }, __jsx(StyledButton, {
    variant: "outline-primary",
    onClick: Logout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, "\uB85C\uADF8\uC544\uC6C3")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 9,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 6
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 10
    }
  }, "\uC0AC\uC6A9\uC790\uC774\uB984"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 65,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Img, {
    variant: "top",
    src: "/cat.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 10
    }
  }, "\uB85C\uADF8\uC778\uC744 \uD574\uC8FC\uC138\uC694"))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
var _this = undefined,
    _jsxFileName = "D:\\project\\My_Web\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      login = _useState[0],
      setLogin = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('hi');
    setLogin(JSON.parse(sessionStorage.getItem('islogined')));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_AppRayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    login: login,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    defaultActiveKey: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/1.jpg",
    alt: "First slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "\uC624\uB984\uC774"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "\uC624\uB9841\uB3D9\uC5D0 \uC0B4\uACE0 \uC788\uB294 \uACE0\uC591\uC774 \uC624\uB984\uC774"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/2.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "\uAE08\uC624\uACF5\uACFC\uB300\uD559\uAD50 \uC6B4\uB3D9\uC7A5"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "By \uC5F0\uC11C"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/3.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "\uBAA8\uCE74"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "\uC790\uACE0 \uC788\uB294 \uBAA8\uCE74"))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: "d-block w-100",
    src: "/4.jpg",
    alt: "Third slide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"].Caption, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "\uAE08\uC624\uACF5\uB300 \uD558\uB298")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "\uC790\uC720\uAC8C\uC2DC\uD310"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
    eventKey: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 10
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    responsive: "sm",
    className: "table table-hover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 12
    }
  }), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA91 \uD83D\uDC4D1 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 14
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\uAE00\uC81C\uBAA92 \uD83D\uDC4D2 \uC791\uC131\uC790: \uC544\uBB34\uAC1C")), __jsx("tr", {
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
  }, "\uAE00\uC81C\uBAA93 \uD83D\uDC4D3 \uC791\uC131\uC790: \uC544\uBB34\uAC1C"))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 8
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
    eventKey: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "\uAC15\uC758\uD6C4\uAE30")))));
};

_s(Home, "Zhukwcyzjn50eejO5WTSI05p3NY=");

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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILRUE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILRUE, LOG_OUT, logInAction, SignupAction, logOutAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInAction", function() { return logInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupAction", function() { return SignupAction; });
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
var LOG_OUT = 'LOG_OUT';
var logInAction = function logInAction(data) {
  //console.log('logInAction');
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var SignupAction = function SignupAction(data) {
  console.log('SignupAction');
  console.log(data);
  return {
    type: SIGNUP_REQUEST,
    data: data
  };
};
_c = SignupAction;
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
      //console.log('login_request')
      //console.log('login' + JSON.stringify(action.data));
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: true,
        isLoggedIn: false
      });

    case LOG_IN_SUCCESS:
      sessionStorage.setItem('islogined', true);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.data,
        fetchinUpdate: false,
        isLoggedIn: true
      });

    case LOG_IN_FAILRUE:
      console.log('fail');
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false,
        isLoggedIn: false
      });

    case SIGNUP_REQUEST:
      console.log('signup_request');
      console.log('signup_' + JSON.stringify(action.data));
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: true
      });

    case SIGNUP_SUCCESS:
      console.log('signup_success');
      console.log('signup_' + JSON.stringify(action.data));
      alert('signup_success');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false
      });

    case SIGNUP_FAILRUE:
      console.log('signup_fail');
      console.log('signup_' + JSON.stringify(action.data));
      alert('signup_fail');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signup");
      return _objectSpread(_objectSpread({}, state), {}, {
        fetchinUpdate: false
      });

    case LOG_OUT:
      sessionStorage.setItem('islogined', false);
      sessionStorage.removeItem('user');
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c;

$RefreshReg$(_c, "SignupAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBSYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy91c2VyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsIkJ1dHRvbiIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiaXNsb2dpbmVkIiwic2V0TG9naW4iLCJ1c2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIkxvZ291dCIsImxvZ091dEFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJwYWRkaW5nIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsIkhvbWUiLCJsb2dpbiIsIm1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsIkNhcmQiLCJIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJpZCIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGRudW0iLCJtYWpvciIsIm5pY2tuYW1lIiwiZmV0Y2hpblVwZGF0ZSIsImlzTG9nZ2VkSW4iLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxSVUUiLCJTSUdOVVBfUkVRVUVTVCIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxSVUUiLCJMT0dfT1VUIiwibG9nSW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsIlNpZ251cEFjdGlvbiIsInJlZHVjZXIiLCJhY3Rpb24iLCJzZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsInN0cmluZ2lmeSIsImFsZXJ0IiwicmVtb3ZlSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0FB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TixJQUFJLENBQUMwQyxTQUFMLENBQWVKLE1BQU0sQ0FBQ0osSUFBdEIsQ0FBeEI7QUFDQVMsV0FBSyxDQUFDLGdCQUFELENBQUw7QUFDQUgsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDQSw2Q0FDSzVDLEtBREw7QUFFRTJCLHFCQUFhLEVBQUM7QUFGaEI7O0FBSUosU0FBS08sY0FBTDtBQUNFMUIsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZTixJQUFJLENBQUMwQyxTQUFMLENBQWVKLE1BQU0sQ0FBQ0osSUFBdEIsQ0FBeEI7QUFDQVMsV0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBSCx3REFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUNBLDZDQUNLNUMsS0FETDtBQUVFMkIscUJBQWEsRUFBQztBQUZoQjs7QUFNRixTQUFLUSxPQUFMO0FBQ0U5QixvQkFBYyxDQUFDcUMsT0FBZixDQUF1QixXQUF2QixFQUFvQyxLQUFwQztBQUNBckMsb0JBQWMsQ0FBQzBDLFVBQWYsQ0FBMEIsTUFBMUI7QUFDQSw2Q0FDTy9DLEtBRFA7QUFFSTRCLGtCQUFVLEVBQUU7QUFGaEI7O0FBSUY7QUFDSSxhQUFPNUIsS0FBUDtBQTVEUjtBQThERCxDQS9ERDs7QUFpRWV3QyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xN2U4MDBjNzA3YjBjZjgwNzQ0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBGb3JtLCBCdXR0b24sIEZvcm1Db250cm9sLCBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuLy9pbXBvcnQgeyBzZXRUZXN0IH0gZnJvbSAnLi4vcmVkdWNlcnMvdGVzdCdcclxuaW1wb3J0IHsgbG9nT3V0QWN0aW9uIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdGNvbnN0IFtpc2xvZ2luZWQsIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGU9PnN0YXRlLnVzZXIudXNlcik7XHJcblxyXG5cdGNvbnN0IExvZ291dCA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGxvZ091dEFjdGlvbigpKTtcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKCdsb2dpbl9sb2NhbFN0b3JhZ2UgICAnKyBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2lzbG9naW5lZCcpKSlcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHR9LCBbXSk7XHJcblx0XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIvYmFubmVyLmpwZ1wiIHdpZHRoPVwiMTAwJVwiLz48L0xpbms+XHJcblx0XHRcdDxOYXZiYXIgYmc9XCJsaWdodFwiIHZhcmlhbnQ9XCJsaWdodFwiPlxyXG5cdFx0XHRcdDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj7tmYg8L05hdmJhci5CcmFuZD5cclxuXHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9GcmVlQm9hcmRcIj7snpDsnKDqsozsi5ztjJA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9SZXZpZXdcIj7qsJXsnZjtm4TquLA8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8TmF2LkxpbmsgaHJlZj1cIi9UaW1lVGFibGVcIj7si5zqsITtkZw8L05hdi5MaW5rPlxyXG5cdFx0XHRcdFx0PC9OYXY+XHJcblx0XHRcdFx0eyFpc2xvZ2luZWQgPyA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiPuuhnOq3uOyduDwvU3R5bGVkQnV0dG9uPjwvYT48L0xpbms+XHJcblx0XHRcdFx0OiA8TGluayBocmVmPVwiLi9sb2dpblwiPjxhPjxTdHlsZWRCdXR0b24gdmFyaWFudD1cIm91dGxpbmUtcHJpbWFyeVwiIG9uQ2xpY2sgPSB7TG9nb3V0fT7roZzqt7jslYTsm4M8L1N0eWxlZEJ1dHRvbj48L2E+PC9MaW5rPn1cclxuXHRcdFx0PC9OYXZiYXI+XHJcblxyXG5cdFx0XHQ8Q29udGFpbmVyIGZsdWlkPlxyXG5cdFx0XHRcdDxSb3c+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXs5fT5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Db2w+XHJcblx0XHRcdFx0XHQ8Q29sIHhzPXszfSBzdHlsZT17e3BhZGRpbmc6XCIwcHhcIn19PlxyXG5cdFx0XHRcdFx0XHQ8Um93PlxyXG5cdFx0XHRcdFx0XHRcdHtpc2xvZ2luZWQgPyA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzE4cmVtJywgbWFyZ2luVG9wOiBcIjEwcHhcIiwgcG9zaXRpb246IFwiZml4ZWRcIiB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPVwiL2NhdC5wbmdcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuVGl0bGU+7IKs7Jqp7J6Q7J2066aEPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdOyekOq4sOyGjOqwnFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQ2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD4gOlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nLCBtYXJnaW5Ub3A6IFwiMTBweFwiLCBwb3NpdGlvbjogXCJmaXhlZFwiIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcmQuSW1nIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9XCIvY2F0LnBuZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5Cb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2FyZC5UaXRsZT7roZzqt7jsnbjsnYQg7ZW07KO87IS47JqUPC9DYXJkLlRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkLkJvZHk+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0PC9Sb3c+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHRcdDxDb2w+XHJcblx0XHRcdFx0XHQ8L0NvbD5cclxuXHRcdFx0XHQ8L1Jvdz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBSYXlvdXQnO1xyXG5pbXBvcnQgeyBDYXJkLCBUYWJzLCBUYWJsZSwgVGFiLCBCdXR0b24sIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xyXG5jb25zdCBIb21lID0gKCkgPT57XHJcblx0Y29uc3QgW2xvZ2luLHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2hpJylcclxuXHRcdHNldExvZ2luKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnaXNsb2dpbmVkJykpKTtcclxuXHR9KTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QXBwTGF5b3V0IGxvZ2luID0ge2xvZ2lufT5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT1cIjBcIj5cclxuXHRcdFx0XHRcdFx0PENhcm91c2VsXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnOTAwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46ICdhdXRvJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzQwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgc3JjPVwiLzEuanBnXCIgYWx0PVwiRmlyc3Qgc2xpZGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzPuyYpOumhOydtDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD7smKTrpoQx64+Z7JeQIOyCtOqzoCDsnojripQg6rOg7JaR7J20IOyYpOumhOydtDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PENhcm91c2VsLkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgc3JjPVwiLzIuanBnXCIgYWx0PVwiVGhpcmQgc2xpZGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzPuq4iOyYpOqzteqzvOuMgO2Vmeq1kCDsmrTrj5nsnqU8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+Qnkg7Jew7IScPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbC5JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiIHNyYz1cIi8zLmpwZ1wiIGFsdD1cIlRoaXJkIHNsaWRlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMz7rqqjsubQ8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+7J6Q6rOgIOyeiOuKlCDrqqjsubQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWwuSXRlbT5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiBzcmM9XCIvNC5qcGdcIiBhbHQ9XCJUaGlyZCBzbGlkZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsLkNhcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDM+6riI7Jik6rO164yAIO2VmOuKmDwvaDM+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbC5DYXB0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsLkl0ZW0+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L0Nhcm91c2VsPlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT1cIjFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx07J6Q7Jyg6rKM7Iuc7YyQXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvbi5Ub2dnbGU+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT1cIjFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGUgcmVzcG9uc2l2ZT1cInNtXCIgIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkxIPCfkY0xIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkyIPCfkY0yIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD7quIDsoJzrqqkzIPCfkY0zIOyekeyEseyekDog7JWE66y06rCcPC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0NhcmQuQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2FyZD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PENhcmQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHTqsJXsnZjtm4TquLBcclxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uLlRvZ2dsZT5cclxuXHRcdFx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHQ8L0FjY29yZGlvbj5cclxuICAgICAgICAgIFxyXG5cdFx0XHQ8L0FwcExheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjp7XHJcbiAgICBpZDogJycsIC8vcHJpbWFyeSBrZXlcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHN0ZG51bTogMCxcclxuICAgIG1ham9yOiAgJycsXHJcbiAgICBuaWNrbmFtZTogJycsXHJcbiAgfSxcclxuXHJcblxyXG4gIGZldGNoaW5VcGRhdGU6IGZhbHNlLCAgIC8v66Gc6re47J24IOykkSDsg4Htg5ztmZXsnbhcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFJVRSA9ICdMT0dfSU5fRkFJTFJVRSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1JFUVVFU1QgPSAnU0lHTlVQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMUlVFID0gJ1NJR05VUF9GQUlMUlVFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2xvZ0luQWN0aW9uJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ251cEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1NpZ251cEFjdGlvbicpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOVVBfUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VULFxyXG4gICAgdXNlcjogbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2dpbl9yZXF1ZXN0JylcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdsb2dpbicgKyBKU09OLnN0cmluZ2lmeShhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICBmZXRjaGluVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpc2xvZ2luZWQnLCB0cnVlKTtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB1c2VyIDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOiBmYWxzZSxcclxuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlIExPR19JTl9GQUlMUlVFOlxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWwnKTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX1JFUVVFU1Q6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cF9yZXF1ZXN0JylcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lnbnVwXycgKyBKU09OLnN0cmluZ2lmeShhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXBfc3VjY2VzcycpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2lnbnVwXycgKyBKU09OLnN0cmluZ2lmeShhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgYWxlcnQoJ3NpZ251cF9zdWNjZXNzJylcclxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBmZXRjaGluVXBkYXRlOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOVVBfRkFJTFJVRTpcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lnbnVwX2ZhaWwnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXBfJyArIEpTT04uc3RyaW5naWZ5KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYWxlcnQoJ3NpZ251cF9mYWlsJylcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9zaWdudXBcIilcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6ZmFsc2UsXHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICBjYXNlIExPR19PVVQ6XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaXNsb2dpbmVkJywgZmFsc2UpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlIDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9