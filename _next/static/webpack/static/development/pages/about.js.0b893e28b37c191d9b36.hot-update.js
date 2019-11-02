webpackHotUpdate("static/development/pages/about.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer.js");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bootstrap.min.css */ "./bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Layout.js";












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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "TV 77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    query: "(max-width: 922px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
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
        lineNumber: 73
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2201955011" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2201955011" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "" + "static/logo_white.png",
    className: "jsx-2201955011" + " " + "img-foreground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-2201955011",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2201955011" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2201955011" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2201955011",
    __self: this
  }, ".top-background-tiny.jsx-2201955011{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-2201955011{background-color:#20232a;height:100px;width:100%;}.top.jsx-2201955011{background-image:url(\"static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-attachment:fixed;opacity:0.6;overflow:hidden;height:auto;padding-top:50px;width:100%;color:white;text-align:center;}.top.jsx-2201955011 .img-foreground.jsx-2201955011{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.detector-box.jsx-2201955011{height:100px;top:100px;left:0px;width:auto;background-color:transparent;}.scrollimage.jsx-2201955011{height:10px;}.fitscreen.jsx-2201955011{width:100%;height:auto;}.content-container.jsx-2201955011{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:center;}.content-box.jsx-2201955011{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);position:relative;top:-50px;background:#222;padding:10px 0px;opacity:1;max-width:1024px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHYSxBQU04QyxBQVFBLEFBTTRCLEFBYzFDLEFBU0UsQUFRRCxBQUdELEFBS2dCLEFBT3lDLFdBWHhELENBSGhCLENBakJlLEFBU0QsVUFDRCxBQVdiLEVBakRlLEFBUUUsQ0FxQkgsQ0F3QmtCLEtBYmpCLElBdkNELEVBUUEsQUFxQlEsS0FXVyxJQXJDakMsRUFNQSxJQUkwQixFQXdDTSxHQXZCbkIsU0E2QlMsRUE1QlYsR0FVWixHQTNCZ0MsSUFrQmhDLElBc0IwQixFQU1aLFVBQ00sUUE5Q1ksRUF3Q1gsTUFPQSxZQU5yQixLQU9jLEdBL0NFLE9BZ0RLLEtBL0NELFlBZ0RKLElBL0NLLFFBaURuQixJQWhEbUIsaUJBQ04sV0FDQyxZQUNNLGtCQUV0QiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBNZWRpYSBmcm9tIFwicmVhY3QtbWVkaWFcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9EcmF3ZXJcIlxuXG5pbXBvcnQgXCIuLi9ib290c3RyYXAubWluLmNzc1wiXG5pbXBvcnQgXCIuLi9BcHAuY3NzXCJcblxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3Qgc2l0ZXMgPSBbXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlN0YXJ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICAgICAgaHJlZjogXCIvdGVhbXNcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVGVhbXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcIjRcIixcbiAgICAgICAgICAgIGhyZWY6XCIvbWl0Z2xpZWRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiTWl0Z2xpZWRzY2hhZnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcIjZcIixcbiAgICAgICAgICAgIGhyZWY6XCIvdmVyZWluc2hlaW1cIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVmVyZWluc2hlaW1cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI1XCIsXG4gICAgICAgICAgICBocmVmOiBcIi9rb250YWt0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8dGl0bGU+VFYgNzcgTmllZGVyYmllbDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIi8+ICAgIFxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDBcIi8+XG5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxEcmF3ZXIgc2l0ZXM9e3NpdGVzfSBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gY2xvc2VEcmF3ZXI9eygpPT4gc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKX0gLz5cblxuICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA5MjJweClcIj5cbiAgICAgICAgICAgIHsgICBcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0+IDxIZWFkZXIgc2l0ZXM9e3NpdGVzfSBvcGVuRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4odHJ1ZSl9ICBuYXZOYW1lPXtwcm9wcy5uYXZOYW1lfSBpc1RvcD17aXNUb3B9IG1vYmlsZT17bWF0Y2hlc30gPjwvSGVhZGVyPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L01lZGlhPlxuXG4gICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiBzZXRJc1RvcChpc1Zpc2libGUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhY2tncm91bmQtdGlueVwiIC8+XG4gICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuXG4gICAgICAgICAgICA8Y2VudGVyPlxuXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZm9yZWdyb3VuZFwiIHNyYz17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcInN0YXRpYy9sb2dvX3doaXRlLnBuZ1wifSAvPlxuXG4gICAgICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNlbnRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jZW50ZXI+XG5cblxuXG4gICAgICAgIDxGb290ZXIgc2l0ZXM9e3NpdGVzfSAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLXRpbnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcblxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gICAgIDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcCAgLmltZy1mb3JlZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7IFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87IFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGV0ZWN0b3ItYm94e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjcm9sbGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZml0c2NyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgIFxuXG5cblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuXG5cbiAgICA8Lz5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=about.js.0b893e28b37c191d9b36.hot-update.js.map