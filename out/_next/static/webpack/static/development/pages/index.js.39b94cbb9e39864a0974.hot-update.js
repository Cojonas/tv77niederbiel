webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Banner */ "./components/Banner.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/components/Calendar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






function Calendar() {
  var TV77_GOOGLE_LINK = "https://calendar.google.com/calendar/ical/qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com/public/basic.ics";
  var cal_id = "qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com";
  var api_key = "AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk";
  var api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var options = {
    url: api_link,
    method: "GET"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    function fetchData() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_7___default.a.get(api_link));

            case 2:
              result = _context.sent;
              setData(result);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1855298371",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Termine"), __jsx("p", {
    className: "jsx-1855298371",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Unsere n\xE4chsten Events und Termine:"), data.items ? data.items.map(function (item) {
    return __jsx("div", {
      style: {
        padding: 10
      },
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      style: {
        fontWeight: "bold"
      },
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.start.date ? new Date(item.start.date).toLocaleDateString("de-DE", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : new Date(item.start.dateTime).toLocaleDateString("de-DE", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), ": "), __jsx("br", {
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, item.summary));
  }) : __jsx(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("a", {
    href: "https://calendar.google.com/calendar/embed?src=qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com&ctz=Europe%2FBerlin",
    className: "jsx-1855298371" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Zum Kalender")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1855298371",
    __self: this
  }, ".h-scrollmenu.jsx-1855298371{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{display:inline-block;}span.jsx-1855298371{text-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9DYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGdCLEFBRzJDLEFBTUgsQUFJRSxBQUdOLGVBQ25CLElBUG1CLEVBSW5CLENBVmtCLFlBT2xCLEVBTnVCLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9DYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi9Mb2FkaW5nU3Bpbm5lclwiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuZnVuY3Rpb24gQ2FsZW5kYXIoKSB7XG4gICAgY29uc3QgVFY3N19HT09HTEVfTElOSyA9IFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2ljYWwvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjAlNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tL3B1YmxpYy9iYXNpYy5pY3NcIlxuICAgIGNvbnN0IGNhbF9pZCA9IFwicW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbVwiO1xuICAgIGNvbnN0IGFwaV9rZXkgPSBcIkFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52Wmdxa1wiXG5cbiAgICBjb25zdCBhcGlfbGluayA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzL3FvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20vZXZlbnRzP2tleT1BSXphU3lBZUZZMnRYVUNxa051TXA1d0lOMmhyb3RLNG1udlpncWsmc2luZ2xlRXZlbnRzPXRydWUmb3JkZXJCeT1zdGFydFRpbWUmbWF4UmVzdWx0cz01XCJcblxuXG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcblxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBhcGlfbGluaywgXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGFwaV9saW5rKVxuICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQpXG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgfSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICAgIDxoMj5UZXJtaW5lPC9oMj5cbiAgICAgICAgICAgIDxwPlVuc2VyZSBuw6RjaHN0ZW4gRXZlbnRzIHVuZCBUZXJtaW5lOjwvcD5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtcyA/IGRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT57aXRlbS5zdGFydC5kYXRlID8gbmV3IERhdGUoaXRlbS5zdGFydC5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJkZS1ERVwiLCB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9KSA6IG5ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZVRpbWUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImRlLURFXCIsIHsgd2Vla2RheTogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pfTogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9iclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PHNwYW4+e2l0ZW0uc3VtbWFyeX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSAgOiAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGEgaHJlZj17XCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvZW1iZWQ/c3JjPXFvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwJTQwZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbSZjdHo9RXVyb3BlJTJGQmVybGluXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5adW0gS2FsZW5kZXI8L2E+XG5cbiAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjAwcHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51ID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwMHB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7ICJdfQ== */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.39b94cbb9e39864a0974.hot-update.js.map