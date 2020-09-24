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
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/user/id', {
    param: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsInNpZ251cCIsImluZm8iLCJ3YXRjaExvZ0luIiwid2F0Y2hTaWdudXAiLCJ3YXRjaEluZm8iLCJ1c2VyU2FnYSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwibG9nSW5BUEkiLCJib2R5IiwicG9zdCIsInNpZ251cEFQSSIsImluZm9BUEkiLCJnZXQiLCJwYXJhbSIsImlkIiwiYWN0aW9uIiwiY2FsbCIsImRhdGEiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFJVRSIsIlNJR05VUF9TVUNDRVNTIiwiU0lHTlVQX0ZBSUxSVUUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJVU0VSX1NVQ0NFU1MiLCJVU0VSX0ZBSUxSVUUiLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJTSUdOVVBfUkVRVUVTVCIsIlVTRVJfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXVCVUEsSzttR0FlQUMsTTttR0FjQUMsSTttR0FlQUMsVTttR0FJQUMsVzttR0FHQUMsUzttR0FJZUMsUTs7QUE5RXpCO0FBQ0E7QUFNQTtBQUVBQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsR0FBdUIsdUJBQXZCOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3ZCLFNBQU9KLDRDQUFLLENBQUNLLElBQU4sQ0FBVyxpQkFBWCxFQUE4QkQsSUFBOUIsQ0FBUCxDQUR1QixDQUNvQjtBQUMzQzs7QUFFRCxTQUFTRSxTQUFULENBQW1CRixJQUFuQixFQUF3QjtBQUN2QixTQUFPSiw0Q0FBSyxDQUFDSyxJQUFOLENBQVcsZ0JBQVgsRUFBNkJELElBQTdCLENBQVA7QUFDQTs7QUFFRCxTQUFTRyxPQUFULENBQWlCSCxJQUFqQixFQUFzQjtBQUNyQixTQUFPSiw0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QUFELENBRkssRUFHVGtDLCtEQUFJLENBQUNqQyxTQUFELENBSEssQ0FBRCxDQUFUOztBQURjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDhiNzI4NGFjNTE1NWM2NGVlN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgY2FsbCwgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQge1xyXG5cdExPR19JTl9GQUlMUlVFLCBMT0dfSU5fU1VDQ0VTUywgTE9HX0lOX1JFUVVFU1QsIFxyXG5cdFNJR05VUF9SRVFVRVNULFNJR05VUF9GQUlMUlVFLCBTSUdOVVBfU1VDQ0VTUyxcclxuXHRVU0VSX1NVQ0NFU1MsVVNFUl9GQUlMUlVFLFVTRVJfUkVRVUVTVFxyXG5cdH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkw9XCJodHRwOi8vbG9jYWxob3N0OjcwMDBcIlxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoYm9keSkge1xyXG5cdHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VzZXIvbG9naW4nLCBib2R5KSAvL+uLpOuluCDrpqzshozsiqQg6rCE7JeQIOyekOybkOqzteycoCwgY291cnNlIG9yZ2luXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ251cEFQSShib2R5KXtcclxuXHRyZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91c2VyL2pvaW4nLCBib2R5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmZvQVBJKGJvZHkpe1xyXG5cdHJldHVybiBheGlvcy5nZXQoJy9hcGkvdXNlci9pZCcse3BhcmFtOntpZDpib2R5fX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcblx0XHRcdGRhdGE6cmVzdWx0LmRhdGEsXHJcblx0XHR9KVxyXG5cdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0eWllbGQgcHV0KHtcclxuXHRcdFx0dHlwZTpMT0dfSU5fRkFJTFJVRSxcclxuXHRcdFx0ZGF0YTpudWxsLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWdudXAoYWN0aW9uKSB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnbnVwQVBJLCBhY3Rpb24uZGF0YSlcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05VUF9TVUNDRVNTLFxyXG5cdFx0XHRkYXRhOiBudWxsXHJcblx0XHR9KVx0XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dCh7XHJcblx0XHRcdHR5cGU6IFNJR05VUF9GQUlMUlVFLFxyXG5cdFx0XHRlcnJvcjogbnVsbCxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uKiBpbmZvKGFjdGlvbikge1xyXG5cdGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChpbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOlVTRVJfU1VDQ0VTUyxcclxuXHRcdFx0ZGF0YTpyZXN1bHQuZGF0YSxcclxuXHRcdH0pXHJcblx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHR5aWVsZCBwdXQoe1xyXG5cdFx0XHR0eXBlOlVTRVJfRkFJTFJVRSxcclxuXHRcdFx0ZGF0YTpudWxsLFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcblx0eWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpe1xyXG5cdHlpZWxkIHRha2VMYXRlc3QoU0lHTlVQX1JFUVVFU1QsIHNpZ251cClcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hJbmZvKCl7XHJcblx0eWllbGQgdGFrZUxhdGVzdChVU0VSX1JFUVVFU1QsIGluZm8pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuXHR5aWVsZCBhbGwoW1xyXG5cdFx0Zm9yayh3YXRjaExvZ0luKSxcclxuXHRcdGZvcmsod2F0Y2hTaWdudXApLFxyXG5cdFx0Zm9yayh3YXRjaEluZm8pLFxyXG5cdF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9