webpackHotUpdate("static/development/pages/teams.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BurgerIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BurgerIcon */ "./components/BurgerIcon.js");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Header.js";







function Header(props) {
  var navLinkSpan;

  if (props.isTop) {
    navLinkSpan = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "white-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, " > ", props.navName);
  } else {
    navLinkSpan = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1290116801" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1290116801",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-between",
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    onClick: function onClick() {
      return window.location.href = "" + "/";
    },
    src: "" + "static/logo_white.png",
    className: "jsx-1290116801" + " " + "logo-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "justify-content-center",
    xs: {
      span: 10
    },
    xl: {
      span: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1290116801" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.sites.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: item.id,
      href: "" + item.href,
      className: "jsx-1290116801" + " " + "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.display, " ");
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 1,
      offset: 0
    },
    md: {
      span: 1
    },
    xl: {
      span: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1290116801" + " " + "navbar-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return window.location.href = "https://www.facebook.com/TV-77-Niederbiel-612990049042372/";
    },
    className: "jsx-1290116801",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    type: "facebook",
    style: {
      fontSize: '40px',
      color: 'white',
      "float": "right",
      paddingRight: 15
    },
    theme: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return props.openDrawer();
    },
    className: "jsx-1290116801",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BurgerIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1290116801",
    __self: this
  }, ".header.jsx-1290116801{background:#2b2b2b;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;border-bottom:1px solid #ff5c00;}.show.jsx-1290116801{display:block;}.hide.jsx-1290116801{display:none;}.logo-img.jsx-1290116801{width:auto;height:80px;padding:10px;}span.jsx-1290116801{color:white;}p.jsx-1290116801{color:white;}.nav-container.jsx-1290116801{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.navbar-icon.jsx-1290116801{border:none;color:white;height:100%;margin:0px 0px;padding:10px 0px;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.navbar-item.jsx-1290116801:hover{color:#ff5c00;-webkit-text-decoration:none;text-decoration:none;border-bottom:2px solid #ff5c00;}.navbar-item.jsx-1290116801>a.jsx-1290116801{color:white;width:100%;height:100%;text-align:center;}.white-text.jsx-1290116801{color:white !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYSxBQUd3QyxBQVVOLEFBR0EsQUFHRixBQU9DLEFBR0EsQUFHRCxBQU9DLEFBV0UsQUFLRixBQU1XLFdBekNYLEFBYUEsQ0FOaEIsQUFHQSxBQVVnQixBQWdCRCxDQXZDZixDQUhBLEFBcUN5QixLQS9DVixJQWlCRSxBQWFBLEFBdUJELEFBS2hCLENBckJnQixNQXBDQSxLQXFETSxDQWxDdEIsQUFrQm1CLE1BcENILFNBcUNLLEVBZ0JyQixFQXBENEIsU0E2Q1UsSUFSTCxXQXBDYixpQkE2Q3BCLENBbEJzQixBQVVPLGtCQVQ3QixJQTNCVSxHQXFDVyxHQXBDZSxjQXFDaEIsZ0JBQ3BCLEVBckNBIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1cmdlckljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVyZ2VySWNvblwiXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcblxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJhbnRkXCJcblxuXG5cblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG5cblxuXG4gICAgbGV0IG5hdkxpbmtTcGFuO1xuICAgIGlmIChwcm9wcy5pc1RvcCkge1xuICAgICAgICBuYXZMaW5rU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj4gPiB7cHJvcHMubmF2TmFtZX08L3NwYW4+XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmF2TGlua1NwYW4gPSA8PjwvPlxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gPD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIG5vR3V0dGVycz5cblxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmPSBwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL1wiIH0gY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCJzdGF0aWMvbG9nb193aGl0ZS5wbmdcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLm1vYmlsZSA/ICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIiB4cz17eyBzcGFuOiAxMCB9fSB4bD17eyBzcGFuOiA4fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNpdGVzLm1hcCgoaXRlbSkgPT4gPGEga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgaXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fSA8L2E+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgIFxuICAgICBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxDb2wgIHhzPXt7IHNwYW46IDEwfX0+PC9Db2w+XG5cbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogMSwgb2Zmc2V0OiAwIH19IG1kPXt7IHNwYW46IDF9fSB4bD17e3NwYW4gOiAxfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcHJvcHMubW9iaWxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UVi03Ny1OaWVkZXJiaWVsLTYxMjk5MDA0OTA0MjM3Mi9cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gIHR5cGU9XCJmYWNlYm9va1wiIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcsIGNvbG9yOiAnd2hpdGUnLCBmbG9hdDogXCJyaWdodFwiLCBwYWRkaW5nUmlnaHQ6IDE1fX0gdGhlbWU9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcHJvcHMub3BlbkRyYXdlcigpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1cmdlckljb24gIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cblxuXG5cblxuICAgICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzJiMmIyYjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28taW1nICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm5hdmJhci1pY29uIHtcblxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW0gPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2hpdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuICAgIDwvPlxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=teams.js.1ce1370ab0e5ddd116d2.hot-update.js.map