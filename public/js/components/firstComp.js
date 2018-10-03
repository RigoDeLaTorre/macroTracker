webpackJsonp([0],{

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

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

      _this.setState({ row1: color.hex });
    };

    _this.handleChangeCompleteRow2 = function (color) {

      _this.setState({ row2: color.hex });
    };

    _this.handleChange = function () {
      var yesterdayWeight = _this.yesterdayWeight.value;
      var currentWeight = _this.weight.value;
      var workoutOfTheDay = _this.workoutOfTheDay.value;

      var weightlossFromYesterday = (yesterdayWeight - currentWeight).toFixed(1);
      var currentWeightLoss = _this.state.weightInfo.startingWeight - currentWeight;
      currentWeightLoss = parseFloat(Math.round(currentWeightLoss * 100) / 100).toFixed(1);

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
        carbPercentage: carbPercentage,
        currentWeight: currentWeight,
        currentWeightLoss: currentWeightLoss,
        yesterdayWeight: yesterdayWeight,
        weightlossFromYesterday: weightlossFromYesterday,
        workoutOfTheDay: workoutOfTheDay,
        currentNumberOfDaysChecked: true,
        currentWeightChecked: true,
        overallWeightLossChecked: true,
        weightlossFromYestChecked: true,
        currentDateChecked: true,
        workoutChecked: true,
        checked: true
      });
    };

    _this.hideInfo = function (e) {
      console.log(e.target.value);
      var name = e.target.name;
      var value = e.target.checked;

      _this.setState(_defineProperty({}, name, value));
    };

    _this.state = {
      mystats: '',
      weightInfo: '',
      date: '',
      currentNumberOfDays: '',

      row1: 'gray',
      row2: '',
      displayColorPicker1: false,
      displayColorPicker2: false,
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

      _axios2.default.get('/weightInfo').then(function (response) {
        _this2.setState({
          weightInfo: response.data
        }, _this2.getWeightStartingPoint);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getWeightStartingPoint',
    value: function getWeightStartingPoint() {
      console.log('did this run');
      var today = new Date();
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      var date = month[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
      var date1 = new Date("6/4/2018");
      var date2 = new Date(date);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      this.setState({
        date: date,
        currentNumberOfDays: diffDays
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement('input', { type: 'checkbox', name: 'hide', value: 'hide', checked: this.state.hide, onChange: this.hideInfo }),
            'Hide Inputs',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'currentNumberOfDaysChecked', value: 'currentNumberOfDaysChecked', checked: this.state.currentNumberOfDaysChecked, onChange: this.hideInfo }),
            'Day',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'currentWeightChecked', value: 'currentWeightChecked', checked: this.state.currentWeightChecked, onChange: this.hideInfo }),
            'Current Weight',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'overallWeightLossChecked', value: 'overallWeightLossChecked', checked: this.state.overallWeightLossChecked, onChange: this.hideInfo }),
            'Overall Weight Loss',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'weightlossFromYestChecked', value: 'weightlossFromYestChecked', checked: this.state.weightlossFromYestChecked, onChange: this.hideInfo }),
            'WeightLoss From Yesterday',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'currentDateChecked', value: 'currentDateChecked', checked: this.state.currentDateChecked, onChange: this.hideInfo }),
            'Date',
            _react2.default.createElement('br', null),
            _react2.default.createElement('input', { type: 'checkbox', name: 'workoutChecked', value: 'workoutChecked', checked: this.state.workoutChecked, onChange: this.hideInfo }),
            'Workout',
            _react2.default.createElement('br', null)
          )
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
              { onClick: this.toggleColorPicker },
              'Color 1'
            ),
            this.state.displayColorPicker1 ? _react2.default.createElement(
              'div',
              { style: popoverLeft },
              _react2.default.createElement('div', { style: cover, className: 'buttonClose1',
                onClick: this.closeColorPicker }),
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
              { onClick: this.toggleColorPicker },
              'Color 2'
            ),
            this.state.displayColorPicker2 ? _react2.default.createElement(
              'div',
              { style: popoverRight },
              _react2.default.createElement('div', { style: cover, className: 'buttonClose2', onClick: this.closeColorPicker }),
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
              'div',
              { className: 'group-daily' },
              _react2.default.createElement(
                'h1',
                { style: this.state.currentNumberOfDaysChecked ? { display: 'block' } : { display: 'none' } },
                'Day ',
                this.state.currentNumberOfDays,
                ' - '
              ),
              _react2.default.createElement(
                'h1',
                { style: this.state.currentWeightChecked ? { display: 'block' } : { display: 'none' } },
                'Weight:',
                this.state.currentWeight,
                ' '
              ),
              _react2.default.createElement(
                'h1',
                { style: this.state.overallWeightLossChecked ? { display: 'block' } : { display: 'none' } },
                _react2.default.createElement(
                  'span',
                  null,
                  ' (-',
                  this.state.currentWeightLoss,
                  ' lb)'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'group-daily', style: this.state.weightlossFromYestChecked ? { display: 'block' } : { display: 'none' } },
              _react2.default.createElement(
                'span',
                { className: 'dailyWeight: ' + this.state.weightlossFromYesterday + ' > 0 ? \'dailyDown\' : \'dailyUp\'' },
                '(',
                this.state.weightlossFromYesterday > 0 ? '-' : '',
                Math.sign(this.state.weightlossFromYesterday) == -1 ? '+' : '',
                ' ',
                Math.abs(this.state.weightlossFromYesterday),
                ' lb) from yesterday'
              )
            ),
            _react2.default.createElement(
              'h3',
              { style: this.state.currentDateChecked ? { display: 'block' } : { display: 'none' } },
              this.state.date
            )
          ),
          _react2.default.createElement(
            'h1',
            { className: 'workout', style: this.state.workoutChecked ? { display: 'block' } : { display: 'none' } },
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
                this.state.calories
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