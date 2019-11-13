webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Drawer.js":
/*!******************************!*\
  !*** ./components/Drawer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Drawer.js";



function Drawer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mySidenav",
    className: "jsx-101761678" + " " + ((props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "javascript:void(0)",
    onClick: function onClick() {
      props.closeDrawer();
    },
    className: "jsx-101761678" + " " + "closebtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\xD7"), props.sites.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item.id,
      style: {
        padding: 10
      },
      className: "jsx-101761678" + " " + "drawer-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "" + item.href,
      className: "jsx-101761678",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.display));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-101761678" + " " + "logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-101761678",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "101761678",
    __self: this
  }, ".sidenav.jsx-101761678{height:100vh;width:0px;position:fixed;z-index:1001;top:0;right:0;background-color:#222;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;padding-top:60px;}.drawer-open.jsx-101761678{width:100%;}.drawer-closed.jsx-101761678{width:0;}.sidenav.jsx-101761678 .closebtn.jsx-101761678{color:white;position:absolute;top:25px;right:25px;font-size:36px;margin-left:50px;}.sidenav.jsx-101761678 .logo-box.jsx-101761678{padding:20px;opacity:0.3;width:100%;text-align:center;}.drawer-item.jsx-101761678{border:none;color:white;height:auto;width:100%;margin:auto 0px;text-align:center;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.drawer-item.jsx-101761678:hover{color:#ff5c00;background-color:#444;}.drawer-item.jsx-101761678 a.jsx-101761678{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvRHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYSxBQUc4QixBQWFBLEFBR0gsQUFJRSxBQVFDLEFBTUQsQUFjRSxBQUlGLFFBbkNkLEdBSEEsQ0FPb0IsQUFjTixBQWtCaEIsQ0FwRGMsQUE0QkUsQ0FvQlUsU0EvQ1AsQ0FrQ0gsQ0FORCxLQVJGLE1BU1MsQUFNUCxBQWFmLEVBL0NpQixDQW9CRixRQWVLLEdBZEQsQ0FwQlQsR0E0QlIsR0EzQlUsTUFrQ1UsRUFqQ0ksQUFtQkwsZ0JBZVksQ0FkL0IsS0FuQm9CLGtCQUNGLEtBaUNTLHlCQUNSLFVBakNBLE9Ba0NELFVBakNsQixNQW1DRiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0RyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5mdW5jdGlvbiBEcmF3ZXIocHJvcHMpIHtcblxuICAgIHJldHVybiA8PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJteVNpZGVuYXZcIiBjbGFzc05hbWU9e3Byb3BzLmlzRHJhd2VyT3BlbiA/IFwic2lkZW5hdiBkcmF3ZXItb3BlblwiIDogXCJzaWRlbmF2IGRyYXdlci1jbG9zZWRcIn0+XG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXsoKSA9PiB7cHJvcHMuY2xvc2VEcmF3ZXIoKX19PiZ0aW1lczs8L2E+XG4gICAgICAgICAgICB7cHJvcHMuc2l0ZXMubWFwKChpdGVtKSA9PiA8ZGl2IGNsYXNzTmFtZT1cImRyYXdlci1pdGVtXCIgICBrZXk9e2l0ZW0uaWR9IHN0eWxlPXt7cGFkZGluZzogMTB9fT48YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIGl0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX08L2E+PC9kaXY+KX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL2xvZ29fd2hpdGUucG5nXCJ9PlxuICAgICAgICAgICAgICAgIDwvaW1nPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cblxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgIC5zaWRlbmF2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZHJhd2VyLW9wZW57XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZHJhd2VyLWNsb3NlZHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuc2lkZW5hdiAuY2xvc2VidG4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2lkZW5hdiAubG9nby1ib3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdlci1pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRyYXdlci1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdlci1pdGVtICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG5cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Drawer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=index.js.ff1ad73549a2c6d91d28.hot-update.js.map