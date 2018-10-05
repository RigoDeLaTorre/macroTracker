webpackJsonp([0],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ColorPicker = __webpack_require__(194);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this.handleUser = function () {
      // let currentWeight = parseFloat(this.weight.value);
      var workoutOfTheDay = _this.workoutOfTheDay.value;
      var username = _this.username.value;

      _this.props.handleUser(workoutOfTheDay, username);
    };

    _this.toggleNav = function () {
      _this.setState({
        nav: !_this.state.nav
      });
    };

    _this.submit = function (e) {
      if (e.key == 'Enter' || e.which == 13) {
        _this.props.getApiData();
      }
    };

    _this.state = {
      nav: false
    };
    return _this;
  }

  //Gets the value inputted on the form whenever it is changed and passes that value to the parent index.js which updates the state.


  //Toggles the Navigation either on or off


  // Submit button that triggers api call on Enter key.


  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-container' },
          _react2.default.createElement(
            'div',
            { className: 'nav-button', onClick: this.toggleNav },
            _react2.default.createElement('img', { src: './img/menu.svg' }),
            _react2.default.createElement(
              'span',
              null,
              'Get Macros'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'nav-button' },
            _react2.default.createElement(
              'a',
              { href: '/instructions.html' },
              _react2.default.createElement('img', { src: './img/settings.svg' }),
              _react2.default.createElement(
                'span',
                null,
                'Setup First !'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: this.state.nav == true ? 'nav-show' : 'nav-section' },
          _react2.default.createElement(
            'div',
            { className: 'group-inputs userinfo' },
            _react2.default.createElement(
              'div',
              { className: 'usergroup' },
              _react2.default.createElement(
                'label',
                null,
                'UserName:'
              ),
              _react2.default.createElement('input', { type: 'text', placeholder: 'enter username', name: 'weight', ref: function ref(input) {
                  return _this2.username = input;
                }, onChange: this.handleUser, onKeyPress: this.submit })
            ),
            _react2.default.createElement(
              'div',
              { className: 'submit-button', onClick: this.props.getApiData },
              _react2.default.createElement('img', { src: './img/enter.svg', alt: 'get personal stats button' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-section' },
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
                { value: this.props.globalState.workoutOfTheDay, ref: function ref(input) {
                    return _this2.workoutOfTheDay = input;
                  }, onChange: this.handleUser },
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
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'nodisplay' },
                  'Do Not Display'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'colorContainer' },
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

/***/ 175:
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
    "div",
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
        { className: "group-daily line-2", style: globalState.workoutOfTheDay == 'nodisplay' || globalState.workoutOfTheDay == null ? { display: 'none' } : { display: 'block' } },
        _react2.default.createElement(
          "h1",
          { className: "workout" },
          "Workout",
          _react2.default.createElement(
            "span",
            { className: "workout-detail" },
            ": ",
            globalState.workoutOfTheDay
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

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactColor = __webpack_require__(371);

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

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(173);

var _axios2 = _interopRequireDefault(_axios);

var _Nav = __webpack_require__(174);

var _Nav2 = _interopRequireDefault(_Nav);

var _Results = __webpack_require__(175);

var _Results2 = _interopRequireDefault(_Results);

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

    _this.getApiData = function () {
      var username = _this.state.username;
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

      _axios2.default.get('/weightInfo', {
        params: {
          username: username
        }
      }).then(function (response) {
        _this.setState({
          weightInfo: response.data
        }, _this.getWeightStartingPoint);
      }).catch(function (error) {
        console.log(error);
      });
    };

    _this.handleChange = function (workoutOfTheDay, username) {

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

    _this.handleUser = function (workoutOfTheDay, username) {

      _this.setState({
        workoutOfTheDay: workoutOfTheDay,
        username: username
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
      username: ''

    };

    return _this;
  }

  // 2 api calls, get macros and get start weight and date


  _createClass(Layout, [{
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
        { className: 'home' },
        _react2.default.createElement(_Nav2.default, { getApiData: this.getApiData, hideInfo: this.hideInfo, handleUser: this.handleUser, handleChangeCompleteRow1: this.handleChangeCompleteRow1, handleChangeCompleteRow2: this.handleChangeCompleteRow2, globalState: this.state }),
        _react2.default.createElement(_Results2.default, { globalState: this.state })
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[195]);