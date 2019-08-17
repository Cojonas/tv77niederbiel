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
        className: "jsx-815658848" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-815658848" + " " + "logo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/tv77logo.png",
        className: "jsx-815658848" + " " + "logo-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-815658848" + " " + "nav-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, sites.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "jsx-815658848" + " " + "navbar-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: item.href,
          className: "jsx-815658848",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, item.display));
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "815658848",
        __self: this
      }, ".header.jsx-815658848{background-color:#20232a;width:100%;height:auto;z-index:1000;position:-webkit-sticky;position:-webkit-sticky;position:sticky;top:0;}.logo-img.jsx-815658848{width:auto;height:100px;padding:10px;}span.jsx-815658848{color:white;}p.jsx-815658848{color:white;}.logo-text.jsx-815658848{width:auto;height:auto;}.logo-container.jsx-815658848{width:auto;height:100%;}.nav-container.jsx-815658848{margin-right:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}-navbar-item.jsx-815658848{height:100%;width:auto;}.right.jsx-815658848{right:0;}a.jsx-815658848{color:black;}.white-text.jsx-815658848{color:white !important;}.shrink-enter.jsx-815658848{padding:90px 20px;}.shrink-enter-active.jsx-815658848{padding:5px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-enter-done.jsx-815658848{padding:5px !important;}.shrink-exit.jsx-815658848{padding:5px;}.shrink-exit-active.jsx-815658848{padding:90px 20px;-webkit-transition:padding 200ms;transition:padding 200ms;}.shrink-exit-done.jsx-815658848{padding:90px 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGaUIsQUFHOEMsQUFTZCxBQUtDLEFBR0EsQUFJRCxBQUtBLEFBS08sQUFJTixBQUtqQixBQUdpQixBQUlXLEFBS0wsQUFHTixBQUtXLEFBR1gsQUFHTSxBQUtBLFFBL0J0QixHQTlCaUIsQUFZRCxBQUtBLENBWmhCLEFBR0EsQUFrQmUsQUFRZixBQVk2QixBQVE3QixNQWhDaUIsQUFxQmpCLEFBYzZCLEFBSzdCLEtBakRBLEFBS0EsQUFTQSxBQVdBLEFBYUEsQ0FsRGlCLENBVkYsV0FDQyxDQVVoQixXQVRnQixhQUNZLFNBcUQ1QixNQVdBLFNBL0RvQixPQTRCcEIsaUNBM0JVLE1BQ1YiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVyZ2VySWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXJnZXJJY29uXCJcbmltcG9ydCBNZWRpYSBmcm9tICdyZWFjdC1tZWRpYSc7XG5cbmNvbnN0IHNpdGVzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBocmVmOiBcIi9cIixcbiAgICAgICAgZGlzcGxheTogXCJTdGFydFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgaHJlZjogXCIvYWJvdXRcIixcbiAgICAgICAgZGlzcGxheTogXCLDnGJlciB1bnNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIGhyZWY6IFwiL2FubGFnZVwiLFxuICAgICAgICBkaXNwbGF5OiBcIkRpZSBBbmxhZ2VcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIGhyZWY6IFwiL2NvbnRhY3QtdXNcIixcbiAgICAgICAgZGlzcGxheTogXCJLb250YWt0XCJcbiAgICB9XG5dXG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmlzVG9wID0gdGhpcy5wcm9wcy5pc1RvcDtcbiAgICAgICAgdGhpcy5uYXZOYW1lID0gdGhpcy5wcm9wcy5uYXZOYW1lO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAgaXNUb3A6IHRoaXMucHJvcHMuaXNUb3AsXG4gICAgICAgICAgICBpc01vYmlsZTogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWQgPSB0aGlzLnNldEV4cGFuZGVkLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cblxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVG9wOiBwcm9wcy5pc1RvcFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNldEV4cGFuZGVkKGV4cGFuZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5hdkxpbmtTcGFuO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNUb3ApIHtcbiAgICAgICAgICAgIG5hdkxpbmtTcGFuID0gPHNwYW4gY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPiA+IHt0aGlzLm5hdk5hbWV9PC9zcGFuPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmF2TGlua1NwYW4gPSA8PjwvPlxuICAgICAgICB9XG4gICAgICAgIHZhciB7IGlzTW9iaWxlIH0gPSB0aGlzLnN0YXRlO1xuXG5cbiAgICAgICAgcmV0dXJuIDw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28taW1nXCIgc3JjPVwiL3N0YXRpYy90djc3bG9nby5wbmdcIiAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpdGVzLm1hcCgoaXRlbSkgID0+IDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj48YSBocmVmPXtpdGVtLmhyZWZ9PntpdGVtLmRpc3BsYXl9PC9hPjwvZGl2PiApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nby1pbWcgIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubG9nby10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5uYXYtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAtbmF2YmFyLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJpZ2h0IHsgICAgXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLndoaXRlLXRleHQge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXJ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDkwcHggMjBweDsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZW50ZXItYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNocmluay1lbnRlci1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNocmluay1leGl0LWFjdGl2ZXtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zaHJpbmstZXhpdC1kb25lIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG4gICAgICAgIDwvPlxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a06eaea7bf57e6a7e8d4.hot-update.js.map