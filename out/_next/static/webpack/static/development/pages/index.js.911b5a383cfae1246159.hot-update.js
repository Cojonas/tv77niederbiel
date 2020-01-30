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
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-2243712388" + " " + "h-scrollmenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " ", data.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "jsx-2243712388",
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
    id: "2243712388",
    __self: this
  }, ".h-scrollmenu.jsx-2243712388{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-2243712388>div.jsx-2243712388{display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNnQixBQUcyQyxBQU1ELHFCQUN6QixDQU5rQixjQUNLLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IEFzeW5jIGZyb20gXCJyZWFjdC1hc3luY1wiXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5cbmZ1bmN0aW9uIENhbGVuZGFyIChwcm9wcykge1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgICBjb25zdCBUVjc3X0dPT0dMRV9MSU5LID0gXCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvaWNhbC9xb245c3ByMHQ1YmdwamhsZTk2aHBsdTJyMCU0MGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20vcHVibGljL2Jhc2ljLmljc1wiXG4gICAgY29uc3QgY2FsX2lkID0gXCJxb245c3ByMHQ1YmdwamhsZTk2aHBsdTJyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29tXCI7XG4gICAgY29uc3QgYXBpX2tleSA9IFwiQUl6YVN5QWVGWTJ0WFVDcWtOdU1wNXdJTjJocm90SzRtbnZaZ3FrXCJcblxuICAgIGNvbnN0IGFwaV9saW5rID0gXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbS9ldmVudHM/a2V5PUFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52Wmdxa1wiXG5cblxuXG4gICAgY29uc3QgaWNzX2RhdGEgPSBhc3luYyAoKSA9PntcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpX2xpbmspXG4gICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpXG4gICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfVxuICAgIFxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgICAgIDxBc3luYyBwcm9taXNlRm49e2ljc19kYXRhfT5cbiAgICAgICAgICAgICAgICB7KHtkYXRhLCBlcnJvciwgaXNMb2FkaW5nfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIFwiTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJoLXNjcm9sbG1lbnVcIiA+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gPGRpdj48RXZlbnQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIDwvQXN5bmM+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMDBweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oLXNjcm9sbG1lbnUgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3R5bGU+IFxuXG5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7ICJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.911b5a383cfae1246159.hot-update.js.map