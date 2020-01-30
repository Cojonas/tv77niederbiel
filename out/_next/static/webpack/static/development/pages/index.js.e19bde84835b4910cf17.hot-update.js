webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Event */ "./components/Event.js");



var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Calendar.js";







function Calendar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var TV77_GOOGLE_LINK = "https://calendar.google.com/calendar/ical/qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com/public/basic.ics";
  var cal_id = "qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com";
  var api_key = "AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk";
  var api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk";

  var ics_data =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default()(api_link);

            case 2:
              res = _context.sent;

              if (res.ok) {
                _context.next = 5;
                break;
              }

              throw new Error(res.statusText);

            case 5:
              return _context.abrupt("return", res.json());

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function ics_data() {
      return _ref.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    promiseFn: ics_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        isLoading = _ref2.isLoading;
    if (isLoading) return "Loading";
    if (error) return error.message;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("ul", {
      className: "jsx-4146749475",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " ", data.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("li", {
        className: "jsx-4146749475",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Event__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: item.id,
        item: item,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "4146749475",
    __self: this
  }, "ul.jsx-4146749475{list-style-type:none;margin:0 200px;padding:0;overflow:hidden;background-color:#333333;}li.jsx-4146749475{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NpQixBQUcwQyxBQVFWLFdBQ2IsVUFSaUIsZUFDTCxVQUNNLGdCQUNTLHlCQUMzQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBBc3luYyBmcm9tIFwicmVhY3QtYXN5bmNcIlxuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuXG5mdW5jdGlvbiBDYWxlbmRhciAocHJvcHMpIHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gICAgY29uc3QgVFY3N19HT09HTEVfTElOSyA9IFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2ljYWwvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjAlNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tL3B1YmxpYy9iYXNpYy5pY3NcIlxuICAgIGNvbnN0IGNhbF9pZCA9IFwicW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbVwiO1xuICAgIGNvbnN0IGFwaV9rZXkgPSBcIkFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52Wmdxa1wiXG5cbiAgICBjb25zdCBhcGlfbGluayA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzL3FvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20vZXZlbnRzP2tleT1BSXphU3lBZUZZMnRYVUNxa051TXA1d0lOMmhyb3RLNG1udlpncWtcIlxuXG5cblxuICAgIGNvbnN0IGljc19kYXRhID0gYXN5bmMgKCkgPT57XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaV9saW5rKVxuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH1cbiAgICBcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgICAgICA8QXN5bmMgcHJvbWlzZUZuPXtpY3NfZGF0YX0+XG4gICAgICAgICAgICAgICAgeyh7ZGF0YSwgZXJyb3IsIGlzTG9hZGluZ30pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiBcIkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx1bD4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiA8bGk+PEV2ZW50IGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz48L2xpPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Bc3luYz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cblxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsgIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.e19bde84835b4910cf17.hot-update.js.map