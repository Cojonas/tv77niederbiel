webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_NavBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBox */ "./components/NavBox.js");
/* harmony import */ var _components_SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SocialMedia */ "./components/SocialMedia.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items.json */ "./items.json");
var _items_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../items.json */ "./items.json", 1);

var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/pages/index.js";












function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var generalGalery = {
    items: [{
      id: "1",
      picture: "/static/tennisplatz_niederbiel.jpg",
      legend: "Unsere Anlage"
    }, {
      id: "2",
      picture: "/static/clubheim_draussen.jpg",
      legend: "Das Vereinsheim"
    }, {
      id: "3",
      picture: "/static/clubheim_drinnen.jpg",
      legend: "Unser Vereinsheim"
    }, {
      id: "4",
      picture: "/static/clubheim_drinnen2.jpg",
      legend: "Unser Vereinsheim"
    }]
  };
  var teamGalery = {
    items: [{
      id: "1",
      picture: "/static/teamfoto_herren.jpeg",
      legend: "Herren"
    }, {
      id: "2",
      picture: "/static/teamfoto_damen.jpeg",
      legend: "Damen"
    }]
  };
  var backgroundStyle = {
    backgroundImage: 'url(\"' + generalGalery.items[current].picture + '\"'
  };
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    var next = (current + 1) % generalGalery.items.length;
    var id = setTimeout(function () {
      return setCurrent(next);
    }, 5000);
    return function () {
      return clearTimeout(id);
    };
  }, [current]);
  var toprow = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1737872888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: backgroundStyle,
    className: "jsx-1737872888" + " " + "backgroundGallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1737872888" + " " + "stickyBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-1737872888",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1737872888" + " " + "topTextWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1737872888" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Herzlich Willkommen beim TV77 Niederbiel!")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1737872888",
    __self: this
  }, ".backgroundGallery.jsx-1737872888{background :url(\"/static/clubheim_draussen.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;min-height:50vh;position:relative;}.stickyBottom.jsx-1737872888{width:100%;position:absolute;padding:30px;bottom:0;background:linear-gradient(180deg,rgba(17,17,17,0) 0%,rgba(17,17,17,0.5) 8%,rgba(17,17,17,0.80) 15%,rgba(17,17,17,1) 100%);}.topTextWrapper.jsx-1737872888{max-width:1024px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGTyxBQUk2RCxBQVN0QyxBQU9NLFdBTkMsTUFPcEIsWUFOZSxhQUNKLE9BWGEsRUFZeUcsb0JBWG5HLDRCQUNELDJCQUNYLGdCQUNFLGtCQUVwQixjQU9BIiwiZmlsZSI6Ii9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBOYXZCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2Qm94XCI7XG5pbXBvcnQgU29jaWFsTWVkaWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsTWVkaWFcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFjZWJvb2tQcm92aWRlciwgUGFnZSB9IGZyb20gJ3JlYWN0LWZhY2Vib29rJztcbmltcG9ydCBHYWxlcnkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5cbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFubmVyXCJcbmltcG9ydCBJdGVtcyBmcm9tIFwiLi4vaXRlbXMuanNvblwiXG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG5cblxuICBjb25zdCBnZW5lcmFsR2FsZXJ5ID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL3Rlbm5pc3BsYXR6X25pZWRlcmJpZWwuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlcmUgQW5sYWdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL2NsdWJoZWltX2RyYXVzc2VuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiRGFzIFZlcmVpbnNoZWltXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL2NsdWJoZWltX2RyaW5uZW4uanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCI0XCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuMi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIlVuc2VyIFZlcmVpbnNoZWltXCJcbiAgICAgIH1cblxuICAgIF1cbiAgfVxuXG5cbiAgY29uc3QgdGVhbUdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19oZXJyZW4uanBlZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiSGVycmVuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL3RlYW1mb3RvX2RhbWVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhbWVuXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IGJhY2tncm91bmRTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFxcIicgKyBnZW5lcmFsR2FsZXJ5Lml0ZW1zW2N1cnJlbnRdLnBpY3R1cmUgKyAnXFxcIidcbiAgfVxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gKGN1cnJlbnQgKyAxKSAlIGdlbmVyYWxHYWxlcnkuaXRlbXMubGVuZ3RoO1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50KG5leHQpLCA1MDAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgfSwgW2N1cnJlbnRdKTtcblxuXG5cblxuXG4gIGNvbnN0IHRvcHJvdyA9IDw+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgc3R5bGU9e2JhY2tncm91bmRTdHlsZX0gY2xhc3NOYW1lPVwiYmFja2dyb3VuZEdhbGxlcnlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3lCb3R0b21cIj5cbiAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BUZXh0V3JhcHBlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaWdnZXJcIj5IZXJ6bGljaCBXaWxsa29tbWVuIGJlaW0gVFY3NyBOaWVkZXJiaWVsITwvc3Bhbj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2NlbnRlcj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiBcbiAgICAgICAgIC5iYWNrZ3JvdW5kR2FsbGVyeSB7XG4gICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoXCIvc3RhdGljL2NsdWJoZWltX2RyYXVzc2VuLmpwZ1wiKTtcbiAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIFxuICAgICAgICAgfVxuICAgICAgICAgLnN0aWNreUJvdHRvbSB7XG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTcsMTcsMTcsMCkgMCUsIHJnYmEoMTcsMTcsMTcsMC41KSA4JSwgcmdiYSgxNywxNywxNywwLjgwKSAxNSUsIHJnYmEoMTcsMTcsMTcsMSkgMTAwJSk7XG4gICAgICAgICB9XG4gICAgICAgICAudG9wVGV4dFdyYXBwZXIge1xuICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICAgICAgIH1cbiAgICAgICAgICAgYH1cblxuICAgIDwvc3R5bGU+XG4gIDwvPlxuXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdk5hbWU9XCJTdGFydFwiIHRvcHJvdz17dG9wcm93fVxuXG5cbiAgICA+ICAgICAgPFNvY2lhbE1lZGlhPjwvU29jaWFsTWVkaWE+XG5cblxuICAgICAgPGNlbnRlcj5cblxuICAgICAgPHA+XG4gICAgICAgIFdpciBmcmV1ZW4gdW5zLCBkYXNzIFNpZSB1bnNlcmUgSW50ZXJuZXRzZWl0ZSBiZXN1Y2hlbi4gQXVjaCBiZWkgRmFjZWJvb2sgaGFsdGVuIHdpciBzaWUgYXVmIGRlbSBMYXVmZW5kZW4uIMOcYmVyIGVpbiBMaWtlIHfDvHJkZW4gd2lyIHVucyBzZWhyIGZyZXVlbiFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgPC9jZW50ZXI+XG5cblxuXG5cblxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtYmxvY2sganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiAgPlxuICAgICAgICAgIDxoMT5Ba3R1ZWxsZXM8L2gxPlxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIGxnPVwiNlwiID5cblxuICAgICAgICAgIDxCYW5uZXI+XG5cblxuXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFubmVyLWhlYWRlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gPlNjaG51cHBlcmFuZ2Vib3Q8L2gyPlxuICAgICAgICAgICAgPHNwYW4+RXJzdCBwcm9iaWVyZW4sIGRhbm4gZW50c2NoZWlkZW4hPC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgPHNwYW4+RXJoYWx0ZW4gU2llIGVpbmUgZ3JhdGlzIFRyYWluZXJzdHVuZGUuIEVudHNjaGVpZGVuIFNpZSBzaWNoIGbDvHIgZWluZSBNaXRnbGllZHNjaGFmdCwgemFobGVuIFNpZSBmw7xyIGRhcyBCZWl0cml0dHNqYWhyIG51ciBkaWUgSMOkbGZ0ZSE8L3NwYW4+PGJyPjwvYnI+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvbWl0Z2xpZWRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPnp1bSBhbmdlYm90PC9hPlxuXG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgPEJhbm5lcj5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJhbm5lci1oZWFkZXJcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PiBWZXJlaW5zaGVpbSBtaWV0ZW48L2gyPlxuICAgICAgICAgICAgPHNwYW4+QXVjaCBOaWNodC1NaXRnbGllZGVyIGvDtm5uZW4gdW5zZXIgVmVyZWluc2hlaW0gbWlldGVuLiBEaWVzZXMgaGF0IFBsYXR6IGbDvHIgY2EuIDUwIFBlcnNvbmVuLjwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuPk1pdCBlaWdlbmVyIEvDvGNoZSB1bmQgbW9kZXJuZXIgVGhla2UhPC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi92ZXJlaW5zaGVpbVwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+WnVtIEFuZ2Vib3Q8L2E+XG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBsZz1cIjVcIiA+XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3BhY2l0eTogMC45IH19PlxuICAgICAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjcxNjQ0ODkyODc5NDc5OFwiID5cbiAgICAgICAgICAgICAgICA8UGFnZSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1RWLTc3LU5pZWRlcmJpZWwtNjEyOTkwMDQ5MDQyMzcyL1wiIHRhYnM9XCJ0aW1lbGluZVwiIC8+XG4gICAgICAgICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9jZW50ZXI+XG5cblxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEwIH19PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiA+XG4gICAgICAgICAgPGgxPsOcYmVyIHVuczwvaDE+XG5cbiAgICAgICAgPC9Db2w+XG5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBEZXIgVFYgNzcgTmllZGVyYmllbCBpc3QgZWluIFRlbm5pc3ZlcmVpbiBtaXQgZGVyemVpdCBydW5kIDEzNSBNaXRnbGllZGVybiwgd292b24gZ3V0IDUwJSBha3RpdmVuIFN0YXR1cyBiZXNpdHplbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+RGVyIE9ydCBOaWVkZXJiaWVsIGdlaMO2cnQgenVyIFN0YWR0IFNvbG1zIHVuZCBsaWVndCB3dW5kZXJzY2jDtm4gcnVoaWcgaW0gTGFobnRhbCBpbiBkZXIgTsOkaGUgZGVyIEJ1bmRlc3N0cmHDn2UgNDkgendpc2NoZW4gR2llc3NlbiBpbSBPc3RlbiB1bmQgTGltYnVyZyBpbSBXZXN0ZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlBydW5rc3TDvGNrIGRlciBBbmxhZ2UgaXN0IGRhcyBWZXJlaW5zaGVpbSBtaXQgZ3Jvw59lbSwgaGVsbGVuIEdhc3RyYXVtIChyZW5vdmllcnQgaW0gRnLDvGhqYWhyIDIwMDgpIHVuZCBnZXLDpHVtaWdlbiBVbWtsZWlkZXLDpHVtZW4gZsO8ciBEYW1lbiB1bmQgSGVycmVuIG1pdHNhbXQgc2FuaXTDpHJlbiBBbmxhZ2VuLiBCZXNvbmRlcnMgYmVsaWVidCBpbSBTb21tZXIgLSBuaWNodCBudXIgYmVpIFZlcmVpbnNtaXRnbGllZGVybiAtIGlzdCBkZXIgRnJlaXNpdHogZGVzIFZlcmVpbnNoZWltcyBpbSBHcsO8bmVuIG1pdCBCbGljayBhdWYgZGllIFBsw6R0emUuXG5cbiAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL2Fib3V0XCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5NZWhyPC9hPlxuXG4gICAgICAgICAgPE5hdkJveCBpdGVtcz17SXRlbXMubGlzdEl0ZW1zLmFib3V0SXRlbXN9IC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiPlxuXG4gICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQ2MjYzLjc0NjA2MTQ5MzM2MSEyZDguMzk3NTAyMjAyNzExNDcyITNkNTAuNTYxMzIzMzc0MjQ4OSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHgzN2VmZjhjMjg3NGRmYmMzITJzVGVubmlzdmVyZWluJTIwNzclMjBOaWVkZXJiaWVsITVlMSEzbTIhMXNlbiEyc3VzITR2MTU3Njc5MTMxNzUzMSE1bTIhMXNlbiEyc3VzXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIxXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93ZnVsbHNjcmVlbj1cIlwiPjwvaWZyYW1lPlxuXG5cbiAgICAgICAgPC9Db2w+XG5cblxuICAgICAgPC9Sb3c+XG5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgIDxDb2wgeHM9XCIxMlwiID5cbiAgICAgICAgICA8aDE+VGVhbXM8L2gxPlxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiID5cbiAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBKZWRlIFNhaXNvbiBzdGVsbGVuIHdpciBlaW5pZ2UgTWFubnNjaGFmdGVuIHVudGVyc2NoaWVkbGljaGVyIEFsdGVyc2tsYXNzZW4uXG4gICAgICAgICAgICAgIEhpZXIga8O2bm5lbiBTaWUgc2ljaCBlaW5lbiDDnGJlcmJsaWNrIHZlcnNjaGFmZmVuIHVuZCBha3R1ZWxsZSBFcmdlYm5pc3NlIGVpbnNlaGVuLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi90ZWFtc1wifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+w5xiZXJzaWNodDwvYT48YnI+PC9icj5cblxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuXG4gICAgICAgICAgPEdhbGVyeSBkYXRhPXt0ZWFtR2FsZXJ5fSAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgPC9Sb3c+XG5cblxuXG5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgLnRvcHJvd0dhbGxlcnkge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbEJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ZhY2Vib29rLnBuZ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy10b3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1oZWFkZXIge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4OyBcbiAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICMzMzMgMSUpIGNlbnRlci8xNTAwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY2VudC1saW5lIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tYmlnIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgICAgICAgd2lkdGg6IDMwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluay1ob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7IFxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLm9mZmVyLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuXG4gICAgXG4gICAgICAgICAgICBgfVxuXG5cbiAgICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navName: "Start",
    toprow: toprow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "      ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem Laufenden. \xDCber ein Like w\xFCrden wir uns sehr freuen!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Aktuelles")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    lg: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4123352442" + " " + "banner-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "zum angebot")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4123352442" + " " + "banner-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Zum Angebot"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    lg: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      opacity: 0.9
    },
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookProvider"], {
    appId: "716448928794798",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    href: "https://www.facebook.com/TV-77-Niederbiel-612990049042372/",
    tabs: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    style: {
      paddingTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "\xDCber uns")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern - ist der Freisitz des Vereinsheims im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "Mehr"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: _items_json__WEBPACK_IMPORTED_MODULE_11__.listItems.aboutItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6263.746061493361!2d8.397502202711472!3d50.5613233742489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37eff8c2874dfbc3!2sTennisverein%2077%20Niederbiel!5e1!3m2!1sen!2sus!4v1576791317531!5m2!1sen!2sus",
    width: "100%",
    height: "300",
    frameborder: "1",
    style: {
      border: 0
    },
    allowfullscreen: "",
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Teams")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: teamGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4123352442",
    __self: this
  }, ".toprowGallery.jsx-4123352442{background:#555 !important;height:500px;width:100%;}.socialButton.jsx-4123352442{margin:50px;background:url(\"/static/facebook.png\");}.img-top.jsx-4123352442{margin-top:-50px;height:200px;width:auto;}.banner-header.jsx-4123352442{text-transform:uppercase;font-weight:bold;-webkit-letter-spacing:-2px;-moz-letter-spacing:-2px;-ms-letter-spacing:-2px;letter-spacing:-2px;font-size:26px;}.row.jsx-4123352442{padding:10px 0px;}.ripple.jsx-4123352442{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-4123352442:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-4123352442:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-4123352442{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.logo-big.jsx-4123352442{height:auto;width:30vh;}ul.jsx-4123352442{margin:0px;padding:0px;}.box.jsx-4123352442{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-4123352442{width:100%;color:black;}a.jsx-4123352442:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-4123352442{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-4123352442:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStQUyxBQUdrRCxBQUt6QixBQUlLLEFBS1EsQUFPUixBQUdnQixBQUtvRCxBQUd6RCxBQUtiLEFBT0QsQUFLQyxBQUlLLEFBUVIsQUFJRSxBQUlJLEFBUVksV0F2Q2YsQUFZQyxBQWFqQixDQXpEd0MsQUF1QzFCLEFBcUJVLElBSVQsQ0E1REQsQUFZZixDQWdDYSxJQXJCZ0IsQUFNRSxDQU83QixBQUtFLEFBWUYsRUFoRGlCLEVBZE0sQUF3QlUsQUE4QnJCLENBZ0JFLEVBNURILE9BNkNHLEdBdERPLEFBc0VNLENBNUQ3QixDQUlzQixDQWtCVyxJQU1YLEVBaUJwQixFQXREUSxBQUlWLFNBdUVJLEVBWEYsQ0ExQkUsRUFnQ0YsWUEzQ0UsWUFKdUIsWUFTdkIsT0FSQSwrQkFWYSxlQUVqQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIFBhZ2UgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgR2FsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiXG5pbXBvcnQgSXRlbXMgZnJvbSBcIi4uL2l0ZW1zLmpzb25cIlxuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcblxuXG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cblxuICBjb25zdCBiYWNrZ3JvdW5kU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFxcXCInICsgZ2VuZXJhbEdhbGVyeS5pdGVtc1tjdXJyZW50XS5waWN0dXJlICsgJ1xcXCInXG4gIH1cblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV4dCA9IChjdXJyZW50ICsgMSkgJSBnZW5lcmFsR2FsZXJ5Lml0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudChuZXh0KSwgNTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZCk7XG4gIH0sIFtjdXJyZW50XSk7XG5cblxuXG5cblxuICBjb25zdCB0b3Byb3cgPSA8PlxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtiYWNrZ3JvdW5kU3R5bGV9IGNsYXNzTmFtZT1cImJhY2tncm91bmRHYWxsZXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5Qm90dG9tXCI+XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wVGV4dFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlnZ2VyXCI+SGVyemxpY2ggV2lsbGtvbW1lbiBiZWltIFRWNzcgTmllZGVyYmllbCE8L3NwYW4+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9jZW50ZXI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gXG4gICAgICAgICAuYmFja2dyb3VuZEdhbGxlcnkge1xuICAgICAgICAgICBiYWNrZ3JvdW5kIDogdXJsKFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIik7XG4gICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgbWluLWhlaWdodDogNTB2aDtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgIC5zdGlja3lCb3R0b20ge1xuICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE3LDE3LDE3LDApIDAlLCByZ2JhKDE3LDE3LDE3LDAuNSkgOCUsIHJnYmEoMTcsMTcsMTcsMC44MCkgMTUlLCByZ2JhKDE3LDE3LDE3LDEpIDEwMCUpO1xuICAgICAgICAgfVxuICAgICAgICAgLnRvcFRleHRXcmFwcGVyIHtcbiAgICAgICAgICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgICAgICB9XG4gICAgICAgICAgIGB9XG5cbiAgICA8L3N0eWxlPlxuICA8Lz5cblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBuYXZOYW1lPVwiU3RhcnRcIiB0b3Byb3c9e3RvcHJvd31cblxuXG4gICAgPiAgICAgIDxTb2NpYWxNZWRpYT48L1NvY2lhbE1lZGlhPlxuXG5cbiAgICAgIDxjZW50ZXI+XG5cbiAgICAgIDxwPlxuICAgICAgICBXaXIgZnJldWVuIHVucywgZGFzcyBTaWUgdW5zZXJlIEludGVybmV0c2VpdGUgYmVzdWNoZW4uIEF1Y2ggYmVpIEZhY2Vib29rIGhhbHRlbiB3aXIgc2llIGF1ZiBkZW0gTGF1ZmVuZGVuLiDDnGJlciBlaW4gTGlrZSB3w7xyZGVuIHdpciB1bnMgc2VociBmcmV1ZW4hXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgIDwvY2VudGVyPlxuXG5cblxuXG5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgID5cbiAgICAgICAgICA8aDE+QWt0dWVsbGVzPC9oMT5cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBsZz1cIjZcIiA+XG5cbiAgICAgICAgICA8QmFubmVyPlxuXG5cblxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJhbm5lci1oZWFkZXJcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19ID5TY2hudXBwZXJhbmdlYm90PC9oMj5cbiAgICAgICAgICAgIDxzcGFuPkVyc3QgcHJvYmllcmVuLCBkYW5uIGVudHNjaGVpZGVuITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgIDxzcGFuPkVyaGFsdGVuIFNpZSBlaW5lIGdyYXRpcyBUcmFpbmVyc3R1bmRlLiBFbnRzY2hlaWRlbiBTaWUgc2ljaCBmw7xyIGVpbmUgTWl0Z2xpZWRzY2hhZnQsIHphaGxlbiBTaWUgZsO8ciBkYXMgQmVpdHJpdHRzamFociBudXIgZGllIEjDpGxmdGUhPC9zcGFuPjxicj48L2JyPlxuXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL21pdGdsaWVkXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj56dW0gYW5nZWJvdDwvYT5cblxuICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgIDxCYW5uZXI+XG5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJiYW5uZXItaGVhZGVyXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT4gVmVyZWluc2hlaW0gbWlldGVuPC9oMj5cbiAgICAgICAgICAgIDxzcGFuPkF1Y2ggTmljaHQtTWl0Z2xpZWRlciBrw7ZubmVuIHVuc2VyIFZlcmVpbnNoZWltIG1pZXRlbi4gRGllc2VzIGhhdCBQbGF0eiBmw7xyIGNhLiA1MCBQZXJzb25lbi48L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICA8c3Bhbj5NaXQgZWlnZW5lciBLw7xjaGUgdW5kIG1vZGVybmVyIFRoZWtlITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvdmVyZWluc2hlaW1cIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPlp1bSBBbmdlYm90PC9hPlxuICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgbGc9XCI1XCIgPlxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG9wYWNpdHk6IDAuOSB9fT5cbiAgICAgICAgICAgICAgPEZhY2Vib29rUHJvdmlkZXIgYXBwSWQ9XCI3MTY0NDg5Mjg3OTQ3OThcIiA+XG4gICAgICAgICAgICAgICAgPFBhZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UVi03Ny1OaWVkZXJiaWVsLTYxMjk5MDA0OTA0MjM3Mi9cIiB0YWJzPVwidGltZWxpbmVcIiAvPlxuICAgICAgICAgICAgICA8L0ZhY2Vib29rUHJvdmlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvY2VudGVyPlxuXG5cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCB9fT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgPlxuICAgICAgICAgIDxoMT7DnGJlciB1bnM8L2gxPlxuXG4gICAgICAgIDwvQ29sPlxuXG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGVyIFRWIDc3IE5pZWRlcmJpZWwgaXN0IGVpbiBUZW5uaXN2ZXJlaW4gbWl0IGRlcnplaXQgcnVuZCAxMzUgTWl0Z2xpZWRlcm4sIHdvdm9uIGd1dCA1MCUgYWt0aXZlbiBTdGF0dXMgYmVzaXR6ZW4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPkRlciBPcnQgTmllZGVyYmllbCBnZWjDtnJ0IHp1ciBTdGFkdCBTb2xtcyB1bmQgbGllZ3Qgd3VuZGVyc2Now7ZuIHJ1aGlnIGltIExhaG50YWwgaW4gZGVyIE7DpGhlIGRlciBCdW5kZXNzdHJhw59lIDQ5IHp3aXNjaGVuIEdpZXNzZW4gaW0gT3N0ZW4gdW5kIExpbWJ1cmcgaW0gV2VzdGVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5QcnVua3N0w7xjayBkZXIgQW5sYWdlIGlzdCBkYXMgVmVyZWluc2hlaW0gbWl0IGdyb8OfZW0sIGhlbGxlbiBHYXN0cmF1bSAocmVub3ZpZXJ0IGltIEZyw7xoamFociAyMDA4KSB1bmQgZ2Vyw6R1bWlnZW4gVW1rbGVpZGVyw6R1bWVuIGbDvHIgRGFtZW4gdW5kIEhlcnJlbiBtaXRzYW10IHNhbml0w6RyZW4gQW5sYWdlbi4gQmVzb25kZXJzIGJlbGllYnQgaW0gU29tbWVyIC0gbmljaHQgbnVyIGJlaSBWZXJlaW5zbWl0Z2xpZWRlcm4gLSBpc3QgZGVyIEZyZWlzaXR6IGRlcyBWZXJlaW5zaGVpbXMgaW0gR3LDvG5lbiBtaXQgQmxpY2sgYXVmIGRpZSBQbMOkdHplLlxuXG4gICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9hYm91dFwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+TWVocjwvYT5cblxuICAgICAgICAgIDxOYXZCb3ggaXRlbXM9e0l0ZW1zLmxpc3RJdGVtcy5hYm91dEl0ZW1zfSAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIj5cblxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkNjI2My43NDYwNjE0OTMzNjEhMmQ4LjM5NzUwMjIwMjcxMTQ3MiEzZDUwLjU2MTMyMzM3NDI0ODkhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MCUzQTB4MzdlZmY4YzI4NzRkZmJjMyEyc1Rlbm5pc3ZlcmVpbiUyMDc3JTIwTmllZGVyYmllbCE1ZTEhM20yITFzZW4hMnN1cyE0djE1NzY3OTEzMTc1MzEhNW0yITFzZW4hMnN1c1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMVwiIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBhbGxvd2Z1bGxzY3JlZW49XCJcIj48L2lmcmFtZT5cblxuXG4gICAgICAgIDwvQ29sPlxuXG5cbiAgICAgIDwvUm93PlxuXG5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiA+XG4gICAgICAgICAgPGgxPlRlYW1zPC9oMT5cblxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSmVkZSBTYWlzb24gc3RlbGxlbiB3aXIgZWluaWdlIE1hbm5zY2hhZnRlbiB1bnRlcnNjaGllZGxpY2hlciBBbHRlcnNrbGFzc2VuLlxuICAgICAgICAgICAgICBIaWVyIGvDtm5uZW4gU2llIHNpY2ggZWluZW4gw5xiZXJibGljayB2ZXJzY2hhZmZlbiB1bmQgYWt0dWVsbGUgRXJnZWJuaXNzZSBlaW5zZWhlbi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvdGVhbXNcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPsOcYmVyc2ljaHQ8L2E+PGJyPjwvYnI+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiID5cblxuICAgICAgICAgIDxHYWxlcnkgZGF0YT17dGVhbUdhbGVyeX0gLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgIDwvUm93PlxuXG5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAgIC50b3Byb3dHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWxCdXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9mYWNlYm9vay5wbmdcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctdG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXItaGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDsgXG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAjMzMzIDElKSBjZW50ZXIvMTUwMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGU6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hY2NlbnQtbGluZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLWJpZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmstaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4OyBcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIC5vZmZlci1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cblxuICAgIFxuICAgICAgICAgICAgYH1cblxuXG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5607c84e36c11cb0ba09.hot-update.js.map