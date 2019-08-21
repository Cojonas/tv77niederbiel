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
        className: "jsx-1731642851" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_10__["CSSTransition"], {
        "in": !this.state.isTop,
        classNames: "my-node",
        timeout: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1731642851",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "" + "static/tv77logo.png",
        className: "jsx-1731642851" + " " + "logo-img",
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
          className: "jsx-1731642851" + " " + "nav-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, sites.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            href: item.href,
            className: "jsx-1731642851" + " " + "navbar-item",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, item.display, " ");
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-1731642851" + " " + "nav-container",
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
        id: "1731642851",
        __self: this
      }, ".header.jsx-1731642851{background-color:#212529;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-1731642851{width:auto;height:60px;padding:10px;}span.jsx-1731642851{color:white;}p.jsx-1731642851{color:white;}.logo-text.jsx-1731642851{width:auto;height:auto;}.nav-container.jsx-1731642851{position:absolute;top:0px;right:0px;height:100%;width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.center-v.jsx-1731642851{vertical-align:middle;}.navbar-item.jsx-1731642851{border:none;color:white;height:100%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:transparent;}.navbar-item.jsx-1731642851:hover{border-bottom:5px solid #ff5c00;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);color :#ff5c00;}.navbar-item.jsx-1731642851>a.jsx-1731642851{color:white;width:100%;height:100%;text-align:center;}.right.jsx-1731642851{right:0;}a.jsx-1731642851{color:black;}.white-text.jsx-1731642851{color:white !important;}.logoheader-enter.jsx-1731642851{opacity:0;}.logoheader-enter-active.jsx-1731642851{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.logoheader-enter-done.jsx-1731642851{opacity:1;}.logoheader-exit.jsx-1731642851{opacity:1;}.logoheader-exit-active.jsx-1731642851{opacitiy:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.logoheader-exit-done.jsx-1731642851{opacity:0;}.my-node-enter.jsx-1731642851{opacity:0;}.my-node-enter-active.jsx-1731642851{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-enter-done.jsx-1731642851{opacity:1;}.my-node-exit.jsx-1731642851{opacity:1;}.my-node-exit-active.jsx-1731642851{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.my-node-exit-done.jsx-1731642851{opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVHaUIsQUFHOEMsQUFTZCxBQU1DLEFBR0EsQUFJRCxBQVFPLEFBUUksQUFHVixBQU9zQixBQUt0QixBQU9qQixBQUdpQixBQUlXLEFBS2IsQUFHQSxBQUtBLEFBR0EsQUFHQyxBQUtELEFBSUEsQUFHQSxBQUlFLEFBR0YsQUFHQSxBQUlFLFFBcERoQixFQWFBLEFBRzZCLEFBSzdCLEFBR0EsQUFRQSxBQUlFLEFBRzJCLEFBSTNCLEFBR0EsQUFHMkIsQUFJM0IsQ0F2R2MsQUFhQSxBQWdFYSxDQXZFN0IsQUFHQSxBQXVCZ0IsQUFZRCxBQVVmLE1BakNZLElBUVosQ0E1QmlCLEFBYWpCLEFBK0JnQixBQWFoQixDQXpCZ0IsQ0ExQ0QsQ0ErQkQsTUFpQlcsR0FPSCxDQXRETixBQVdoQixBQW9CZ0IsQUFXQSxZQXpDQSxBQStCRixLQXVCZCxLQXRCaUIsR0EvQlcsT0F5RTVCLEFBdUJFLEFBVUEsQ0F0QkYsZ0JBbkZvQixzQkF3Q2EsQUFLYixlQUNwQixHQTdDVSxNQUNWLENBNkJBLElBVUEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXJnZXJJY29uXCJcbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5cbmltcG9ydCB7Q1NTVHJhbnNpdGlvbn0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIlxuY29uc3Qgc2l0ZXMgPSBbXG4gICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIGhyZWY6IFwiL1wiLFxuICAgICAgICBkaXNwbGF5OiBcIlN0YXJ0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICBocmVmOiBcIi9hYm91dFwiLFxuICAgICAgICBkaXNwbGF5OiBcIsOcYmVyIHVuc1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgaHJlZjogXCIvYW5sYWdlXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiRGllIEFubGFnZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjRcIixcbiAgICAgICAgaHJlZjogXCIvY29udGFjdC11c1wiLFxuICAgICAgICBkaXNwbGF5OiBcIktvbnRha3RcIlxuICAgIH1cbl1cblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuaXNUb3AgPSB0aGlzLnByb3BzLmlzVG9wO1xuICAgICAgICB0aGlzLm5hdk5hbWUgPSB0aGlzLnByb3BzLm5hdk5hbWU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBpc1RvcDogdGhpcy5wcm9wcy5pc1RvcCxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWQgPSB0aGlzLnNldEV4cGFuZGVkLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVG9wOiBwcm9wcy5pc1RvcFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldEV4cGFuZGVkKGV4cGFuZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdkxpbmtTcGFuO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgICAgIG5hdkxpbmtTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPiA+IHt0aGlzLm5hdk5hbWV9PC9zcGFuPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8PjwvPlxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gPD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGluPXshdGhpcy5zdGF0ZS5pc1RvcH0gY2xhc3NOYW1lcz1cIm15LW5vZGVcIiB0aW1lb3V0PXsxMDAwfSA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwic3RhdGljL3R2Nzdsb2dvLnBuZ1wifSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDU5OXB4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21hdGNoZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWF0Y2hlcyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l0ZXMubWFwKChpdGVtKSAgPT4gPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiaHJlZj17aXRlbS5ocmVmfT57aXRlbS5kaXNwbGF5fSA8L2J1dHRvbj4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVyZ2VySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVkaWE+XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuXG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28taW1nICB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmxvZ28tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubmF2LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNlbnRlci12IHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5uYXZiYXItaXRlbTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAgICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAgI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hdmJhci1pdGVtID4gYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0IHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5sb2dvaGVhZGVyLWVudGVye1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ29oZWFkZXItZW50ZXItYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5sb2dvaGVhZGVyLWVudGVyLWRvbmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nb2hlYWRlci1leGl0e1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nb2hlYWRlci1leGl0LWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0aXk6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxvZ29oZWFkZXItZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubXktbm9kZS1lbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubXktbm9kZS1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZW50ZXItZG9uZSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5teS1ub2RlLWV4aXQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdC1hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLm15LW5vZGUtZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cblxuICAgICAgICA8Lz5cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.502c64ff73d2da3a51d7.hot-update.js.map