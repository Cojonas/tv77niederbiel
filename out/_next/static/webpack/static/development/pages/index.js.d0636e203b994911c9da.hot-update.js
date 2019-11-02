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
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Herzlich Willkommen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
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
    md: "6",
    className: "padding-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "zum angebot")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
    style: {
      color: "white"
    },
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Zum Angebot"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    style: {
      paddingBottom: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookProvider"], {
    appId: "716448928794798",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    href: "https://www.facebook.com/TV-77-Niederbiel-612990049042372/",
    tabs: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Unsere Anlage",
    link: "/anlage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    className: "padding-bottom ripple info-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\xDCber uns"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Mehr"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_NavBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: _items_json__WEBPACK_IMPORTED_MODULE_10__.listItems.aboutItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ContentSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "Teams",
    link: "/teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: "text-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-4209092776" + " " + "ripple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Teams"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-4209092776" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-4209092776",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: teamGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4209092776",
    __self: this
  }, ".ripple.jsx-4209092776{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-4209092776:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-4209092776:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-4209092776{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.top.jsx-4209092776 h1.jsx-4209092776{padding:200px;position:relative;z-index:2;}.logo-big.jsx-4209092776{height:auto;width:30vh;}ul.jsx-4209092776{margin:0px;padding:0px;}.box.jsx-4209092776{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-4209092776{width:100%;color:black;}a.jsx-4209092776:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-4209092776{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-4209092776:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdMUyxBQUc4QyxBQUtvRCxBQUd6RCxBQUtiLEFBT0MsQUFLRixBQUtDLEFBSUssQUFRUixBQUlFLEFBSUksQUFRWSxXQTVDZixBQWlCQyxBQWFqQixDQWxCYyxBQXFCVSxFQTFCSCxFQThCTixFQWhCSCxJQTFCZ0IsQUFNRSxDQVk3QixBQUtFLEFBWUYsSUEzQ2lDLEFBbUNyQixDQWdCRSxJQTlCRixLQWVFLEdBZ0JhLEVBOUIzQixDQWIrQixJQU1YLEVBc0JwQixXQXFCRSxFQVhGLENBL0JFLEVBcUNGLFlBaERFLFlBSnVCLFlBU3ZCLE9BUkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRTZWN0aW9uXCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIlxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBQYWdlIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xuaW1wb3J0IEdhbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcblxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtcy5qc29uXCJcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9wbGF0ejEuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlcmUgVGVubmlzcGzDpHR6ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdk5hbWU9XCJTdGFydFwiPlxuXG5cblxuICAgICAgPFJvdyBub0d1dHRlcnMgPlxuICAgICAgICA8Q29udGVudFNlY3Rpb24gbGluaz1cIi9hYm91dFwiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGxnPVwiN1wiIGNsYXNzTmFtZT1cInBhZGRpbmctYm90dG9tXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZ2dlclwiPkhlcnpsaWNoIFdpbGxrb21tZW48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIGJlaW0gVGVubmlzdmVyZWluIDc3IE5pZWRlcmJpZWwhIFdpciBmcmV1ZW4gdW5zLCBkYXNzIFNpZSB1bnNlcmUgSW50ZXJuZXRzZWl0ZSBiZXN1Y2hlbi4gQXVjaCBiZWkgRmFjZWJvb2sgaGFsdGVuIHdpciBzaWUgYXVmIGRlbSBMYXVmZW5kZW4uIMOcYmVyIGVpbiBMaWtlIHfDvHJkZW4gd2lyIHVucyBzZWhyIGZyZXVlbiFcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiMTBcIiBsZz1cIjhcIiBjbGFzc05hbWU9XCJwYWRkaW5nLWJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBkYXRhPXtnZW5lcmFsR2FsZXJ5fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtYmxvY2sganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiID5cblxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgY2xhc3NOYW1lPVwicGFkZGluZy1ib3R0b21cIj5cblxuICAgICAgICAgICAgICA8QmFubmVyPlxuXG5cblxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19ID5TY2hudXBwZXJhbmdlYm90PC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5FcnN0IHByb2JpZXJlbiwgZGFubiBlbnRzY2hlaWRlbiE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPHNwYW4+RXJoYWx0ZW4gU2llIGVpbmUgZ3JhdGlzIFRyYWluZXJzdHVuZGUuIEVudHNjaGVpZGVuIFNpZSBzaWNoIGbDvHIgZWluZSBNaXRnbGllZHNjaGFmdCwgemFobGVuIFNpZSBmw7xyIGRhcyBCZWl0cml0dHNqYWhyIG51ciBkaWUgSMOkbGZ0ZSE8L3NwYW4+PGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL21pdGdsaWVkXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj56dW0gYW5nZWJvdDwvYT5cblxuICAgICAgICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgPEJhbm5lcj5cblxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PiBWZXJlaW5zaGVpbSBtaWV0ZW48L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkF1Y2ggTmljaHQtTWl0Z2xpZWRlciBrw7ZubmVuIHVuc2VyIFZlcmVpbnNoZWltIG1pZXRlbi4gRGllc2VzIGhhdCBQbGF0eiBmw7xyIGNhLiA1MCBQZXJzb25lbi48L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWl0IGVpZ2VuZXIgS8O8Y2hlIHVuZCBtb2Rlcm5lciBUaGVrZSE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi92ZXJlaW5zaGVpbVwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+WnVtIEFuZ2Vib3Q8L2E+XG5cblxuICAgICAgICAgICAgICA8L0Jhbm5lcj5cblxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDMwIH19PlxuICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjcxNjQ0ODkyODc5NDc5OFwiPlxuICAgICAgICAgICAgICAgICAgPFBhZ2UgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9UVi03Ny1OaWVkZXJiaWVsLTYxMjk5MDA0OTA0MjM3Mi9cIiB0YWJzPVwidGltZWxpbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L0NvbnRlbnRTZWN0aW9uID5cbiAgICAgICAgPENvbnRlbnRTZWN0aW9uIGhlYWRlcj1cIlVuc2VyZSBBbmxhZ2VcIiBsaW5rPVwiL2FubGFnZVwiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuXG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGNsYXNzTmFtZT1cInBhZGRpbmctYm90dG9tIHJpcHBsZSBpbmZvLXRleHRcIj5cbiAgICAgICAgICAgICAgPGgxPsOcYmVyIHVuczwvaDE+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIERlciBUViA3NyBOaWVkZXJiaWVsIGlzdCBlaW4gVGVubmlzdmVyZWluIG1pdCBkZXJ6ZWl0IHJ1bmQgMTM1IE1pdGdsaWVkZXJuLCB3b3ZvbiBndXQgNTAlIGFrdGl2ZW4gU3RhdHVzIGJlc2l0emVuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPHA+RGVyIE9ydCBOaWVkZXJiaWVsIGdlaMO2cnQgenVyIFN0YWR0IFNvbG1zIHVuZCBsaWVndCB3dW5kZXJzY2jDtm4gcnVoaWcgaW0gTGFobnRhbCBpbiBkZXIgTsOkaGUgZGVyIEJ1bmRlc3N0cmHDn2UgNDkgendpc2NoZW4gR2llc3NlbiBpbSBPc3RlbiB1bmQgTGltYnVyZyBpbSBXZXN0ZW4uXG5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5QcnVua3N0w7xjayBkZXIgQW5sYWdlIGlzdCBkYXMgVmVyZWluc2hlaW0gbWl0IGdyb8OfZW0sIGhlbGxlbiBHYXN0cmF1bSAocmVub3ZpZXJ0IGltIEZyw7xoamFociAyMDA4KSB1bmQgZ2Vyw6R1bWlnZW4gVW1rbGVpZGVyw6R1bWVuIGbDvHIgRGFtZW4gdW5kIEhlcnJlbiBtaXRzYW10IHNhbml0w6RyZW4gQW5sYWdlbi4gQmVzb25kZXJzIGJlbGllYnQgaW0gU29tbWVyIC0gbmljaHQgbnVyIGJlaSBWZXJlaW5zbWl0Z2xpZWRlcm4hIC0gaXN0IGRlciBGcmVpc2l0eiBkZXMgQ2x1YmhhdXNlcyBpbSBHcsO8bmVuIG1pdCBCbGljayBhdWYgZGllIFBsw6R0emUuXG5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvYWJvdXRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPk1laHI8L2E+XG5cbiAgICAgICAgICAgICAgPE5hdkJveCBpdGVtcz17SXRlbXMubGlzdEl0ZW1zLmFib3V0SXRlbXN9IC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvQ29udGVudFNlY3Rpb24+XG5cbiAgICAgICAgPENvbnRlbnRTZWN0aW9uIGhlYWRlcj1cIlRlYW1zXCIgbGluaz1cIi90ZWFtc1wiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyaXBwbGVcIj5UZWFtczwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBKZWRlIFNhaXNvbiBzdGVsbGVuIHdpciBlaW5pZ2UgTWFubnNjaGFmdGVuIHVudGVyc2NoaWVkbGljaGVyIEFsdGVyc2tsYXNzZW4uXG4gICAgICAgICAgICAgICAgICBIaWVyIGvDtm5uZW4gU2llIHNpY2ggZWluZW4gw5xiZXJibGljayB2ZXJzY2hhZmZlbiB1bmQgYWt0dWVsbGUgRXJnZWJuaXNzZSBlaW5zZWhlbi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL3RlYW1zXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj7DnGJlcnNpY2h0PC9hPjxicj48L2JyPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgPEdhbGVyeSBkYXRhPXt0ZWFtR2FsZXJ5fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICA8L0NvbnRlbnRTZWN0aW9uPlxuICAgICAgPC9Sb3c+XG5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAgIC5yaXBwbGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICMzMzMgMSUpIGNlbnRlci8xNTAwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY2VudC1saW5lIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcCBoMSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7ICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28tYmlnIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgICAgICAgd2lkdGg6IDMwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluay1ob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7IFxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLm9mZmVyLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cblxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d0636e203b994911c9da.hot-update.js.map