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
  filename: '/Users/nadcukandrej/IdeaProjects/clipart360/src/containers/Chat/Chat.js',
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
    }, _this.onMessageReceived = function (data) {
      var messages = _this.state.messages;
      messages.push(data);
      _this.setState({ messages: messages });
    }, _this.handleSubmit = function (event) {
      event.preventDefault();

      var msg = _this.state.message;

      _this.setState({ message: '' });

      socket.emit('msg', {
        from: _this.props.user.name,
        text: msg
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chat, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (socket) {
        socket.on('msg', this.onMessageReceived);
        setTimeout(function () {
          socket.emit('history', { offset: 0, length: 100 });
        }, 1);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (socket) {
        socket.removeListener('msg', this.onMessageReceived);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = require('./Chat.scss');
      var user = this.props.user;


      return _react3.default.createElement(
        'div',
        { className: style.chat + ' container' },
        _react3.default.createElement(
          'h1',
          { className: style },
          'Chat'
        ),
        user && _react3.default.createElement(
          'div',
          null,
          _react3.default.createElement(
            'ul',
            null,
            this.state.messages.map(function (msg) {
              return _react3.default.createElement(
                'li',
                { key: 'chat.msg.' + msg.id },
                msg.from,
                ': ',
                msg.text
              );
            })
          ),
          _react3.default.createElement(
            'form',
            { className: 'login-form', onSubmit: this.handleSubmit },
            _react3.default.createElement('input', { type: 'text', ref: 'message', placeholder: 'Enter your message',
              value: this.state.message,
              onChange: function onChange(event) {
                _this2.setState({ message: event.target.value });
              } }),
            _react3.default.createElement(
              'button',
              { className: 'btn', onClick: this.handleSubmit },
              'Send'
            )
          )
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

//# sourceMappingURL=Chat-compiled.js.map