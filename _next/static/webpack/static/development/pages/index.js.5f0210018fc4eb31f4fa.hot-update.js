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
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");






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
            lineNumber: 64
          },
          __self: this
        }, " > ", this.navName);
      } else {
        navLinkSpan = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1471652615" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["CSSTransition"], {
        "in": this.state.isTop,
        classNames: "my-node",
        timeout: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1471652615",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "" + "static/tv77logo.png",
        className: "jsx-1471652615" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
        query: "(max-width: 599px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, function (matches) {
        return !matches ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-1471652615" + " " + "nav-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, sites.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            href: item.href,
            className: "jsx-1471652615" + " " + "navbar-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, item.display, " ");
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-1471652615" + " " + "nav-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BurgerIcon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }));
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1471652615",
        __self: this
      }, ".header.jsx-1471652615{background-color:#212529;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-1471652615{width:auto;height:60px;padding:10px;}span.jsx-1471652615{color:white;}p.jsx-1471652615{color:white;}.logo-text.jsx-1471652615{width:auto;height:auto;}.nav-container.jsx-1471652615{position:absolute;top:0px;right:0px;height:100%;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.center-v.jsx-1471652615{vertical-align:middle;}.navbar-item.jsx-1471652615{border:none;color:white;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;}.navbar-item.jsx-1471652615:hover{border-bottom:5px solid #ff5c00;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);color :#ff5c00;}.navbar-item.jsx-1471652615>a.jsx-1471652615{color:white;width:100%;height:100%;text-align:center;}.right.jsx-1471652615{right:0;}a.jsx-1471652615{color:black;}.white-text.jsx-1471652615{color:white !important;}.logoheader-enter.jsx-1471652615{opacity:0;}.logoheader-enter-active.jsx-1471652615{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.logoheader-enter-done.jsx-1471652615{opacity:1;}.logoheader-exit.jsx-1471652615{opacity:1;}.logoheader-exit-active.jsx-1471652615{opacitiy:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.logoheader-exit-done.jsx-1471652615{opacity:0;}.my-node-enter.jsx-1471652615{opacity:0;}.my-node-enter-active.jsx-1471652615{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-exit.jsx-1471652615{opacity:1;}.my-node-exit-active.jsx-1471652615{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHaUIsQUFHOEMsQUFTZCxBQU1DLEFBR0EsQUFJRCxBQVFPLEFBUUksQUFHVixBQU9zQixBQUt0QixBQU9qQixBQUdpQixBQUlXLEFBS2IsQUFHQSxBQUtBLEFBR0EsQUFHQyxBQUtELEFBSUEsQUFHQSxBQUlBLEFBR0EsUUE3Q2QsRUFhQSxBQUc2QixBQUs3QixBQUdBLEFBUUEsQUFJRSxBQUcyQixBQUkzQixBQUcyQixDQWhHYixBQWFBLEFBZ0VhLENBdkU3QixBQUdBLEFBdUJnQixBQVlELEFBVWYsTUFqQ1ksSUFRWixDQTVCaUIsQUFhakIsQUErQmdCLEFBYWhCLENBekJnQixDQTFDRCxDQStCRCxNQWlCVyxHQU9ILENBdEROLEFBV2hCLEFBb0JnQixBQVdBLFlBekNBLEFBK0JGLEtBdUJkLEtBdEJpQixHQS9CVyxPQXlFNUIsQUF1QkUsQUFPQSxDQW5CRixnQkFuRm9CLHNCQXdDYSxBQUtiLGVBQ3BCLEdBN0NVLE1BQ1YsQ0E2QkEsSUFVQSIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1cmdlckljb25cIlxuaW1wb3J0IE1lZGlhIGZyb20gJ3JlYWN0LW1lZGlhJztcblxuaW1wb3J0IHtDU1NUcmFuc2l0aW9ufSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiXG5jb25zdCBzaXRlcyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgaHJlZjogXCIvXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiU3RhcnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIGhyZWY6IFwiL2Fib3V0XCIsXG4gICAgICAgIGRpc3BsYXk6IFwiw5xiZXIgdW5zXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBocmVmOiBcIi9hbmxhZ2VcIixcbiAgICAgICAgZGlzcGxheTogXCJEaWUgQW5sYWdlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBocmVmOiBcIi9jb250YWN0LXVzXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiS29udGFrdFwiXG4gICAgfVxuXVxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5pc1RvcCA9IHRoaXMucHJvcHMuaXNUb3A7XG4gICAgICAgIHRoaXMubmF2TmFtZSA9IHRoaXMucHJvcHMubmF2TmFtZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzVG9wOiB0aGlzLnByb3BzLmlzVG9wLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZCA9IHRoaXMuc2V0RXhwYW5kZWQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IHByb3BzLmlzVG9wXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0RXhwYW5kZWQoZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmF2TGlua1NwYW47XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1RvcCkge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+ID4ge3RoaXMubmF2TmFtZX08L3NwYW4+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZMaW5rU3BhbiA9IDw+PC8+XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb24gaW49e3RoaXMuc3RhdGUuaXNUb3B9IGNsYXNzTmFtZXM9XCJteS1ub2RlXCIgdGltZW91dD17MTAwMH0gPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcInN0YXRpYy90djc3bG9nby5wbmdcIn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA1OTlweClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXRjaGVzID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hdGNoZXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVzLm1hcCgoaXRlbSkgID0+IDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cImhyZWY9e2l0ZW0uaHJlZn0+e2l0ZW0uZGlzcGxheX0gPC9idXR0b24+IClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1cmdlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhPlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDoxMDAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvLWltZyAge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5sb2dvLXRleHQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hdi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jZW50ZXItdiB7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW06aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgICAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbSA+IGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yaWdodCB7ICAgIFxuICAgICAgICAgICAgICAgICAgICByaWdodDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC53aGl0ZS10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAubG9nb2hlYWRlci1lbnRlcntcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvaGVhZGVyLWVudGVyLWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nb2hlYWRlci1lbnRlci1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ29oZWFkZXItZXhpdHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ29oZWFkZXItZXhpdC1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdGl5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvaGVhZGVyLWV4aXQtZG9uZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm15LW5vZGUtZW50ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZW50ZXItYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5teS1ub2RlLWV4aXQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cblxuICAgICAgICA8Lz5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.5f0210018fc4eb31f4fa.hot-update.js.map