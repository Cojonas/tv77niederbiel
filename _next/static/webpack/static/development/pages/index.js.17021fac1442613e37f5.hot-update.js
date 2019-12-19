webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-2917027217" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2917027217",
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
    className: "jsx-2917027217" + " " + "logo-img",
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
    className: "jsx-2917027217" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.sites.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: item.id,
      href: "" + item.href,
      className: "jsx-2917027217" + " " + "navbar-item",
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
    className: "jsx-2917027217" + " " + "navbar-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return window.location.href = "https://www.facebook.com/TV-77-Niederbiel-612990049042372/";
    },
    className: "jsx-2917027217",
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
    className: "jsx-2917027217",
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
    id: "2917027217",
    __self: this
  }, ".header.jsx-2917027217{background:#000;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;border-bottom:1px solid #ff5c00;}.show.jsx-2917027217{display:block;}.hide.jsx-2917027217{display:none;}.logo-img.jsx-2917027217{width:auto;height:80px;padding:10px;}span.jsx-2917027217{color:white;}p.jsx-2917027217{color:white;}.nav-container.jsx-2917027217{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.navbar-icon.jsx-2917027217{border:none;color:white;height:100%;margin:0px 0px;padding:10px 0px;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.navbar-item.jsx-2917027217:hover{color:#ff5c00;-webkit-text-decoration:none;text-decoration:none;border-bottom:2px solid #ff5c00;}.navbar-item.jsx-2917027217>a.jsx-2917027217{color:white;width:100%;height:100%;text-align:center;}.white-text.jsx-2917027217{color:white !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFYSxBQUdxQyxBQVVILEFBR0EsQUFHRixBQU9DLEFBR0EsQUFHRCxBQU9DLEFBV0UsQUFLRixBQU1XLFdBekNYLEFBYUEsQ0FOaEIsQUFHQSxBQVVnQixBQWdCRCxDQXZDZixDQUhBLEFBcUN5QixFQS9DVixPQWlCRSxBQWFBLEFBdUJELEFBS2hCLENBckJnQixHQXBDQSxRQXFETSxDQWxDdEIsQUFrQm1CLEdBcENILFlBcUNLLENBcENPLENBb0Q1QixXQVBzQyxJQVJMLFFBcENiLG9CQTZDcEIsQ0FsQnNCLEFBVU8sa0JBVDdCLENBM0JVLE1BQzBCLEFBb0NmLGlCQUNELGVBcENwQixDQXFDQSIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1cmdlckljb25cIlxuaW1wb3J0IE1lZGlhIGZyb20gJ3JlYWN0LW1lZGlhJztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5cbmltcG9ydCB7IEljb24gfSBmcm9tIFwiYW50ZFwiXG5cblxuXG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuXG5cblxuICAgIGxldCBuYXZMaW5rU3BhbjtcbiAgICBpZiAocHJvcHMuaXNUb3ApIHtcbiAgICAgICAgbmF2TGlua1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+ID4ge3Byb3BzLm5hdk5hbWV9PC9zcGFuPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkxpbmtTcGFuID0gPD48Lz5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBub0d1dHRlcnM+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZj0gcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9cIiB9IGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL2xvZ29fd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5tb2JpbGUgPyAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgeHM9e3sgc3BhbjogMTAgfX0geGw9e3sgc3BhbjogOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zaXRlcy5tYXAoKGl0ZW0pID0+IDxhIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIGl0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX0gPC9hPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8Q29sICB4cz17eyBzcGFuOiAxMH19PjwvQ29sPlxuXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDEsIG9mZnNldDogMCB9fSBtZD17eyBzcGFuOiAxfX0geGw9e3tzcGFuIDogMX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLm1vYmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vVFYtNzctTmllZGVyYmllbC02MTI5OTAwNDkwNDIzNzIvXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uICB0eXBlPVwiZmFjZWJvb2tcIiBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnLCBjb2xvcjogJ3doaXRlJywgZmxvYXQ6IFwicmlnaHRcIiwgcGFkZGluZ1JpZ2h0OiAxNX19IHRoZW1lPVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLm9wZW5EcmF3ZXIoKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXJnZXJJY29uICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG5cblxuXG5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5uYXZiYXItaWNvbiB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICAgI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICA8Lz5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.17021fac1442613e37f5.hot-update.js.map