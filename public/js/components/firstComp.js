webpackJsonp([0],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(63);

var _ColorPicker = __webpack_require__(213);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.toggleNav = function () {
      _this.setState({
        nav: !_this.state.nav
      });
    };

    _this.handleChange = function (event) {
      _this.props.handleWorkoutChange(event.target.value);
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.state = {
      nav: false

    };
    return _this;
  }
  //Toggles the Navigation either on or off


  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-container' },
          _react2.default.createElement(
            'div',
            { className: 'nav-buttons' },
            _react2.default.createElement(
              'a',
              { onClick: this.toggleNav },
              'Options'
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/search', activeClassName: 'selected' },
              'Search'
            ),
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: '/setup', activeClassName: 'selected' },
              'Setup'
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: this.state.nav == true ? 'nav-show' : 'nav-section' },
          _react2.default.createElement(
            'div',
            { className: 'colorContainer' },
            _react2.default.createElement(
              'div',
              { className: 'group-inputs' },
              _react2.default.createElement(
                'label',
                null,
                'Workout:'
              ),
              _react2.default.createElement(
                'select',
                { value: this.props.globalState.workout, name: 'workout', onChange: this.handleChange },
                _react2.default.createElement(
                  'option',
                  { value: 'nodisplay' },
                  'Do Not Display'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Upperbody Gym' },
                  'Upperbody Gym'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Lowerbody Gym' },
                  'Lowerbody Gym'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Cardio' },
                  'Cardio'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Jog' },
                  'Jog'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Walk' },
                  'Walk'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'HIIT' },
                  'HIIT'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'Rest' },
                  'Rest'
                )
              )
            ),
            _react2.default.createElement(_ColorPicker2.default, { handleChangeCompleteRow1: this.props.handleChangeCompleteRow1, handleChangeCompleteRow2: this.props.handleChangeCompleteRow2, globalState: this.props.globalState })
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = Navigation;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Setup = function Setup() {

  return _react2.default.createElement(
    'section',
    { id: 'instructions' },
    _react2.default.createElement(
      'div',
      { className: 'group-steps' },
      _react2.default.createElement(
        'h1',
        null,
        'Step 1'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Login to your account on a desktop/laptop and click on Settings '
      ),
      _react2.default.createElement(
        'a',
        { href: './img/step1.png' },
        _react2.default.createElement('img', { src: './img/step1.png', alt: 'myfitnesspal settings' })
      ),
      _react2.default.createElement('hr', null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'group-steps' },
      _react2.default.createElement(
        'h1',
        null,
        'Step 2'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Click on Diary Settings'
      ),
      _react2.default.createElement(
        'a',
        { href: './img/step2.png' },
        _react2.default.createElement('img', { src: './img/step2.png', alt: 'myfitnesspal settings' })
      ),
      _react2.default.createElement('hr', null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'group-steps' },
      _react2.default.createElement(
        'h1',
        null,
        'Step 3'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Copy the nutrients tracked exactly in the order as shown in the picture.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Scroll to the bottom under Diary Sharing and click on Public.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Save Changes'
      ),
      _react2.default.createElement(
        'a',
        { href: './img/step3.png' },
        _react2.default.createElement('img', { src: './img/step3.png', alt: 'myfitnesspal settings' })
      ),
      _react2.default.createElement(
        'a',
        { href: './img/step3b.png' },
        _react2.default.createElement('img', { src: './img/step3b.png', alt: 'myfitnesspal settings' })
      ),
      _react2.default.createElement('hr', null)
    ),
    _react2.default.createElement(
      'div',
      { className: 'link' },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { to: '/search', activeClassName: 'selected' },
        'All Done, Let me Try !'
      )
    )
  );
};

exports.default = Setup;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Results = __webpack_require__(214);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSearch = function (_Component) {
  _inherits(UserSearch, _Component);

  function UserSearch() {
    _classCallCheck(this, UserSearch);

    var _this = _possibleConstructorReturn(this, (UserSearch.__proto__ || Object.getPrototypeOf(UserSearch)).call(this));

    _this.handleChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleSubmit = function (e) {
      if (e.key == 'Enter' || e.which == 13) {
        _this.props.getApiData(_this.state.username);
      }
    };

    _this.state = {
      username: '',
      workout: 'nodisplay'
    };
    return _this;
  }

  _createClass(UserSearch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'section',
        { id: 'usersearch' },
        _react2.default.createElement(
          'div',
          { className: 'group' },
          _react2.default.createElement(
            'div',
            { className: 'input-group' },
            _react2.default.createElement(
              'label',
              null,
              'UserName:'
            ),
            _react2.default.createElement('input', { type: 'text', placeholder: 'enter username', name: 'username', onChange: this.handleChange, onKeyPress: this.handleSubmit })
          ),
          _react2.default.createElement(
            'div',
            { className: 'submit-button', onClick: function onClick() {
                return _this2.props.getApiData(_this2.state.username);
              } },
            _react2.default.createElement('img', { src: './img/enter.svg', alt: 'get personal stats button' })
          )
        ),
        _react2.default.createElement(_Results2.default, { globalState: this.props.globalState })
      );
    }
  }]);

  return UserSearch;
}(_react.Component);

