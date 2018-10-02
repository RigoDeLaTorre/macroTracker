webpackJsonp([1],{

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(56);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactColor = __webpack_require__(174);

var _axios = __webpack_require__(173);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.toggleColorPicker1 = function () {
      _this.setState({ displayColorPicker1: !_this.state.displayColorPicker1 });
    };

    _this.toggleColorPicker2 = function () {
      _this.setState({ displayColorPicker2: !_this.state.displayColorPicker2 });
    };

    _this.closeColorPicker1 = function () {
      _this.setState({ displayColorPicker1: false });
    };

    _this.closeColorPicker2 = function () {
      _this.setState({ displayColorPicker2: false });
    };

    _this.handleChangeCompleteRow1 = function (color) {

      _this.setState({ row1: color.hex });
    };

    _this.handleChangeCompleteRow2 = function (color) {

      _this.setState({ row2: color.hex });
    };

    _this.handleChange = function () {

      var fat = parseInt(_this.state.mystats.fat);
      var protein = parseInt(_this.state.mystats.protein);
      var carbs = parseInt(_this.state.mystats.carbs);
      var fiber = parseInt(_this.state.mystats.fiber);

      var yesterdayWeight = _this.yesterdayWeight.value;
      var currentWeight = _this.weight.value;
      var workoutOfTheDay = _this.workoutOfTheDay.value;

      var weightlossFromYesterday = (yesterdayWeight - currentWeight).toFixed(1);
      var currentWeightLoss = _this.state.startingWeight - currentWeight;
      currentWeightLoss = parseFloat(Math.round(currentWeightLoss * 100) / 100).toFixed(1);

      //calculation to get net Carbs
      var netCarbs = parseInt(carbs - fiber);
      //calc to get the total calories for each macro
      var fatCalories = fat * 9;
      var proteinCalories = protein * 4;
      var carbCalories = netCarbs * 4;

      //calc to get net total overall calories
      var calories = parseInt(fatCalories + proteinCalories + carbCalories);

      //
      var fatPercentage = Math.round(fatCalories / calories * 100);
      var proteinPercentage = Math.round(proteinCalories / calories * 100);
      var carbPercentage = Math.round(carbCalories / calories * 100);

      _this.setState({
        fat: fat,
        protein: protein,
        carbs: carbs,
        netCarbs: netCarbs,
        fiber: fiber,
        calories: calories,
        fatPercentage: fatPercentage,
        proteinPercentage: proteinPercentage,
        carbPercentage: carbPercentage,
        currentWeight: currentWeight,
        currentWeightLoss: currentWeightLoss,
        yesterdayWeight: yesterdayWeight,
        weightlossFromYesterday: weightlossFromYesterday,
        workoutOfTheDay: workoutOfTheDay

      });
    };

    _this.hideInfo = function () {
      _this.setState({
        hide: !_this.state.hide
      });
    };

    var today = new Date();

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var date = month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
    var date1 = new Date("6/4/2018");
    var date2 = new Date(date);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    _this.state = {
      date: date,
      startingWeight: 211.6,
      currentNumberOfDays: diffDays,
      mystats: '',
      row1: 'gray',
      row2: '',
      displayColorPicker1: false,
      displayColorPicker2: false,
      dayTest: date,
      hide: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      _axios2.default.get('/scrape').then(function (response) {
        _this2.setState({
          mystats: response.data
        }, _this2.handleChange);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var popover = {
        position: 'absolute',
        zIndex: '2'
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
        _react2.default.createElement(
          'button',
          { onClick: this.hideInfo },
          'Hide'
        ),
        _react2.default.createElement(
          'section',
          { className: 'info', style: this.state.hide ? { visibility: 'hidden' } : { visibility: 'visible' } },
          _react2.default.createElement(
            'div',
            { className: 'inputGroup' },
            _react2.default.createElement(
              'label',
              null,
              'Workout: '
            ),
            _react2.default.createElement(
              'select',
              { ref: function ref(input) {
                  return _this3.workoutOfTheDay = input;
                }, onChange: this.handleChange },
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
                { value: 'Rest' },
                'Rest'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'inputGroup' },
            _react2.default.createElement(
              'label',
              null,
              'Yest. Weight: '
            ),
            _react2.default.createElement('input', { type: 'number', name: 'yesterdayWeight', ref: function ref(input) {
                return _this3.yesterdayWeight = input;
              }, onChange: this.handleChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'inputGroup' },
            _react2.default.createElement(
              'label',
              null,
              'Weight: '
            ),
            _react2.default.createElement('input', { type: 'number', name: 'weight', ref: function ref(input) {
                return _this3.weight = input;
              }, onChange: this.handleChange })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'nav-section', style: this.state.hide ? { visibility: 'hidden' } : { visibility: 'visible' } },
          _react2.default.createElement(
            'div',
            { className: 'group' },
            _react2.default.createElement(
              'button',
              { onClick: this.toggleColorPicker1 },
              'Color 1'
            ),
            this.state.displayColorPicker1 ? _react2.default.createElement(
              'div',
              { style: popover },
              _react2.default.createElement('div', { style: cover, onClick: this.closeColorPicker1 }),
              _react2.default.createElement(_reactColor.SketchPicker, {
                color: this.state.row1,
                onChangeComplete: this.handleChangeCompleteRow1
              })
            ) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'group' },
            _react2.default.createElement(
              'button',
              { onClick: this.toggleColorPicker2 },
              'Color 2'
            ),
            this.state.displayColorPicker2 ? _react2.default.createElement(
              'div',
              { style: popover },
              _react2.default.createElement('div', { style: cover, onClick: this.closeColorPicker2 }),
              _react2.default.createElement(_reactColor.SketchPicker, {
                color: this.state.row2,
                onChangeComplete: this.handleChangeCompleteRow2
              })
            ) : null
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            { className: 'top-header' },
            _react2.default.createElement(
              'h1',
              null,
              'Day ',
              this.state.currentNumberOfDays,
              ' - Weight:',
              this.state.currentWeight,
              _react2.default.createElement(
                'span',
                null,
                ' (-',
                this.state.currentWeightLoss,
                ' lb)'
              )
            ),
            _react2.default.createElement(
              'h3',
              null,
              _react2.default.createElement(
                'span',
                { className: '{dailyWeight: ' + (this.state.weightlossFromYesterday > 0 ? 'dailyDown' : 'dailyUp') },
                ' (',
                this.state.weightlossFromYesterday > 0 ? '-' : ''
              ),
              Math.sign(this.state.weightlossFromYesterday) == -1 ? '+' : '',
              Math.abs(this.state.weightlossFromYesterday),
              ' lb) from yesterday'
            ),
            _react2.default.createElement(
              'h3',
              null,
              this.state.date
            )
          ),
          _react2.default.createElement(
            'h1',
            { className: 'workout' },
            'Workout:',
            _react2.default.createElement(
              'span',
              { className: 'workout-detail' },
              ' ',
              this.state.workoutOfTheDay
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'stats' },
            _react2.default.createElement(
              'h1',
              { style: { background: this.state.row1 } },
              'Calories:',
              _react2.default.createElement(
                'span',
                { className: 'category' },
                ' ',
                this.state.mystats.calories
              )
            ),
            _react2.default.createElement(
              'h1',
              { style: { background: this.state.row2 } },
              'Fat:',
              _react2.default.createElement(
                'span',
                { className: 'category' },
                ' ',
                this.state.mystats.fat,
                'g /'
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'percentage' },
                ' ',
                this.state.fatPercentage,
                ' %'
              )
            ),
            _react2.default.createElement(
              'h1',
              { style: { background: this.state.row1 } },
              'Protein:',
              _react2.default.createElement(
                'span',
                { className: 'category' },
                ' ',
                this.state.mystats.protein,
                'g /'
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'percentage' },
                ' ',
                this.state.proteinPercentage,
                ' %'
              )
            ),
            _react2.default.createElement(
              'h1',
              { style: { background: this.state.row2 } },
              'Net Carbs:',
              _react2.default.createElement(
                'span',
                { className: 'category' },
                ' ',
                this.state.netCarbs,
                'g / '
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: 'percentage' },
                this.state.carbPercentage,
                ' %'
              )
            ),
            _react2.default.createElement(
              'h1',
              { style: { background: this.state.row1 } },
              'Fiber:',
              _react2.default.createElement(
                'span',
                { className: 'category' },
                ' ',
                this.state.mystats.fiber,
                'g'
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[193]);