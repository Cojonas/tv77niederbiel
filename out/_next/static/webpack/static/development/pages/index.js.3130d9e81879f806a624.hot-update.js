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
/* harmony import */ var _NameBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NameBadge */ "./components/NameBadge.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Drawer */ "./components/Drawer.js");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bootstrap.min.css */ "./bootstrap.min.css");
/* harmony import */ var _bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../App.css */ "./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _BurgerIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BurgerIcon */ "./components/BurgerIcon.js");

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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      isMobile = _useState6[0],
      setIsMobile = _useState6[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var backgroundStyle = {};

  if (props.pictures) {
    backgroundStyle = {
      backgroundImage: 'url(\"' + props.pictures[current].picture + '\"'
    };
    react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
      var next = (current + 1) % props.pictures.length;
      var id = setTimeout(function () {
        return setCurrent(next);
      }, 5000);
      return function () {
        return clearTimeout(id);
      };
    }, [current]);
  } else {
    backgroundStyle = {
      backgroundImage: "url(/static/tennis_court_sand.jpg)"
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    charSet: "UTF-8",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "TV77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    closeDrawer: function closeDrawer() {
      return setIsDrawerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_6__["default"], {
    query: "(max-width: 922px)",
    onChange: function onChange(matches) {
      return setIsMobile(matches);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), isMobile ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BurgerIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_NameBadge__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), " ") : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sites: sites,
    isDrawerOpen: isDrawerOpen,
    toggleDrawer: function toggleDrawer() {
      return setIsDrawerOpen(!isDrawerOpen);
    },
    navName: props.navName,
    isTop: isTop,
    mobile: isMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: backgroundStyle,
    className: "jsx-1817120976" + " " + "backgroundGallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onChange: function onChange(isVisible) {
      return setIsTop(isVisible);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "stickyBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "topTextWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-1817120976" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, props.title)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1817120976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1817120976" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sites: sites,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1817120976",
    __self: this
  }, ".backgroundGallery.jsx-1817120976{background :url(\"/static/clubheim_draussen.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;min-height:500px;position:relative;}.stickyBottom.jsx-1817120976{width:100%;position:absolute;padding:10px;bottom:0;background:linear-gradient(180deg,rgba(17,17,17,0) 0%,rgba(17,17,17,0.2) 8%,rgba(17,17,17,0.80) 15%,rgba(17,17,17,1) 100%);}.topTextWrapper.jsx-1817120976{max-width:1024px;}.top-background-tiny.jsx-1817120976{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-1817120976{background-color:#20232a;height:100px;width:100%;}.top.jsx-1817120976{background:#222;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;height:auto;width:100%;color:white;text-align:left;}.top.jsx-1817120976 .img-foreground.jsx-1817120976{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-1817120976{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:left;max-width:1024px;}.content-box.jsx-1817120976{background:#111;position:relative;top:-0px;padding:10px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKYSxBQUtzRSxBQVN0QyxBQU9NLEFBSVEsQUFNQSxBQU1ULEFBV0wsQUFRZ0IsQUFTWCxXQWxERSxFQWtDUCxHQVhXLEFBNEJKLENBNUN0QixRQUllLEFBTUUsQ0FrQkgsQ0FPa0IsRUF6Q2YsS0FtREosRUF4Q0MsRUFNQSxBQU1rQixBQVlWLElBbENULENBbURJLElBeENqQixFQXRCMEIsQUE0QjFCLEVBaEJtSSxJQXdDbkcsQ0FXaEIsRUFqQkgsUUFabUIsRUErQmhDLENBbEJZLEVBOUNvQixRQStDaEMsSUFLMEIsV0FsQkwsS0FqQ1UsTUFvRFosQ0FsQkosV0FDQyxJQWtCSyxLQXBEQSxHQW1DRCxTQW1CcEIsS0FyRHNCLEVBb0N0QixnQkFsQ0EsYUFPQSIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTmFtZUJhZGdlIGZyb20gXCIuL05hbWVCYWRnZVwiXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmltcG9ydCBNZWRpYSBmcm9tIFwicmVhY3QtbWVkaWFcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuaW1wb3J0IERyYXdlciBmcm9tIFwiLi9EcmF3ZXJcIlxuXG5pbXBvcnQgXCIuLi9ib290c3RyYXAubWluLmNzc1wiXG5pbXBvcnQgXCIuLi9BcHAuY3NzXCJcblxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1cmdlckljb24gZnJvbSBcIi4vQnVyZ2VySWNvblwiO1xuXG5cblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XG4gICAgY29uc3Qgc2l0ZXMgPSBbXG5cbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlN0YXJ0XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICAgICAgaHJlZjogXCIvdGVhbXNcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiVGVhbXNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgICAgICBocmVmOiBcIi9taXRnbGllZFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJNaXRnbGllZHNjaGFmdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjZcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL3ZlcmVpbnNoZWltXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlZlcmVpbnNoZWltXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNVwiLFxuICAgICAgICAgICAgaHJlZjogXCIva29udGFrdFwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJLb250YWt0XCJcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IFtpc1RvcCwgc2V0SXNUb3BdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuICAgIHZhciBiYWNrZ3JvdW5kU3R5bGUgPSB7fVxuICAgIGlmIChwcm9wcy5waWN0dXJlcykge1xuICAgICAgICBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFxcIicgKyBwcm9wcy5waWN0dXJlc1tjdXJyZW50XS5waWN0dXJlICsgJ1xcXCInXG4gICAgICAgIH1cblxuICAgICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gKGN1cnJlbnQgKyAxKSAlIHByb3BzLnBpY3R1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50KG5leHQpLCA1MDAwKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9LCBbY3VycmVudF0pO1xuXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9zdGF0aWMvdGVubmlzX2NvdXJ0X3NhbmQuanBnKVwiXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cblxuICAgIHJldHVybiA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPHRpdGxlPlRWNzcgTmllZGVyYmllbDwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgLz5cblxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMwMDBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPERyYXdlciBzaXRlcz17c2l0ZXN9IGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufSBjbG9zZURyYXdlcj17KCkgPT4gc2V0SXNEcmF3ZXJPcGVuKGZhbHNlKX0gLz5cblxuXG4gICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDkyMnB4KVwiIG9uQ2hhbmdlPXsobWF0Y2hlcykgPT4gc2V0SXNNb2JpbGUobWF0Y2hlcyl9IC8+XG5cbiAgICAgICAge1xuICAgICAgICAgICAgaXNNb2JpbGUgPyA8PjxCdXJnZXJJY29uIGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufSB0b2dnbGVEcmF3ZXI9eygpID0+IHNldElzRHJhd2VyT3BlbighaXNEcmF3ZXJPcGVuKX0+PC9CdXJnZXJJY29uPiA8TmFtZUJhZGdlIC8+IDwvPlxuXG4gICAgICAgICAgICAgICAgOiA8PjwvPlxuICAgICAgICB9XG5cbiAgICAgICAgPEhlYWRlciBzaXRlcz17c2l0ZXN9IGlzRHJhd2VyT3Blbj17aXNEcmF3ZXJPcGVufSB0b2dnbGVEcmF3ZXI9eygpID0+IHNldElzRHJhd2VyT3BlbighaXNEcmF3ZXJPcGVuKX0gbmF2TmFtZT17cHJvcHMubmF2TmFtZX0gaXNUb3A9e2lzVG9wfSBtb2JpbGU9e2lzTW9iaWxlfSA+PC9IZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmRTdHlsZX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZEdhbGxlcnlcIj5cblxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiBzZXRJc1RvcChpc1Zpc2libGUpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFja2dyb3VuZC10aW55XCIgLz5cbiAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreUJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BUZXh0V3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZ2dlclwiPntwcm9wcy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NlbnRlcj5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8Rm9vdGVyIHNpdGVzPXtzaXRlc30gLz5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIDwvc3R5bGU+XG5cblxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuXG5cbiAgICAgICAgICAgICAgICAuYmFja2dyb3VuZEdhbGxlcnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDogdXJsKFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGlja3lCb3R0b20ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LDE3LDE3LDApIDAlLCByZ2JhKDE3LDE3LDE3LDAuMikgOCUsIHJnYmEoMTcsMTcsMTcsMC44MCkgMTUlLCByZ2JhKDE3LDE3LDE3LDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wVGV4dFdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC10aW55IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICAgICA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3AgIC5pbWctZm9yZWdyb3VuZCB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cblxuXG5cbiAgICA8Lz5cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.3130d9e81879f806a624.hot-update.js.map