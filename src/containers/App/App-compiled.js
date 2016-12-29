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

var _reactRouter = require('react-router');

var _reactRouterBootstrap = require('react-router-bootstrap');

var _Navbar = require('react-bootstrap/lib/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = require('react-bootstrap/lib/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('react-bootstrap/lib/NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _actions = require('../../redux/actions');

var _components2 = require('components');

var _reactRouterRedux = require('react-router-redux');

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/nadcukandrej/IdeaProjects/clipart360/src/containers/App/App.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var App = _wrapComponent('App')((_dec = (0, _reactRedux.connect)(function (state) {
  return { user: state.auth.user, isInfoLoaded: state.info.loaded, isAuthLoaded: state.auth.loaded };
}, { logout: _actions.logout, loadInfo: _actions.loadInfo, loadAuth: _actions.loadAuth, pushState: _reactRouterRedux.push }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleLogout = function (event) {
      event.preventDefault();
      _this.props.logout();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.isInfoLoaded) {
        this.props.loadInfo();
      }
      if (!this.props.isAuthLoaded) {
        this.props.loadAuth();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      var styles = require('./App.scss');

      return _react3.default.createElement(
        'div',
        { className: styles.app },
        _react3.default.createElement(_reactHelmet2.default, _config2.default.app.head),
        _react3.default.createElement(
          _Navbar2.default,
          { fixedTop: true },
          _react3.default.createElement(
            _Navbar2.default.Header,
            null,
            _react3.default.createElement(
              _Navbar2.default.Brand,
              null,
              _react3.default.createElement(
                _reactRouter.IndexLink,
                { to: '/', activeStyle: { color: '#33e0ff' } },
                _react3.default.createElement('div', { className: styles.brand }),
                _react3.default.createElement(
                  'span',
                  null,
                  _config2.default.app.title
                )
              )
            ),
            _react3.default.createElement(_Navbar2.default.Toggle, null)
          ),
          _react3.default.createElement(
            _Navbar2.default.Collapse,
            { eventKey: 0 },
            _react3.default.createElement(
              _Nav2.default,
              { navbar: true },
              user && _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/chat' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 1 },
                  'Chat'
                )
              ),
              _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/widgets' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 2 },
                  'Widgets'
                )
              ),
              _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/survey' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 3 },
                  'Survey'
                )
              ),
              _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/pagination' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 4 },
                  'Pagination'
                )
              ),
              _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/about' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 5 },
                  'About Us'
                )
              ),
              _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/editor' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 6 },
                  'Editor'
                )
              ),
              !user && _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/login' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 7 },
                  'Login'
                )
              ),
              user && _react3.default.createElement(
                _reactRouterBootstrap.LinkContainer,
                { to: '/logout' },
                _react3.default.createElement(
                  _NavItem2.default,
                  { eventKey: 8, className: 'logout-link', onClick: this.handleLogout },
                  'Logout'
                )
              )
            ),
            user && _react3.default.createElement(
              'p',
              { className: styles.loggedInMessage + ' navbar-text' },
              'Logged in as ',
              _react3.default.createElement(
                'strong',
                null,
                user.name
              ),
              '.'
            ),
            _react3.default.createElement(
              _Nav2.default,
              { navbar: true, pullRight: true },
              _react3.default.createElement(
                _NavItem2.default,
                { eventKey: 1, target: '_blank', title: 'View on Github', href: 'https://github.com/erikras/react-redux-universal-hot-example' },
                _react3.default.createElement('i', { className: 'fa fa-github' })
              )
            )
          )
        ),
        _react3.default.createElement(
          'div',
          { className: styles.appContent },
          this.props.children
        ),
        _react3.default.createElement(_components2.InfoBar, null),
        _react3.default.createElement(
          'div',
          { className: 'well text-center' },
          'Have questions 2? Ask for help ',
          _react3.default.createElement(
            'a',
            {
              href: 'https://github.com/erikras/react-redux-universal-hot-example/issues',
              target: '_blank' },
            'on Github'
          ),
          ' or in the ',
          _react3.default.createElement(
            'a',
            {
              href: 'https://discord.gg/0ZcbPKXt5bZZb1Ko', target: '_blank' },
            '#react-redux-universal'
          ),
          ' Discord channel.'
        )
      );
    }
  }]);
  return App;
}(_react2.Component), _class2.propTypes = {
  children: _react2.PropTypes.object.isRequired,
  user: _react2.PropTypes.object,
  logout: _react2.PropTypes.func.isRequired,
  loadInfo: _react2.PropTypes.func.isRequired,
  loadAuth: _react2.PropTypes.func.isRequired,
  isInfoLoaded: _react2.PropTypes.bool.isRequired,
  isAuthLoaded: _react2.PropTypes.bool.isRequired,
  pushState: _react2.PropTypes.func.isRequired
}, _class2.contextTypes = {
  store: _react2.PropTypes.object.isRequired
}, _temp2)) || _class));

exports.default = App;
module.exports = exports['default'];

//# sourceMappingURL=App-compiled.js.map