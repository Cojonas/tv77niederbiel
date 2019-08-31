webpackHotUpdate("static/development/pages/vereinsheim.js",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/components/Carousel.js";



function Galery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: 15
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, props.data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "" + item.picture,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "legend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.legend));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Galery);

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener("test", null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {}

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          this.props.tagName,
          {
            ref: function ref(node) {
              return _this2.swiper = node;
            },
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: this.props.className,
            style: this.props.style
          },
          this.props.children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/CSSTranslate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (position, axis) {
    var positionCss = axis === 'horizontal' ? [position, 0, 0] : [0, position, 0];
    var transitionProp = 'translate3d';

    var translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/components/Carousel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/components/Carousel.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cssClasses = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/cssClasses.js");

var _cssClasses2 = _interopRequireDefault(_cssClasses);

var _CSSTranslate = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js");

var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

var _reactEasySwipe = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

var _Thumbs = __webpack_require__(/*! ./Thumbs */ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js");

var _Thumbs2 = _interopRequireDefault(_Thumbs);

var _customPropTypes = __webpack_require__(/*! ../customPropTypes */ "./node_modules/react-responsive-carousel/lib/customPropTypes.js");

var customPropTypes = _interopRequireWildcard(_customPropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
    return current + ' of ' + total;
};

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            initialized: false,
            selectedItem: props.selectedItem,
            hasMount: false,
            isMouseEntered: false,
            autoPlay: props.autoPlay
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.children) {
                return;
            }

            this.setupCarousel();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.selectedItem !== this.state.selectedItem) {
                this.updateSizes();
                this.moveTo(nextProps.selectedItem);
            }

            if (nextProps.autoPlay !== this.state.autoPlay) {
                this.setState({
                    autoPlay: nextProps.autoPlay
                }, function () {
                    if (_this2.state.autoPlay) {
                        _this2.setupAutoPlay();
                    } else {
                        _this2.destroyAutoPlay();
                    }
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (!prevProps.children && this.props.children && !this.state.initialized) {
                this.setupCarousel();
            }
            if (prevState.swiping && !this.state.swiping) {
                // We stopped swiping, ensure we are heading to the new/current slide and not stuck
                this.resetPosition();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroyCarousel();
        }
    }, {
        key: 'setupCarousel',
        value: function setupCarousel() {
            this.bindEvents();

            if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
                this.setupAutoPlay();
            }

            this.setState({
                initialized: true
            });

            var initialImage = this.getInitialImage();
            if (initialImage) {
                // if it's a carousel of images, we set the mount state after the first image is loaded
                initialImage.addEventListener('load', this.setMountState);
            } else {
                this.setMountState();
            }
        }
    }, {
        key: 'destroyCarousel',
        value: function destroyCarousel() {
            if (this.state.initialized) {
                this.unbindEvents();
                this.destroyAutoPlay();
            }
        }
    }, {
        key: 'setupAutoPlay',
        value: function setupAutoPlay() {
            this.autoPlay();
            var carouselWrapper = this.carouselWrapperRef;

            if (this.props.stopOnHover && carouselWrapper) {
                carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
                carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
            }
        }
    }, {
        key: 'destroyAutoPlay',
        value: function destroyAutoPlay() {
            this.clearAutoPlay();
            var carouselWrapper = this.carouselWrapperRef;

            if (this.props.stopOnHover && carouselWrapper) {
                carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
                carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
            }
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            // as the widths are calculated, we need to resize
            // the carousel when the window is resized
            window.addEventListener("resize", this.updateSizes);
            // issue #2 - image loading smaller
            window.addEventListener("DOMContentLoaded", this.updateSizes);

            if (this.props.useKeyboardArrows) {
                document.addEventListener("keydown", this.navigateWithKeyboard);
            }
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            // removing listeners
            window.removeEventListener("resize", this.updateSizes);
            window.removeEventListener("DOMContentLoaded", this.updateSizes);

            var initialImage = this.getInitialImage();
            if (initialImage) {
                initialImage.removeEventListener("load", this.setMountState);
            }

            if (this.props.useKeyboardArrows) {
                document.removeEventListener("keydown", this.navigateWithKeyboard);
            }
        }
    }, {
        key: 'getPosition',
        value: function getPosition(index) {
            if (this.props.infiniteLoop) {
                // index has to be added by 1 because of the first cloned slide
                ++index;
            }
            var childrenLength = _react.Children.count(this.props.children);
            if (this.props.centerMode && this.props.axis === 'horizontal') {
                var currentPosition = -index * this.props.centerSlidePercentage;
                var lastPosition = childrenLength - 1;

                if (index && (index !== lastPosition || this.props.infiniteLoop)) {
                    currentPosition += (100 - this.props.centerSlidePercentage) / 2;
                } else if (index === lastPosition) {
                    currentPosition += 100 - this.props.centerSlidePercentage;
                }

                return currentPosition;
            }

            return -index * 100;
        }
    }, {
        key: 'renderItems',
        value: function renderItems(isClone) {
            var _this3 = this;

            return _react.Children.map(this.props.children, function (item, index) {
                var slideProps = {
                    ref: function ref(e) {
                        return _this3.setItemsRef(e, index);
                    },
                    key: 'itemKey' + index + (isClone ? 'clone' : ''),
                    className: _cssClasses2.default.ITEM(true, index === _this3.state.selectedItem),
                    onClick: _this3.handleClickItem.bind(_this3, index, item)
                };

                if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
                    slideProps.style = {
                        minWidth: _this3.props.centerSlidePercentage + '%'
                    };
                }

                return _react2.default.createElement(
                    'li',
                    slideProps,
                    item
                );
            });
        }
    }, {
        key: 'renderControls',
        value: function renderControls() {
            var _this4 = this;

            if (!this.props.showIndicators) {
                return null;
            }

            return _react2.default.createElement(
                'ul',
                { className: 'control-dots' },
                _react.Children.map(this.props.children, function (item, index) {
                    return _react2.default.createElement('li', { className: _cssClasses2.default.DOT(index === _this4.state.selectedItem), onClick: _this4.changeItem, onKeyDown: _this4.changeItem, value: index, key: index, role: 'button', tabIndex: 0 });
                })
            );
        }
    }, {
        key: 'renderStatus',
        value: function renderStatus() {
            if (!this.props.showStatus) {
                return null;
            }

            return _react2.default.createElement(
                'p',
                { className: 'carousel-status' },
                this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children))
            );
        }
    }, {
        key: 'renderThumbs',
        value: function renderThumbs() {
            if (!this.props.showThumbs || _react.Children.count(this.props.children) === 0) {
                return null;
            }

            return _react2.default.createElement(
                _Thumbs2.default,
                { ref: this.setThumbsRef, onSelectItem: this.handleClickThumb, selectedItem: this.state.selectedItem, transitionTime: this.props.transitionTime, thumbWidth: this.props.thumbWidth },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.children || _react.Children.count(this.props.children) === 0) {
                return null;
            }

            var isHorizontal = this.props.axis === 'horizontal';

            var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;

            // show left arrow?
            var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop);
            // show right arrow
            var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop);
            // obj to hold the transformations and styles
            var itemListStyles = {};

            var currentPosition = this.getPosition(this.state.selectedItem);

            // if 3d is available, let's take advantage of the performance of transform
            var transformProp = (0, _CSSTranslate2.default)(currentPosition + '%', this.props.axis);

            var transitionTime = this.props.transitionTime + 'ms';

            itemListStyles = {
                'WebkitTransform': transformProp,
                'MozTransform': transformProp,
                'MsTransform': transformProp,
                'OTransform': transformProp,
                'transform': transformProp,
                'msTransform': transformProp
            };

            if (!this.state.swiping) {
                itemListStyles = _extends({}, itemListStyles, {
                    'WebkitTransitionDuration': transitionTime,
                    'MozTransitionDuration': transitionTime,
                    'MsTransitionDuration': transitionTime,
                    'OTransitionDuration': transitionTime,
                    'transitionDuration': transitionTime,
                    'msTransitionDuration': transitionTime
                });
            }

            var itemsClone = this.renderItems(true);
            var firstClone = itemsClone.shift();
            var lastClone = itemsClone.pop();

            var swiperProps = {
                selectedItem: this.state.selectedItem,
                className: _cssClasses2.default.SLIDER(true, this.state.swiping),
                onSwipeMove: this.onSwipeMove,
                onSwipeStart: this.onSwipeStart,
                onSwipeEnd: this.onSwipeEnd,
                style: itemListStyles,
                tolerance: this.props.swipeScrollTolerance
            };

            var containerStyles = {};

            if (isHorizontal) {
                swiperProps.onSwipeLeft = this.onSwipeForward;
                swiperProps.onSwipeRight = this.onSwipeBackwards;

                if (this.props.dynamicHeight) {
                    var itemHeight = this.getVariableImageHeight(this.state.selectedItem);
                    swiperProps.style.height = itemHeight || 'auto';
                    containerStyles.height = itemHeight || 'auto';
                }
            } else {
                swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
                swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
                swiperProps.style.height = this.state.itemSize;
                containerStyles.height = this.state.itemSize;
            }
            return _react2.default.createElement(
                'div',
                { className: this.props.className, ref: this.setCarouselWrapperRef },
                _react2.default.createElement(
                    'div',
                    { className: _cssClasses2.default.CAROUSEL(true), style: { width: this.props.width } },
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.onClickPrev }),
                    _react2.default.createElement(
                        'div',
                        { className: _cssClasses2.default.WRAPPER(true, this.props.axis), style: containerStyles, ref: this.setItemsWrapperRef },
                        this.props.swipeable ? _react2.default.createElement(
                            _reactEasySwipe2.default,
                            _extends({
                                tagName: 'ul',
                                ref: this.setListRef
                            }, swiperProps, {
                                allowMouseEvents: this.props.emulateTouch }),
                            this.props.infiniteLoop && lastClone,
                            this.renderItems(),
                            this.props.infiniteLoop && firstClone
                        ) : _react2.default.createElement(
                            'ul',
                            {
                                className: _cssClasses2.default.SLIDER(true, this.state.swiping),
                                ref: this.setListRef,
                                style: itemListStyles },
                            this.props.infiniteLoop && lastClone,
                            this.renderItems(),
                            this.props.infiniteLoop && firstClone
                        )
                    ),
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.onClickNext }),
                    this.renderControls(),
                    this.renderStatus()
                ),
                this.renderThumbs()
            );
        }
    }]);

    return Carousel;
}(_react.Component);

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    showArrows: _propTypes2.default.bool,
    showStatus: _propTypes2.default.bool,
    showIndicators: _propTypes2.default.bool,
    infiniteLoop: _propTypes2.default.bool,
    showThumbs: _propTypes2.default.bool,
    thumbWidth: _propTypes2.default.number,
    selectedItem: _propTypes2.default.number,
    onClickItem: _propTypes2.default.func.isRequired,
    onClickThumb: _propTypes2.default.func.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    axis: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    verticalSwipe: _propTypes2.default.oneOf(['natural', 'standard']),
    width: customPropTypes.unit,
    useKeyboardArrows: _propTypes2.default.bool,
    autoPlay: _propTypes2.default.bool,
    stopOnHover: _propTypes2.default.bool,
    interval: _propTypes2.default.number,
    transitionTime: _propTypes2.default.number,
    swipeScrollTolerance: _propTypes2.default.number,
    swipeable: _propTypes2.default.bool,
    dynamicHeight: _propTypes2.default.bool,
    emulateTouch: _propTypes2.default.bool,
    statusFormatter: _propTypes2.default.func.isRequired,
    centerMode: _propTypes2.default.bool,
    centerSlidePercentage: _propTypes2.default.number
};
Carousel.defaultProps = {
    showIndicators: true,
    showArrows: true,
    showStatus: true,
    showThumbs: true,
    infiniteLoop: false,
    selectedItem: 0,
    axis: 'horizontal',
    verticalSwipe: 'standard',
    width: '100%',
    useKeyboardArrows: false,
    autoPlay: false,
    stopOnHover: true,
    interval: 3000,
    transitionTime: 350,
    swipeScrollTolerance: 5,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: false,
    onClickItem: noop,
    onClickThumb: noop,
    onChange: noop,
    statusFormatter: defaultStatusFormatter,
    centerMode: false,
    centerSlidePercentage: 80
};

