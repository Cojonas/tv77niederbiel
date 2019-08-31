webpackHotUpdate("static/development/pages/vereinsheim.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer.js");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bootstrap.min.css */ "./bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/components/Layout.js";











function Layout(props) {
  var sites = [{
    id: "1",
    href: "/",
    display: "Start"
  }, {
    id: "2",
    href: "/about",
    display: "Über uns"
  }, {
    id: "3",
    href: "/teams",
    display: "Teams"
  }, {
    id: "4",
    href: "/mitglied",
    display: "Mitgliedschaft"
  }, {
    id: "6",
    href: "/vereinsheim",
    display: "Vereinsheim"
  }, {
    id: "5",
    href: "/kontakt",
    display: "Kontakt"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isTop = _useState2[0],
      setIsTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isDrawerOpen = _useState4[0],
      setIsDrawerOpen = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_4__["default"], {
    query: "(max-width: 922px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, function (matches) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sites: sites,
      openDrawer: function openDrawer() {
        return setIsDrawerOpen(true);
      },
      navName: props.navName,
      isTop: isTop,
      mobile: matches,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4052830090" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4052830090" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-4052830090",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-4052830090" + " " + "img-foreground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-4052830090",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4052830090" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4052830090" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4052830090",
    __self: this
  }, ".top-background-tiny.jsx-4052830090{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-4052830090{background-color:#20232a;height:100px;width:100%;}.top.jsx-4052830090{background-image:url(\"static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-attachment:fixed;opacity:0.6;overflow:hidden;height:auto;padding-top:50px;width:100%;color:white;text-align:center;}.top.jsx-4052830090 .img-foreground.jsx-4052830090{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.detector-box.jsx-4052830090{height:100px;top:100px;left:0px;width:auto;background-color:transparent;}.scrollimage.jsx-4052830090{height:10px;}.fitscreen.jsx-4052830090{width:100%;height:auto;}.content-container.jsx-4052830090{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;}.content-box.jsx-4052830090{-webkit-box-shadow:5px 3px 15px -5px #000000;box-shadow:5px 3px 15px -5px #000000;background-color:#333;position:relative;top:-50px;padding:10px 5px;opacity:1;max-width:1024px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9uYXMvUHJvamVjdHMvdHY3N25pZWRlcmJpZWwvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZhLEFBTThDLEFBT0EsQUFNNEIsQUFjMUMsQUFTRSxBQVFELEFBR0QsQUFLZ0IsQUFNa0IsV0FWakMsQ0FIaEIsQ0FqQmUsQUFTRCxVQUNELEFBV2IsRUFoRGUsQUFPRSxDQXFCSCxDQXdCa0IsS0FiakIsSUF0Q0QsRUFPQSxBQXFCUSxLQVdXLEVBa0JRLEVBdkR6QyxFQU1BLElBSTBCLEVBd0NNLEdBdkJuQixXQUNELEdBVVosR0EzQmdDLElBa0JoQyxHQTJCMEIsQ0FMQSxvQkF2Q00sQ0E2Q1YsQ0FMdEIsaUJBTWMsU0E3Q0UsQ0E4Q0ssV0E3Q0QsTUE4Q04sVUE3Q08sQUE4Q0EsWUE3Q0EsS0E4Q0wsWUE3Q0QsQUE4Q2IsV0E3Q2MsWUFDTSxrQkFFdEIiLCJmaWxlIjoiL2hvbWUvY29qb25hcy9Qcm9qZWN0cy90djc3bmllZGVyYmllbC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwicmVhY3QtbWVkaWFcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9EcmF3ZXJcIlxuXG5pbXBvcnQgXCIuLi9ib290c3RyYXAubWluLmNzc1wiXG5pbXBvcnQgXCIuLi9BcHAuY3NzXCJcblxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3Qgc2l0ZXMgPSBbXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlN0YXJ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICAgICAgaHJlZjogXCIvdGVhbXNcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVGVhbXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcIjRcIixcbiAgICAgICAgICAgIGhyZWY6XCIvbWl0Z2xpZWRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiTWl0Z2xpZWRzY2hhZnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcIjZcIixcbiAgICAgICAgICAgIGhyZWY6XCIvdmVyZWluc2hlaW1cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVmVyZWluc2hlaW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI1XCIsXG4gICAgICAgICAgICBocmVmOiBcIi9rb250YWt0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgcmV0dXJuIDw+XG5cbiAgICAgICAgPERyYXdlciBzaXRlcz17c2l0ZXN9IGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufSBjbG9zZURyYXdlcj17KCk9PiBzZXRJc0RyYXdlck9wZW4oZmFsc2UpfSAvPlxuXG4gICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDkyMnB4KVwiPlxuICAgICAgICAgICAgeyAgIFxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPT4gPEhlYWRlciBzaXRlcz17c2l0ZXN9IG9wZW5EcmF3ZXI9eygpID0+IHNldElzRHJhd2VyT3Blbih0cnVlKX0gIG5hdk5hbWU9e3Byb3BzLm5hdk5hbWV9IGlzVG9wPXtpc1RvcH0gbW9iaWxlPXttYXRjaGVzfSA+PC9IZWFkZXI+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvTWVkaWE+XG5cbiAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9eyhpc1Zpc2libGUpID0+IHNldElzVG9wKGlzVmlzaWJsZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFja2dyb3VuZC10aW55XCIgLz5cbiAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG5cbiAgICAgICAgICAgIDxjZW50ZXI+XG5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mb3JlZ3JvdW5kXCIgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL2xvZ29fd2hpdGUucG5nXCJ9IC8+XG5cbiAgICAgICAgICAgIDwvY2VudGVyPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Y2VudGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cblxuXG5cbiAgICAgICAgPEZvb3RlciBzaXRlcz17c2l0ZXN9IC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gICAgIDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcCAgLmltZy1mb3JlZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7IFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87IFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGV0ZWN0b3ItYm94e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjcm9sbGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZml0c2NyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCAzcHggMTVweCAtNXB4ICMwMDAwMDA7IFxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiA1cHggM3B4IDE1cHggLTVweCAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTUwcHg7IFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICBcblxuXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cblxuXG4gICAgPC8+XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuIl19 */\n/*@ sourceURL=/home/cojonas/Projects/tv77niederbiel/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=vereinsheim.js.7f462af9ac9418afbd05.hot-update.js.map