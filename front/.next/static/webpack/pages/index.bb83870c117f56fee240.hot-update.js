webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RkbnVtIiwibWFqb3IiLCJuaWNrbmFtZSIsImZldGNoaW5VcGRhdGUiLCJpc0xvZ2dlZEluIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMUlVFIiwiU0lHTlVQX1JFUVVFU1QiLCJTSUdOVVBfU1VDQ0VTUyIsIlNJR05VUF9GQUlMUlVFIiwiVVNFUl9SRVFVRVNUIiwiVVNFUl9TVUNDRVNTIiwiVVNFUl9GQUlMUlVFIiwiTE9HX09VVCIsImxvZ0luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJTaWdudXBBY3Rpb24iLCJJbmZvQWN0aW9uIiwibG9nT3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiYWxlcnQiLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLE1BQUksRUFBQztBQUNIQyxNQUFFLEVBQUUsRUFERDtBQUNLO0FBQ1JDLFNBQUssRUFBRSxFQUZKO0FBR0hDLFlBQVEsRUFBRSxFQUhQO0FBSUhDLFVBQU0sRUFBRSxDQUpMO0FBS0hDLFNBQUssRUFBRyxFQUxMO0FBTUhDLFlBQVEsRUFBRTtBQU5QLEdBRHFCO0FBVzFCQyxlQUFhLEVBQUUsS0FYVztBQVdGO0FBQ3hCQyxZQUFVLEVBQUU7QUFaYyxDQUFyQjtBQWVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUdBLElBQU1DLGNBQWMsR0FBRyxnQkFB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QUUsS0FIakI7QUFJRUMsa0JBQVUsRUFBQztBQUpiOztBQU1GLFNBQUtTLFlBQUw7QUFDRWdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsNkNBQ0tSLEtBREw7QUFFRW5CLHFCQUFhLEVBQUM7QUFGaEI7O0FBSUYsU0FBS1csT0FBTDtBQUNFVSxvQkFBYyxDQUFDQyxPQUFmLENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDO0FBQ0FELG9CQUFjLENBQUNPLFVBQWYsQ0FBMEIsUUFBMUI7QUFDQSw2Q0FDT1QsS0FEUDtBQUVJbEIsa0JBQVUsRUFBRTtBQUZoQjs7QUFJRjtBQUNJLGFBQU9rQixLQUFQO0FBMUVSO0FBNEVELENBN0VEOztBQStFZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmI4Mzg3MGMxMTdmNTZmZWUyNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjp7XHJcbiAgICBpZDogJycsIC8vcHJpbWFyeSBrZXlcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHN0ZG51bTogMCxcclxuICAgIG1ham9yOiAgJycsXHJcbiAgICBuaWNrbmFtZTogJycsXHJcbiAgfSxcclxuXHJcblxyXG4gIGZldGNoaW5VcGRhdGU6IGZhbHNlLCAgIC8v66Gc6re47J24IOykkSDsg4Htg5ztmZXsnbhcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFJVRSA9ICdMT0dfSU5fRkFJTFJVRSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1JFUVVFU1QgPSAnU0lHTlVQX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBTSUdOVVBfU1VDQ0VTUyA9ICdTSUdOVVBfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9GQUlMUlVFID0gJ1NJR05VUF9GQUlMUlVFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfUkVRVUVTVCA9ICdVU0VSX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBVU0VSX1NVQ0NFU1MgPSAnVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgVVNFUl9GQUlMUlVFID0gJ1VTRVJfRkFJTFJVRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gJ0xPR19PVVQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ0luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ251cEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTSUdOVVBfUkVRVUVTVCxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IEluZm9BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ091dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogTE9HX09VVCxcclxuICAgIHVzZXI6IG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICBmZXRjaGluVXBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpc2xvZ2luZWQnLCB0cnVlKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyaWQnLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ2luX3N1Y2Nlc3MnKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgIHJldHVybiB7IFxyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICB1c2VyOntpZCA6IGFjdGlvbi5kYXRhfSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxSVUU6XHJcbiAgICAgICAgYWxlcnQoJ2xvZ2luX2ZhaWwnKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICBmZXRjaGluVXBkYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgIH1cclxuICAgICAgY2FzZSBTSUdOVVBfUkVRVUVTVDpcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoaW5VcGRhdGU6dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgU0lHTlVQX1NVQ0NFU1M6XHJcbiAgICAgICAgICBhbGVydCgnc2lnbnVwX3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGZldGNoaW5VcGRhdGU6ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlIFNJR05VUF9GQUlMUlVFOlxyXG4gICAgICAgIGFsZXJ0KCdzaWdudXBfZmFpbCcpXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvc2lnbnVwXCIpXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOmZhbHNlLFxyXG4gICAgICAgICB9XHJcbiAgICAgIGNhc2UgVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyX2luZm9fcicpXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOnRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlIFVTRVJfU1VDQ0VTUzpcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcl9pbmZvX3MnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHVzZXI6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICBmZXRjaGluVXBkYXRlOiBmYWxzZSxcclxuICAgICAgICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlIFVTRVJfRkFJTFJVRTpcclxuICAgICAgICBjb25zb2xlLmxvZygndXNlcl9pbmZvX2ZhaWwnKVxyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmV0Y2hpblVwZGF0ZTpmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgTE9HX09VVDpcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpc2xvZ2luZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcmlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiBzdGF0ZSA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==