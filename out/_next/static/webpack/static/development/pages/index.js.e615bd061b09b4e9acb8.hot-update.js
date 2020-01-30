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
/* harmony import */ var _components_NavBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBox */ "./components/NavBox.js");
/* harmony import */ var _components_SocialMedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SocialMedia */ "./components/SocialMedia.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-facebook */ "./node_modules/react-facebook/lib/index.js");
/* harmony import */ var react_facebook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_facebook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Calendar */ "./components/Calendar.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _items_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items.json */ "./items.json");
var _items_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../items.json */ "./items.json", 1);
var _jsxFileName = "/home/cojoonas/Documents/Projects/tv77/pages/index.js";













function Index() {
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
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navName: "Start",
    title: "Herzlich Willkommen beim TV77 Niederbiel!",
    pictures: generalGalery.items,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "      ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_3__["default"], {
    visible: true,
    style: {
      marginTop: -35
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "text-block justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    lg: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Aktuelles"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_6__["FacebookProvider"], {
    appId: "716448928794798",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_facebook__WEBPACK_IMPORTED_MODULE_6__["Page"], {
    href: "https://www.facebook.com/TV-77-Niederbiel-612990049042372/",
    tabs: "timeline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    lg: "7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Calendar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Schnupperangebot"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Erst probieren, dann entscheiden!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Erhalten Sie eine gratis Trainerstunde. Entscheiden Sie sich f\xFCr eine Mitgliedschaft, zahlen Sie f\xFCr das Beitrittsjahr nur die H\xE4lfte!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "" + "/mitglied",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "zum angebot")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, " Vereinsheim mieten"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Auch Nicht-Mitglieder k\xF6nnen unser Vereinsheim mieten. Dieses hat Platz f\xFCr ca. 50 Personen."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Mit eigener K\xFCche und moderner Theke!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "" + "/vereinsheim",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Zum Angebot"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    style: {
      paddingTop: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "\xDCber uns"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "Der TV 77 Niederbiel ist ein Tennisverein mit derzeit rund 135 Mitgliedern, wovon gut 50% aktiven Status besitzen."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Der Ort Niederbiel geh\xF6rt zur Stadt Solms und liegt wundersch\xF6n ruhig im Lahntal in der N\xE4he der Bundesstra\xDFe 49 zwischen Giessen im Osten und Limburg im Westen."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Prunkst\xFCck der Anlage ist das Vereinsheim mit gro\xDFem, hellen Gastraum (renoviert im Fr\xFChjahr 2008) und ger\xE4umigen Umkleider\xE4umen f\xFCr Damen und Herren mitsamt sanit\xE4ren Anlagen. Besonders beliebt im Sommer - nicht nur bei Vereinsmitgliedern - ist der Freisitz des Vereinsheims im Gr\xFCnen mit Blick auf die Pl\xE4tze."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "" + "/about",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Mehr"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_NavBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: _items_json__WEBPACK_IMPORTED_MODULE_11__.listItems.aboutItems,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6263.746061493361!2d8.397502202711472!3d50.5613233742489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37eff8c2874dfbc3!2sTennisverein%2077%20Niederbiel!5e1!3m2!1sen!2sus!4v1576791317531!5m2!1sen!2sus",
    width: "100%",
    height: "300",
    frameBorder: "1",
    style: {
      border: 0
    },
    allowFullScreen: "",
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    className: "justify-content-md-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Teams"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Jede Saison stellen wir einige Mannschaften unterschiedlicher Altersklassen. Hier k\xF6nnen Sie sich einen \xDCberblick verschaffen und aktuelle Ergebnisse einsehen."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    href: "" + "/teams",
    className: "jsx-4123352442" + " " + "offer-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\xDCbersicht"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
    className: "jsx-4123352442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: teamGalery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4123352442",
    __self: this
  }, ".toprowGallery.jsx-4123352442{background:#555 !important;height:500px;width:100%;}.socialButton.jsx-4123352442{margin:50px;background:url(\"/static/facebook.png\");}.img-top.jsx-4123352442{margin-top:-50px;height:200px;width:auto;}.banner-header.jsx-4123352442{text-transform:uppercase;font-weight:bold;-webkit-letter-spacing:-2px;-moz-letter-spacing:-2px;-ms-letter-spacing:-2px;letter-spacing:-2px;font-size:26px;}.row.jsx-4123352442{padding:10px 0px;}.ripple.jsx-4123352442{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-4123352442:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-4123352442:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-4123352442{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.logo-big.jsx-4123352442{height:auto;width:30vh;}ul.jsx-4123352442{margin:0px;padding:0px;}.box.jsx-4123352442{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-4123352442{width:100%;color:black;}a.jsx-4123352442:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-4123352442{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-4123352442:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MUyxBQUdrRCxBQUt6QixBQUlLLEFBS1EsQUFPUixBQUdnQixBQUtvRCxBQUd6RCxBQUtiLEFBT0QsQUFLQyxBQUlLLEFBUVIsQUFJRSxBQUlJLEFBUVksV0F2Q2YsQUFZQyxBQWFqQixDQXpEd0MsQUF1QzFCLEFBcUJVLElBSVQsQ0E1REQsQUFZZixDQWdDYSxJQXJCZ0IsQUFNRSxDQU83QixBQUtFLEFBWUYsRUFoRGlCLEVBZE0sQUF3QlUsQUE4QnJCLENBZ0JFLEVBNURILE9BNkNHLEdBdERPLEFBc0VNLENBNUQ3QixDQUlzQixDQWtCVyxJQU1YLEVBaUJwQixFQXREUSxBQUlWLFNBdUVJLEVBWEYsQ0ExQkUsRUFnQ0YsWUEzQ0UsWUFKdUIsWUFTdkIsT0FSQSwrQkFWYSxlQUVqQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIFBhZ2UgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgR2FsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FsZW5kYXJcIlxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtcy5qc29uXCJcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cblxuXG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBuYXZOYW1lPVwiU3RhcnRcIiB0aXRsZT1cIkhlcnpsaWNoIFdpbGxrb21tZW4gYmVpbSBUVjc3IE5pZWRlcmJpZWwhXCIgcGljdHVyZXM9e2dlbmVyYWxHYWxlcnkuaXRlbXN9XG5cblxuICAgID4gICAgICA8U29jaWFsTWVkaWEgdmlzaWJsZT17dHJ1ZX0gc3R5bGU9e3ttYXJnaW5Ub3A6IC0zNX19PjwvU29jaWFsTWVkaWE+XG5cblxuXG5cblxuXG5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrIGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBsZz1cIjVcIiA+XG4gICAgICAgIDxoMT5Ba3R1ZWxsZXM8L2gxPlxuICAgICAgICAgIDxGYWNlYm9va1Byb3ZpZGVyIGFwcElkPVwiNzE2NDQ4OTI4Nzk0Nzk4XCIgPlxuICAgICAgICAgICAgICAgIDxQYWdlIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vVFYtNzctTmllZGVyYmllbC02MTI5OTAwNDkwNDIzNzIvXCIgdGFicz1cInRpbWVsaW5lXCIgLz5cbiAgICAgICAgICAgICAgPC9GYWNlYm9va1Byb3ZpZGVyPlxuXG5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIGxnPVwiN1wiID5cbiAgICAgICAgPENhbGVuZGFyIC8+XG5cbiAgICAgICAgPEJhbm5lcj5cbiAgICAgICAgICA8aDIgPlNjaG51cHBlcmFuZ2Vib3Q8L2gyPlxuICAgICAgICAgIDxzcGFuPkVyc3QgcHJvYmllcmVuLCBkYW5uIGVudHNjaGVpZGVuITwvc3Bhbj48YnI+PC9icj5cbiAgICAgICAgICA8c3Bhbj5FcmhhbHRlbiBTaWUgZWluZSBncmF0aXMgVHJhaW5lcnN0dW5kZS4gRW50c2NoZWlkZW4gU2llIHNpY2ggZsO8ciBlaW5lIE1pdGdsaWVkc2NoYWZ0LCB6YWhsZW4gU2llIGbDvHIgZGFzIEJlaXRyaXR0c2phaHIgbnVyIGRpZSBIw6RsZnRlITwvc3Bhbj48YnI+PC9icj5cblxuICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvbWl0Z2xpZWRcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPnp1bSBhbmdlYm90PC9hPlxuXG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgPEJhbm5lcj5cblxuICAgICAgICAgIDxoMiAgPiBWZXJlaW5zaGVpbSBtaWV0ZW48L2gyPlxuICAgICAgICAgIDxzcGFuPkF1Y2ggTmljaHQtTWl0Z2xpZWRlciBrw7ZubmVuIHVuc2VyIFZlcmVpbnNoZWltIG1pZXRlbi4gRGllc2VzIGhhdCBQbGF0eiBmw7xyIGNhLiA1MCBQZXJzb25lbi48L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgPHNwYW4+TWl0IGVpZ2VuZXIgS8O8Y2hlIHVuZCBtb2Rlcm5lciBUaGVrZSE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi92ZXJlaW5zaGVpbVwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+WnVtIEFuZ2Vib3Q8L2E+XG4gICAgICAgICAgPC9CYW5uZXI+XG5cbiAgICAgICAgPC9Db2w+XG5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiAxMCB9fT5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgIDxoMT7DnGJlciB1bnM8L2gxPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBEZXIgVFYgNzcgTmllZGVyYmllbCBpc3QgZWluIFRlbm5pc3ZlcmVpbiBtaXQgZGVyemVpdCBydW5kIDEzNSBNaXRnbGllZGVybiwgd292b24gZ3V0IDUwJSBha3RpdmVuIFN0YXR1cyBiZXNpdHplbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+RGVyIE9ydCBOaWVkZXJiaWVsIGdlaMO2cnQgenVyIFN0YWR0IFNvbG1zIHVuZCBsaWVndCB3dW5kZXJzY2jDtm4gcnVoaWcgaW0gTGFobnRhbCBpbiBkZXIgTsOkaGUgZGVyIEJ1bmRlc3N0cmHDn2UgNDkgendpc2NoZW4gR2llc3NlbiBpbSBPc3RlbiB1bmQgTGltYnVyZyBpbSBXZXN0ZW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlBydW5rc3TDvGNrIGRlciBBbmxhZ2UgaXN0IGRhcyBWZXJlaW5zaGVpbSBtaXQgZ3Jvw59lbSwgaGVsbGVuIEdhc3RyYXVtIChyZW5vdmllcnQgaW0gRnLDvGhqYWhyIDIwMDgpIHVuZCBnZXLDpHVtaWdlbiBVbWtsZWlkZXLDpHVtZW4gZsO8ciBEYW1lbiB1bmQgSGVycmVuIG1pdHNhbXQgc2FuaXTDpHJlbiBBbmxhZ2VuLiBCZXNvbmRlcnMgYmVsaWVidCBpbSBTb21tZXIgLSBuaWNodCBudXIgYmVpIFZlcmVpbnNtaXRnbGllZGVybiAtIGlzdCBkZXIgRnJlaXNpdHogZGVzIFZlcmVpbnNoZWltcyBpbSBHcsO8bmVuIG1pdCBCbGljayBhdWYgZGllIFBsw6R0emUuXG5cbiAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL2Fib3V0XCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj5NZWhyPC9hPlxuXG4gICAgICAgICAgPE5hdkJveCBpdGVtcz17SXRlbXMubGlzdEl0ZW1zLmFib3V0SXRlbXN9IC8+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiPlxuXG4gICAgICAgICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDYyNjMuNzQ2MDYxNDkzMzYxITJkOC4zOTc1MDIyMDI3MTE0NzIhM2Q1MC41NjEzMjMzNzQyNDg5ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweDM3ZWZmOGMyODc0ZGZiYzMhMnNUZW5uaXN2ZXJlaW4lMjA3NyUyME5pZWRlcmJpZWwhNWUxITNtMiExc2VuITJzdXMhNHYxNTc2NzkxMzE3NTMxITVtMiExc2VuITJzdXNcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjFcIiBzdHlsZT17eyBib3JkZXI6IDAgfX0gYWxsb3dGdWxsU2NyZWVuPVwiXCI+PC9pZnJhbWU+XG5cblxuICAgICAgICA8L0NvbD5cblxuXG5cblxuICAgICAgPC9Sb3c+XG5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiA+XG4gICAgICAgIDxoMT5UZWFtczwvaDE+XG5cbiAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBKZWRlIFNhaXNvbiBzdGVsbGVuIHdpciBlaW5pZ2UgTWFubnNjaGFmdGVuIHVudGVyc2NoaWVkbGljaGVyIEFsdGVyc2tsYXNzZW4uXG4gICAgICAgICAgICAgIEhpZXIga8O2bm5lbiBTaWUgc2ljaCBlaW5lbiDDnGJlcmJsaWNrIHZlcnNjaGFmZmVuIHVuZCBha3R1ZWxsZSBFcmdlYm5pc3NlIGVpbnNlaGVuLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi90ZWFtc1wifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+w5xiZXJzaWNodDwvYT48YnI+PC9icj5cblxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuXG4gICAgICAgICAgPEdhbGVyeSBkYXRhPXt0ZWFtR2FsZXJ5fSAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgPC9Sb3c+XG5cblxuXG5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAgICAgLnRvcHJvd0dhbGxlcnkge1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLnNvY2lhbEJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ZhY2Vib29rLnBuZ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy10b3Age1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyBcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvOyBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lci1oZWFkZXIge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4OyBcbiAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjhzO1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzMgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICMzMzMgMSUpIGNlbnRlci8xNTAwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMHM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmFjY2VudC1saW5lIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1YzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tYmlnIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvOyBcbiAgICAgICAgICAgICAgd2lkdGg6IDMwdmg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGluay1ob2xkZXIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7IFxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgLm9mZmVyLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuXG4gICAgXG4gICAgICAgICAgICBgfVxuXG5cbiAgICAgIDwvc3R5bGU+XG5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e615bd061b09b4e9acb8.hot-update.js.map