var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.setThumbsRef = function (node) {
        _this5.thumbsRef = node;
    };

    this.setCarouselWrapperRef = function (node) {
        _this5.carouselWrapperRef = node;
    };

    this.setListRef = function (node) {
        _this5.listRef = node;
    };

    this.setItemsWrapperRef = function (node) {
        _this5.itemsWrapperRef = node;
    };

    this.setItemsRef = function (node, index) {
        if (!_this5.itemsRef) {
            _this5.itemsRef = [];
        }
        _this5.itemsRef[index] = node;
    };

    this.autoPlay = function () {
        if (!_this5.state.autoPlay || _react.Children.count(_this5.props.children) <= 1) {
            return;
        }

        clearTimeout(_this5.timer);
        _this5.timer = setTimeout(function () {
            _this5.increment();
        }, _this5.props.interval);
    };

    this.clearAutoPlay = function () {
        if (!_this5.state.autoPlay) {
            return;
        }

        clearTimeout(_this5.timer);
    };

    this.resetAutoPlay = function () {
        _this5.clearAutoPlay();
        _this5.autoPlay();
    };

    this.stopOnHover = function () {
        _this5.setState({ isMouseEntered: true });
        _this5.clearAutoPlay();
    };

    this.startOnLeave = function () {
        _this5.setState({ isMouseEntered: false });
        _this5.autoPlay();
    };

    this.navigateWithKeyboard = function (e) {
        var axis = _this5.props.axis;

        var isHorizontal = axis === 'horizontal';
        var keyNames = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
        };

        var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
        var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

        if (nextKey === e.keyCode) {
            _this5.increment();
        } else if (prevKey === e.keyCode) {
            _this5.decrement();
        }
    };

    this.updateSizes = function () {
        if (!_this5.state.initialized) {
            return;
        }

        var isHorizontal = _this5.props.axis === 'horizontal';
        var firstItem = _this5.itemsRef[0];
        var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

        _this5.setState(function (_state, props) {
            return {
                itemSize: itemSize,
                wrapperSize: isHorizontal ? itemSize * _react.Children.count(props.children) : itemSize
            };
        });

        if (_this5.thumbsRef) {
            _this5.thumbsRef.updateSizes();
        }
    };

    this.setMountState = function () {
        _this5.setState({ hasMount: true });
        _this5.updateSizes();
    };

    this.handleClickItem = function (index, item) {
        if (_react.Children.count(_this5.props.children) === 0) {
            return;
        }

        if (_this5.state.cancelClick) {
            _this5.setState({
                cancelClick: false
            });

            return;
        }

        _this5.props.onClickItem(index, item);

        if (index !== _this5.state.selectedItem) {
            _this5.setState({
                selectedItem: index
            });
        }
    };

    this.handleOnChange = function (index, item) {
        if (_react.Children.count(_this5.props.children) <= 1) {
            return;
        }

        _this5.props.onChange(index, item);
    };

    this.handleClickThumb = function (index, item) {
        _this5.props.onClickThumb(index, item);

        _this5.selectItem({
            selectedItem: index
        });
    };

    this.onSwipeStart = function () {
        _this5.setState({
            swiping: true
        });
        _this5.clearAutoPlay();
    };

    this.onSwipeEnd = function () {
        _this5.setState({
            swiping: false,
            cancelClick: false
        });
        _this5.autoPlay();
    };

    this.onSwipeMove = function (delta) {
        var isHorizontal = _this5.props.axis === 'horizontal';
        var childrenLength = _react.Children.count(_this5.props.children);

        var initialBoundry = 0;

        var currentPosition = _this5.getPosition(_this5.state.selectedItem);
        var finalBoundry = _this5.props.infiniteLoop ? _this5.getPosition(childrenLength - 1) - 100 : _this5.getPosition(childrenLength - 1);

        var axisDelta = isHorizontal ? delta.x : delta.y;
        var handledDelta = axisDelta;

        // prevent user from swiping left out of boundaries
        if (currentPosition === initialBoundry && axisDelta > 0) {
            handledDelta = 0;
        }

        // prevent user from swiping right out of boundaries
        if (currentPosition === finalBoundry && axisDelta < 0) {
            handledDelta = 0;
        }

        var position = currentPosition + 100 / (_this5.state.itemSize / handledDelta);
        if (_this5.props.infiniteLoop) {
            // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
            // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
            if (_this5.state.selectedItem === 0 && position > -100) {
                position -= childrenLength * 100;
            } else if (_this5.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
                position += childrenLength * 100;
            }
        }
        position += '%';
        _this5.setPosition(position);

        // allows scroll if the swipe was within the tolerance
        var hasMoved = Math.abs(axisDelta) > _this5.props.swipeScrollTolerance;

        if (hasMoved && !_this5.state.cancelClick) {
            _this5.setState({
                cancelClick: true
            });
        }

        return hasMoved;
    };

    this.setPosition = function (position, forceReflow) {
        var list = _reactDom2.default.findDOMNode(_this5.listRef);
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
            list.style[prop] = (0, _CSSTranslate2.default)(position, _this5.props.axis);
        });
        if (forceReflow) {
            list.offsetLeft;
        }
    };

    this.resetPosition = function () {
        var currentPosition = _this5.getPosition(_this5.state.selectedItem) + '%';
        _this5.setPosition(currentPosition);
    };

    this.decrement = function () {
        var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this5.moveTo(_this5.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
    };

    this.increment = function () {
        var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this5.moveTo(_this5.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
    };

    this.moveTo = function (position, fromSwipe) {
        var lastPosition = _react.Children.count(_this5.props.children) - 1;
        var needClonedSlide = _this5.props.infiniteLoop && !fromSwipe && (position < 0 || position > lastPosition);
        var oldPosition = position;

        if (position < 0) {
            position = _this5.props.infiniteLoop ? lastPosition : 0;
        }

        if (position > lastPosition) {
            position = _this5.props.infiniteLoop ? 0 : lastPosition;
        }

        if (needClonedSlide) {
            // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
            // this is only needed for non-swiping situation
            _this5.setState({
                swiping: true
            }, function () {
                if (oldPosition < 0) {
                    if (_this5.props.centerMode && _this5.props.axis === 'horizontal') {
                        _this5.setPosition('-' + ((lastPosition + 2) * _this5.props.centerSlidePercentage - (100 - _this5.props.centerSlidePercentage) / 2) + '%', true);
                    } else {
                        _this5.setPosition('-' + (lastPosition + 2) * 100 + '%', true);
                    }
                } else if (oldPosition > lastPosition) {
                    _this5.setPosition(0, true);
                }

                _this5.selectItem({
                    selectedItem: position,
                    swiping: false
                });
            });
        } else {
            _this5.selectItem({
                // if it's not a slider, we don't need to set position here
                selectedItem: position
            });
        }

        // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
        // and will result in the interval function not being cleared correctly.
        if (_this5.state.autoPlay && _this5.state.isMouseEntered === false) {
            _this5.resetAutoPlay();
        }
    };

    this.onClickNext = function () {
        _this5.increment(1, false);
    };

    this.onClickPrev = function () {
        _this5.decrement(1, false);
    };

    this.onSwipeForward = function () {
        _this5.increment(1, true);
    };

    this.onSwipeBackwards = function () {
        _this5.decrement(1, true);
    };

    this.changeItem = function (e) {
        if (!e.key || e.key === 'Enter') {
            var newIndex = e.target.value;

            _this5.selectItem({
                selectedItem: newIndex
            });
        }
    };

    this.selectItem = function (state, cb) {
        _this5.setState(state, cb);
        _this5.handleOnChange(state.selectedItem, _react.Children.toArray(_this5.props.children)[state.selectedItem]);
    };

    this.getInitialImage = function () {
        var selectedItem = _this5.props.selectedItem;
        var item = _this5.itemsRef && _this5.itemsRef[selectedItem];
        var images = item && item.getElementsByTagName('img');
        return images && images[selectedItem];
    };

    this.getVariableImageHeight = function (position) {
        var item = _this5.itemsRef && _this5.itemsRef[position];
        var images = item && item.getElementsByTagName('img');
        if (_this5.state.hasMount && images.length > 0) {
            var image = images[0];

            if (!image.complete) {
                // if the image is still loading, the size won't be available so we trigger a new render after it's done
                var onImageLoad = function onImageLoad() {
                    _this5.forceUpdate();
                    image.removeEventListener('load', onImageLoad);
                };

                image.addEventListener('load', onImageLoad);
            }

            var height = image.clientHeight;
            return height > 0 ? height : null;
        }

        return null;
    };
};

exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/components/Thumbs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cssClasses = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/cssClasses.js");

var _cssClasses2 = _interopRequireDefault(_cssClasses);

var _dimensions = __webpack_require__(/*! ../dimensions */ "./node_modules/react-responsive-carousel/lib/dimensions.js");

var _CSSTranslate = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js");

var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

var _reactEasySwipe = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumbs = function (_Component) {
    _inherits(Thumbs, _Component);

    function Thumbs(props) {
        _classCallCheck(this, Thumbs);

        var _this = _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            selectedItem: props.selectedItem,
            hasMount: false,
            firstItem: 0,
            itemSize: null,
            visibleItems: 0,
            lastPosition: 0,
            showArrows: false,
            images: _this.getImages()
        };
        return _this;
    }

    _createClass(Thumbs, [{
        key: 'componentDidMount',
        value: function componentDidMount(nextProps) {
            this.setupThumbs();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props, state) {
            if (props.selectedItem !== this.state.selectedItem) {
                this.setState({
                    selectedItem: props.selectedItem,
                    firstItem: this.getFirstItem(props.selectedItem)
                });
            }
            if (props.children !== this.props.children) {
                this.setState({
                    images: this.getImages()
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.children === prevProps.children) {
                return;
            }

            // This will capture any size changes for arrow adjustments etc.
            // usually in the same render cycle so we don't see any flickers
            this.updateSizes();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroyThumbs();
        }
    }, {
        key: 'setupThumbs',
        value: function setupThumbs() {
            // as the widths are calculated, we need to resize
            // the carousel when the window is resized
            window.addEventListener("resize", this.updateSizes);
            // issue #2 - image loading smaller
            window.addEventListener("DOMContentLoaded", this.updateSizes);

            // when the component is rendered we need to calculate
            // the container size to adjust the responsive behaviour
            this.updateSizes();
        }
    }, {
        key: 'destroyThumbs',
        value: function destroyThumbs() {
            // removing listeners
            window.removeEventListener("resize", this.updateSizes);
            window.removeEventListener("DOMContentLoaded", this.updateSizes);
        }
    }, {
        key: 'getImages',
        value: function getImages() {
            var images = _react.Children.map(this.props.children, function (item, index) {
                var img = item;

                // if the item is not an image, try to find the first image in the item's children.
                if (item.type !== "img") {
                    img = _react.Children.toArray(item.props.children).filter(function (children) {
                        return children.type === "img";
                    })[0];
                }

                if (!img || img.length === 0) {
                    return null;
                }

                return img;
            });

            if (images.filter(function (image) {
                return image !== null;
            }).length === 0) {
                console.warn('No images found! Can\'t build the thumb list without images. If you don\'t need thumbs, set showThumbs={false} in the Carousel. Note that it\'s not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md');

                return null;
            }

            return images;
        }
    }, {
        key: 'getFirstItem',
        value: function getFirstItem(selectedItem) {
            var firstItem = selectedItem;

            if (selectedItem >= this.state.lastPosition) {
                firstItem = this.state.lastPosition;
            }

            if (selectedItem < this.state.firstItem + this.state.visibleItems) {
                firstItem = this.state.firstItem;
            }

            if (selectedItem < this.state.firstItem) {
                firstItem = selectedItem;
            }

            return firstItem;
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            return this.state.images.map(function (img, index) {
                var itemClass = _cssClasses2.default.ITEM(false, index === _this2.state.selectedItem && _this2.state.hasMount);

                var thumbProps = {
                    key: index,
                    ref: function ref(e) {
                        return _this2.setThumbsRef(e, index);
                    },
                    className: itemClass,
                    onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
                    onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index])
                };

                if (index === 0) {
                    img = _react2.default.cloneElement(img, {
                        onLoad: _this2.setMountState
                    });
                }

                return _react2.default.createElement(
                    'li',
                    _extends({}, thumbProps, { role: 'button', tabIndex: 0 }),
                    img
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.children) {
                return null;
            }

            // show left arrow?
            var hasPrev = this.state.showArrows && this.state.firstItem > 0;
            // show right arrow
            var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
            // obj to hold the transformations and styles
            var itemListStyles = {};

            var currentPosition = -this.state.firstItem * this.state.itemSize + 'px';

            var transformProp = (0, _CSSTranslate2.default)(currentPosition, this.props.axis);

            var transitionTime = this.props.transitionTime + 'ms';

            itemListStyles = {
                'WebkitTransform': transformProp,
                'MozTransform': transformProp,
                'MsTransform': transformProp,
                'OTransform': transformProp,
                'transform': transformProp,
                'msTransform': transformProp,
                'WebkitTransitionDuration': transitionTime,
                'MozTransitionDuration': transitionTime,
                'MsTransitionDuration': transitionTime,
                'OTransitionDuration': transitionTime,
                'transitionDuration': transitionTime,
                'msTransitionDuration': transitionTime
            };

            return _react2.default.createElement(
                'div',
                { className: _cssClasses2.default.CAROUSEL(false) },
                _react2.default.createElement(
                    'div',
                    { className: _cssClasses2.default.WRAPPER(false), ref: this.setItemsWrapperRef },
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.slideRight }),
                    _react2.default.createElement(
                        _reactEasySwipe2.default,
                        { tagName: 'ul',
                            selectedItem: this.state.selectedItem,
                            className: _cssClasses2.default.SLIDER(false, this.state.swiping),
                            onSwipeLeft: this.slideLeft,
                            onSwipeRight: this.slideRight,
                            onSwipeMove: this.onSwipeMove,
                            onSwipeStart: this.onSwipeStart,
                            onSwipeEnd: this.onSwipeEnd,
                            style: itemListStyles,
                            ref: this.setItemsListRef },
                        this.renderItems()
                    ),
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.slideLeft })
                )
            );
        }
    }]);

    return Thumbs;
}(_react.Component);

