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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsInNpZ251cCIsImluZm8iLCJ3YXRjaExvZ0luIiwid2F0Y2hTaWdudXAiLCJ3YXRjaEluZm8iLCJ1c2VyU2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9nSW5BUEkiLCJib2R5IiwicG9zdCIsInNpZ251cEFQSSIsImluZm9BUEkiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicGFyYW1zIiwiaWQiLCJhY3Rpb24iLCJjYWxsIiwiZGF0YSIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMUlVFIiwiU0lHTlVQX1NVQ0NFU1MiLCJTSUdOVVBfRkFJTFJVRSIsImVycm9yIiwiVVNFUl9TVUNDRVNTIiwiVVNFUl9GQUlMUlVFIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwiU0lHTlVQX1JFUVVFU1QiLCJVU0VSX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0F3QlVBLEs7bUdBZUFDLE07bUdBY0FDLEk7bUdBZ0JBQyxVO21HQUlBQyxXO21HQUdBQyxTO21HQUllQyxROztBQWhGekI7QUFDQTtBQU1BO0FBRUFDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixHQUF1Qix1QkFBdkI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkIsU0FBT0osNENBQUssQ0FBQ0ssSUFBTixDQUFXLGlCQUFYLEVBQThCRCxJQUE5QixDQUFQLENBRHVCLENBQ29CO0FBQzNDOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJGLElBQW5CLEVBQXdCO0FBQ3ZCLFNBQU9KLDRDQUFLLENBQUNLLElBQU4sQ0FBVyxnQkFBWCxFQUE2QkQsSUFBN0IsQ0FBUDtBQUNBOztBQUVELFNBQVNHLE9BQVQsQ0FBaUJILElBQWpCLEVBQXNCO0FBQ3JCSSxTQUFP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QUE7QUFBQTtBQUNkLGlCQUFNK0IsOERBQUcsQ0FBQyxDQUNUQywrREFBSSxDQUFDbkMsVUFBRCxDQURLLEVBRVRtQywrREFBSSxDQUFDbEMsV0FBRCxDQUZLLEVBR1RrQywrREFBSSxDQUFDakMsU0FBRCxDQUhLLENBQUQsQ0FBVDs7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyMGYyN2VkZDVhYTRlY2RmMTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHtcclxuXHRMT0dfSU5fRkFJTFJVRSwgTE9HX0lOX1NVQ0NFU1MsIExPR19JTl9SRVFVRVNULCBcclxuXHRTSUdOVVBfUkVRVUVTVCxTSUdOVVBfRkFJTFJVRSwgU0lHTlVQX1NVQ0NFU1MsXHJcblx0VVNFUl9TVUNDRVNTLFVTRVJfRkFJTFJVRSxVU0VSX1JFUVVFU1RcclxuXHR9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMPVwiaHR0cDovL2xvY2FsaG9zdDo3MDAwXCJcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGJvZHkpIHtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgYm9keSkgLy/ri6Trpbgg66as7IaM7IqkIOqwhOyXkCDsnpDsm5Dqs7XsnKAsIGNvdXJzZSBvcmdpblxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWdudXBBUEkoYm9keSl7XHJcblx0cmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdXNlci9qb2luJywgYm9keSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mb0FQSShib2R5KXtcclxuXHRjb25zb2xlLmxvZyhib2R5KTtcclxuXHRyZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3VzZXIvaWQnLHtwYXJhbXM6e2lkOmJvZHl9fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpMT0dfSU5fU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTpyZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOkxPR19JTl9GQUlMUlVFLFxyXG5cdFx0XHRkYXRhOm51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ251cChhY3Rpb24pIHtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWdudXBBUEksIGFjdGlvbi5kYXRhKVxyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTlVQX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6IG51bGxcclxuXHRcdH0pXHRcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTogU0lHTlVQX0ZBSUxSVUUsXHJcblx0XHRcdGVycm9yOiBudWxsLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIGluZm8oYWN0aW9uKSB7XHJcblx0Y29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6VVNFUl9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOnJlc3VsdC5kYXRhLFxyXG5cdFx0fSlcclxuXHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6VVNFUl9GQUlMUlVFLFxyXG5cdFx0XHRkYXRhOm51bGwsXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbilcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCl7XHJcblx0eWllbGQgdGFrZUxhdGVzdChTSUdOVVBfUkVRVUVTVCwgc2lnbnVwKVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEluZm8oKXtcclxuXHR5aWVsZCB0YWtlTGF0ZXN0KFVTRVJfUkVRVUVTVCwgaW5mbylcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHRmb3JrKHdhdGNoTG9nSW4pLFxyXG5cdFx0Zm9yayh3YXRjaFNpZ251cCksXHJcblx0XHRmb3JrKHdhdGNoSW5mbyksXHJcblx0XSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=