webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ContentSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContentSection */ "./components/ContentSection.js");
/* harmony import */ var _components_NavBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBox */ "./components/NavBox.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../items.json */ "./items.json");
var _items_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../items.json */ "./items.json", 1);
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/pages/index.js";













function Index() {
  var generalGalery = {
    items: [{
      id: "1",
      picture: "/static/tennisplatz_niederbiel.jpg",
      legend: "Unsere Anlage"
    }, {
      id: "3",
      picture: "/static/tennisplatz_platz1.jpg",
      legend: "Unsere Tennisplätze"
    }, {
      id: "2",
      picture: "/static/clubheim_draussen.jpg",
      legend: "Das Vereinsheim"
    }, {
      id: "3",
      picture: "/static/clubheim_drinnen.jpg",
      legend: "Unser Vereinsheim"
    }, {
      id: "3",
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
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navName: "Start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    noGutters: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    link: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block justify-content-md-center",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    lg: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1998377103" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Herzlich Willkommen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "beim Tennisverein 77 Niederbiel! Wir freuen uns, dass Sie unsere Internetseite besuchen. Auch bei Facebook halten wir sie auf dem Laufenden. \xDCber ein Like w\xFCrden wir uns sehr freuen!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "10",
    lg: "8",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: generalGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Aktuelles")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-1998377103" + " " + "banner-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-1998377103" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "zum angebot")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-1998377103" + " " + "banner-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-1998377103" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Zum Angebot"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    style: {
      paddingTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookProvider"], {
    appId: "716448928794798",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    href: "https://www.facebook.com/TV-77-Niederbiel-612990049042372/",
    tabs: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Unsere Anlage",
    link: "/anlage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    className: "ripple info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "\xDCber uns"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-1998377103" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Mehr"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: _items_json__WEBPACK_IMPORTED_MODULE_10__.listItems.aboutItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Teams",
    link: "/teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-1998377103" + " " + "ripple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Teams"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-1998377103" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-1998377103",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: teamGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1998377103",
    __self: this
  }, ".banner-header.jsx-1998377103{text-transform:uppercase;font-weight:bold;-webkit-letter-spacing:-2.3px;-moz-letter-spacing:-2.3px;-ms-letter-spacing:-2.3px;letter-spacing:-2.3px;font-size:26px;}.ripple.jsx-1998377103{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-1998377103:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-1998377103:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-1998377103{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.top.jsx-1998377103 h1.jsx-1998377103{padding:200px;position:relative;z-index:2;}.logo-big.jsx-1998377103{height:auto;width:30vh;}ul.jsx-1998377103{margin:0px;padding:0px;}.box.jsx-1998377103{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-1998377103{width:100%;color:black;}a.jsx-1998377103:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-1998377103{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-1998377103:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MUyxBQUdzQyxBQU9RLEFBS29ELEFBR3pELEFBS2IsQUFPQyxBQUtGLEFBS0MsQUFJSyxBQVFSLEFBSUUsQUFJSSxBQVFZLFdBNUNmLEFBaUJDLEFBYWpCLENBbEJjLEFBcUJVLEVBMUJILEVBOEJOLEVBaEJILElBMUJnQixBQU1FLENBWTdCLEFBS0UsQUFZRixFQWxEaUIsRUFPZ0IsQUFtQ3JCLENBZ0JFLElBOUJGLEtBZUUsR0FnQmEsRUExREwsQUE0QnRCLENBYitCLElBTVgsRUFzQnBCLFdBcUJFLEVBWEYsQ0EvQkUsRUFxQ0YsWUFoREUsWUFKdUIsWUFTdkIsT0FSQSx1Q0FQYSxlQUVqQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ29udGVudFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGVudFNlY3Rpb25cIjtcbmltcG9ydCBOYXZCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2Qm94XCJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIFBhZ2UgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgR2FsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Jhbm5lclwiXG5pbXBvcnQgSXRlbXMgZnJvbSBcIi4uL2l0ZW1zLmpzb25cIlxuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICBjb25zdCBnZW5lcmFsR2FsZXJ5ID0ge1xuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL3Rlbm5pc3BsYXR6X25pZWRlcmJpZWwuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlcmUgQW5sYWdlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL3Rlbm5pc3BsYXR6X3BsYXR6MS5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIlVuc2VyZSBUZW5uaXNwbMOkdHplXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL2NsdWJoZWltX2RyYXVzc2VuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiRGFzIFZlcmVpbnNoZWltXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjNcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL2NsdWJoZWltX2RyaW5uZW4uanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuMi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIlVuc2VyIFZlcmVpbnNoZWltXCJcbiAgICAgIH1cblxuICAgIF1cbiAgfVxuXG5cbiAgY29uc3QgdGVhbUdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19oZXJyZW4uanBlZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiSGVycmVuXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIjJcIixcbiAgICAgICAgcGljdHVyZTogXCIvc3RhdGljL3RlYW1mb3RvX2RhbWVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhbWVuXCJcbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgbmF2TmFtZT1cIlN0YXJ0XCI+XG5cblxuXG4gICAgICA8Um93IG5vR3V0dGVycyA+XG4gICAgICAgIDxDb250ZW50U2VjdGlvbiBsaW5rPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbGc9XCI3XCIgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmlnZ2VyXCI+SGVyemxpY2ggV2lsbGtvbW1lbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgYmVpbSBUZW5uaXN2ZXJlaW4gNzcgTmllZGVyYmllbCEgV2lyIGZyZXVlbiB1bnMsIGRhc3MgU2llIHVuc2VyZSBJbnRlcm5ldHNlaXRlIGJlc3VjaGVuLiBBdWNoIGJlaSBGYWNlYm9vayBoYWx0ZW4gd2lyIHNpZSBhdWYgZGVtIExhdWZlbmRlbi4gw5xiZXIgZWluIExpa2Ugd8O8cmRlbiB3aXIgdW5zIHNlaHIgZnJldWVuIVxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCIxMFwiIGxnPVwiOFwiIGNsYXNzTmFtZT1cInBhZGRpbmctYm90dG9tXCI+XG5cbiAgICAgICAgICAgICAgPENhcm91c2VsIGRhdGE9e2dlbmVyYWxHYWxlcnl9IC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCIgPlxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCI+XG4gICAgICAgICAgICA8aDE+QWt0dWVsbGVzPC9oMT5cblxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG5cbiAgICAgICAgICAgICAgPEJhbm5lcj5cblxuXG5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYmFubmVyLWhlYWRlclwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gPlNjaG51cHBlcmFuZ2Vib3Q8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkVyc3QgcHJvYmllcmVuLCBkYW5uIGVudHNjaGVpZGVuITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5FcmhhbHRlbiBTaWUgZWluZSBncmF0aXMgVHJhaW5lcnN0dW5kZS4gRW50c2NoZWlkZW4gU2llIHNpY2ggZsO8ciBlaW5lIE1pdGdsaWVkc2NoYWZ0LCB6YWhsZW4gU2llIGbDvHIgZGFzIEJlaXRyaXR0c2phaHIgbnVyIGRpZSBIw6RsZnRlITwvc3Bhbj48YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvbWl0Z2xpZWRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPnp1bSBhbmdlYm90PC9hPlxuXG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgICA8QmFubmVyPlxuXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJhbm5lci1oZWFkZXJcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PiBWZXJlaW5zaGVpbSBtaWV0ZW48L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkF1Y2ggTmljaHQtTWl0Z2xpZWRlciBrw7ZubmVuIHVuc2VyIFZlcmVpbnNoZWltIG1pZXRlbi4gRGllc2VzIGhhdCBQbGF0eiBmw7xyIGNhLiA1MCBQZXJzb25lbi48L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWl0IGVpZ2VuZXIgS8O8Y2hlIHVuZCBtb2Rlcm5lciBUaGVrZSE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi92ZXJlaW5zaGVpbVwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+WnVtIEFuZ2Vib3Q8L2E+XG5cblxuICAgICAgICAgICAgICA8L0Jhbm5lcj5cblxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IDEwIH19PlxuICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjcxNjQ0ODkyODc5NDc5OFwiPlxuICAgICAgICAgICAgICAgICAgPFBhZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UVi03Ny1OaWVkZXJiaWVsLTYxMjk5MDA0OTA0MjM3Mi9cIiB0YWJzPVwidGltZWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L0NvbnRlbnRTZWN0aW9uID5cbiAgICAgICAgPENvbnRlbnRTZWN0aW9uIGhlYWRlcj1cIlVuc2VyZSBBbmxhZ2VcIiBsaW5rPVwiL2FubGFnZVwiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuXG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cInJpcHBsZSBpbmZvLXRleHRcIj5cbiAgICAgICAgICAgICAgPGgxPsOcYmVyIHVuczwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlciBUViA3NyBOaWVkZXJiaWVsIGlzdCBlaW4gVGVubmlzdmVyZWluIG1pdCBkZXJ6ZWl0IHJ1bmQgMTM1IE1pdGdsaWVkZXJuLCB3b3ZvbiBndXQgNTAlIGFrdGl2ZW4gU3RhdHVzIGJlc2l0emVuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPHA+RGVyIE9ydCBOaWVkZXJiaWVsIGdlaMO2cnQgenVyIFN0YWR0IFNvbG1zIHVuZCBsaWVndCB3dW5kZXJzY2jDtm4gcnVoaWcgaW0gTGFobnRhbCBpbiBkZXIgTsOkaGUgZGVyIEJ1bmRlc3N0cmHDn2UgNDkgendpc2NoZW4gR2llc3NlbiBpbSBPc3RlbiB1bmQgTGltYnVyZyBpbSBXZXN0ZW4uXG5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5QcnVua3N0w7xjayBkZXIgQW5sYWdlIGlzdCBkYXMgVmVyZWluc2hlaW0gbWl0IGdyb8OfZW0sIGhlbGxlbiBHYXN0cmF1bSAocmVub3ZpZXJ0IGltIEZyw7xoamFociAyMDA4KSB1bmQgZ2Vyw6R1bWlnZW4gVW1rbGVpZGVyw6R1bWVuIGbDvHIgRGFtZW4gdW5kIEhlcnJlbiBtaXRzYW10IHNhbml0w6RyZW4gQW5sYWdlbi4gQmVzb25kZXJzIGJlbGllYnQgaW0gU29tbWVyIC0gbmljaHQgbnVyIGJlaSBWZXJlaW5zbWl0Z2xpZWRlcm4hIC0gaXN0IGRlciBGcmVpc2l0eiBkZXMgQ2x1YmhhdXNlcyBpbSBHcsO8bmVuIG1pdCBCbGljayBhdWYgZGllIFBsw6R0emUuXG5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvYWJvdXRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPk1laHI8L2E+XG5cbiAgICAgICAgICAgICAgPE5hdkJveCBpdGVtcz17SXRlbXMubGlzdEl0ZW1zLmFib3V0SXRlbXN9IC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvQ29udGVudFNlY3Rpb24+XG5cbiAgICAgICAgPENvbnRlbnRTZWN0aW9uIGhlYWRlcj1cIlRlYW1zXCIgbGluaz1cIi90ZWFtc1wiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyaXBwbGVcIj5UZWFtczwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBKZWRlIFNhaXNvbiBzdGVsbGVuIHdpciBlaW5pZ2UgTWFubnNjaGFmdGVuIHVudGVyc2NoaWVkbGljaGVyIEFsdGVyc2tsYXNzZW4uXG4gICAgICAgICAgICAgICAgICBIaWVyIGvDtm5uZW4gU2llIHNpY2ggZWluZW4gw5xiZXJibGljayB2ZXJzY2hhZmZlbiB1bmQgYWt0dWVsbGUgRXJnZWJuaXNzZSBlaW5zZWhlbi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL3RlYW1zXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj7DnGJlcnNpY2h0PC9hPjxicj48L2JyPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgPEdhbGVyeSBkYXRhPXt0ZWFtR2FsZXJ5fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxuICAgICAgPC9Sb3c+XG5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmJhbm5lci1oZWFkZXIge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0yLjNweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAjMzMzIDElKSBjZW50ZXIvMTUwMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGU6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hY2NlbnQtbGluZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b3AgaDEge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMDBweDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyOyAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLWJpZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmstaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4OyBcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIC5vZmZlci1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.be854912b0a4da22d1b3.hot-update.js.map