Thumbs.displayName = 'Thumbs';
Thumbs.propsTypes = {
    children: _propTypes2.default.element.isRequired,
    transitionTime: _propTypes2.default.number,
    selectedItem: _propTypes2.default.number,
    thumbWidth: _propTypes2.default.number
};
Thumbs.defaultProps = {
    selectedItem: 0,
    transitionTime: 350,
    axis: 'horizontal'
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setItemsWrapperRef = function (node) {
        _this3.itemsWrapperRef = node;
    };

    this.setItemsListRef = function (node) {
        _this3.itemsListRef = node;
    };

    this.setThumbsRef = function (node, index) {
        if (!_this3.thumbsRef) {
            _this3.thumbsRef = [];
        }
        _this3.thumbsRef[index] = node;
    };

    this.updateSizes = function () {
        if (!_this3.props.children || !_this3.itemsWrapperRef) {
            return;
        }

        var total = _this3.props.children.length;
        var wrapperSize = _this3.itemsWrapperRef.clientWidth;
        var itemSize = _this3.props.thumbWidth ? _this3.props.thumbWidth : (0, _dimensions.outerWidth)(_this3.thumbsRef[0]);
        var visibleItems = Math.floor(wrapperSize / itemSize);
        var lastPosition = total - visibleItems;
        var showArrows = visibleItems < total;
        _this3.setState(function (_state, props) {
            return {
                itemSize: itemSize,
                visibleItems: visibleItems,
                firstItem: showArrows ? _this3.getFirstItem(props.selectedItem) : 0,
                lastPosition: lastPosition,
                showArrows: showArrows
            };
        });
    };

    this.setMountState = function () {
        _this3.setState({ hasMount: true });
        _this3.updateSizes();
    };

    this.handleClickItem = function (index, item, e) {
        if (!e.keyCode || e.key === 'Enter') {
            var handler = _this3.props.onSelectItem;

            if (typeof handler === 'function') {
                handler(index, item);
            }
        }
    };

    this.onSwipeStart = function () {
        _this3.setState({
            swiping: true
        });
    };

    this.onSwipeEnd = function () {
        _this3.setState({
            swiping: false
        });
    };

    this.onSwipeMove = function (deltaX) {
        var leftBoundary = 0;

        var currentPosition = -_this3.state.firstItem * _this3.state.itemSize;
        var lastLeftBoundary = -_this3.state.visibleItems * _this3.state.itemSize;

        // prevent user from swiping left out of boundaries
        if (currentPosition === leftBoundary && deltaX > 0) {
            deltaX = 0;
        }

        // prevent user from swiping right out of boundaries
        if (currentPosition === lastLeftBoundary && deltaX < 0) {
            deltaX = 0;
        }

        var wrapperSize = _this3.itemsWrapperRef.clientWidth;
        var position = currentPosition + 100 / (wrapperSize / deltaX) + '%';

        // if 3d isn't available we will use left to move
        if (_this3.itemsListRef) {
            ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
                _this3.itemsListRef.style[prop] = (0, _CSSTranslate2.default)(position, _this3.props.axis);
            });
        }
    };

    this.slideRight = function (positions) {
        _this3.moveTo(_this3.state.firstItem - (typeof positions === 'number' ? positions : 1));
    };

    this.slideLeft = function (positions) {
        _this3.moveTo(_this3.state.firstItem + (typeof positions === 'number' ? positions : 1));
    };

    this.moveTo = function (position) {
        // position can't be lower than 0
        position = position < 0 ? 0 : position;
        // position can't be higher than last postion
        position = position >= _this3.lastPosition ? _this3.lastPosition : position;

        _this3.setState({
            firstItem: position,
            // if it's not a slider, we don't need to set position here
            selectedItem: _this3.state.selectedItem
        });
    };
};

