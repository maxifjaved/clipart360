'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = info;
exports.isLoaded = isLoaded;
exports.load = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD = 'redux-example/LOAD';
var LOAD_SUCCESS = 'redux-example/LOAD_SUCCESS';
var LOAD_FAIL = 'redux-example/LOAD_FAIL';

var initialState = {
  loaded: false
};

function info() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        data: action.result
      });
    case LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/loadInfo');
    }
  };
}

//# sourceMappingURL=info-compiled.js.map