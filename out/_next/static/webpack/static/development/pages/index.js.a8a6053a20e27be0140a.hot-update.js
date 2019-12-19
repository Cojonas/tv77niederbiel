webpackHotUpdate("static/development/pages/index.js",{

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
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "TV 77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-1831581497",
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
    className: "jsx-1831581497" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1831581497" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1831581497",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1831581497" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1831581497" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1831581497",
    __self: this
  }, ".top-background-tiny.jsx-1831581497{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-1831581497{background-color:#20232a;height:100px;width:100%;}.top.jsx-1831581497{background-image:url(\"static/tennis_court_sand.jpg\");background-size:cover;background-repeat:no-repeat;background-attachment:fixed;opacity:0.6;overflow:hidden;height:300px;padding-top:50px;width:100%;color:white;text-align:center;}.top.jsx-1831581497 .img-foreground.jsx-1831581497{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-1831581497{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:center;}.content-box.jsx-1831581497{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);position:relative;top:-150px;background:#222;padding:10px 0px;opacity:1;max-width:1024px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHYSxBQUk4QyxBQU1BLEFBTTRCLEFBYzFDLEFBUWdCLEFBT3lDLGFBZHpELFlBMUJBLEFBTUUsQ0FxQkgsQ0FPa0IsU0FqQ2xCLEVBTUEsQUFxQlEsU0ExQnRCLEVBTUEsSUFJMEIsRUF1Qk0sR0FObkIsU0FZUyxFQVhWLE1BakJvQixJQWtCaEMsSUFLMEIsRUFNWCxXQUNLLE9BN0JZLEVBdUJYLE9BT0EsV0FOckIsTUFPYyxFQTlCRSxRQStCSyxJQTlCRCxhQStCSixHQTlCTSxTQWtDdEIsSUFqQ3FCLGlCQUNOLFdBQ0MsWUFDTSxrQkFFdEIiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCJcblxuaW1wb3J0IFwiLi4vYm9vdHN0cmFwLm1pbi5jc3NcIlxuaW1wb3J0IFwiLi4vQXBwLmNzc1wiXG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHNpdGVzID0gW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL3RlYW1zXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlRlYW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6XCI0XCIsXG4gICAgICAgICAgICBocmVmOlwiL21pdGdsaWVkXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIk1pdGdsaWVkc2NoYWZ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6XCI2XCIsXG4gICAgICAgICAgICBocmVmOlwiL3ZlcmVpbnNoZWltXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlZlcmVpbnNoZWltXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNVwiLFxuICAgICAgICAgICAgaHJlZjogXCIva29udGFrdFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJLb250YWt0XCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPlRWIDc3IE5pZWRlcmJpZWw8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIvPiAgICBcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIvPlxuXG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8RHJhd2VyIHNpdGVzPXtzaXRlc30gaXNEcmF3ZXJPcGVuPXtpc0RyYXdlck9wZW59IGNsb3NlRHJhd2VyPXsoKT0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9IC8+XG5cbiAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogOTIycHgpXCI+XG4gICAgICAgICAgICB7ICAgXG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9PiA8SGVhZGVyIHNpdGVzPXtzaXRlc30gb3BlbkRyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKHRydWUpfSAgbmF2TmFtZT17cHJvcHMubmF2TmFtZX0gaXNUb3A9e2lzVG9wfSBtb2JpbGU9e21hdGNoZXN9ID48L0hlYWRlcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9NZWRpYT5cblxuICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gc2V0SXNUb3AoaXNWaXNpYmxlKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cblxuICAgICAgICAgICAgPGNlbnRlcj5cblxuXG4gICAgICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGNlbnRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jZW50ZXI+XG5cblxuXG4gICAgICAgIDxGb290ZXIgc2l0ZXM9e3NpdGVzfSAvPlxuICAgICAgICA8c3R5bGU+XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG48L3N0eWxlPlxuXG5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLXRpbnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtY29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3Age1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzdGF0aWMvdGVubmlzX2NvdXJ0X3NhbmQuanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHggICAgIDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcCAgLmltZy1mb3JlZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7IFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87IFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuXG5cblxuICAgIDwvPlxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.a8a6053a20e27be0140a.hot-update.js.map