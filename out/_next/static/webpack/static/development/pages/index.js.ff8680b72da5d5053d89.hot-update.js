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
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "TV77 Niederbiel"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    type: "image/x-icon",
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "theme-color",
    content: "#000",
    className: "jsx-1170219662",
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
    className: "jsx-1170219662" + " " + "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: backgroundStyle,
    className: "jsx-1170219662" + " " + "backgroundGallery",
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
    className: "jsx-1170219662" + " " + "top-background-tiny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1170219662" + " " + "stickyBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1170219662" + " " + "topTextWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-1170219662" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, props.title)))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", {
    className: "jsx-1170219662",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1170219662" + " " + "content-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1170219662" + " " + "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, props.children))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1170219662" + " " + "footer",
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
    id: "1170219662",
    __self: this
  }, ".backgroundGallery.jsx-1170219662{background :url(\"/static/clubheim_draussen.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;min-height:500px;position:relative;}.stickyBottom.jsx-1170219662{width:100%;position:absolute;padding:10px;bottom:0;background:linear-gradient(180deg,rgba(17,17,17,0) 0%,rgba(17,17,17,0.80) 15%,rgba(17,17,17,1) 100%);}.topTextWrapper.jsx-1170219662{max-width:1024px;margin-top:150px;}.top-background-tiny.jsx-1170219662{background-color:#20232a;height:1px;width:100%;}.top-background-color.jsx-1170219662{background-color:#20232a;height:100px;width:100%;}.top.jsx-1170219662{background:#222;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;height:auto;width:100%;color:white;text-align:left;}.top.jsx-1170219662 .img-foreground.jsx-1170219662{height:200px;padding:20px;margin:10px;margin-bottom:100px;width:auto;opacity:1;}.content-container.jsx-1170219662{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;text-align:left;max-width:1024px;}.content-box.jsx-1170219662{background:#111;position:relative;top:-0px;padding:10px;z-index:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRKYSxBQUtzRSxBQVN0QyxBQU9NLEFBS1EsQUFNQSxBQU1ULEFBV0wsQUFRZ0IsQUFTWCxXQW5ERSxFQW1DUCxHQVhXLEFBNEJKLENBN0NELFFBS04sQUFNRSxDQWtCSCxDQU9rQixFQTFDZixLQU9qQixBQTZDYSxFQXhDQyxFQU1BLEFBTWtCLEFBWVYsSUFuQ1QsQ0FvREksSUF4Q2pCLEVBdkIwQixBQTZCMUIsRUFqQjZHLElBeUM3RSxDQVdoQixFQWpCSCxRQVptQixFQStCaEMsQ0FsQlksRUEvQ29CLFFBZ0RoQyxJQUswQixXQWxCTCxLQWxDVSxNQXFEWixDQWxCSixXQUNDLElBa0JLLEtBckRBLEdBb0NELFNBbUJwQixLQXREc0IsRUFxQ3RCLE9BNUJBLFNBUEEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE5hbWVCYWRnZSBmcm9tIFwiLi9OYW1lQmFkZ2VcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCJcblxuaW1wb3J0IFwiLi4vYm9vdHN0cmFwLm1pbi5jc3NcIlxuaW1wb3J0IFwiLi4vQXBwLmNzc1wiXG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuL0J1cmdlckljb25cIjtcblxuXG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHNpdGVzID0gW1xuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL3RlYW1zXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIlRlYW1zXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICAgICAgaHJlZjogXCIvbWl0Z2xpZWRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiTWl0Z2xpZWRzY2hhZnRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogXCI2XCIsXG4gICAgICAgICAgICBocmVmOiBcIi92ZXJlaW5zaGVpbVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJWZXJlaW5zaGVpbVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiBcIjVcIixcbiAgICAgICAgICAgIGhyZWY6IFwiL2tvbnRha3RcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiS29udGFrdFwiXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBbaXNUb3AsIHNldElzVG9wXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgICB2YXIgYmFja2dyb3VuZFN0eWxlID0ge31cbiAgICBpZiAocHJvcHMucGljdHVyZXMpIHtcbiAgICAgICAgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFxcXCInICsgcHJvcHMucGljdHVyZXNbY3VycmVudF0ucGljdHVyZSArICdcXFwiJ1xuICAgICAgICB9XG5cbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IChjdXJyZW50ICsgMSkgJSBwcm9wcy5waWN0dXJlcy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudChuZXh0KSwgNTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfSwgW2N1cnJlbnRdKTtcblxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvc3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZylcIlxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICByZXR1cm4gPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5UVjc3IE5pZWRlcmJpZWw8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiIC8+XG5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxEcmF3ZXIgc2l0ZXM9e3NpdGVzfSBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gY2xvc2VEcmF3ZXI9eygpID0+IHNldElzRHJhd2VyT3BlbihmYWxzZSl9IC8+XG5cblxuICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA5MjJweClcIiBvbkNoYW5nZT17KG1hdGNoZXMpID0+IHNldElzTW9iaWxlKG1hdGNoZXMpfSAvPlxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlzTW9iaWxlID8gPD48QnVyZ2VySWNvbiBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gdG9nZ2xlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3Blbil9PjwvQnVyZ2VySWNvbj4gPE5hbWVCYWRnZSAvPiA8Lz5cblxuICAgICAgICAgICAgICAgIDogPD48Lz5cbiAgICAgICAgfVxuXG4gICAgICAgIDxIZWFkZXIgc2l0ZXM9e3NpdGVzfSBpc0RyYXdlck9wZW49e2lzRHJhd2VyT3Blbn0gdG9nZ2xlRHJhd2VyPXsoKSA9PiBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3Blbil9IG5hdk5hbWU9e3Byb3BzLm5hdk5hbWV9IGlzVG9wPXtpc1RvcH0gbW9iaWxlPXtpc01vYmlsZX0gPjwvSGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9IGNsYXNzTmFtZT1cImJhY2tncm91bmRHYWxsZXJ5XCI+XG5cbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gc2V0SXNUb3AoaXNWaXNpYmxlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhY2tncm91bmQtdGlueVwiIC8+XG4gICAgICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3lCb3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wVGV4dFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaWdnZXJcIj57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jZW50ZXI+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPEZvb3RlciBzaXRlcz17c2l0ZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICA8L3N0eWxlPlxuXG5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcblxuXG4gICAgICAgICAgICAgICAgLmJhY2tncm91bmRHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZCA6IHVybChcIi9zdGF0aWMvY2x1YmhlaW1fZHJhdXNzZW4uanBnXCIpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RpY2t5Qm90dG9tIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNywxNywxNywwKSAwJSwgIHJnYmEoMTcsMTcsMTcsMC44MCkgMTUlLCByZ2JhKDE3LDE3LDE3LDEpIDEwMCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wVGV4dFdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC1jb2xvciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0byAgICAgO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wICAuaW1nLWZvcmVncm91bmQge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzExMTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0wcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG5cblxuXG4gICAgPC8+XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.ff8680b72da5d5053d89.hot-update.js.map