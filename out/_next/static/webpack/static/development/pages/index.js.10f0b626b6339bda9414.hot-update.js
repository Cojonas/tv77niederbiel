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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Banner */ "./components/Banner.js");


var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Calendar.js";







function Calendar(props) {
  var TV77_GOOGLE_LINK = "https://calendar.google.com/calendar/ical/qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com/public/basic.ics";
  var cal_id = "qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com";
  var api_key = "AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk";
  var api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5";

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

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
    className: "jsx-3354534702",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Termine"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3354534702",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Unsere n\xE4chsten \xF6ffentlichen Events und Termine:"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    promiseFn: ics_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        isLoading = _ref2.isLoading;
    if (isLoading) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    });
    if (error) return error.message;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, data.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          padding: 10
        },
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        style: {
          fontWeight: "bold"
        },
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, new Date(item.start.dateTime).toLocaleDateString("de-DE", {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }), ": "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", {
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, item.summary));
    }));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3354534702",
    __self: this
  }, ".h-scrollmenu.jsx-3354534702{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-3354534702>div.jsx-3354534702{display:inline-block;}span.jsx-3354534702{text-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RnQixBQUcyQyxBQU1ELEFBR04sZUFDbkIsTUFIQSxDQU5rQixjQUNLLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4vTG9hZGluZ1NwaW5uZXJcIlxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgQXN5bmMgZnJvbSBcInJlYWN0LWFzeW5jXCJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcblxuXG5mdW5jdGlvbiBDYWxlbmRhcihwcm9wcykge1xuICAgIGNvbnN0IFRWNzdfR09PR0xFX0xJTksgPSBcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9pY2FsL3FvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwJTQwZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbS9wdWJsaWMvYmFzaWMuaWNzXCJcbiAgICBjb25zdCBjYWxfaWQgPSBcInFvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb21cIjtcbiAgICBjb25zdCBhcGlfa2V5ID0gXCJBSXphU3lBZUZZMnRYVUNxa051TXA1d0lOMmhyb3RLNG1udlpncWtcIlxuXG4gICAgY29uc3QgYXBpX2xpbmsgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy9xb245c3ByMHQ1YmdwamhsZTk2aHBsdTJyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29tL2V2ZW50cz9rZXk9QUl6YVN5QWVGWTJ0WFVDcWtOdU1wNXdJTjJocm90SzRtbnZaZ3FrJnNpbmdsZUV2ZW50cz10cnVlJm9yZGVyQnk9c3RhcnRUaW1lJm1heFJlc3VsdHM9NVwiXG5cblxuXG4gICAgY29uc3QgaWNzX2RhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaV9saW5rKVxuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgIDxoMj5UZXJtaW5lPC9oMj5cbiAgICAgICAgICAgIDxwPlVuc2VyZSBuw6RjaHN0ZW4gw7ZmZmVudGxpY2hlbiBFdmVudHMgdW5kIFRlcm1pbmU6PC9wPlxuXG4gICAgICAgICAgICA8QXN5bmMgcHJvbWlzZUZuPXtpY3NfZGF0YX0+XG4gICAgICAgICAgICAgICAgeyh7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yLm1lc3NhZ2VcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+e25ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImRlLURFXCIsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9iclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e2l0ZW0uc3VtbWFyeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Bc3luYz5cbiAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjAwcHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51ID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsgIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./components/LoadingSpinner.js":
/*!**************************************!*\
  !*** ./components/LoadingSpinner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/LoadingSpinner.js";



function LoadingSpinner(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3993214007" + " " + "lds-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3993214007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3993214007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3993214007",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3993214007",
    __self: this
  }, ".lds-facebook.jsx-3993214007{display:inline-block;position:relative;width:80px;height:80px;}.lds-facebook.jsx-3993214007 div.jsx-3993214007{display:inline-block;position:absolute;left:8px;width:16px;background:#fff;-webkit-animation:lds-facebook-jsx-3993214007 1.2s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook-jsx-3993214007 1.2s cubic-bezier(0,0.5,0.5,1) infinite;}.lds-facebook.jsx-3993214007 div.jsx-3993214007:nth-child(1){left:8px;-webkit-animation-delay:-0.24s;animation-delay:-0.24s;}.lds-facebook.jsx-3993214007 div.jsx-3993214007:nth-child(2){left:32px;-webkit-animation-delay:-0.12s;animation-delay:-0.12s;}.lds-facebook.jsx-3993214007 div.jsx-3993214007:nth-child(3){left:56px;-webkit-animation-delay:0;animation-delay:0;}@-webkit-keyframes lds-facebook-jsx-3993214007{0%{top:8px;height:64px;}50%,100%{top:24px;height:32px;}}@keyframes lds-facebook-jsx-3993214007{0%{top:8px;height:64px;}50%,100%{top:24px;height:32px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVMsQUFHa0MsQUFNQSxBQVFaLEFBSUMsQUFJQSxBQUtBLEFBSUMsUUFIRyxDQWJTLEFBaUJULENBYlMsQUFJTCxVQU1sQixDQTVCa0IsQUFNQSxBQTBCbEIsa0JBL0JXLEFBTUYsU0FDRSxFQU5DLElBcUJkLEtBZGtCLEdBTmxCLENBWUEsQ0FJQSxXQVRvRSxvS0FDcEUiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIExvYWRpbmdTcGlubmVyIChwcm9wcykge1xuICAgIHJldHVybiA8PlxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWZhY2Vib29rXCI+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PC9kaXY+XG4gICAgXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgLmxkcy1mYWNlYm9vayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxkcy1mYWNlYm9vayBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBsZHMtZmFjZWJvb2sgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGRzLWZhY2Vib29rIGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBsZWZ0OiAzMnB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICBsZWZ0OiA1NnB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIGxkcy1mYWNlYm9vayB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA1MCUsIDEwMCUge1xuICAgICAgICAgICAgICB0b3A6IDI0cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfVxuICAgIDwvc3R5bGU+XG4gICAgPC8+XG59XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU3Bpbm5lcjsiXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/LoadingSpinner.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ })

})
//# sourceMappingURL=index.js.10f0b626b6339bda9414.hot-update.js.map