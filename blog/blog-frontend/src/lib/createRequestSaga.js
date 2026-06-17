import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

// API 요청에 필요한 액션 타입 세트(기본/성공/실패)를 생성
export const createActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    // 로딩 시작
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }
    // 로딩 끝
    yield put(finishLoading(type));
  };
}
