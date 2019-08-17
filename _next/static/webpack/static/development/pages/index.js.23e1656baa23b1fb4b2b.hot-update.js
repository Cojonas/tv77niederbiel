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
        className: "jsx-2905649325" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/tv77logo.png",
        className: "jsx-2905649325" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2905649325" + " " + "nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, sites.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-2905649325" + " " + "navbar-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: item.href,
          className: "jsx-2905649325",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.display));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2905649325",
        __self: this
      }, ".header.jsx-2905649325{background-color:#20232a;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-2905649325{width:auto;height:100px;padding:10px;}span.jsx-2905649325{color:white;}p.jsx-2905649325{color:white;}.logo-text.jsx-2905649325{width:auto;height:auto;}.nav-container.jsx-2905649325{position:absolute;top:0px;right:0px;height:100%;width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:green;}.navbar-item.jsx-2905649325{height:100%;width:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.right.jsx-2905649325{right:0;}a.jsx-2905649325{color:black;}.white-text.jsx-2905649325{color:white !important;}.shrink-enter.jsx-2905649325{padding:90px 20px;}.shrink-enter-active.jsx-2905649325{padding:5px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-enter-done.jsx-2905649325{padding:5px !important;}.shrink-exit.jsx-2905649325{padding:5px;}.shrink-exit-active.jsx-2905649325{padding:90px 20px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-exit-done.jsx-2905649325{padding:90px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGaUIsQUFHOEMsQUFTZCxBQUtDLEFBR0EsQUFJRCxBQVFPLEFBU04sQUFNakIsQUFHaUIsQUFJVyxBQUtMLEFBR04sQUFLVyxBQUdYLEFBR00sQUFLQSxRQS9CdEIsR0FsQ2lCLEFBWUQsQ0FQaEIsQUFHQSxBQXFCZSxBQVNmLEFBWTZCLEFBUTdCLE1BdENZLEFBMkJaLEFBYzZCLEFBSzdCLEtBckRBLEFBaUJnQixBQVloQixBQWFBLENBdERpQixDQVZGLENBOEJELFVBN0JFLEFBOEJBLENBcEJoQixXQVRnQixBQThCRCxXQUNFLEVBOUJXLFNBeUQ1QixNQVdBLFNBbkVvQixTQW9DcEIsK0JBbkNVLE1BQ1YsRUE0QjJCLHVCQUMzQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXJnZXJJY29uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1cmdlckljb25cIlxuaW1wb3J0IE1lZGlhIGZyb20gJ3JlYWN0LW1lZGlhJztcblxuY29uc3Qgc2l0ZXMgPSBbXG4gICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICBkaXNwbGF5OiBcIlN0YXJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICBocmVmOiBcIi9hYm91dFwiLFxuICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgaHJlZjogXCIvYW5sYWdlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRGllIEFubGFnZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgaHJlZjogXCIvY29udGFjdC11c1wiLFxuICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgIH1cbl1cblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuaXNUb3AgPSB0aGlzLnByb3BzLmlzVG9wO1xuICAgICAgICB0aGlzLm5hdk5hbWUgPSB0aGlzLnByb3BzLm5hdk5hbWU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBpc1RvcDogdGhpcy5wcm9wcy5pc1RvcCxcbiAgICAgICAgICAgIGlzTW9iaWxlOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRFeHBhbmRlZCA9IHRoaXMuc2V0RXhwYW5kZWQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuXG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IHByb3BzLmlzVG9wXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgc2V0RXhwYW5kZWQoZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbmF2TGlua1NwYW47XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1RvcCkge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+ID4ge3RoaXMubmF2TmFtZX08L3NwYW4+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZMaW5rU3BhbiA9IDw+PC8+XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHsgaXNNb2JpbGUgfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgICAgICByZXR1cm4gPD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWltZ1wiIHNyYz1cIi9zdGF0aWMvdHY3N2xvZ28ucG5nXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXRlcy5tYXAoKGl0ZW0pICA9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+PGEgaHJlZj17aXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fTwvYT48L2Rpdj4gKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28taW1nICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHQgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAud2hpdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlcntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlci1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2hyaW5rLWVudGVyLWRvbmUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2hyaW5rLWV4aXQtYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0LWRvbmUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICAgICAgPC8+XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.23e1656baa23b1fb4b2b.hot-update.js.map