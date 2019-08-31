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
var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/components/Header.js";







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
    className: "jsx-40959053" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-40959053",
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
    className: "jsx-40959053" + " " + "logo-img",
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
    className: "jsx-40959053" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.sites.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: item.id,
      href: "" + item.href,
      className: "jsx-40959053" + " " + "navbar-item",
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
    className: "jsx-40959053" + " " + "navbar-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: function onClick() {
      return window.location.href = "http://google.de";
    },
    className: "jsx-40959053",
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
    className: "jsx-40959053",
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
    id: "40959053",
    __self: this
  }, ".header.jsx-40959053{background:#2b2b2b;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;border-bottom:1px solid #ff5c00;}.show.jsx-40959053{display:block;}.hide.jsx-40959053{display:none;}.logo-img.jsx-40959053{width:auto;height:80px;padding:10px 0px;}.gradient-stripe.jsx-40959053{height:10px;z-index:1000;color:white;text-align:center;}span.jsx-40959053{color:white;}p.jsx-40959053{color:white;}.nav-container.jsx-40959053{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.navbar-icon.jsx-40959053{border:none;color:white;height:100%;margin:0px 0px;padding:10px 0px;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.navbar-item.jsx-40959053:hover{color:#ff5c00;-webkit-text-decoration:none;text-decoration:none;border-bottom:2px solid #ff5c00;}.navbar-item.jsx-40959053>a.jsx-40959053{color:white;width:100%;height:100%;text-align:center;}.white-text.jsx-40959053{color:white !important;}.my-node-enter.jsx-40959053{opacity:0;}.my-node-enter-active.jsx-40959053{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-enter-done.jsx-40959053{opacity:1;}.my-node-exit.jsx-40959053{opacity:1;}.my-node-exit-active.jsx-40959053{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-exit-done.jsx-40959053{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VhLEFBR3dDLEFBVU4sQUFHQSxBQUdGLEFBUUMsQUFTQSxBQUdBLEFBT0QsQUFTQyxBQWFFLEFBS0YsQUFRVyxBQU1iLEFBR0EsQUFJRSxBQUdGLEFBR0EsQUFJRSxVQWhCZCxBQUcyQixBQUkzQixBQUdBLEFBRzJCLEFBSTNCLENBckZjLEFBMkJBLENBbkJBLEFBU2hCLEFBR0EsQUFnQmdCLEFBa0JELENBekRmLENBSEEsQUF1RHlCLEtBakVWLElBaUJNLEFBMkJKLEFBMkJELEFBT2hCLENBekJnQixDQTVCQSxLQXhCQSxLQXVFTSxDQWxCSCxDQTVCRyxHQU50QixFQWxCZ0IsU0FxREssRUFrQnJCLEVBdEU0QixBQTBCNUIsU0FxQ3NDLElBVkwsQUFnQy9CLEFBVUEsV0E5RmtCLGlCQStEcEIsQ0F0QnNCLEFBWU8sa0JBVjdCLElBMUNVLEdBcURXLEdBcERlLGNBcURoQixnQkFHcEIsRUF2REEiLCJmaWxlIjoiL2hvbWUvY29qb25hcy9Qcm9qZWN0cy90djc3bmllZGVyYmllbC9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1cmdlckljb25cIlxuaW1wb3J0IE1lZGlhIGZyb20gJ3JlYWN0LW1lZGlhJztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5cbmltcG9ydCB7IEljb24gfSBmcm9tIFwiYW50ZFwiXG5cblxuXG5cbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuXG5cblxuICAgIGxldCBuYXZMaW5rU3BhbjtcbiAgICBpZiAocHJvcHMuaXNUb3ApIHtcbiAgICAgICAgbmF2TGlua1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+ID4ge3Byb3BzLm5hdk5hbWV9PC9zcGFuPlxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkxpbmtTcGFuID0gPD48Lz5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBub0d1dHRlcnM+XG5cbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17eyBzcGFuOiAxIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZj0gcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9cIiB9IGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL2xvZ29fd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5tb2JpbGUgPyAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgeHM9e3sgc3BhbjogMTAgfX0geGw9e3sgc3BhbjogOH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zaXRlcy5tYXAoKGl0ZW0pID0+IDxhIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIiBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIGl0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX0gPC9hPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8Q29sICB4cz17eyBzcGFuOiAxMH19PjwvQ29sPlxuXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDEsIG9mZnNldDogMCB9fSBtZD17eyBzcGFuOiAxfX0geGw9e3tzcGFuIDogMX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLm1vYmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vZ29vZ2xlLmRlXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uICB0eXBlPVwiZmFjZWJvb2tcIiBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnLCBjb2xvcjogJ3doaXRlJywgZmxvYXQ6IFwicmlnaHRcIiwgcGFkZGluZ1JpZ2h0OiAxNX19IHRoZW1lPVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHByb3BzLm9wZW5EcmF3ZXIoKX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXJnZXJJY29uICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG5cblxuXG5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNob3cge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JhZGllbnQtc3RyaXBlIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubmF2YmFyLWljb24ge1xuXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW0gPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC53aGl0ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcblxuXG5cbiAgICAgICAgICAgICAgICAubXktbm9kZS1lbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubXktbm9kZS1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZW50ZXItZG9uZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5teS1ub2RlLWV4aXQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgPC8+XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Header.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.4c5cbcf55bc3ea8815ef.hot-update.js.map