exports.default = Thumbs;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/cssClasses.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/cssClasses.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    CAROUSEL: function CAROUSEL(isSlider) {
        return (0, _classnames2.default)({
            "carousel": true,
            "carousel-slider": isSlider
        });
    },

    WRAPPER: function WRAPPER(isSlider, axis) {
        return (0, _classnames2.default)({
            "thumbs-wrapper": !isSlider,
            "slider-wrapper": isSlider,
            "axis-horizontal": axis === "horizontal",
            "axis-vertical": axis !== "horizontal"
        });
    },

    SLIDER: function SLIDER(isSlider, isSwiping) {
        return (0, _classnames2.default)({
            "thumbs": !isSlider,
            "slider": isSlider,
            "animated": !isSwiping
        });
    },

    ITEM: function ITEM(isSlider, selected) {
        return (0, _classnames2.default)({
            "thumb": !isSlider,
            "slide": isSlider,
            "selected": selected
        });
    },

    ARROW_PREV: function ARROW_PREV(disabled) {
        return (0, _classnames2.default)({
            "control-arrow control-prev": true,
            "control-disabled": disabled
        });
    },

    ARROW_NEXT: function ARROW_NEXT(disabled) {
        return (0, _classnames2.default)({
            "control-arrow control-next": true,
            "control-disabled": disabled
        });
    },

    DOT: function DOT(selected) {
        return (0, _classnames2.default)({
            "dot": true,
            'selected': selected
        });
    }
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/customPropTypes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/customPropTypes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var unit = exports.unit = function unit(props, propName, componentName) {
    if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
        return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %');
    }
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/dimensions.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/dimensions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var outerWidth = exports.outerWidth = function outerWidth(el) {
	var width = el.offsetWidth;
	var style = getComputedStyle(el);

	width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	return width;
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumbs = exports.Carousel = undefined;

var _Carousel = __webpack_require__(/*! ./components/Carousel */ "./node_modules/react-responsive-carousel/lib/components/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Thumbs = __webpack_require__(/*! ./components/Thumbs */ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js");

var _Thumbs2 = _interopRequireDefault(_Thumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Carousel = _Carousel2.default;
exports.Thumbs = _Thumbs2.default;

/***/ }),

/***/ "./pages/vereinsheim.js":
/*!******************************!*\
  !*** ./pages/vereinsheim.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vereinsheim; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/home/cojonas/Projects/tv77niederbiel/pages/vereinsheim.js";




function Vereinsheim() {
  var galery = {
    items: [{
      id: "1",
      picture: "/static/clubheim_draussen.jpg",
      legend: "Das Vereinsheim"
    }, {
      id: "2",
      picture: "/static/clubheim_tisch.jpg",
      legend: "Das Vereinsheim"
    }, {
      id: "3",
      picture: "/static/clubheim_drinnen2.jpg",
      legend: "Vereinsheim"
    }, {
      id: "4",
      picture: "/static/clubheim_drinnen.jpg",
      legend: "Vereinsheim"
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    style: {
      textAlign: "left"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    cols: "12",
    md: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Mieten Sie unser Vereinsheim!"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "12",
    lg: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: galery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))));
}

/***/ })

})
//# sourceMappingURL=vereinsheim.js.c78a2ceedcba96d52240.hot-update.js.map