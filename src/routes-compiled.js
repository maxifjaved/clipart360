'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _auth = require('redux/modules/auth');

var _containers = require('containers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  var requireLogin = function requireLogin(nextState, replace, cb) {
    function checkAuth() {
      var _store$getState = store.getState(),
          user = _store$getState.auth.user;

      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/login');
      }
      cb();
    }

    if (!(0, _auth.isLoaded)(store.getState())) {
      store.dispatch((0, _auth.load)()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _containers.App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _containers.Home }),
    _react2.default.createElement(
      _reactRouter.Route,
      { onEnter: requireLogin },
      _react2.default.createElement(_reactRouter.Route, { path: 'chat', component: _containers.Chat }),
      _react2.default.createElement(_reactRouter.Route, { path: 'loginSuccess', component: _containers.LoginSuccess })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _containers.About }),
    _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _containers.Login }),
    _react2.default.createElement(_reactRouter.Route, { path: 'pagination', component: _containers.Pagination }),
    _react2.default.createElement(_reactRouter.Route, { path: 'survey', component: _containers.Survey }),
    _react2.default.createElement(_reactRouter.Route, { path: 'widgets', component: _containers.Widgets }),
    _react2.default.createElement(_reactRouter.Route, { path: 'editor', component: _containers.Editor }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _containers.NotFound, status: 404 })
  );
};

module.exports = exports['default'];

//# sourceMappingURL=routes-compiled.js.map