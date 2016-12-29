'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStore;

var _redux = require('redux');

var _clientMiddleware = require('./middleware/clientMiddleware');

var _clientMiddleware2 = _interopRequireDefault(_clientMiddleware);

var _reactRouterRedux = require('react-router-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  var reduxRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);

  // create the saga middleware
  var sagaMiddleware = (0, _reduxSaga2.default)();

  var middleware = [(0, _clientMiddleware2.default)(client), reduxRouterMiddleware, _reduxThunk2.default, sagaMiddleware];

  var finalCreateStore = void 0;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    var _require = require('redux-devtools'),
        persistState = _require.persistState;

    var DevTools = require('../containers/DevTools/DevTools');
    finalCreateStore = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(), persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))(_redux.createStore);
  } else {
    finalCreateStore = _redux.applyMiddleware.apply(undefined, middleware)(_redux.createStore);
  }

  var reducer = require('./modules/reducer');
  if (data) {
    data.pagination = _immutable2.default.fromJS(data.pagination);
  }
  var store = finalCreateStore(reducer, data);

  // then run the saga
  var rootTask = sagaMiddleware.run(_sagas2.default, client);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', function () {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return { store: store, rootSagaTask: rootTask };
}
module.exports = exports['default'];

//# sourceMappingURL=create-compiled.js.map