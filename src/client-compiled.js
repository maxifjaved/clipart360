'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _create = require('./redux/create');

var _create2 = _interopRequireDefault(_create);

var _ApiClient = require('./helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _reduxAsyncConnect = require('redux-async-connect');

var _useStandardScroll = require('scroll-behavior/lib/useStandardScroll');

var _useStandardScroll2 = _interopRequireDefault(_useStandardScroll);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
var client = new _ApiClient2.default();
var _browserHistory = (0, _useStandardScroll2.default)(function () {
  return _reactRouter.browserHistory;
})();
var dest = document.getElementById('content');
var store = (0, _create2.default)(_browserHistory, client, window.__data);
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_browserHistory, store);

function initSocket() {
  var socket = (0, _socket2.default)('', { path: '/ws' });
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data from client' });
  });
  socket.on('msg', function (data) {
    console.log(data);
  });

  return socket;
}

global.socket = initSocket();

var component = _react2.default.createElement(
  _reactRouter.Router,
  { render: function render(props) {
      return _react2.default.createElement(_reduxAsyncConnect.ReduxAsyncConnect, (0, _extends3.default)({}, props, { helpers: { client: client }, filter: function filter(item) {
          return !item.deferred;
        } }));
    }, history: history },
  (0, _routes2.default)(store)
);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store, key: 'provider' },
  component
), dest);

if (process.env.NODE_ENV !== 'production') {
  window.React = _react2.default; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  var DevTools = require('./containers/DevTools/DevTools');
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, key: 'provider' },
    _react2.default.createElement(
      'div',
      null,
      component,
      _react2.default.createElement(DevTools, null)
    )
  ), dest);
}

//# sourceMappingURL=client-compiled.js.map