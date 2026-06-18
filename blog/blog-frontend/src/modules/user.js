import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createActionTypes } from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; // 새로고침 이후 임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createActionTypes('user/CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.log('LocalStorage is not working !!! ');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    console.log(`logoutSaga 에서 localStorage 값 삭제 전 `, localStorage);
    localStorage.removeItem('user');
    console.log(`logoutSaga 에서 localStorage 값 삭제 후 `, localStorage);
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),

    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),

    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),

    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState,
);
