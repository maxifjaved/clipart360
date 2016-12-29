import { call, put, take, fork } from 'redux-saga/effects';
import {browserHistory} from 'react-router';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAIL,
  AUTH_LOAD_INFO,
  AUTH_LOAD_INFO_FAIL,
  AUTH_LOAD_AUTH,
  AUTH_LOAD_AUTH_FAIL,
  AUTH_LOAD_AUTH_NULL
} from '../constants';
import * as actions from '../actions';

const INFINITE_LOOP = true;
let client = null;


function forwardTo(location) {
  browserHistory.push(location);
}

function* watchAuth() {
  while (INFINITE_LOOP) {
    try {
      const { name } = yield take(AUTH_LOGIN);
      const { ...props } = yield call(client.post, '/login', { data: { name: name } });
      yield put(actions.loginSuccess(props));
      forwardTo('/loginSuccess');
      // user logged out, next while iteration will wait for the
      // next LOGIN_REQUEST action
    } catch (error) {
      yield put( {type: AUTH_LOGIN_FAIL, error: error} );
    }
  }
}

function* watchLogout() {
  while (INFINITE_LOOP) {
    try {
      yield take(AUTH_LOGOUT);
      yield call(client.get, '/logout');
      yield put({ type: AUTH_LOGOUT_SUCCESS });
      forwardTo('/');
    } catch (error) {
      yield put( {type: AUTH_LOGOUT_FAIL, error} );
    }
  }
}

function* watchLoadInfo() {
  while (INFINITE_LOOP) {
    try {
      yield take(AUTH_LOAD_INFO);
      const { ...props } = yield call(client.get, '/loadInfo');
      yield put(actions.loadInfoSuccess(props));
    } catch (error) {
      yield put( {type: AUTH_LOAD_INFO_FAIL, error: error} );
    }
  }
}

function* watchLoadAuth() {
  while (INFINITE_LOOP) {
    try {
      yield take(AUTH_LOAD_AUTH);
      const { ...props } = yield call(client.get, '/loadAuth');
      console.log('saga', props);
      if (Object.keys(props).length > 0) {
        yield put(actions.loadAuthSuccess(props));
      } else {
        yield put( {type: AUTH_LOAD_AUTH_NULL} );
      }
      return Object.keys(props).length;
    } catch (error) {
      yield put( {type: AUTH_LOAD_AUTH_FAIL, error: error} );
    }
  }
}

export default function* root(cl) {
  client = cl;
  yield [
    fork(watchAuth),
    fork(watchLogout),
    fork(watchLoadInfo),
    fork(watchLoadAuth)
  ];
}
