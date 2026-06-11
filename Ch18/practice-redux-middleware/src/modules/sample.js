import { handleActions, createAction } from "redux-actions";
import * as api from "../lib/api";
import { takeLatest } from "redux-saga/effects";
//import { startLoading, finishLoading } from "./loading";
import createRequestSaga from "../lib/createRequestSaga";

// 1. 액션 타입 지정
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";

export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost) ; 
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers) ; 

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga) ; 
  yield takeLatest(GET_USERS , getUsersSaga) ; 
}

const initialState = {
  post : null ,
  users : null 
}


const Sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
  },
  initialState,
);

export default Sample; // 이 정리 기계를 다른 파일에서 쓸 수 있게 보냄
