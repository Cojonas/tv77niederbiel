webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_BurgerIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BurgerIcon */ "./components/BurgerIcon.js");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");






var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Header.js";




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
  href: "/anlage",
  display: "Die Anlage"
}, {
  id: "4",
  href: "/contact-us",
  display: "Kontakt"
}];

var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.isTop = _this.props.isTop;
    _this.navName = _this.props.navName;
    _this.state = {
      visible: true,
      isTop: _this.props.isTop,
      isMobile: false
    };
    _this.setExpanded = _this.setExpanded.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        isTop: props.isTop
      });
    }
  }, {
    key: "setExpanded",
    value: function setExpanded(expand) {
      this.setState({
        expanded: expand
      });
    }
  }, {
    key: "render",
    value: function render() {
      var navLinkSpan;

      if (!this.state.isTop) {
        navLinkSpan = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "white-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, " > ", this.navName);
      } else {
        navLinkSpan = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
      }

      var isMobile = this.state.isMobile;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-32516197" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/tv77logo.png",
        className: "jsx-32516197" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-32516197" + " " + "nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, sites.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          href: item.href,
          className: "jsx-32516197" + " " + "navbar-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.display, " ");
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "32516197",
        __self: this
      }, ".header.jsx-32516197{background-color:#20232a;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-32516197{width:auto;height:100px;padding:10px;}span.jsx-32516197{color:white;}p.jsx-32516197{color:white;}.logo-text.jsx-32516197{width:auto;height:auto;}.nav-container.jsx-32516197{position:absolute;top:0px;right:0px;height:100%;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navbar-item.jsx-32516197{color:white;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;}.navbar-item.jsx-32516197>a.jsx-32516197{color:white;width:100%;height:100%;text-align:center;}.right.jsx-32516197{right:0;}a.jsx-32516197{color:black;}.white-text.jsx-32516197{color:white !important;}.shrink-enter.jsx-32516197{padding:90px 20px;}.shrink-enter-active.jsx-32516197{padding:5px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-enter-done.jsx-32516197{padding:5px !important;}.shrink-exit.jsx-32516197{padding:5px;}.shrink-exit-active.jsx-32516197{padding:90px 20px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-exit-done.jsx-32516197{padding:90px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGaUIsQUFHOEMsQUFTZCxBQUtDLEFBR0EsQUFJRCxBQVFPLEFBUU4sQUFNQSxBQU9qQixBQUdpQixBQUlXLEFBS0wsQUFHTixBQUtXLEFBR1gsQUFHTSxBQUtBLFFBL0J0QixHQXhDaUIsQUFZRCxDQVBoQixBQUdBLEFBb0JnQixBQU1ELEFBVWYsQUFZNkIsQUFRN0IsTUE1Q1ksQUFpQ1osQUFjNkIsQUFLN0IsS0EzREEsQUFzQmdCLEFBYWhCLEFBYUEsQ0E1RGlCLEFBNEJELENBdENELENBOEJELFNBZVEsQ0E1Q04sQUE4QkEsQ0FwQmhCLFdBVGdCLEFBOEJGLEtBY2QsS0FiaUIsR0E5QlcsU0ErRDVCLE1BV0EsU0F6RW9CLFVBbUNhLDZCQUNqQyxDQW5DVSxNQUNWLENBNEJBIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1cmdlckljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVyZ2VySWNvblwiXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBzaXRlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBocmVmOiBcIi9hbmxhZ2VcIixcbiAgICAgICAgZGlzcGxheTogXCJEaWUgQW5sYWdlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBocmVmOiBcIi9jb250YWN0LXVzXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiS29udGFrdFwiXG4gICAgfVxuXVxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5pc1RvcCA9IHRoaXMucHJvcHMuaXNUb3A7XG4gICAgICAgIHRoaXMubmF2TmFtZSA9IHRoaXMucHJvcHMubmF2TmFtZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzVG9wOiB0aGlzLnByb3BzLmlzVG9wLFxuICAgICAgICAgICAgaXNNb2JpbGU6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldEV4cGFuZGVkID0gdGhpcy5zZXRFeHBhbmRlZC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG5cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1RvcDogcHJvcHMuaXNUb3BcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRFeHBhbmRlZChleHBhbmQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBleHBhbmRlZDogZXhwYW5kXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBuYXZMaW5rU3BhbjtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzVG9wKSB7XG4gICAgICAgICAgICBuYXZMaW5rU3BhbiA9IDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj4gPiB7dGhpcy5uYXZOYW1lfTwvc3Bhbj5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdkxpbmtTcGFuID0gPD48Lz5cbiAgICAgICAgfVxuICAgICAgICB2YXIgeyBpc01vYmlsZSB9ID0gdGhpcy5zdGF0ZTtcblxuXG4gICAgICAgIHJldHVybiA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPVwiL3N0YXRpYy90djc3bG9nby5wbmdcIiAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVzLm1hcCgoaXRlbSkgID0+IDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cImhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX0gPC9idXR0b24+IClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5sb2dvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0IHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMjBweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXItYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlci1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0LWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICAgIDwvPlxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.1ad040499786f48da96b.hot-update.js.map