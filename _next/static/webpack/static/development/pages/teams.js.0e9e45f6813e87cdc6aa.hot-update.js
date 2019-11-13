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
    className: "jsx-3451094027" + " " + ((props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed") || ""),
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
    className: "jsx-3451094027" + " " + "closebtn",
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
      className: "jsx-3451094027" + " " + "drawer-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "" + item.href,
      className: "jsx-3451094027",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.display));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3451094027" + " " + "logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-3451094027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3451094027",
    __self: this
  }, ".sidenav.jsx-3451094027{height:100vh;width:0px;position:fixed;z-index:1001;top:0;right:0;background-color:#222;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;padding-top:60px;}.drawer-open.jsx-3451094027{width:100%;}.drawer-closed.jsx-3451094027{width:0;}.sidenav.jsx-3451094027 .closebtn.jsx-3451094027{color:white;position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;}.sidenav.jsx-3451094027 .logo-box.jsx-3451094027{padding:20px;opacity:0.3;width:100%;text-align:center;}.drawer-item.jsx-3451094027{border:none;color:white;height:auto;width:100%;margin:auto 0px;text-align:center;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.drawer-item.jsx-3451094027:hover{color:#ff5c00;background-color:#444;}.drawer-item.jsx-3451094027 a.jsx-3451094027{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvRHJhd2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CYSxBQUc4QixBQWFBLEFBR0gsQUFJRSxBQVFDLEFBTUQsQUFjRSxBQUlGLFFBbkNkLEdBSEEsQ0FPb0IsQUFjTixBQWtCaEIsQ0FwRGMsQUE0QkUsQ0FvQlUsU0EvQ1AsQ0FrQ0gsQ0FORCxLQVJMLE1BQ0ssQUFRTyxBQU1QLEFBYWYsRUEvQ2lCLFNBcUJFLEFBY0MsSUFsQ1YsR0E0QlIsR0EzQlUsS0FvQlMsQ0FjQyxFQWpDSSxjQW9CeEIsRUFjK0IsTUFqQ1gsa0JBQ0YsS0FpQ1MseUJBQ1IsVUFqQ0EsT0FrQ0QsVUFqQ2xCLE1BbUNGIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvRHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmZ1bmN0aW9uIERyYXdlcihwcm9wcykge1xuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPGRpdiBpZD1cIm15U2lkZW5hdlwiIGNsYXNzTmFtZT17cHJvcHMuaXNEcmF3ZXJPcGVuID8gXCJzaWRlbmF2IGRyYXdlci1vcGVuXCIgOiBcInNpZGVuYXYgZHJhd2VyLWNsb3NlZFwifT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5jbG9zZURyYXdlcigpfX0+JnRpbWVzOzwvYT5cbiAgICAgICAgICAgIHtwcm9wcy5zaXRlcy5tYXAoKGl0ZW0pID0+IDxkaXYgY2xhc3NOYW1lPVwiZHJhd2VyLWl0ZW1cIiAgIGtleT17aXRlbS5pZH0gc3R5bGU9e3twYWRkaW5nOiAxMH19PjxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgaXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fTwvYT48L2Rpdj4pfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tYm94XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCJzdGF0aWMvbG9nb193aGl0ZS5wbmdcIn0+XG4gICAgICAgICAgICAgICAgPC9pbWc+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnNpZGVuYXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kcmF3ZXItb3BlbntcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kcmF3ZXItY2xvc2Vke1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC5zaWRlbmF2IC5jbG9zZWJ0biB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zaWRlbmF2IC5sb2dvLWJveCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJhd2VyLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZHJhd2VyLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJhd2VyLWl0ZW0gIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cblxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7Il19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Drawer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=teams.js.0e9e45f6813e87cdc6aa.hot-update.js.map