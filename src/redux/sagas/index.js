import { call, put, take, fork } from 'redux-saga/effects';
import { api } from '../services';

const INFINITE_LOOP = true;

import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL
} from '../constants';

function* watchAuth() {
  while (INFINITE_LOOP) {
    try {
      const { name } = yield take(AUTH_LOGIN);

      const { data } = yield call(api.loadUser, { name });
      yield put({ type: AUTH_LOGIN_SUCCESS, data });

      // user logged out, next while iteration will wait for the
      // next LOGIN_REQUEST action
    } catch (error) {
      yield put( {type: AUTH_LOGIN_FAIL, error} );
    }
  }
}

export default function* root() {
  yield [
    fork(watchAuth)
  ];
}
