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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_async__WEBPACK_IMPORTED_MODULE_6__["default"], {
    promiseFn: ics_data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        isLoading = _ref2.isLoading;
    if (isLoading) return "Loading";
    if (error) return error.message;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h2", {
      className: "jsx-3354534702",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Termine"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3354534702",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Hier sehen Sie unsere n\xE4chsten Termine:"), data.items.map(function (item) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          display: "block"
        },
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
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
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
        className: "jsx-3354534702",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, item.summary)));
    }));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3354534702",
    __self: this
  }, ".h-scrollmenu.jsx-3354534702{background-color:#333;overflow:auto;white-space:nowrap;margin:0 200px;}.h-scrollmenu.jsx-3354534702>div.jsx-3354534702{display:inline-block;}span.jsx-3354534702{text-size:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENnQixBQUcyQyxBQU1ELEFBR04sZUFDbkIsTUFIQSxDQU5rQixjQUNLLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvQ2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ljb259IGZyb20gXCJhbnRkXCJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuaW1wb3J0IEFzeW5jIGZyb20gXCJyZWFjdC1hc3luY1wiXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiXG5cblxuZnVuY3Rpb24gQ2FsZW5kYXIgKHByb3BzKSB7XG4gICAgY29uc3QgVFY3N19HT09HTEVfTElOSyA9IFwiaHR0cHM6Ly9jYWxlbmRhci5nb29nbGUuY29tL2NhbGVuZGFyL2ljYWwvcW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjAlNDBncm91cC5jYWxlbmRhci5nb29nbGUuY29tL3B1YmxpYy9iYXNpYy5pY3NcIlxuICAgIGNvbnN0IGNhbF9pZCA9IFwicW9uOXNwcjB0NWJncGpobGU5NmhwbHUycjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbVwiO1xuICAgIGNvbnN0IGFwaV9rZXkgPSBcIkFJemFTeUFlRlkydFhVQ3FrTnVNcDV3SU4yaHJvdEs0bW52Wmdxa1wiXG5cbiAgICBjb25zdCBhcGlfbGluayA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzL3FvbjlzcHIwdDViZ3BqaGxlOTZocGx1MnIwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20vZXZlbnRzP2tleT1BSXphU3lBZUZZMnRYVUNxa051TXA1d0lOMmhyb3RLNG1udlpncWsmc2luZ2xlRXZlbnRzPXRydWUmb3JkZXJCeT1zdGFydFRpbWUmbWF4UmVzdWx0cz01XCJcblxuXG5cbiAgICBjb25zdCBpY3NfZGF0YSA9IGFzeW5jICgpID0+e1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlfbGluaylcbiAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dClcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9XG4gICAgXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICAgICAgPEFzeW5jIHByb21pc2VGbj17aWNzX2RhdGF9PlxuICAgICAgICAgICAgICAgIHsoe2RhdGEsIGVycm9yLCBpc0xvYWRpbmd9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gXCJMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8QmFubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5UZXJtaW5lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IaWVyIHNlaGVuIFNpZSB1bnNlcmUgbsOkY2hzdGVuIFRlcm1pbmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtcy5tYXAoKGl0ZW0pID0+IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwicGhvbmVcIiAvPjxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fT48c3Bhbj57bmV3IERhdGUoaXRlbS5zdGFydC5kYXRlVGltZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZGUtREVcIiwgeyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSl9OiA8L3NwYW4+PGJyPjwvYnI+PHNwYW4+e2l0ZW0uc3VtbWFyeX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9Bc3luYz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIC5oLXNjcm9sbG1lbnUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwMHB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmgtc2Nyb2xsbWVudSA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT4gXG5cblxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsgIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Calendar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=index.js.4fbf50b221d9f51f4161.hot-update.js.map