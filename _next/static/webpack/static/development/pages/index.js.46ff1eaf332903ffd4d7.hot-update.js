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
        className: "jsx-3926469511" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/tv77logo.png",
        className: "jsx-3926469511" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-3926469511" + " " + "nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, sites.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          href: item.href,
          className: "jsx-3926469511" + " " + "navbar-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, item.display, " ");
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3926469511",
        __self: this
      }, ".header.jsx-3926469511{background-color:#20232a;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-3926469511{width:auto;height:60px;padding:10px;}span.jsx-3926469511{color:white;}p.jsx-3926469511{color:white;}.logo-text.jsx-3926469511{width:auto;height:auto;}.nav-container.jsx-3926469511{position:absolute;top:0px;right:0px;height:100%;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.navbar-item.jsx-3926469511{border:none;color:white;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;}.navbar-item.jsx-3926469511:hover{border-size:0px 0px 5px 0px;border-color:#ff5c00;color :#ff5c00;}.navbar-item.jsx-3926469511>a.jsx-3926469511{color:white;width:100%;height:100%;text-align:center;}.right.jsx-3926469511{right:0;}a.jsx-3926469511{color:black;}.white-text.jsx-3926469511{color:white !important;}.shrink-enter.jsx-3926469511{padding:90px 20px;}.shrink-enter-active.jsx-3926469511{padding:5px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-enter-done.jsx-3926469511{padding:5px !important;}.shrink-exit.jsx-3926469511{padding:5px;}.shrink-exit-active.jsx-3926469511{padding:90px 20px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-exit-done.jsx-3926469511{padding:90px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGaUIsQUFHOEMsQUFTZCxBQUtDLEFBR0EsQUFJRCxBQVFPLEFBUU4sQUFPZ0IsQUFNaEIsQUFPakIsQUFHaUIsQUFJVyxBQUtMLEFBR04sQUFLVyxBQUdYLEFBR00sQUFLQSxRQS9CdEIsR0EvQ2dCLEFBWUEsQ0FQaEIsQUFHQSxBQW9CZ0IsQUFhRCxBQVVmLEFBWTZCLEFBUTdCLE1BbkRZLEFBd0NaLEFBYzZCLEFBSzdCLEtBOUVpQixBQVlqQixBQTZCZ0IsQUFhaEIsQUFhQSxDQXZDZ0IsQ0F0Q0QsQ0E4QkQsRUFjWSxPQVFKLENBbkROLEFBVWhCLEFBb0JnQixBQVFBLFlBckNBLEFBOEJGLENBY00sSUFPcEIsS0FwQmlCLEdBOUJXLEdBNEM1QixNQTBCQSxNQVdBLFNBaEZvQixzQkFvQ2Esa0JBbkN2QixNQUNWLENBNEJBLElBT0EiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXJnZXJJY29uXCJcbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5cbmNvbnN0IHNpdGVzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgZGlzcGxheTogXCLDnGJlciB1bnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIGhyZWY6IFwiL2FubGFnZVwiLFxuICAgICAgICBkaXNwbGF5OiBcIkRpZSBBbmxhZ2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIGhyZWY6IFwiL2NvbnRhY3QtdXNcIixcbiAgICAgICAgZGlzcGxheTogXCJLb250YWt0XCJcbiAgICB9XG5dXG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmlzVG9wID0gdGhpcy5wcm9wcy5pc1RvcDtcbiAgICAgICAgdGhpcy5uYXZOYW1lID0gdGhpcy5wcm9wcy5uYXZOYW1lO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgaXNUb3A6IHRoaXMucHJvcHMuaXNUb3AsXG4gICAgICAgICAgICBpc01vYmlsZTogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWQgPSB0aGlzLnNldEV4cGFuZGVkLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVG9wOiBwcm9wcy5pc1RvcFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldEV4cGFuZGVkKGV4cGFuZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdkxpbmtTcGFuO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgICAgIG5hdkxpbmtTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPiA+IHt0aGlzLm5hdk5hbWV9PC9zcGFuPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8PjwvPlxuICAgICAgICB9XG4gICAgICAgIHZhciB7IGlzTW9iaWxlIH0gPSB0aGlzLnN0YXRlO1xuXG5cbiAgICAgICAgcmV0dXJuIDw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1pbWdcIiBzcmM9XCIvc3RhdGljL3R2Nzdsb2dvLnBuZ1wiIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZXMubWFwKChpdGVtKSAgPT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiaHJlZj17aXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fSA8L2J1dHRvbj4gKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28taW1nICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXNpemU6IDBweCAwcHggNXB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAgI2ZmNWMwMDtcblxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWl0ZW0gPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmlnaHQgeyAgICBcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAud2hpdGUtdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlcntcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlci1hY3RpdmV7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2hyaW5rLWVudGVyLWRvbmUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2hyaW5rLWV4aXQtYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0LWRvbmUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG5cbiAgICAgICAgPC8+XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.46ff1eaf332903ffd4d7.hot-update.js.map