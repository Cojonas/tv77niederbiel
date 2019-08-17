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

      var topBackgroundStyle = {
        'background-image': 'url(' + "" + 'static/tennis_court_sand.jpg)',
        "background-position": 'center',
        "background-repeat": 'no-repeat',
        "background-attachment": 'fixed',
        "background-size": 'cover',
        "width": '100%',
        "height": '200px',
        "-index": '1000'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("head", {
        className: "jsx-529914387",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous",
        className: "jsx-529914387",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-529914387",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, {
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-529914387" + " " + "top-background-tiny",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_media__WEBPACK_IMPORTED_MODULE_9__["default"], {
        query: "(max-width: 599px)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, function (matches) {
        return matches ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
          navName: _this2.props.navName,
          isTop: _this2.state.isTop,
          mobile: "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
          navName: _this2.props.navName,
          isTop: _this2.state.isTop,
          mobile: "false",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: topBackgroundStyle,
        className: "jsx-529914387",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-529914387" + " " + "content-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-529914387" + " " + "footer-section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3499275490",
        __self: this
      }, ".top-background-tiny.jsx-529914387{background-color:red;height:0px;width:100%;}.top-background.jsx-529914387{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;width:100%;height:200px;z-index:1000;}.top-background-color.jsx-529914387{background-color:#20232a;height:100px;width:100%;}.detector-box.jsx-529914387{height:100px;top:100px;left:0px;width:auto;background-color:transparent;}.scrollimage.jsx-529914387{height:10px;}.fitscreen.jsx-529914387{width:100%;height:auto;}.content-box.jsx-529914387{background-color:#dbdbd7;background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGaUIsQUFHMEMsQUFNTSxBQVVGLEFBTVosQUFRRCxBQUdELEFBS2MsV0FKYixDQUhoQixDQVJjLFFBdEJDLEVBdUJGLEFBV2IsRUFsQmlCLEFBc0JjLEVBaENDLEtBTGxCLEFBd0JDLE1BUkQsS0FkZCxBQXVCaUMsTUFSakMsR0FxQmdDLEdBaENBLGlCQW9CaEMsUUFhZ0MsR0FoQ04sc0JBQ1gsR0FnQ1csUUEvQlQsYUFDRCxDQStCaEIsWUE3QkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuXG5cblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWZmaXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2UoaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IGlzVmlzaWJsZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdG9wQmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyAnc3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZyknLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6ICdjZW50ZXInLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1hdHRhY2htZW50XCI6ICdmaXhlZCcsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiAnY292ZXInLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAnMTAwJScsIFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogJzIwMHB4JyxcbiAgICAgICAgICAgIFwiLWluZGV4XCI6JzEwMDAnLFxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFja2dyb3VuZC10aW55XCIgLz5cbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDU5OXB4KVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9PiBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICg8SGVhZGVyIG5hdk5hbWU9e3RoaXMucHJvcHMubmF2TmFtZX0gaXNUb3A9e3RoaXMuc3RhdGUuaXNUb3B9IG1vYmlsZT1cInRydWVcIiA+PC9IZWFkZXI+KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoPEhlYWRlciBuYXZOYW1lPXt0aGlzLnByb3BzLm5hdk5hbWV9IGlzVG9wPXt0aGlzLnN0YXRlLmlzVG9wfSBtb2JpbGU9XCJmYWxzZVwiPjwvSGVhZGVyPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICBcblxuXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RvcEJhY2tncm91bmRTdHlsZX0gPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc2VjdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLXRpbnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGV0ZWN0b3ItYm94e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjcm9sbGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZml0c2NyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkNztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMTphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaDE6aG92ZXI6YWZ0ZXIgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxuICAgICAgICAgICAgICAgICAgaDEuZnJvbVJpZ2h0OmFmdGVyeyB0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlOyB9XG4gICAgICAgICAgICAgICAgICBoMS5mcm9tTGVmdDphZnRlcnsgIHRyYW5zZm9ybS1vcmlnaW46ICAwJSA1MCU7IH1cbiAgICAgICAgXG4gICBcbiAgICAgICAgICAgICAgICAgIHA6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29wZCAzcHggI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcDphZnRlciB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XG4gICAgICAgICAgICAgICAgICBwLmZyb21SaWdodDphZnRlcnsgdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDUwJTsgfVxuICAgICAgICAgICAgICAgICAgcC5mcm9tTGVmdDphZnRlcnsgIHRyYW5zZm9ybS1vcmlnaW46ICAwJSA1MCU7IH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogIFwiSW1wYWN0XCIgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuZm9vdGVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExNjFmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG5cbiAgICAgICAgPC8+XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1759443672",
        __self: this
      }, "h1:after{display:block;content:'';border-bottom:solid 3px #ff5c00;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 250ms ease-in-out;-webkit-transition:transform 250ms ease-in-out;transition:transform 250ms ease-in-out;}h1:hover:after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}h1.fromRight:after{-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;}h1.fromLeft:after{-webkit-transform-origin:0% 50%;-ms-transform-origin:0% 50%;transform-origin:0% 50%;}p:after{display:block;content:'';border-bottom:sopd 3px #ff5c00;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 250ms ease-in-out;-webkit-transition:transform 250ms ease-in-out;transition:transform 250ms ease-in-out;}p:after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}p.fromRight:after{-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;}p.fromLeft:after{-webkit-transform-origin:0% 50%;-ms-transform-origin:0% 50%;transform-origin:0% 50%;}body{font-family:\"Impact\" !important;}.footer-section{background-color:#11161f;height:20vh;width:100%;bottom:0px;left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKaUIsQUFJa0MsQUFNcUIsQUFDUSxBQUNBLEFBSTdCLEFBTWMsQUFDYyxBQUNBLEFBS1IsQUFLUixjQTdCZCxBQVlBLFdBWHFCLEFBWUQsQUFpQm5CLE9BSmQsS0FLYSxXQUNBLFFBbEJTLENBWkEsRUErQlgsU0FDWCxJQTdCcUMsQUFZUCxZQVZlLEFBWUQsTUFiQyxBQVlELHNDQUhILENBWkEsNElBYXpDLENBWkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuXG5cblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWZmaXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2UoaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IGlzVmlzaWJsZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdG9wQmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyAnc3RhdGljL3Rlbm5pc19jb3VydF9zYW5kLmpwZyknLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6ICdjZW50ZXInLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXJlcGVhdFwiOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1hdHRhY2htZW50XCI6ICdmaXhlZCcsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtc2l6ZVwiOiAnY292ZXInLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAnMTAwJScsIFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogJzIwMHB4JyxcbiAgICAgICAgICAgIFwiLWluZGV4XCI6JzEwMDAnLFxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvciBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYmFja2dyb3VuZC10aW55XCIgLz5cbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIDxNZWRpYSBxdWVyeT1cIihtYXgtd2lkdGg6IDU5OXB4KVwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcyA9PiBtYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICg8SGVhZGVyIG5hdk5hbWU9e3RoaXMucHJvcHMubmF2TmFtZX0gaXNUb3A9e3RoaXMuc3RhdGUuaXNUb3B9IG1vYmlsZT1cInRydWVcIiA+PC9IZWFkZXI+KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoPEhlYWRlciBuYXZOYW1lPXt0aGlzLnByb3BzLm5hdk5hbWV9IGlzVG9wPXt0aGlzLnN0YXRlLmlzVG9wfSBtb2JpbGU9XCJmYWxzZVwiPjwvSGVhZGVyPilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICBcblxuXG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RvcEJhY2tncm91bmRTdHlsZX0gPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ib3hcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc2VjdGlvblwiPlxuXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLXRpbnkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3AtYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwMDA7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjMyYTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGV0ZWN0b3ItYm94e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4OyBcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNjcm9sbGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZml0c2NyZWVuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkNztcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMTphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaDE6aG92ZXI6YWZ0ZXIgeyB0cmFuc2Zvcm06IHNjYWxlWCgxKTsgfVxuICAgICAgICAgICAgICAgICAgaDEuZnJvbVJpZ2h0OmFmdGVyeyB0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlOyB9XG4gICAgICAgICAgICAgICAgICBoMS5mcm9tTGVmdDphZnRlcnsgIHRyYW5zZm9ybS1vcmlnaW46ICAwJSA1MCU7IH1cbiAgICAgICAgXG4gICBcbiAgICAgICAgICAgICAgICAgIHA6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29wZCAzcHggI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7ICBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcDphZnRlciB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XG4gICAgICAgICAgICAgICAgICBwLmZyb21SaWdodDphZnRlcnsgdHJhbnNmb3JtLW9yaWdpbjoxMDAlIDUwJTsgfVxuICAgICAgICAgICAgICAgICAgcC5mcm9tTGVmdDphZnRlcnsgIHRyYW5zZm9ybS1vcmlnaW46ICAwJSA1MCU7IH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogIFwiSW1wYWN0XCIgIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuZm9vdGVyLXNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExNjFmO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwdmg7IFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuXG5cbiAgICAgICAgPC8+XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG5cblxuXG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.a3dcf2724792d860baa4.hot-update.js.map