exports.default = UserSearch;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactColor = __webpack_require__(393);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

    _this.toggleColorPicker = function (e) {
      if (e.target.innerHTML == 'Color 1') {
        _this.setState({ displayColorPicker1: !_this.state.displayColorPicker1 });
      } else if (e.target.innerHTML == 'Color 2') {

        _this.setState({ displayColorPicker2: !_this.state.displayColorPicker2 });
      }
    };

    _this.closeColorPicker = function (e) {
      if (e.target.className == 'buttonClose1') {
        _this.setState({ displayColorPicker1: false });
      } else if (e.target.className == 'buttonClose2') {
        _this.setState({ displayColorPicker2: false });
      }
    };

    _this.handleChangeCompleteRow1 = function (color) {
      _this.props.handleChangeCompleteRow1(color.hex);
    };

    _this.handleChangeCompleteRow2 = function (color) {
      _this.props.handleChangeCompleteRow2(color.hex);
    };

    _this.state = {
      displayColorPicker1: false,
      displayColorPicker2: false

    };

    return _this;
  }
  //Shows the color picker

  //closes the color picker

  //After a color is selected, state is updated with the hex color #

  //After a color is selected, state is updated with the hex color #


  _createClass(ColorPicker, [{
    key: 'render',
    value: function render() {
      var popoverLeft = {
        position: 'absolute',
        zIndex: '2',
        left: '0'

      };
      var popoverRight = {
        position: 'absolute',
        zIndex: '2',
        right: '0'
      };
      var cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      };
      return _react2.default.createElement(
        'div',
        { className: 'color-picker' },
        _react2.default.createElement(
          'div',
          { className: 'group' },
          _react2.default.createElement(
            'button',
            { onClick: this.toggleColorPicker },
            'Color 1'
          ),
          this.state.displayColorPicker1 ? _react2.default.createElement(
            'div',
            { style: popoverLeft },
            _react2.default.createElement('div', { style: cover, className: 'buttonClose1',
              onClick: this.closeColorPicker }),
            _react2.default.createElement(_reactColor.SketchPicker, {
              color: this.props.globalState.row1,
              onChangeComplete: this.handleChangeCompleteRow1 })
          ) : null
        ),
        _react2.default.createElement(
          'div',
          { className: 'group' },
          _react2.default.createElement(
            'button',
            { onClick: this.toggleColorPicker },
            'Color 2'
          ),
          this.state.displayColorPicker2 ? _react2.default.createElement(
            'div',
            { style: popoverRight },
            _react2.default.createElement('div', { style: cover, className: 'buttonClose2', onClick: this.closeColorPicker }),
            _react2.default.createElement(_reactColor.SketchPicker, {
              color: this.props.globalState.row2,
              onChangeComplete: this.handleChangeCompleteRow2
            })
          ) : null
        )
      );
    }
  }]);

  return ColorPicker;
}(_react.Component);

