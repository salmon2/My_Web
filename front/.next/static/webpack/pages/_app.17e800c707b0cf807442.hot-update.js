webpackHotUpdate_N_E("pages/_app",{

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
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignup),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://localhost:7000";

function logInAPI(body) {
  console.log('login_api');
  console.log('body', body);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/user/login', body); //다른 리소스 간에 자원공유, course orgin
}

function signupAPI(body) {
  console.log('join_api');
  console.log('body', body);
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/user/join', body);
}

function logIn(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('login_saga');
          console.log('login data : ', action.data);
          _context.prev = 2;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(logInAPI, action.data);

        case 5:
          result = _context.sent;
          console.log(result.data);
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: null
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILRUE"],
            data: null
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 11]]);
}

function signup(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('signup_saga');
          console.log('action.data not json: ', action.data);
          _context2.prev = 2;
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(signupAPI, action.data);

        case 5:
          result = _context2.sent;
          console.log(result.data);
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_SUCCESS"],
            data: null
          });

        case 9:
          console.log('hello');
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_FAILRUE"],
            error: null
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[2, 12]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchSignup() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignup$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_REQUEST"], signup);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignup)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RkbnVtIiwibWFqb3IiLCJuaWNrbmFtZSIsImZldGNoaW5VcGRhdGUiLCJpc0xvZ2dlZEluIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMUlVFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMUlVFIiwiTE9HX09VVCIsImxvZ0luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJTaWdudXBBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibG9nT3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiUm91dGVyIiwicHVzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbGVydCIsInJlbW92ZUl0ZW0iLCJsb2dJbiIsInNpZ251cCIsIndhdGNoTG9nSW4iLCJ3YXRjaFNpZ251cCIsInVzZXJTYWdhIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJsb2dJbkFQSSIsImJvZHkiLCJwb3N0Iiwic2lnbnVwQVBJIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsImVycm9yIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsTUFBSSxFQUFDO0FBQ0hDLE1BQUUsRUFBRSxFQUREO0FBQ0s7QUFDUkMsU0FBSyxFQUFFLEVBRko7QUFHSEMsWUFBUSxFQUFFLEVBSFA7QUFJSEMsVUFBTSxFQUFFLENBSkw7QUFLSEMsU0FBSyxFQUFHLEVBTEw7QUFNSEMsWUFBUSxFQUFFO0FBTlAsR0FEcUI7QUFXMUJDLGVBQWEsRUFBRSxLQVhXO0FBV0Y7QUFDeEJDLFlBQVUsRUFBRTtBQVpjLENBQXJCO0FBZUEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBR0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQWhCO0FBR0EsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DO0FBQ0EsU0FBTztBQUNMQyxRQUFJLEVBQUVULGNBREQ7QUFFTFEsUUFBSSxFQUFFQTtBQUZELEdBQVA7QUFJRCxDQU5NO0FBUUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsSUFBRCxFQUFVO0FBQ3BDRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0EsU0FBTztBQUNMQyxRQUFJLEVBQUVOLGNBREQ7QUFFTEssUUFBSSxFQUFFQTtBQUZELEdBQVA7QUFJRCxDQVBNO0tBQU1FLFk7QUFVTixJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ2hDLFNBQU87QUFDTEosUUFBSSxFQUFFSCxPQUREO0FBRUxmLFFBQUksRUFBRTtBQUZELEdBQVA7QUFJRCxDQUxNOztBQU9QLElBQU11QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBeEJ6QixZQUF3QjtBQUFBLE1BQVYwQixNQUFVOztBQUM3QyxVQUFPQSxNQUFNLENBQUNQLElBQWQ7QUFDSSxTQUFLVCxjQUFMO0FBQ0U7QUFDQTtBQUNFLDZDQUNPZSxLQURQO0FBRUlqQixxQkFBYSxFQUFFLElBRm5CO0FBR0lDLGtCQUFVLEVBQUU7QUFIaEI7O0FBS0osU0FBS0UsY0FBTDtBQUNFZ0Isb0JBQWMsQ0FBQ0MsT0FBZixDQUF1QixXQUF2QixFQUFvQyxJQUFwQztBQUNBQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNBLDZDQUNLTCxLQURMO0FBRUV4QixZQUFJLEVBQUd5QixNQUFNLENBQUNSLElBRmhCO0FBR0VWLHFCQUFhLEVBQUUsS0FIakI7QUFJRUMsa0JBQVUsRUFBRTtBQUpkOztBQU1GLFNBQUtHLGNBQUw7QUFDSVMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLDZDQUNPRyxLQURQO0FBRUlqQixxQkFBYSxFQUFFLEtBRm5CO0FBR0lDLGtCQUFVLEVBQUU7QUFIaEI7O0FBS0osU0FBS0ksY0FBTDtBQUNFUSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZUyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sTUFBTSxDQUFDUixJQUF0QixDQUF4QjtBQUNBLDZDQUNLTyxLQURMO0FBRUVqQixxQkFBYSxFQUFDO0FBRmhCOztBQUlGLFNBQUtNLGNBQUw7QUFDSU8sYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWVMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQU0sQ0FBQ1IsSUFBdEIsQ0FBeEI7QUFDQWUsV0FBSyxDQUFDLGdCQUFELENBQUw7QUFDQUosd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDQSw2Q0FDS0wsS0FETDtBQUVFakIscUJBQWEsRUFBQztBQUZoQjs7QUFJSixTQUFLTyxjQUFMO0FBQ0VNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWVMsSUFBSSxDQUFDQyxTQUFMLENBQWVOLE1BQU0sQ0FBQ1IsSUFBdEIsQ0FBeEI7QUFDQWUsV0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBSix3REFBTSxDQUFDQyxJQUFQLENBQVksU0FBWjtBQUNBLDZDQUNLTCxLQURMO0FBRUVqQixxQkFBYSxFQUFDO0FBRmhCOztBQU1GLFNBQUtRLE9BQUw7QUFDRVcsb0JBQWMsQ0FBQ0MsT0FBZixDQUF1QixXQUF2QixFQUFvQyxLQUFwQztBQUNBRCxvQkFBYyxDQUFDTyxVQUFmLENBQTBCLE1BQTFCO0FBQ0EsNkNBQ09ULEtBRFA7QUFFSWhCLGtCQUFVLEVBQUU7QUFGaEI7O0FBSUY7QUFDSSxhQUFPZ0IsS0FBUDtBQTVEUjtBQThERCxDQS9ERDs7QUFpRWVELHNFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0MvRlVXLEs7bUdBa0JBQyxNO21HQW1CQUMsVTttR0FJQUMsVzttR0FJZUMsUTs7QUFwRXpCO0FBQ0E7QUFNQTtBQUVBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZCdkIsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Cc0IsSUFBcEI7QUFDQSxTQUFPSiw0Q0FBSyxDQUFDSyxJQUFOLENBQVcsaUJBQVgsRUFBOEJELElBQTlCLENBQVAsQ0FIdUIsQ0FHb0I7QUFDM0M7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQkYsSUFBbkIsRUFBd0I7QUFDdkJ2QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JzQixJQUFwQjtBQUNBLFNBQU9KLDRDQUFLLENBQUNLLElBQU4sQ0FBVyxnQkFBWCxFQUE2QkQsSUFBN0IsQ0FBUDtBQUNBOztBQUVELFNBQVVULEtBQVYsQ0FBZ0JULE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNDTCxpQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBRCxpQkFBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkksTUFBTSxDQUFDUixJQUFwQztBQUZEO0FBQUE7QUFJaUIsaUJBQU02QiwrREFBSSxDQUFDSixRQUFELEVBQVdqQixNQUFNLENBQUNSLElBQWxCLENBQVY7O0FBSmpCO0FBSVE4QixnQkFKUjtBQUtFM0IsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZMEIsTUFBTSxDQUFDOUIsSUFBbkI7QUFMRjtBQU1FLGlCQUFNK0IsOERBQUcsQ0FBQztBQUNUOUIsZ0JBQUksRUFBQ1IsNkRBREk7QUFFVE8sZ0JBQUksRUFBQztBQUZJLFdBQUQsQ0FBVDs7QUFORjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXRSxpQkFBTStCLDhEQUFHLENBQUM7QUFDVDlCLGdCQUFJLEVBQUNQLDZEQURJO0FBRVRNLGdCQUFJLEVBQUM7QUFGSSxXQUFELENBQVQ7O0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBLFNBQVVrQixNQUFWLENBQWlCVixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0wsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaLEVBQXNDSSxNQUFNLENBQUNSLElBQTdDO0FBRkQ7QUFBQTtBQUlpQixpQkFBTTZCLCtEQUFJLENBQUNELFNBQUQsRUFBWXBCLE1BQU0sQ0FBQ1IsSUFBbkIsQ0FBVjs7QUFKakI7QUFJUThCLGdCQUpSO0FBS0UzQixpQkFBTyxDQUFDQyxHQUFSLENBQVkwQixNQUFNLENBQUM5QixJQUFuQjtBQUxGO0FBTUUsaUJBQU0rQiw4REFBRyxDQUFDO0FBQ1Q5QixnQkFBSSxFQUFFTCw2REFERztBQUVUSSxnQkFBSSxFQUFFO0FBRkcsV0FBRCxDQUFUOztBQU5GO0FBVUVHLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBVkY7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlFLGlCQUFNMkIsOERBQUcsQ0FBQztBQUNUOUIsZ0JBQUksRUFBRUosNkRBREc7QUFFVG1DLGlCQUFLLEVBQUU7QUFGRSxXQUFELENBQVQ7O0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUJBLFNBQVViLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU1jLHFFQUFVLENBQUN6Qyw2REFBRCxFQUFpQnlCLEtBQWpCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVHLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0MsaUJBQU1hLHFFQUFVLENBQUN0Qyw2REFBRCxFQUFpQnVCLE1BQWpCLENBQWhCOztBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2QsaUJBQU1hLDhEQUFHLENBQUMsQ0FDVEMsK0RBQUksQ0FBQ2hCLFVBQUQsQ0FESyxFQUVUZ0IsK0RBQUksQ0FBQ2YsV0FBRCxDQUZLLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE3ZTgwMGM3MDdiMGNmODA3NDQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6e1xyXG4gICAgaWQ6ICcnLCAvL3ByaW1hcnkga2V5XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBzdGRudW06IDAsXHJcbiAgICBtYWpvcjogICcnLFxyXG4gICAgbmlja25hbWU6ICcnLFxyXG4gIH0sXHJcblxyXG5cclxuICBmZXRjaGluVXBkYXRlOiBmYWxzZSwgICAvL+uhnOq3uOyduCDspJEg7IOB7YOc7ZmV7J24XHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxSVUUgPSAnTE9HX0lOX0ZBSUxSVUUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9SRVFVRVNUID0gJ1NJR05VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NVQ0NFU1MgPSAnU0lHTlVQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfRkFJTFJVRSA9ICdTSUdOVVBfRkFJTFJVRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdsb2dJbkFjdGlvbicpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTaWdudXBBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdTaWdudXBBY3Rpb24nKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogU0lHTlVQX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxuICAgIHVzZXI6IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbG9naW5fcmVxdWVzdCcpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnbG9naW4nICsgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgZmV0Y2hpblVwZGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnaXNsb2dpbmVkJywgdHJ1ZSk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICByZXR1cm4geyBcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgdXNlciA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFJVRTpcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsJyk7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05VUF9SRVFVRVNUOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzaWdudXBfcmVxdWVzdCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cF8nICsgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2lnbnVwX3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cF8nICsgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICAgIGFsZXJ0KCdzaWdudXBfc3VjY2VzcycpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgZmV0Y2hpblVwZGF0ZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX0ZBSUxSVUU6XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NpZ251cF9mYWlsJylcclxuICAgICAgICBjb25zb2xlLmxvZygnc2lnbnVwXycgKyBKU09OLnN0cmluZ2lmeShhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGFsZXJ0KCdzaWdudXBfZmFpbCcpXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvc2lnbnVwXCIpXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOmZhbHNlLFxyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgY2FzZSBMT0dfT1VUOlxyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzbG9naW5lZCcsIGZhbHNlKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdGF0ZSA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCB7XHJcblx0TE9HX0lOX0ZBSUxSVUUsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fUkVRVUVTVCwgXHJcblx0U0lHTlVQX1JFUVVFU1QsU0lHTlVQX0ZBSUxSVUUsIFNJR05VUF9TVUNDRVNTLFxyXG5cdFVTRVJfU1VDQ0VTUyxVU0VSX0ZBSUxSVUUsVVNFUl9SRVFVRVNUXHJcblx0fSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMFwiXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShib2R5KSB7XHJcblx0Y29uc29sZS5sb2coJ2xvZ2luX2FwaScpO1xyXG5cdGNvbnNvbGUubG9nKCdib2R5JywgYm9keSk7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGJvZHkpIC8v64uk66W4IOumrOyGjOyKpCDqsITsl5Ag7J6Q7JuQ6rO17JygLCBjb3Vyc2Ugb3JnaW5cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbnVwQVBJKGJvZHkpe1xyXG5cdGNvbnNvbGUubG9nKCdqb2luX2FwaScpO1xyXG5cdGNvbnNvbGUubG9nKCdib2R5JywgYm9keSk7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci9qb2luJywgYm9keSlcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG5cdGNvbnNvbGUubG9nKCdsb2dpbl9zYWdhJylcclxuXHRjb25zb2xlLmxvZygnbG9naW4gZGF0YSA6ICcsIGFjdGlvbi5kYXRhKVxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOkxPR19JTl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOm51bGwsXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpMT0dfSU5fRkFJTFJVRSxcclxuXHRcdFx0ZGF0YTpudWxsLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcblx0Y29uc29sZS5sb2coJ3NpZ251cF9zYWdhJylcclxuXHRjb25zb2xlLmxvZygnYWN0aW9uLmRhdGEgbm90IGpzb246ICcsIGFjdGlvbi5kYXRhKVxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ251cEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05VUF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBudWxsXHJcblx0XHR9KVx0XHJcblx0XHRjb25zb2xlLmxvZygnaGVsbG8nKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOVVBfRkFJTFJVRSxcclxuXHRcdFx0ZXJyb3I6IG51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpe1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ251cClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ251cCksXHJcblx0XSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=