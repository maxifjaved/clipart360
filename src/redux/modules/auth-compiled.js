'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = reducer;

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  loaded: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants.AUTH_LOAD_AUTH:
      return (0, _extends3.default)({}, state, {
        loading: true
      });
    case _constants.AUTH_LOAD_AUTH_SUCCESS:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: true,
        user: action.result
      });
    case _constants.AUTH_LOAD_AUTH_NULL:
      return (0, _extends3.default)({}, state, {
        loading: false,
        loaded: false,
        user: null
      });
    case _constants.AUTH_LOAD_AUTH_FAIL:
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
module.exports = exports['default'];

//# sourceMappingURL=auth-compiled.js.map