exports.default = ColorPicker;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function Results(_ref) {
  var globalState = _ref.globalState;

  return _react2.default.createElement(
    "section",
    { className: "results" },
    _react2.default.createElement(
      "div",
      { className: "top-section" },
      _react2.default.createElement(
        "div",
        { className: "group-daily line-1" },
        _react2.default.createElement(
          "h3",
          null,
          globalState.date
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "group-daily line-2", style: globalState.workout == 'nodisplay' || globalState.workout == null ? { display: 'none' } : { display: 'block' } },
        _react2.default.createElement(
          "h1",
          { className: "workout" },
          "Workout",
          _react2.default.createElement(
            "span",
            { className: "workout-detail" },
            ": ",
            globalState.workout
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "stats" },
      _react2.default.createElement(
        "h1",
        { style: { background: globalState.row1 } },
        "Calories:",
        _react2.default.createElement(
          "span",
          { className: "category" },
          " ",
          globalState.calories
        )
      ),
      _react2.default.createElement(
        "h1",
        { style: { background: globalState.row2 } },
        "Fat:",
        _react2.default.createElement(
          "span",
          { className: "category" },
          " ",
          globalState.mystats.fat,
          "g /"
        ),
        " ",
        _react2.default.createElement(
          "span",
          { className: "percentage" },
          " ",
          globalState.fatPercentage,
          " %"
        )
      ),
      _react2.default.createElement(
        "h1",
        { style: { background: globalState.row1 } },
        "Protein:",
        _react2.default.createElement(
          "span",
          { className: "category" },
          " ",
          globalState.mystats.protein,
          "g /"
        ),
        " ",
        _react2.default.createElement(
          "span",
          { className: "percentage" },
          " ",
          globalState.proteinPercentage,
          " %"
        )
      ),
      _react2.default.createElement(
        "h1",
        { style: { background: globalState.row2 } },
        "Net Carbs:",
        _react2.default.createElement(
          "span",
          { className: "category" },
          " ",
          globalState.netCarbs,
          "g / "
        ),
        " ",
        _react2.default.createElement(
          "span",
          { className: "percentage" },
          globalState.carbPercentage,
          " %"
        )
      ),
      _react2.default.createElement(
        "h1",
        { style: { background: globalState.row1 } },
        "Fiber:",
        _react2.default.createElement(
          "span",
          { className: "category" },
          " ",
          globalState.mystats.fiber,
          "g"
        )
      )
    )
  );
};

exports.default = Results;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(63);

var _axios = __webpack_require__(191);

var _axios2 = _interopRequireDefault(_axios);

var _Nav = __webpack_require__(192);

var _Nav2 = _interopRequireDefault(_Nav);

var _UserSearch = __webpack_require__(194);

var _UserSearch2 = _interopRequireDefault(_UserSearch);

var _Setup = __webpack_require__(193);

var _Setup2 = _interopRequireDefault(_Setup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Instructions from './components/Instructions.js'


var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.getApiData = function (username) {

      _axios2.default.get('/scrape', {
        params: {
          username: username
        }
      }).then(function (response) {
        _this.setState({
          mystats: response.data
        }, _this.handleChange);
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.handleChange = function () {

      //calculation to get net Carbs
      var netCarbs = parseInt(_this.state.mystats.carbs - _this.state.mystats.fiber);
      //calc to get the total calories for each macro
      var fatCalories = parseInt(_this.state.mystats.fat) * 9;
      var proteinCalories = parseInt(_this.state.mystats.protein) * 4;
      var carbCalories = parseInt(_this.state.mystats.carbs - _this.state.mystats.fiber) * 4;
      var calories = parseInt(fatCalories + proteinCalories + carbCalories);

      //calc to get the % of each macro
      var fatPercentage = Math.round(fatCalories / calories * 100);
      var proteinPercentage = Math.round(proteinCalories / calories * 100);
      var carbPercentage = Math.round(carbCalories / calories * 100);

      _this.setState({
        netCarbs: netCarbs,
        calories: calories,
        fatPercentage: fatPercentage,
        proteinPercentage: proteinPercentage,
        carbPercentage: carbPercentage
      });
    };

    _this.handleWorkoutChange = function (workout) {
      _this.setState({
        workout: workout
      });
    };

    _this.handleChangeCompleteRow1 = function (color) {
      console.log('are you runing');
      _this.setState({ row1: color });
    };

    _this.handleChangeCompleteRow2 = function (color) {

      _this.setState({ row2: color });
    };

    _this.hideInfo = function (e) {
      var name = e.target.name;
      var value = e.target.checked;
      _this.setState(function (prevState) {
        return {
          filteredCheckboxes: _extends({}, prevState.filteredCheckboxes, _defineProperty({}, name, value))
        };
      });
    };

    _this.state = {
      mystats: '',
      date: '',
      row1: '#cbc7c7',
      row2: '',
      username: '',
      workout: 'nodisplay'

    };

    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var today = new Date();
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      var date = month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

      this.setState({
        date: date
      });
    }

    // 2 api calls, get macros and get start weight and date

  }, {
    key: 'getWeightStartingPoint',

    //Displays how many days into the diet as well as the Current Date
    value: function getWeightStartingPoint() {
      var today = new Date();
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      var date = month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

      this.setState({
        date: date
      });
    }

    // Gets the values of the inputs for daily weight, yesterdays weight, and workout of the day

    //After a color is selected, state is updated with the hex color #

    //After a color is selected, state is updated with the hex color #


    // handles the checkbox filters and displays or hides fields as specified

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var popoverLeft = {
        position: 'absolute',
        zIndex: '2',
        left: '0'

      };
      var popoverRight = {
        position: 'absolute',
        zIndex: '2',
        right: '0'
      };
      var cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      };
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'home' },
          _react2.default.createElement(_Nav2.default, { hideInfo: this.hideInfo,
            handleChangeCompleteRow1: this.handleChangeCompleteRow1,
            handleChangeCompleteRow2: this.handleChangeCompleteRow2,
            handleWorkoutChange: this.handleWorkoutChange,
            globalState: this.state }),
          _react2.default.createElement(_reactRouterDom.Route, {
            path: '/search',
            render: function render(props) {
              return _react2.default.createElement(_UserSearch2.default, _extends({}, props, {
                getApiData: _this2.getApiData,
                handleUser: _this2.handleUser,
                globalState: _this2.state }));
            } }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/setup', component: _Setup2.default }),
          _react2.default.createElement(_reactRouterDom.Route, {
            exact: true, path: '/',
            render: function render(props) {
              return _react2.default.createElement(_UserSearch2.default, _extends({}, props, {
                getApiData: _this2.getApiData,
                handleUser: _this2.handleUser,
                globalState: _this2.state }));
            } })
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[215]);