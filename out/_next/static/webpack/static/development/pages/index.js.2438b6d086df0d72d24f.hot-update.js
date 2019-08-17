webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-media */ "./node_modules/react-media/esm/react-media.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/components/Layout.js";







var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.onChange = _this.onChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.affixRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    _this.state = {
      isTop: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "onChange",
    value: function onChange(isVisible) {
      this.setState({
        isTop: isVisible
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("head", {
        className: "jsx-1749234427",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous",
        className: "jsx-1749234427",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-1749234427",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1749234427" + " " + "top-background-tiny",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
        query: "(max-width: 599px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, function (matches) {
        return matches ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
          navName: _this2.props.navName,
          isTop: _this2.state.isTop,
          mobile: "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
          navName: _this2.props.navName,
          isTop: _this2.state.isTop,
          mobile: "false",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1749234427" + " " + "top-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1749234427" + " " + "content-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-1749234427" + " " + "footer-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2053701609",
        __self: this
      }, ".top-background-tiny.jsx-1749234427{background-color:red;height:0px;width:100%;}.top-background.jsx-1749234427{background-image:url(\"/static/tennis_court_sand.jpg\");background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;width:100%;height:200px;z-index:1000;}.top-background-color.jsx-1749234427{background-color:#20232a;height:100px;width:100%;}.detector-box.jsx-1749234427{height:100px;top:100px;left:0px;width:auto;background-color:transparent;}.scrollimage.jsx-1749234427{height:10px;}.fitscreen.jsx-1749234427{width:100%;height:auto;}.content-box.jsx-1749234427{background-color:#dbdbd7;background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFaUIsQUFHMEMsQUFNaUMsQUFXN0IsQUFNWixBQVFELEFBR0QsQUFLYyxXQUpiLENBSGhCLENBUmMsUUF2QkMsRUF3QkYsQUFXYixFQWxCaUIsQUFzQmMsT0F0Q2pCLEFBeUJDLE1BUkQsS0FmZCxBQXdCaUMsTUFSakMsR0FxQmdDLEVBbENELGtCQXNCL0IsUUFhZ0MsQ0FsQ0EsMkJBbUNOLENBbENNLHFCQW1DaEMsT0FsQzBCLHNCQUNYLFdBQ0UsYUFDRCxhQUVoQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwicmVhY3QtbWVkaWFcIjtcblxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSBcInJlYWN0LXZpc2liaWxpdHktc2Vuc29yXCI7XG5cblxuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hZmZpeFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc1RvcDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkNoYW5nZShpc1Zpc2libGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc1RvcDogaXNWaXNpYmxlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtZ2dPeVIwaVhDYk1RdjNYaXBtYTM0TUQrZEgvMWZRNzg0L2o2Y1kvaUpUUVVPaGNXcjd4OUp2b1J4VDJNWncxVFwiXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgPFZpc2liaWxpdHlTZW5zb3Igb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhY2tncm91bmQtdGlueVwiIC8+XG4gICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XG4gICAgICAgIFxuXG4gICAgICAgICAgICA8TWVkaWEgcXVlcnk9XCIobWF4LXdpZHRoOiA1OTlweClcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMgPT4gbWF0Y2hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyAoPEhlYWRlciBuYXZOYW1lPXt0aGlzLnByb3BzLm5hdk5hbWV9IGlzVG9wPXt0aGlzLnN0YXRlLmlzVG9wfSBtb2JpbGU9XCJ0cnVlXCIgPjwvSGVhZGVyPilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKDxIZWFkZXIgbmF2TmFtZT17dGhpcy5wcm9wcy5uYXZOYW1lfSBpc1RvcD17dGhpcy5zdGF0ZS5pc1RvcH0gbW9iaWxlPVwiZmFsc2VcIj48L0hlYWRlcj4pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgXG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL3N0YXRpYy90ZW5uaXNfY291cnRfc2FuZC5qcGdcIik7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGV0ZWN0b3ItYm94e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjcm9sbGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZml0c2NyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkNztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5idXR0b24tYnJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uLWRhcmsge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE2MWY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAgQ291cmllcjtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuZm9vdGVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExNjFmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG5cbiAgICAgICAgPC8+XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2045142235",
        __self: this
      }, ".button-bright{height:50px;width:auto;background-color:white;border:none;margin:5px !important;}.button-dark{height:50px;width:auto;background-color:#11161f;color:white;border:none;margin:5px !important;}p{margin:0px;}html{font-family:Courier;}.footer-section{background-color:#11161f;height:20vh;width:100%;bottom:0px;left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJaUIsQUFJaUMsQUFVQSxBQVFGLEFBS1csQUFLSSxXQVQ3QixDQWxCZSxBQVVBLFFBY2IsR0F2QnlCLEFBVUUsRUFpQmIsWUFDRCxTQTNCQyxFQVVBLEFBa0JELFVBM0JXLENBNEJiLENBbEJHLFFBbUJkLElBbEJ3QixRQVYxQixjQVdBIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCJyZWFjdC1tZWRpYVwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tIFwicmVhY3QtdmlzaWJpbGl0eS1zZW5zb3JcIjtcblxuXG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFmZml4UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzVG9wOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQ2hhbmdlKGlzVmlzaWJsZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzVG9wOiBpc1Zpc2libGVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFja2dyb3VuZC10aW55XCIgLz5cbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDU5OXB4KVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9PiBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICg8SGVhZGVyIG5hdk5hbWU9e3RoaXMucHJvcHMubmF2TmFtZX0gaXNUb3A9e3RoaXMuc3RhdGUuaXNUb3B9IG1vYmlsZT1cInRydWVcIiA+PC9IZWFkZXI+KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoPEhlYWRlciBuYXZOYW1lPXt0aGlzLnByb3BzLm5hdk5hbWV9IGlzVG9wPXt0aGlzLnN0YXRlLmlzVG9wfSBtb2JpbGU9XCJmYWxzZVwiPjwvSGVhZGVyPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICBcblxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYm94XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNlY3Rpb25cIj5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZC10aW55IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtY29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kZXRlY3Rvci1ib3h7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7IFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2Nyb2xsaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maXRzY3JlZW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmQ3O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmJ1dHRvbi1icmlnaHQge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OyBcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87IFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAgICAgICAgIC5idXR0b24tZGFyayB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTYxZjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICBDb3VyaWVyO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mb290ZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE2MWY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG5cblxuICAgICAgICA8Lz5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.2438b6d086df0d72d24f.hot-update.js.map