webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
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







function Calendar() {
  var TV77_GOOGLE_LINK = "https://calendar.google.com/calendar/ical/qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com/public/basic.ics";
  var cal_id = "qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com";
  var api_key = "AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk";
  var api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var options = {
    url: api_link,
    method: "GET"
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_7___default()(options).then(function (response) {
      console.log("got a response: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(response));
      setData(response.data);
    })["catch"](function (error) {
      console.log(error.message);
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    className: "jsx-1855298371",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Termine"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1855298371",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Unsere n\xE4chsten Events und Termine:"), data.items ? data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      style: {
        padding: 10
      },
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      style: {
        fontWeight: "bold"
      },
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, new Date(item.start.date).toLocaleDateString("de-DE", {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }), ": "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1855298371",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, item.summary));
  }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "https://calendar.google.com/calendar/embed?src=qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com&ctz=Europe%2FBerlin",
    className: "jsx-1855298371" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Zum Kalender")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1855298371",
    __self: this
  }, ".h-scrollmenu.jsx-1855298371{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-1855298371>div.jsx-1855298371{display:inline-block;}span.jsx-1855298371{text-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9DYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGdCLEFBRzJDLEFBTUgsQUFJRSxBQUdOLGVBQ25CLElBUG1CLEVBSW5CLENBVmtCLFlBT2xCLEVBTnVCLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9DYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi9Mb2FkaW5nU3Bpbm5lclwiXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cblxuZnVuY3Rpb24gQ2FsZW5kYXIoKSB7XG4gICAgY29uc3QgVFY3N19HT09HTEVfTElOSyA9IFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2ljYWwvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjAlNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tL3B1YmxpYy9iYXNpYy5pY3NcIlxuICAgIGNvbnN0IGNhbF9pZCA9IFwicW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbVwiO1xuICAgIGNvbnN0IGFwaV9rZXkgPSBcIkFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52Wmdxa1wiXG5cbiAgICBjb25zdCBhcGlfbGluayA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzL3FvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20vZXZlbnRzP2tleT1BSXphU3lBZUZZMnRYVUNxa051TXA1d0lOMmhyb3RLNG1udlpncWsmc2luZ2xlRXZlbnRzPXRydWUmb3JkZXJCeT1zdGFydFRpbWUmbWF4UmVzdWx0cz01XCJcblxuXG5cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcblxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBhcGlfbGluaywgXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIlxuICAgICAgICAgXG4gICAgfVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zKG9wdGlvbnMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ290IGEgcmVzcG9uc2U6IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe2NvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICA8aDI+VGVybWluZTwvaDI+XG4gICAgICAgICAgICA8cD5VbnNlcmUgbsOkY2hzdGVuIEV2ZW50cyB1bmQgVGVybWluZTo8L3A+XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbXMgPyBkYXRhLml0ZW1zLm1hcCgoaXRlbSkgPT4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIgfX0+e25ldyBEYXRlKGl0ZW0uc3RhcnQuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZGUtREVcIiwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9OiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48c3Bhbj57aXRlbS5zdW1tYXJ5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pICA6ICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8YSBocmVmPXtcImh0dHBzOi8vY2FsZW5kYXIuZ29vZ2xlLmNvbS9jYWxlbmRhci9lbWJlZD9zcmM9cW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjAlNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tJmN0ej1FdXJvcGUlMkZCZXJsaW5cIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPlp1bSBLYWxlbmRlcjwvYT5cblxuICAgICAgICA8L0Jhbm5lcj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMDBweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oLXNjcm9sbG1lbnUgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjAwcHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaC1zY3JvbGxtZW51ID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsgIl19 */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.cb2d9d585820a51b1515.hot-update.js.map