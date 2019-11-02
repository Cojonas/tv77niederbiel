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
    className: "jsx-2632737834" + " " + "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Herzlich Willkommen"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2632737834",
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
    className: "jsx-2632737834",
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
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-2632737834" + " " + "offer-link",
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
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-2632737834" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Zum Angebot"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: "12",
    md: "6",
    style: {
      paddingTop: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("center", {
    className: "jsx-2632737834",
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
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "\xDCber uns"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern! - ist der Freisitz des Clubhauses im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-2632737834" + " " + "offer-link",
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
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-2632737834" + " " + "ripple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Teams"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2632737834",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-2632737834" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
    className: "jsx-2632737834",
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
    id: "2632737834",
    __self: this
  }, ".ripple.jsx-2632737834{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-2632737834:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-2632737834:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-2632737834{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.top.jsx-2632737834 h1.jsx-2632737834{padding:200px;position:relative;z-index:2;}.logo-big.jsx-2632737834{height:auto;width:30vh;}ul.jsx-2632737834{margin:0px;padding:0px;}.box.jsx-2632737834{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-2632737834{width:100%;color:black;}a.jsx-2632737834:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-2632737834{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-2632737834:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MUyxBQUc4QyxBQUtvRCxBQUd6RCxBQUtiLEFBT0MsQUFLRixBQUtDLEFBSUssQUFRUixBQUlFLEFBSUksQUFRWSxXQTVDZixBQWlCQyxBQWFqQixDQWxCYyxBQXFCVSxFQTFCSCxFQThCTixFQWhCSCxJQTFCZ0IsQUFNRSxDQVk3QixBQUtFLEFBWUYsSUEzQ2lDLEFBbUNyQixDQWdCRSxJQTlCRixLQWVFLEdBZ0JhLEVBOUIzQixDQWIrQixJQU1YLEVBc0JwQixXQXFCRSxFQVhGLENBL0JFLEVBcUNGLFlBaERFLFlBSnVCLFlBU3ZCLE9BUkEiLCJmaWxlIjoiL2hvbWUvY29qb29uYXMvRG9jdW1lbnRzL1Byb2plY3RzL3R2NzcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENvbnRlbnRTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRlbnRTZWN0aW9uXCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2Fyb3VzZWxcIlxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGYWNlYm9va1Byb3ZpZGVyLCBQYWdlIH0gZnJvbSAncmVhY3QtZmFjZWJvb2snO1xuaW1wb3J0IEdhbGVyeSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJvdXNlbFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcblxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtcy5qc29uXCJcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9wbGF0ejEuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlcmUgVGVubmlzcGzDpHR6ZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiM1wiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IG5hdk5hbWU9XCJTdGFydFwiPlxuXG5cblxuICAgICAgPFJvdyBub0d1dHRlcnMgPlxuICAgICAgICA8Q29udGVudFNlY3Rpb24gbGluaz1cIi9hYm91dFwiPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIGxnPVwiN1wiICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJpZ2dlclwiPkhlcnpsaWNoIFdpbGxrb21tZW48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIGJlaW0gVGVubmlzdmVyZWluIDc3IE5pZWRlcmJpZWwhIFdpciBmcmV1ZW4gdW5zLCBkYXNzIFNpZSB1bnNlcmUgSW50ZXJuZXRzZWl0ZSBiZXN1Y2hlbi4gQXVjaCBiZWkgRmFjZWJvb2sgaGFsdGVuIHdpciBzaWUgYXVmIGRlbSBMYXVmZW5kZW4uIMOcYmVyIGVpbiBMaWtlIHfDvHJkZW4gd2lyIHVucyBzZWhyIGZyZXVlbiFcbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiMTBcIiBsZz1cIjhcIiBjbGFzc05hbWU9XCJwYWRkaW5nLWJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBkYXRhPXtnZW5lcmFsR2FsZXJ5fSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInRleHQtYmxvY2sganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiID5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiPlxuICAgICAgICAgICAgPGgxPkFrdHVlbGxlczwvaDE+XG5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuXG4gICAgICAgICAgICAgIDxCYW5uZXI+XG5cblxuXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gPlNjaG51cHBlcmFuZ2Vib3Q8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPkVyc3QgcHJvYmllcmVuLCBkYW5uIGVudHNjaGVpZGVuITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5FcmhhbHRlbiBTaWUgZWluZSBncmF0aXMgVHJhaW5lcnN0dW5kZS4gRW50c2NoZWlkZW4gU2llIHNpY2ggZsO8ciBlaW5lIE1pdGdsaWVkc2NoYWZ0LCB6YWhsZW4gU2llIGbDvHIgZGFzIEJlaXRyaXR0c2phaHIgbnVyIGRpZSBIw6RsZnRlITwvc3Bhbj48YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvbWl0Z2xpZWRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPnp1bSBhbmdlYm90PC9hPlxuXG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgICAgICA8QmFubmVyPlxuXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+IFZlcmVpbnNoZWltIG1pZXRlbjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+QXVjaCBOaWNodC1NaXRnbGllZGVyIGvDtm5uZW4gdW5zZXIgVmVyZWluc2hlaW0gbWlldGVuLiBEaWVzZXMgaGF0IFBsYXR6IGbDvHIgY2EuIDUwIFBlcnNvbmVuLjwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5NaXQgZWlnZW5lciBLw7xjaGUgdW5kIG1vZGVybmVyIFRoZWtlITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL3ZlcmVpbnNoZWltXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5adW0gQW5nZWJvdDwvYT5cblxuXG4gICAgICAgICAgICAgIDwvQmFubmVyPlxuXG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMzAgfX0+XG4gICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiNzE2NDQ4OTI4Nzk0Nzk4XCI+XG4gICAgICAgICAgICAgICAgICA8UGFnZSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1RWLTc3LU5pZWRlcmJpZWwtNjEyOTkwMDQ5MDQyMzcyL1wiIHRhYnM9XCJ0aW1lbGluZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvQ29udGVudFNlY3Rpb24gPlxuICAgICAgICA8Q29udGVudFNlY3Rpb24gaGVhZGVyPVwiVW5zZXJlIEFubGFnZVwiIGxpbms9XCIvYW5sYWdlXCI+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG5cblxuICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgY2xhc3NOYW1lPVwicmlwcGxlIGluZm8tdGV4dFwiPlxuICAgICAgICAgICAgICA8aDE+w5xiZXIgdW5zPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgRGVyIFRWIDc3IE5pZWRlcmJpZWwgaXN0IGVpbiBUZW5uaXN2ZXJlaW4gbWl0IGRlcnplaXQgcnVuZCAxMzUgTWl0Z2xpZWRlcm4sIHdvdm9uIGd1dCA1MCUgYWt0aXZlbiBTdGF0dXMgYmVzaXR6ZW4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICA8cD5EZXIgT3J0IE5pZWRlcmJpZWwgZ2Vow7ZydCB6dXIgU3RhZHQgU29sbXMgdW5kIGxpZWd0IHd1bmRlcnNjaMO2biBydWhpZyBpbSBMYWhudGFsIGluIGRlciBOw6RoZSBkZXIgQnVuZGVzc3RyYcOfZSA0OSB6d2lzY2hlbiBHaWVzc2VuIGltIE9zdGVuIHVuZCBMaW1idXJnIGltIFdlc3Rlbi5cblxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlBydW5rc3TDvGNrIGRlciBBbmxhZ2UgaXN0IGRhcyBWZXJlaW5zaGVpbSBtaXQgZ3Jvw59lbSwgaGVsbGVuIEdhc3RyYXVtIChyZW5vdmllcnQgaW0gRnLDvGhqYWhyIDIwMDgpIHVuZCBnZXLDpHVtaWdlbiBVbWtsZWlkZXLDpHVtZW4gZsO8ciBEYW1lbiB1bmQgSGVycmVuIG1pdHNhbXQgc2FuaXTDpHJlbiBBbmxhZ2VuLiBCZXNvbmRlcnMgYmVsaWVidCBpbSBTb21tZXIgLSBuaWNodCBudXIgYmVpIFZlcmVpbnNtaXRnbGllZGVybiEgLSBpc3QgZGVyIEZyZWlzaXR6IGRlcyBDbHViaGF1c2VzIGltIEdyw7xuZW4gbWl0IEJsaWNrIGF1ZiBkaWUgUGzDpHR6ZS5cblxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9hYm91dFwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+TWVocjwvYT5cblxuICAgICAgICAgICAgICA8TmF2Qm94IGl0ZW1zPXtJdGVtcy5saXN0SXRlbXMuYWJvdXRJdGVtc30gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuXG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgPC9Db250ZW50U2VjdGlvbj5cblxuICAgICAgICA8Q29udGVudFNlY3Rpb24gaGVhZGVyPVwiVGVhbXNcIiBsaW5rPVwiL3RlYW1zXCI+XG4gICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiID5cbiAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInJpcHBsZVwiPlRlYW1zPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIEplZGUgU2Fpc29uIHN0ZWxsZW4gd2lyIGVpbmlnZSBNYW5uc2NoYWZ0ZW4gdW50ZXJzY2hpZWRsaWNoZXIgQWx0ZXJza2xhc3Nlbi5cbiAgICAgICAgICAgICAgICAgIEhpZXIga8O2bm5lbiBTaWUgc2ljaCBlaW5lbiDDnGJlcmJsaWNrIHZlcnNjaGFmZmVuIHVuZCBha3R1ZWxsZSBFcmdlYm5pc3NlIGVpbnNlaGVuLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvdGVhbXNcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPsOcYmVyc2ljaHQ8L2E+PGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICA8R2FsZXJ5IGRhdGE9e3RlYW1HYWxlcnl9IC8+XG4gICAgICAgICAgICA8L0NvbD5cblxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvQ29udGVudFNlY3Rpb24+XG4gICAgICA8L1Jvdz5cblxuXG5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgLnJpcHBsZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuOHM7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGU6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMyByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCB0cmFuc3BhcmVudCAxJSwgIzMzMyAxJSkgY2VudGVyLzE1MDAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYWNjZW50LWxpbmUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjVjMDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9wIGgxIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjsgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nby1iaWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87IFxuICAgICAgICAgICAgICB3aWR0aDogMzB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm94IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFja1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rLWhvbGRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweDsgXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDsgXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMTI1Mjk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAub2ZmZXItbGluazpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fd780a8d24d5e6e825a5.hot-update.js.map