webpackHotUpdate_N_E("pages/_app",{

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

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signup),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(info),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignup),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchInfo),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://localhost:7000";

function logInAPI(body) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/user/login', body); //다른 리소스 간에 자원공유, course orgin
}

function signupAPI(body) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/user/join', body);
}

function infoAPI(body) {
  console.log(body);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/user/id', {
    params: {
      id: body
    }
  });
}

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILRUE"],
            data: null
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function signup(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signupAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_SUCCESS"],
            data: null
          });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_FAILRUE"],
            error: null
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 8]]);
}

function info(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function info$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(action.data);
          _context3.prev = 1;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(infoAPI, action.data);

        case 4:
          result = _context3.sent;
          console.log(result.data);
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["USER_SUCCESS"],
            data: result.data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["USER_FAILRUE"],
            data: null
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 10]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchSignup() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignup$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_REQUEST"], signup);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchInfo() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchInfo$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["USER_REQUEST"], info);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignup), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchInfo)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RkbnVtIiwibWFqb3IiLCJuaWNrbmFtZSIsImZldGNoaW5VcGRhdGUiLCJpc0xvZ2dlZEluIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMUlVFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMUlVFIiwiVVNFUl9SRVFVRVNUIiwiVVNFUl9TVUNDRVNTIiwiVVNFUl9GQUlMUlVFIiwiTE9HX09VVCIsImxvZ0luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJTaWdudXBBY3Rpb24iLCJJbmZvQWN0aW9uIiwibG9nT3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJsb2dJbiIsInNpZ251cCIsImluZm8iLCJ3YXRjaExvZ0luIiwid2F0Y2hTaWdudXAiLCJ3YXRjaEluZm8iLCJ1c2VyU2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9nSW5BUEkiLCJib2R5IiwicG9zdCIsInNpZ251cEFQSSIsImluZm9BUEkiLCJnZXQiLCJwYXJhbXMiLCJjYWxsIiwicmVzdWx0IiwicHV0IiwiZXJyb3IiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsTUFBSSxFQUFDO0FBQ0hDLE1BQUUsRUFBRSxFQUREO0FBQ0s7QUFDUkMsU0FBSyxFQUFFLEVBRko7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QUFBQTtBQUFBOztBQUdBLFNBQVVJLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU1nQixxRUFBVSxDQUFDMUMsMkRBQUQsRUFBZXVCLElBQWYsQ0FBaEI7O0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUksUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZCxpQkFBTWdCLDhEQUFHLENBQUMsQ0FDVEMsK0RBQUksQ0FBQ3BCLFVBQUQsQ0FESyxFQUVUb0IsK0RBQUksQ0FBQ25CLFdBQUQsQ0FGSyxFQUdUbUIsK0RBQUksQ0FBQ2xCLFNBQUQsQ0FISyxDQUFELENBQVQ7O0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMjFmYjhmNTE3ZGNhZjVkYWJjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOntcclxuICAgIGlkOiAnJywgLy9wcmltYXJ5IGtleVxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgc3RkbnVtOiAwLFxyXG4gICAgbWFqb3I6ICAnJyxcclxuICAgIG5pY2tuYW1lOiAnJyxcclxuICB9LFxyXG5cclxuXHJcbiAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsICAgLy/roZzqt7jsnbgg7KSRIOyDge2DnO2ZleyduFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMUlVFID0gJ0xPR19JTl9GQUlMUlVFJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfUkVRVUVTVCA9ICdTSUdOVVBfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVUNDRVNTID0gJ1NJR05VUF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX0ZBSUxSVUUgPSAnU0lHTlVQX0ZBSUxSVUUnXHJcblxyXG5leHBvcnQgY29uc3QgVVNFUl9SRVFVRVNUID0gJ1VTRVJfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFVTRVJfU1VDQ0VTUyA9ICdVU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVU0VSX0ZBSUxSVUUgPSAnVVNFUl9GQUlMUlVFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVQgPSAnTE9HX09VVCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nSW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbnVwQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFNJR05VUF9SRVFVRVNULFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgSW5mb0FjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFVTRVJfUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nT3V0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VULFxyXG4gICAgdXNlcjogbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzbG9naW5lZCcsIHRydWUpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJpZCcsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBhbGVydCgnbG9naW5fc3VjY2VzcycpXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICAgICAgcmV0dXJuIHsgXHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6e2lkIDogYWN0aW9uLmRhdGF9LFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFJVRTpcclxuICAgICAgICBhbGVydCgnbG9naW5fZmFpbCcpXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOVVBfU1VDQ0VTUzpcclxuICAgICAgICAgIGFsZXJ0KCdzaWdudXBfc3VjY2VzcycpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgZmV0Y2hpblVwZGF0ZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX0ZBSUxSVUU6XHJcbiAgICAgICAgYWxlcnQoJ3NpZ251cF9mYWlsJylcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9zaWdudXBcIilcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6ZmFsc2UsXHJcbiAgICAgICAgIH1cclxuICAgICAgY2FzZSBVU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJfaW5mb19yJylcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyX2luZm9fcycpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdXNlcjphY3Rpb24uZGF0YSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgVVNFUl9GQUlMUlVFOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyX2luZm9fZmFpbCcpXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOmZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfT1VUOlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzbG9naW5lZCcsIGZhbHNlKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyaWQnKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlIDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHtcclxuXHRMT0dfSU5fRkFJTFJVRSwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9SRVFVRVNULCBcclxuXHRTSUdOVVBfUkVRVUVTVCxTSUdOVVBfRkFJTFJVRSwgU0lHTlVQX1NVQ0NFU1MsXHJcblx0VVNFUl9TVUNDRVNTLFVTRVJfRkFJTFJVRSxVU0VSX1JFUVVFU1RcclxuXHR9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDo3MDAwXCJcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGJvZHkpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgYm9keSkgLy/ri6Trpbgg66as7IaM7IqkIOqwhOyXkCDsnpDsm5Dqs7XsnKAsIGNvdXJzZSBvcmdpblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBUEkoYm9keSl7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci9qb2luJywgYm9keSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mb0FQSShib2R5KXtcclxuXHRjb25zb2xlLmxvZyhib2R5KTtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3VzZXIvaWQnLHtwYXJhbXM6e2lkOmJvZHl9fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTpyZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOkxPR19JTl9GQUlMUlVFLFxyXG5cdFx0XHRkYXRhOm51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTlVQX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IG51bGxcclxuXHRcdH0pXHRcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTlVQX0ZBSUxSVUUsXHJcblx0XHRcdGVycm9yOiBudWxsLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIGluZm8oYWN0aW9uKSB7XHJcblx0Y29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6VVNFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOnJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6VVNFUl9GQUlMUlVFLFxyXG5cdFx0XHRkYXRhOm51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCl7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEluZm8oKXtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVTRVJfUkVRVUVTVCwgaW5mbylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ251cCksXHJcblx0XHRmb3JrKHdhdGNoSW5mbyksXHJcblx0XSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=