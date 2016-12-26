'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;
exports.isLoaded = isLoaded;
exports.load = load;
exports.login = login;
exports.logout = logout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD = 'redux-example/auth/LOAD';
var LOAD_SUCCESS = 'redux-example/auth/LOAD_SUCCESS';
var LOAD_FAIL = 'redux-example/auth/LOAD_FAIL';
var LOGIN = 'redux-example/auth/LOGIN';
var LOGIN_SUCCESS = 'redux-example/auth/LOGIN_SUCCESS';
var LOGIN_FAIL = 'redux-example/auth/LOGIN_FAIL';
var LOGOUT = 'redux-example/auth/LOGOUT';
var LOGOUT_SUCCESS = 'redux-example/auth/LOGOUT_SUCCESS';
var LOGOUT_FAIL = 'redux-example/auth/LOGOUT_FAIL';

var initialState = {
  loaded: false
};

function reducer() {
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
        user: action.result
      });
    case LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    case LOGIN:
      return (0, _extends3.default)({}, state, {
        loggingIn: true
      });
    case LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: action.result
      });
    case LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: null,
        loginError: action.error
      });
    case LOGOUT:
      return (0, _extends3.default)({}, state, {
        loggingOut: true
      });
    case LOGOUT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        user: null
      });
    case LOGOUT_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        logoutError: action.error
      });
    default:
      return state;
  }
}

function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/loadAuth');
    }
  };
}

function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: function promise(client) {
      return client.post('/login', {
        data: {
          name: name
        }
      });
    }
  };
}

function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: function promise(client) {
      return client.get('/logout');
    }
  };
}

//# sourceMappingURL=auth-compiled.js.map