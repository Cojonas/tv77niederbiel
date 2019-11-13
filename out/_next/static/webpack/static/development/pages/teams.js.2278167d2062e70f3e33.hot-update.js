webpackHotUpdate("static/development/pages/teams.js",{

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
    className: "jsx-3235133575" + " " + ((props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed") || ""),
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
    className: "jsx-3235133575" + " " + "closebtn",
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
      className: "jsx-3235133575" + " " + "drawer-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "" + item.href,
      className: "jsx-3235133575",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.display));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3235133575" + " " + "logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-3235133575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3235133575",
    __self: this
  }, ".sidenav.jsx-3235133575{height:100vh;width:0px;position:fixed;z-index:1001;top:0;right:0;background-color:#222;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;padding-top:60px;}.drawer-open.jsx-3235133575{width:100%;}.drawer-closed.jsx-3235133575{width:0;}.sidenav.jsx-3235133575 .closebtn.jsx-3235133575{color:white;position:absolute;top:5px;right:20px;font-size:36px;}.sidenav.jsx-3235133575 .logo-box.jsx-3235133575{padding:20px;opacity:0.3;width:100%;text-align:center;}.drawer-item.jsx-3235133575{border:none;color:white;height:auto;width:100%;margin:auto 0px;text-align:center;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.drawer-item.jsx-3235133575:hover{color:#ff5c00;background-color:#444;}.drawer-item.jsx-3235133575 a.jsx-3235133575{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvRHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYSxBQUc4QixBQWFBLEFBR0gsQUFJRSxBQU9DLEFBTUQsQUFjRSxBQUlGLFFBbENkLEdBSEEsQ0FPb0IsQUFhTixBQWtCaEIsQ0FuRGMsQUEyQkUsQ0FvQlUsU0E5Q1AsQ0FpQ0gsQ0FORCxLQVBILE1BUVUsQUFNUCxBQWFmLEVBOUNpQixBQW9CRixTQWNLLEVBYkQsRUFwQlQsR0EyQlIsR0ExQlUsTUFpQ1UsQ0FicEIsQ0FuQndCLGdCQWlDTyxNQWhDWCxrQkFDRixLQWdDUyx5QkFDUixVQWhDQSxPQWlDRCxVQWhDbEIsTUFrQ0YiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9EcmF3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuZnVuY3Rpb24gRHJhd2VyKHByb3BzKSB7XG5cbiAgICByZXR1cm4gPD5cblxuICAgICAgICA8ZGl2IGlkPVwibXlTaWRlbmF2XCIgY2xhc3NOYW1lPXtwcm9wcy5pc0RyYXdlck9wZW4gPyBcInNpZGVuYXYgZHJhd2VyLW9wZW5cIiA6IFwic2lkZW5hdiBkcmF3ZXItY2xvc2VkXCJ9PlxuICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT1cImNsb3NlYnRuXCIgb25DbGljaz17KCkgPT4ge3Byb3BzLmNsb3NlRHJhd2VyKCl9fT4mdGltZXM7PC9hPlxuICAgICAgICAgICAge3Byb3BzLnNpdGVzLm1hcCgoaXRlbSkgPT4gPGRpdiBjbGFzc05hbWU9XCJkcmF3ZXItaXRlbVwiICAga2V5PXtpdGVtLmlkfSBzdHlsZT17e3BhZGRpbmc6IDEwfX0+PGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBpdGVtLmhyZWZ9PntpdGVtLmRpc3BsYXl9PC9hPjwvZGl2Pil9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcInN0YXRpYy9sb2dvX3doaXRlLnBuZ1wifT5cbiAgICAgICAgICAgICAgICA8L2ltZz5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAuc2lkZW5hdiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAxO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRyYXdlci1vcGVue1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRyYXdlci1jbG9zZWR7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2lkZW5hdiAubG9nby1ib3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdlci1pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRyYXdlci1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRyYXdlci1pdGVtICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG5cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Drawer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=teams.js.2278167d2062e70f3e33.hot-update.js.map