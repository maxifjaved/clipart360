import {
  AUTH_LOAD_INFO,
  AUTH_LOAD_INFO_SUCCESS,
  AUTH_LOAD_INFO_FAIL
} from '../constants';

const initialState = {
  loaded: false
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_LOAD_INFO:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOAD_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case AUTH_LOAD_INFO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
