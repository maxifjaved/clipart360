import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOAD_INFO,
  AUTH_LOAD_INFO_SUCCESS,
  AUTH_LOAD_AUTH,
  AUTH_LOAD_AUTH_SUCCESS,
} from '../constants';

export function login(name) {
  return {
    type: AUTH_LOGIN,
    name: name
  };
}

export function loginSuccess(result) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    result: result
  };
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  };
}

export function loadInfo() {
  return {
    type: AUTH_LOAD_INFO
  };
}

export function loadInfoSuccess(result) {
  return {
    type: AUTH_LOAD_INFO_SUCCESS,
    result: result
  };
}

export function loadAuth() {
  return {
    type: AUTH_LOAD_AUTH
  };
}

export function loadAuthSuccess(result) {
  return {
    type: AUTH_LOAD_AUTH_SUCCESS,
    result: result
  };
}
