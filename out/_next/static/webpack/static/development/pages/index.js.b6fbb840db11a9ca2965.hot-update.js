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
      marginTop: -100
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
  }, ".toprowGallery.jsx-4123352442{background:#555 !important;height:500px;width:100%;}.socialButton.jsx-4123352442{margin:50px;background:url(\"/static/facebook.png\");}.img-top.jsx-4123352442{margin-top:-50px;height:200px;width:auto;}.banner-header.jsx-4123352442{text-transform:uppercase;font-weight:bold;-webkit-letter-spacing:-2px;-moz-letter-spacing:-2px;-ms-letter-spacing:-2px;letter-spacing:-2px;font-size:26px;}.row.jsx-4123352442{padding:10px 0px;}.ripple.jsx-4123352442{background-position:center;-webkit-transition:background 0.8s;transition:background 0.8s;border-radius:10px;}.ripple.jsx-4123352442:hover{background:#333 radial-gradient(circle,transparent 1%,#333 1%) center/15000%;}.ripple.jsx-4123352442:active{background-color:#444;background-size:100%;-webkit-transition:background 0s;transition:background 0s;}.accent-line.jsx-4123352442{height:1px;width:10vh;background-color:#ff5c00;margin:10px 0px;}.logo-big.jsx-4123352442{height:auto;width:30vh;}ul.jsx-4123352442{margin:0px;padding:0px;}.box.jsx-4123352442{position:relative;top:10px;opacity:1;margin:auto;}a.jsx-4123352442{width:100%;color:black;}a.jsx-4123352442:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}.link-holder.jsx-4123352442{font-size:1.2em;margin:15px;padding:5px;border:1px solid #212529;}.offer-link.jsx-4123352442:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nvam9vbmFzL0RvY3VtZW50cy9Qcm9qZWN0cy90djc3L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MUyxBQUdrRCxBQUt6QixBQUlLLEFBS1EsQUFPUixBQUdnQixBQUtvRCxBQUd6RCxBQUtiLEFBT0QsQUFLQyxBQUlLLEFBUVIsQUFJRSxBQUlJLEFBUVksV0F2Q2YsQUFZQyxBQWFqQixDQXpEd0MsQUF1QzFCLEFBcUJVLElBSVQsQ0E1REQsQUFZZixDQWdDYSxJQXJCZ0IsQUFNRSxDQU83QixBQUtFLEFBWUYsRUFoRGlCLEVBZE0sQUF3QlUsQUE4QnJCLENBZ0JFLEVBNURILE9BNkNHLEdBdERPLEFBc0VNLENBNUQ3QixDQUlzQixDQWtCVyxJQU1YLEVBaUJwQixFQXREUSxBQUlWLFNBdUVJLEVBWEYsQ0ExQkUsRUFnQ0YsWUEzQ0UsWUFKdUIsWUFTdkIsT0FSQSwrQkFWYSxlQUVqQiIsImZpbGUiOiIvaG9tZS9jb2pvb25hcy9Eb2N1bWVudHMvUHJvamVjdHMvdHY3Ny9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTmF2Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJveFwiO1xuaW1wb3J0IFNvY2lhbE1lZGlhIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbE1lZGlhXCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZhY2Vib29rUHJvdmlkZXIsIFBhZ2UgfSBmcm9tICdyZWFjdC1mYWNlYm9vayc7XG5pbXBvcnQgR2FsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FsZW5kYXJcIlxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9CYW5uZXJcIlxuaW1wb3J0IEl0ZW1zIGZyb20gXCIuLi9pdGVtcy5qc29uXCJcblxuZnVuY3Rpb24gSW5kZXgoKSB7XG5cblxuXG5cbiAgY29uc3QgZ2VuZXJhbEdhbGVyeSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBpZDogXCIxXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZW5uaXNwbGF0el9uaWVkZXJiaWVsLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXJlIEFubGFnZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmF1c3Nlbi5qcGdcIixcbiAgICAgICAgbGVnZW5kOiBcIkRhcyBWZXJlaW5zaGVpbVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIzXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy9jbHViaGVpbV9kcmlubmVuLmpwZ1wiLFxuICAgICAgICBsZWdlbmQ6IFwiVW5zZXIgVmVyZWluc2hlaW1cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiNFwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvY2x1YmhlaW1fZHJpbm5lbjIuanBnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJVbnNlciBWZXJlaW5zaGVpbVwiXG4gICAgICB9XG5cbiAgICBdXG4gIH1cblxuXG4gIGNvbnN0IHRlYW1HYWxlcnkgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICBwaWN0dXJlOiBcIi9zdGF0aWMvdGVhbWZvdG9faGVycmVuLmpwZWdcIixcbiAgICAgICAgbGVnZW5kOiBcIkhlcnJlblwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgIHBpY3R1cmU6IFwiL3N0YXRpYy90ZWFtZm90b19kYW1lbi5qcGVnXCIsXG4gICAgICAgIGxlZ2VuZDogXCJEYW1lblwiXG4gICAgICB9XG4gICAgXVxuICB9XG5cblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBuYXZOYW1lPVwiU3RhcnRcIiB0aXRsZT1cIkhlcnpsaWNoIFdpbGxrb21tZW4gYmVpbSBUVjc3IE5pZWRlcmJpZWwhXCIgcGljdHVyZXM9e2dlbmVyYWxHYWxlcnkuaXRlbXN9XG5cblxuICAgID4gICAgICA8U29jaWFsTWVkaWEgdmlzaWJsZT17dHJ1ZX0gc3R5bGU9e3ttYXJnaW5Ub3A6IC0xMDB9fT48L1NvY2lhbE1lZGlhPlxuXG5cblxuXG5cblxuXG5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwidGV4dC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgbGc9XCI1XCIgPlxuICAgICAgICA8aDE+QWt0dWVsbGVzPC9oMT5cbiAgICAgICAgICA8RmFjZWJvb2tQcm92aWRlciBhcHBJZD1cIjcxNjQ0ODkyODc5NDc5OFwiID5cbiAgICAgICAgICAgICAgICA8UGFnZSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1RWLTc3LU5pZWRlcmJpZWwtNjEyOTkwMDQ5MDQyMzcyL1wiIHRhYnM9XCJ0aW1lbGluZVwiIC8+XG4gICAgICAgICAgICAgIDwvRmFjZWJvb2tQcm92aWRlcj5cblxuXG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBsZz1cIjdcIiA+XG4gICAgICAgIDxDYWxlbmRhciAvPlxuXG4gICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgPGgyID5TY2hudXBwZXJhbmdlYm90PC9oMj5cbiAgICAgICAgICA8c3Bhbj5FcnN0IHByb2JpZXJlbiwgZGFubiBlbnRzY2hlaWRlbiE8L3NwYW4+PGJyPjwvYnI+XG4gICAgICAgICAgPHNwYW4+RXJoYWx0ZW4gU2llIGVpbmUgZ3JhdGlzIFRyYWluZXJzdHVuZGUuIEVudHNjaGVpZGVuIFNpZSBzaWNoIGbDvHIgZWluZSBNaXRnbGllZHNjaGFmdCwgemFobGVuIFNpZSBmw7xyIGRhcyBCZWl0cml0dHNqYWhyIG51ciBkaWUgSMOkbGZ0ZSE8L3NwYW4+PGJyPjwvYnI+XG5cbiAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5hc3NldFByZWZpeCArIFwiL21pdGdsaWVkXCJ9IGNsYXNzTmFtZT1cIm9mZmVyLWxpbmtcIj56dW0gYW5nZWJvdDwvYT5cblxuICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgIDxCYW5uZXI+XG5cbiAgICAgICAgICA8aDIgID4gVmVyZWluc2hlaW0gbWlldGVuPC9oMj5cbiAgICAgICAgICA8c3Bhbj5BdWNoIE5pY2h0LU1pdGdsaWVkZXIga8O2bm5lbiB1bnNlciBWZXJlaW5zaGVpbSBtaWV0ZW4uIERpZXNlcyBoYXQgUGxhdHogZsO8ciBjYS4gNTAgUGVyc29uZW4uPC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgIDxzcGFuPk1pdCBlaWdlbmVyIEvDvGNoZSB1bmQgbW9kZXJuZXIgVGhla2UhPC9zcGFuPjxicj48L2JyPlxuICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvdmVyZWluc2hlaW1cIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPlp1bSBBbmdlYm90PC9hPlxuICAgICAgICAgIDwvQmFubmVyPlxuXG4gICAgICAgIDwvQ29sPlxuXG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTAgfX0+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cblxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuICAgICAgICA8aDE+w5xiZXIgdW5zPC9oMT5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRGVyIFRWIDc3IE5pZWRlcmJpZWwgaXN0IGVpbiBUZW5uaXN2ZXJlaW4gbWl0IGRlcnplaXQgcnVuZCAxMzUgTWl0Z2xpZWRlcm4sIHdvdm9uIGd1dCA1MCUgYWt0aXZlbiBTdGF0dXMgYmVzaXR6ZW4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPkRlciBPcnQgTmllZGVyYmllbCBnZWjDtnJ0IHp1ciBTdGFkdCBTb2xtcyB1bmQgbGllZ3Qgd3VuZGVyc2Now7ZuIHJ1aGlnIGltIExhaG50YWwgaW4gZGVyIE7DpGhlIGRlciBCdW5kZXNzdHJhw59lIDQ5IHp3aXNjaGVuIEdpZXNzZW4gaW0gT3N0ZW4gdW5kIExpbWJ1cmcgaW0gV2VzdGVuLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5QcnVua3N0w7xjayBkZXIgQW5sYWdlIGlzdCBkYXMgVmVyZWluc2hlaW0gbWl0IGdyb8OfZW0sIGhlbGxlbiBHYXN0cmF1bSAocmVub3ZpZXJ0IGltIEZyw7xoamFociAyMDA4KSB1bmQgZ2Vyw6R1bWlnZW4gVW1rbGVpZGVyw6R1bWVuIGbDvHIgRGFtZW4gdW5kIEhlcnJlbiBtaXRzYW10IHNhbml0w6RyZW4gQW5sYWdlbi4gQmVzb25kZXJzIGJlbGllYnQgaW0gU29tbWVyIC0gbmljaHQgbnVyIGJlaSBWZXJlaW5zbWl0Z2xpZWRlcm4gLSBpc3QgZGVyIEZyZWlzaXR6IGRlcyBWZXJlaW5zaGVpbXMgaW0gR3LDvG5lbiBtaXQgQmxpY2sgYXVmIGRpZSBQbMOkdHplLlxuXG4gICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgPGEgaHJlZj17cHJvY2Vzcy5lbnYuYXNzZXRQcmVmaXggKyBcIi9hYm91dFwifSBjbGFzc05hbWU9XCJvZmZlci1saW5rXCI+TWVocjwvYT5cblxuICAgICAgICAgIDxOYXZCb3ggaXRlbXM9e0l0ZW1zLmxpc3RJdGVtcy5hYm91dEl0ZW1zfSAvPlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIj5cblxuICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQ2MjYzLjc0NjA2MTQ5MzM2MSEyZDguMzk3NTAyMjAyNzExNDcyITNkNTAuNTYxMzIzMzc0MjQ4OSEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgwJTNBMHgzN2VmZjhjMjg3NGRmYmMzITJzVGVubmlzdmVyZWluJTIwNzclMjBOaWVkZXJiaWVsITVlMSEzbTIhMXNlbiEyc3VzITR2MTU3Njc5MTMxNzUzMSE1bTIhMXNlbiEyc3VzXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIxXCIgc3R5bGU9e3sgYm9yZGVyOiAwIH19IGFsbG93RnVsbFNjcmVlbj1cIlwiPjwvaWZyYW1lPlxuXG5cbiAgICAgICAgPC9Db2w+XG5cblxuXG5cbiAgICAgIDwvUm93PlxuXG5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuXG5cbiAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgPlxuICAgICAgICA8aDE+VGVhbXM8L2gxPlxuXG4gICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgSmVkZSBTYWlzb24gc3RlbGxlbiB3aXIgZWluaWdlIE1hbm5zY2hhZnRlbiB1bnRlcnNjaGllZGxpY2hlciBBbHRlcnNrbGFzc2VuLlxuICAgICAgICAgICAgICBIaWVyIGvDtm5uZW4gU2llIHNpY2ggZWluZW4gw5xiZXJibGljayB2ZXJzY2hhZmZlbiB1bmQgYWt0dWVsbGUgRXJnZWJuaXNzZSBlaW5zZWhlbi5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2Nlc3MuZW52LmFzc2V0UHJlZml4ICsgXCIvdGVhbXNcIn0gY2xhc3NOYW1lPVwib2ZmZXItbGlua1wiPsOcYmVyc2ljaHQ8L2E+PGJyPjwvYnI+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiID5cblxuICAgICAgICAgIDxHYWxlcnkgZGF0YT17dGVhbUdhbGVyeX0gLz5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgIDwvUm93PlxuXG5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgICAgIC50b3Byb3dHYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTU1ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWxCdXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9mYWNlYm9vay5wbmdcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctdG9wIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDsgXG4gICAgICAgICAgICB3aWR0aDogYXV0bzsgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5iYW5uZXItaGVhZGVyIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDsgXG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAucmlwcGxlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJpcHBsZTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHRyYW5zcGFyZW50IDElLCAjMzMzIDElKSBjZW50ZXIvMTUwMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5yaXBwbGU6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDBzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5hY2NlbnQtbGluZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWMwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvLWJpZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bzsgXG4gICAgICAgICAgICAgIHdpZHRoOiAzMHZoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3gge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmstaG9sZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4OyBcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxMjUyOTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIC5vZmZlci1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cblxuICAgIFxuICAgICAgICAgICAgYH1cblxuXG4gICAgICA8L3N0eWxlPlxuXG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/home/cojoonas/Documents/Projects/tv77/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b6fbb840db11a9ca2965.hot-update.js.map