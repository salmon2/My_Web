webpackHotUpdate_N_E("pages/_app",{

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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/user/id=".concat(body));
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
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["USER_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["USER_FAILRUE"],
            data: null
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsInNpZ251cCIsImluZm8iLCJ3YXRjaExvZ0luIiwid2F0Y2hTaWdudXAiLCJ3YXRjaEluZm8iLCJ1c2VyU2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9nSW5BUEkiLCJib2R5IiwicG9zdCIsInNpZ251cEFQSSIsImluZm9BUEkiLCJnZXQiLCJhY3Rpb24iLCJjYWxsIiwiZGF0YSIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMUlVFIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFJVRSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlVTRVJfU1VDQ0VTUyIsIlVTRVJfRkFJTFJVRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIlNJR05VUF9SRVFVRVNUIiwiVVNFUl9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBdUJVQSxLO21HQWVBQyxNO21HQWNBQyxJO21HQWVBQyxVO21HQUlBQyxXO21HQUdBQyxTO21HQUllQyxROztBQTlFekI7QUFDQTtBQU1BO0FBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkIsU0FBT0osNENBQUssQ0FBQ0ssSUFBTixDQUFXLGlCQUFYLEVBQThCRCxJQUE5QixDQUFQLENBRHVCLENBQ29CO0FBQzNDOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJGLElBQW5CLEVBQXdCO0FBQ3ZCLFNBQU9KLDRDQUFLLENBQUNLLElBQU4sQ0FBVyxnQkFBWCxFQUE2QkQsSUFBN0IsQ0FBUDtBQUNBOztBQUVELFNBQVNHLE9BQVQsQ0FBaUJILElBQWpCLEVBQXNCO0FBQ3JCLFNBQU9KLDRDQUFLLENBQUNRLEdB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QUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YzQwZmVjMjE0Mjc3Yzg0OTNjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCB7XHJcblx0TE9HX0lOX0ZBSUxSVUUsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fUkVRVUVTVCwgXHJcblx0U0lHTlVQX1JFUVVFU1QsU0lHTlVQX0ZBSUxSVUUsIFNJR05VUF9TVUNDRVNTLFxyXG5cdFVTRVJfU1VDQ0VTUyxVU0VSX0ZBSUxSVUUsVVNFUl9SRVFVRVNUXHJcblx0fSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTD1cImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMFwiXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShib2R5KSB7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGJvZHkpIC8v64uk66W4IOumrOyGjOyKpCDqsITsl5Ag7J6Q7JuQ6rO17JygLCBjb3Vyc2Ugb3JnaW5cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnbnVwQVBJKGJvZHkpe1xyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VzZXIvam9pbicsIGJvZHkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluZm9BUEkoYm9keSl7XHJcblx0cmV0dXJuIGF4aW9zLmdldChgL2FwaS91c2VyL2lkPSR7Ym9keX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOkxPR19JTl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOnJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6TE9HX0lOX0ZBSUxSVUUsXHJcblx0XHRcdGRhdGE6bnVsbCxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnbnVwKGFjdGlvbikge1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ251cEFQSSwgYWN0aW9uLmRhdGEpXHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOVVBfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTogbnVsbFxyXG5cdFx0fSlcdFxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOiBTSUdOVVBfRkFJTFJVRSxcclxuXHRcdFx0ZXJyb3I6IG51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogaW5mbyhhY3Rpb24pIHtcclxuXHRjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoaW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpVU0VSX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6cmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpVU0VSX0ZBSUxSVUUsXHJcblx0XHRcdGRhdGE6bnVsbCxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWdudXAoKXtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFNJR05VUF9SRVFVRVNULCBzaWdudXApXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoSW5mbygpe1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoVVNFUl9SRVFVRVNULCBpbmZvKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdGZvcmsod2F0Y2hMb2dJbiksXHJcblx0XHRmb3JrKHdhdGNoU2lnbnVwKSxcclxuXHRcdGZvcmsod2F0Y2hJbmZvKSxcclxuXHRdKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==