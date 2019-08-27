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
var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/components/Drawer.js";



function Drawer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "mySidenav",
    className: "jsx-604355056" + " " + ((props.isDrawerOpen ? "sidenav drawer-open" : "sidenav drawer-closed") || ""),
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
    className: "jsx-604355056" + " " + "closebtn",
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
      className: "jsx-604355056",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.href,
      className: "jsx-604355056" + " " + "drawer-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.display));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-604355056" + " " + "logo-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-604355056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "604355056",
    __self: this
  }, ".sidenav.jsx-604355056{height:100vh;width:0px;position:fixed;z-index:1001;top:0;right:0;background-color:#222;overflow-x:hidden;-webkit-transition:0.5s;transition:0.5s;padding-top:60px;}.drawer-open.jsx-604355056{width:300px;}.drawer-closed.jsx-604355056{width:0;}.sidenav.jsx-604355056 .closebtn.jsx-604355056{color:#ff5c00;position:absolute;top:0;right:25px;font-size:36px;margin-left:50px;}.sidenav.jsx-604355056 .logo-box.jsx-604355056{padding:20px;opacity:0.3;width:100%;text-align:center;}.drawer-item.jsx-604355056{border:none;color:white;height:100%;width:100%;background-color:transparent;text-transform:uppercase;font-weight:bold;font-size:1.2em;}.drawer-item.jsx-604355056:hover{color:#ff5c00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9EcmF3ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJhLEFBRzhCLEFBYUMsQUFHSixBQUlJLEFBU0QsQUFNRCxBQWFFLFFBL0JoQixJQUhBLEFBc0JjLENBbkNGLEFBNkJFLENBUk0sQUEyQnRCLFNBL0NtQixDQW1DSCxDQU5ELE9BUkwsSUFTWSxBQU1QLEVBbkNFLEFBcUJGLFNBZ0JrQixFQWZkLEVBckJULEdBNkJSLEdBNUJVLE9BcUJTLENBcEJLLFdBbUNHLEtBZDNCLE1BcEJvQixjQW1DRCxJQWxDRCxhQW1DQSxnQkFFcEIsV0FwQ3FCLGlCQUNuQiIsImZpbGUiOiIvaG9tZS9jb2pvbmFzL1Byb2plY3RzL3R2NzduaWVkZXJiaWVsL2NvbXBvbmVudHMvRHJhd2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmZ1bmN0aW9uIERyYXdlcihwcm9wcykge1xuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPGRpdiBpZD1cIm15U2lkZW5hdlwiIGNsYXNzTmFtZT17cHJvcHMuaXNEcmF3ZXJPcGVuID8gXCJzaWRlbmF2IGRyYXdlci1vcGVuXCIgOiBcInNpZGVuYXYgZHJhd2VyLWNsb3NlZFwifT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9eygpID0+IHtwcm9wcy5jbG9zZURyYXdlcigpfX0+JnRpbWVzOzwvYT5cbiAgICAgICAgICAgIHtwcm9wcy5zaXRlcy5tYXAoKGl0ZW0pID0+IDxkaXYga2V5PXtpdGVtLmlkfSBzdHlsZT17e3BhZGRpbmc6IDEwfX0+PGEgY2xhc3NOYW1lPVwiZHJhd2VyLWl0ZW1cIiAgaHJlZj17aXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fTwvYT48L2Rpdj4pfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28tYm94XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCJzdGF0aWMvbG9nb193aGl0ZS5wbmdcIn0+XG4gICAgICAgICAgICAgICAgPC9pbWc+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgLnNpZGVuYXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kcmF3ZXItb3BlbntcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZHJhd2VyLWNsb3NlZHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuc2lkZW5hdiAuY2xvc2VidG4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1YzAwO1xuXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNpZGVuYXYgLmxvZ28tYm94IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcmF3ZXItaXRlbSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kcmF3ZXItaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjVjMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG5cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyOyJdfQ== */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Drawer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ })

})
//# sourceMappingURL=index.js.9a545b93ef5743dad17f.hot-update.js.map