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
        'background-image': 'url(' + "" + ')',
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
      }, ".top-background-tiny.jsx-529914387{background-color:red;height:0px;width:100%;}.top-background.jsx-529914387{background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;width:100%;height:200px;z-index:1000;}.top-background-color.jsx-529914387{background-color:#20232a;height:100px;width:100%;}.detector-box.jsx-529914387{height:100px;top:100px;left:0px;width:auto;background-color:transparent;}.scrollimage.jsx-529914387{height:10px;}.fitscreen.jsx-529914387{width:100%;height:auto;}.content-box.jsx-529914387{background-color:#dbdbd7;background-position:center;background-repeat:no-repeat;background-attachment:fixed;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGaUIsQUFHMEMsQUFNTSxBQVVGLEFBTVosQUFRRCxBQUdELEFBS2MsV0FKYixDQUhoQixDQVJjLFFBdEJDLEVBdUJGLEFBV2IsRUFsQmlCLEFBc0JjLEVBaENDLEtBTGxCLEFBd0JDLE1BUkQsS0FkZCxBQXVCaUMsTUFSakMsR0FxQmdDLEdBaENBLGlCQW9CaEMsUUFhZ0MsR0FoQ04sc0JBQ1gsR0FnQ1csUUEvQlQsYUFDRCxDQStCaEIsWUE3QkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuXG5cblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWZmaXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2UoaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IGlzVmlzaWJsZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdG9wQmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyAnKScsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIjogJ2NlbnRlcicsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6ICdjb3ZlcicsXG4gICAgICAgICAgICBcIndpZHRoXCI6ICcxMDAlJywgXG4gICAgICAgICAgICBcImhlaWdodFwiOiAnMjAwcHgnLFxuICAgICAgICAgICAgXCItaW5kZXhcIjonMTAwMCcsXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgICBcblxuICAgICAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNTk5cHgpXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0+IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKDxIZWFkZXIgbmF2TmFtZT17dGhpcy5wcm9wcy5uYXZOYW1lfSBpc1RvcD17dGhpcy5zdGF0ZS5pc1RvcH0gbW9iaWxlPVwidHJ1ZVwiID48L0hlYWRlcj4pXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICg8SGVhZGVyIG5hdk5hbWU9e3RoaXMucHJvcHMubmF2TmFtZX0gaXNUb3A9e3RoaXMuc3RhdGUuaXNUb3B9IG1vYmlsZT1cImZhbHNlXCI+PC9IZWFkZXI+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgIFxuXG5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9wQmFja2dyb3VuZFN0eWxlfSA+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtY29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kZXRlY3Rvci1ib3h7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7IFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2Nyb2xsaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maXRzY3JlZW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmQ3O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgxOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoMTpob3ZlcjphZnRlciB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XG4gICAgICAgICAgICAgICAgICBoMS5mcm9tUmlnaHQ6YWZ0ZXJ7IHRyYW5zZm9ybS1vcmlnaW46MTAwJSA1MCU7IH1cbiAgICAgICAgICAgICAgICAgIGgxLmZyb21MZWZ0OmFmdGVyeyAgdHJhbnNmb3JtLW9yaWdpbjogIDAlIDUwJTsgfVxuICAgICAgICBcbiAgIFxuICAgICAgICAgICAgICAgICAgcDphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb3BkIDNweCAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwOmFmdGVyIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cbiAgICAgICAgICAgICAgICAgIHAuZnJvbVJpZ2h0OmFmdGVyeyB0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlOyB9XG4gICAgICAgICAgICAgICAgICBwLmZyb21MZWZ0OmFmdGVyeyAgdHJhbnNmb3JtLW9yaWdpbjogIDAlIDUwJTsgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAgXCJJbXBhY3RcIiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mb290ZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE2MWY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG5cblxuICAgICAgICA8Lz5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "1759443672",
        __self: this
      }, "h1:after{display:block;content:'';border-bottom:solid 3px #ff5c00;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 250ms ease-in-out;-webkit-transition:transform 250ms ease-in-out;transition:transform 250ms ease-in-out;}h1:hover:after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}h1.fromRight:after{-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;}h1.fromLeft:after{-webkit-transform-origin:0% 50%;-ms-transform-origin:0% 50%;transform-origin:0% 50%;}p:after{display:block;content:'';border-bottom:sopd 3px #ff5c00;-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform 250ms ease-in-out;-webkit-transition:transform 250ms ease-in-out;transition:transform 250ms ease-in-out;}p:after{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}p.fromRight:after{-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;}p.fromLeft:after{-webkit-transform-origin:0% 50%;-ms-transform-origin:0% 50%;transform-origin:0% 50%;}body{font-family:\"Impact\" !important;}.footer-section{background-color:#11161f;height:20vh;width:100%;bottom:0px;left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdKaUIsQUFJa0MsQUFNcUIsQUFDUSxBQUNBLEFBSTdCLEFBTWMsQUFDYyxBQUNBLEFBS1IsQUFLUixjQTdCZCxBQVlBLFdBWHFCLEFBWUQsQUFpQm5CLE9BSmQsS0FLYSxXQUNBLFFBbEJTLENBWkEsRUErQlgsU0FDWCxJQTdCcUMsQUFZUCxZQVZlLEFBWUQsTUFiQyxBQVlELHNDQUhILENBWkEsNElBYXpDLENBWkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG5pbXBvcnQgTWVkaWEgZnJvbSBcInJlYWN0LW1lZGlhXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gXCJyZWFjdC12aXNpYmlsaXR5LXNlbnNvclwiO1xuXG5cblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYWZmaXhSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNUb3A6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgb25DaGFuZ2UoaXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNUb3A6IGlzVmlzaWJsZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdG9wQmFja2dyb3VuZFN0eWxlID0ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgcHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyAnKScsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcG9zaXRpb25cIjogJ2NlbnRlcicsXG4gICAgICAgICAgICBcImJhY2tncm91bmQtcmVwZWF0XCI6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWF0dGFjaG1lbnRcIjogJ2ZpeGVkJyxcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1zaXplXCI6ICdjb3ZlcicsXG4gICAgICAgICAgICBcIndpZHRoXCI6ICcxMDAlJywgXG4gICAgICAgICAgICBcImhlaWdodFwiOiAnMjAwcHgnLFxuICAgICAgICAgICAgXCItaW5kZXhcIjonMTAwMCcsXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LWdnT3lSMGlYQ2JNUXYzWGlwbWEzNE1EK2RILzFmUTc4NC9qNmNZL2lKVFFVT2hjV3I3eDlKdm9SeFQyTVp3MVRcIlxuICAgICAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYWNrZ3JvdW5kLXRpbnlcIiAvPlxuICAgICAgICAgICAgPC9WaXNpYmlsaXR5U2Vuc29yPlxuICAgICAgICBcblxuICAgICAgICAgICAgPE1lZGlhIHF1ZXJ5PVwiKG1heC13aWR0aDogNTk5cHgpXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzID0+IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKDxIZWFkZXIgbmF2TmFtZT17dGhpcy5wcm9wcy5uYXZOYW1lfSBpc1RvcD17dGhpcy5zdGF0ZS5pc1RvcH0gbW9iaWxlPVwidHJ1ZVwiID48L0hlYWRlcj4pXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICg8SGVhZGVyIG5hdk5hbWU9e3RoaXMucHJvcHMubmF2TmFtZX0gaXNUb3A9e3RoaXMuc3RhdGUuaXNUb3B9IG1vYmlsZT1cImZhbHNlXCI+PC9IZWFkZXI+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgIFxuXG5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9wQmFja2dyb3VuZFN0eWxlfSA+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWJveFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zZWN0aW9uXCI+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtdGlueSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wLWJhY2tncm91bmQtY29sb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMzJhO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5kZXRlY3Rvci1ib3h7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7IFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2Nyb2xsaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maXRzY3JlZW4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29udGVudC1ib3gge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmQ3O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cblxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGgxOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBoMTpob3ZlcjphZnRlciB7IHRyYW5zZm9ybTogc2NhbGVYKDEpOyB9XG4gICAgICAgICAgICAgICAgICBoMS5mcm9tUmlnaHQ6YWZ0ZXJ7IHRyYW5zZm9ybS1vcmlnaW46MTAwJSA1MCU7IH1cbiAgICAgICAgICAgICAgICAgIGgxLmZyb21MZWZ0OmFmdGVyeyAgdHJhbnNmb3JtLW9yaWdpbjogIDAlIDUwJTsgfVxuICAgICAgICBcbiAgIFxuICAgICAgICAgICAgICAgICAgcDphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb3BkIDNweCAjZmY1YzAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTsgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBwOmFmdGVyIHsgdHJhbnNmb3JtOiBzY2FsZVgoMSk7IH1cbiAgICAgICAgICAgICAgICAgIHAuZnJvbVJpZ2h0OmFmdGVyeyB0cmFuc2Zvcm0tb3JpZ2luOjEwMCUgNTAlOyB9XG4gICAgICAgICAgICAgICAgICBwLmZyb21MZWZ0OmFmdGVyeyAgdHJhbnNmb3JtLW9yaWdpbjogIDAlIDUwJTsgfVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAgXCJJbXBhY3RcIiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5mb290ZXItc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE2MWY7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuXG5cblxuICAgICAgICA8Lz5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG5cbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/components/Layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.410f6269122986bc13ce.hot-update.js.map