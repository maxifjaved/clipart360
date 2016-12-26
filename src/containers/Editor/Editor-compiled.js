'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _dec, _class, _class2, _temp2;

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Chat: {
    displayName: 'Chat'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/nadcukandrej/IdeaProjects/clipart360/src/containers/Editor/Editor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Chat = _wrapComponent('Chat')((_dec = (0, _reactRedux.connect)(function (state) {
  return { user: state.auth.user };
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Chat, _Component);

  function Chat() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: '',
      messages: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;


      return _react3.default.createElement(
        'div',
        { className: 'container' },
        _react3.default.createElement(
          'h1',
          { className: style },
          'Editor'
        )
      );
    }
  }]);
  return Chat;
}(_react2.Component), _class2.propTypes = {
  user: _react2.PropTypes.object
}, _temp2)) || _class));

exports.default = Chat;
module.exports = exports['default'];

//# sourceMappingURL=Editor-compiled.js.map