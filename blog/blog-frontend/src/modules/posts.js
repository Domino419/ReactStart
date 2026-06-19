import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createActionTypes } from '../lib/createRequestSaga';
import * as postAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

const [LIST_POST, LIST_POST_SUCCESS, LIST_POST_FAILURE] =
  createActionTypes('post/LIST_POST');

export const listPosts = createAction(LIST_POST, ({ tag, username, page }) => ({
  tag,
  username,
  page,
}));

const listPostsSaga = createRequestSaga(LIST_POST, postAPI.listPosts);

export function* postsSaga() {
  yield takeLatest(LIST_POST, listPostsSaga);
}

const initialState = {
  post: null,
  error: null,
};


const Posts = handleActions(
    {
      [LIST_POST_SUCCESS]: (state, { payload: posts }) => ({
        ...state,
        posts,
      }),
      [LIST_POST_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }),
    },
    initialState,
);

export default Posts;
