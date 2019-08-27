webpackHotUpdate("static/development/pages/mitglied.js",{

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
    className: "jsx-435669112" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435669112",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-435669112" + " " + "logo-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "justify-content-center",
    xs: {
      span: 6,
      offset: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435669112" + " " + "nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, props.sites.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: item.id,
      href: item.href,
      className: "jsx-435669112" + " " + "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.display, " ");
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    className: "justify-content-center",
    xs: {
      span: 6,
      offset: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 1,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435669112" + " " + "navbar-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    type: "facebook",
    style: {
      fontSize: '40px',
      color: 'white'
    },
    theme: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BurgerIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), !props.mobile ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: {
      span: 1,
      offset: 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "435669112",
    __self: this
  }, ".header.jsx-435669112{background:#2b2b2b;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;border-bottom:1px solid #ff5c00;}.show.jsx-435669112{display:block;}.hide.jsx-435669112{display:none;}.logo-img.jsx-435669112{width:auto;height:80px;padding:10px;}.gradient-stripe.jsx-435669112{height:10px;z-index:1000;color:white;text-align:center;}span.jsx-435669112{color:white;}p.jsx-435669112{color:white;}.nav-container.jsx-435669112{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;}.navbar-icon.jsx-435669112{border:none;color:white;height:100%;margin:0px 0px;padding:10px 0px;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.navbar-item.jsx-435669112:hover{color:#ff5c00;-webkit-text-decoration:none;text-decoration:none;border-bottom:2px solid #ff5c00;}.navbar-item.jsx-435669112>a.jsx-435669112{color:white;width:100%;height:100%;text-align:center;}.white-text.jsx-435669112{color:white !important;}.my-node-enter.jsx-435669112{opacity:0;}.my-node-enter-active.jsx-435669112{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-enter-done.jsx-435669112{opacity:1;}.my-node-exit.jsx-435669112{opacity:1;}.my-node-exit-active.jsx-435669112{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-exit-done.jsx-435669112{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZhLEFBR3dDLEFBVU4sQUFHQSxBQUdGLEFBT0MsQUFTQSxBQUdBLEFBT0QsQUFTQyxBQWFFLEFBS0YsQUFRVyxBQU1iLEFBR0EsQUFJRSxBQUdGLEFBR0EsQUFJRSxVQWhCZCxBQUcyQixBQUkzQixBQUdBLEFBRzJCLEFBSTNCLENBcEZjLEFBMEJBLENBbkJBLEFBU2hCLEFBR0EsQUFnQmdCLEFBa0JELENBeERmLENBSEEsQUFzRHlCLEtBaEVWLElBaUJFLEFBMEJBLEFBMkJELEFBT2hCLENBekJnQixDQTVCQSxLQXZCQSxLQXNFTSxDQXBEdEIsQUFrQ21CLENBNUJHLEtBdkJOLFNBb0RLLEVBa0JyQixFQXJFNEIsQUF5QjVCLFNBcUNzQyxJQVZMLEFBZ0MvQixBQVVBLFdBN0ZrQixpQkE4RHBCLENBdEJzQixBQVlPLGtCQVY3QixJQXpDVSxHQW9EVyxHQW5EZSxjQW9EaEIsZ0JBR3BCLEVBdERBIiwiZmlsZSI6Ii9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXJnZXJJY29uXCJcbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcImFudGRcIlxuXG5cblxuXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcblxuXG5cbiAgICBsZXQgbmF2TGlua1NwYW47XG4gICAgaWYgKHByb3BzLmlzVG9wKSB7XG4gICAgICAgIG5hdkxpbmtTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPiA+IHtwcm9wcy5uYXZOYW1lfTwvc3Bhbj5cbiAgICB9IGVsc2Uge1xuICAgICAgICBuYXZMaW5rU3BhbiA9IDw+PC8+XG4gICAgfVxuXG5cblxuICAgIHJldHVybiA8PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICA8Um93ID5cblxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL2xvZ29fd2hpdGUucG5nXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5tb2JpbGUgPyAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiIHhzPXt7IHNwYW46IDYsIG9mZnNldDogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2l0ZXMubWFwKChpdGVtKSA9PiA8YSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCIgaHJlZj17aXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fSA8L2E+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgIFxuICAgICBcbiAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgOiAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgeHM9e3sgc3BhbjogNiwgb2Zmc2V0OiAxIH19PjwvQ29sPlxuXG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXt7IHNwYW46IDEsIG9mZnNldDogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWljb25cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXByb3BzLm1vYmlsZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiAgdHlwZT1cImZhY2Vib29rXCIgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JywgY29sb3I6ICd3aGl0ZScgfX0gdGhlbWU9XCJvdXRsaW5lZFwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8QnVyZ2VySWNvbiAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5tb2JpbGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9e3sgc3BhbjogMSwgb2Zmc2V0OiAyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPD48Lz5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cblxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaG93IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhpZGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nby1pbWcgIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ncmFkaWVudC1zdHJpcGUge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5uYXZiYXItaWNvbiB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbSA+IGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgICAgIC5teS1ub2RlLWVudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5teS1ub2RlLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubXktbm9kZS1lbnRlci1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubXktbm9kZS1leGl0LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubXktbm9kZS1leGl0LWRvbmUge1xuICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICA8Lz5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Header.js */"));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=mitglied.js.bf84d9413f68dc3801b8.hot-update.js.map