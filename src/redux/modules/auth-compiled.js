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

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.AUTH_LOAD:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _constants.AUTH_LOAD_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result
      });
    case _constants.AUTH_LOAD_FAIL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        error: action.error
      });
    case _constants.AUTH_LOGIN:
      return (0, _extends3.default)({}, state, {
        loggingIn: true
      });
    case _constants.AUTH_LOGIN_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: action.result
      });
    case _constants.AUTH_LOGIN_FAIL:
      return (0, _extends3.default)({}, state, {
        loggingIn: false,
        user: null,
        loginError: action.error
      });
    case _constants.AUTH_LOGOUT:
      return (0, _extends3.default)({}, state, {
        loggingOut: true
      });
    case _constants.AUTH_LOGOUT_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loggingOut: false,
        user: null
      });
    case _constants.AUTH_LOGOUT_FAIL:
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
    types: [_constants.AUTH_LOAD, _constants.AUTH_LOAD_SUCCESS, _constants.AUTH_LOAD_FAIL],
    promise: function promise(client) {
      return client.get('/loadAuth');
    }
  };
}

function login(name) {
  return {
    types: [_constants.AUTH_LOGIN, _constants.AUTH_LOGIN_SUCCESS, _constants.AUTH_LOGIN_FAIL],
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
    types: [_constants.AUTH_LOGOUT, _constants.AUTH_LOGOUT_SUCCESS, _constants.AUTH_LOGOUT_FAIL],
    promise: function promise(client) {
      return client.get('/logout');
    }
  };
}

//# sourceMappingURL=auth-compiled.js.map