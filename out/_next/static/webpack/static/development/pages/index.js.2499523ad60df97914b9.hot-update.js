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
      isTop: _this.props.isTop
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
            lineNumber: 63
          },
          __self: this
        }, " > ", this.navName);
      } else {
        navLinkSpan = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-111103208" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/tv77logo.png",
        className: "jsx-111103208" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
        query: "(max-width: 599px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-111103208" + " " + "nav-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, sites.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            href: item.href,
            className: "jsx-111103208" + " " + "navbar-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, item.display, " ");
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-111103208" + " " + "nav-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BurgerIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "111103208",
        __self: this
      }, ".header.jsx-111103208{background-color:#20232a;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-111103208{width:auto;height:60px;padding:10px;}span.jsx-111103208{color:white;}p.jsx-111103208{color:white;}.logo-text.jsx-111103208{width:auto;height:auto;}.nav-container.jsx-111103208{position:absolute;top:0px;right:0px;height:100%;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.center-v.jsx-111103208{vertical-align:middle;}.navbar-item.jsx-111103208{border:none;color:white;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;}.navbar-item.jsx-111103208:hover{border-bottom:5px solid #ff5c00;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);color :#ff5c00;}.navbar-item.jsx-111103208>a.jsx-111103208{color:white;width:100%;height:100%;text-align:center;}.right.jsx-111103208{right:0;}a.jsx-111103208{color:black;}.white-text.jsx-111103208{color:white !important;}.shrink-enter.jsx-111103208{padding:90px 20px;}.shrink-enter-active.jsx-111103208{padding:5px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-enter-done.jsx-111103208{padding:5px !important;}.shrink-exit.jsx-111103208{padding:5px;}.shrink-exit-active.jsx-111103208{padding:90px 20px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-exit-done.jsx-111103208{padding:90px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGaUIsQUFHOEMsQUFTZCxBQUtDLEFBR0EsQUFJRCxBQVFPLEFBUUksQUFHVixBQU9zQixBQUt0QixBQU9qQixBQUdpQixBQUlXLEFBS0wsQUFHTixBQUtXLEFBR1gsQUFHTSxBQUtBLFFBL0J0QixHQWpEZ0IsQUFZQSxDQVBoQixBQUdBLEFBdUJnQixBQVlELEFBVWYsQUFZNkIsQUFRN0IsTUFyRFksQUEwQ1osQUFjNkIsQUFLN0IsSUFyREEsQ0EzQmlCLEFBWWpCLEFBK0JnQixBQWFoQixBQWFBLENBdENnQixDQXpDRCxDQThCRCxNQWlCVyxHQU9ILENBckROLEFBVWhCLEFBb0JnQixBQVdBLFlBeENBLEFBOEJGLEtBdUJkLEtBdEJpQixHQTlCVyxTQXdFNUIsTUFXQSxTQWxGb0Isc0JBdUNhLEFBS2IsZUFDcEIsR0E1Q1UsTUFDVixDQTRCQSxJQVVBIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1cmdlckljb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnVyZ2VySWNvblwiXG5pbXBvcnQgTWVkaWEgZnJvbSAncmVhY3QtbWVkaWEnO1xuXG5jb25zdCBzaXRlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBocmVmOiBcIi9hbmxhZ2VcIixcbiAgICAgICAgZGlzcGxheTogXCJEaWUgQW5sYWdlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBocmVmOiBcIi9jb250YWN0LXVzXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiS29udGFrdFwiXG4gICAgfVxuXVxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5pc1RvcCA9IHRoaXMucHJvcHMuaXNUb3A7XG4gICAgICAgIHRoaXMubmF2TmFtZSA9IHRoaXMucHJvcHMubmF2TmFtZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzVG9wOiB0aGlzLnByb3BzLmlzVG9wLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZCA9IHRoaXMuc2V0RXhwYW5kZWQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IHByb3BzLmlzVG9wXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0RXhwYW5kZWQoZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmF2TGlua1NwYW47XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1RvcCkge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+ID4ge3RoaXMubmF2TmFtZX08L3NwYW4+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZMaW5rU3BhbiA9IDw+PC8+XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPVwiL3N0YXRpYy90djc3bG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA1OTlweClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaGVzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hdGNoZXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVzLm1hcCgoaXRlbSkgID0+IDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cImhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX0gPC9idXR0b24+IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1cmdlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxuXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNlbnRlci12IHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAgICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAgI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0IHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMjBweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXItYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlci1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0LWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICAgIDwvPlxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.2499523ad60df97914b9.hot-update.js.map