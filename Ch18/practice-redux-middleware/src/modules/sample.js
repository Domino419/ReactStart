import { handleActions } from "redux-actions"; 
import * as api from "../lib/api";    


// 1. 액션 타입 지정 
const GET_POST = "sample/GET_POST";         
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";  
const GET_POST_FAILURE = "sample/GET_POST_FAILURE"; 


const GET_USERS = "sample/GET_USERS";       
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS"; 
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE"; 


//2.thunk 함수 만들기. 
export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST }); // ① 리덕스에 "방금 글 요청 시작했어!"라고 먼저 알림 (화면에 로딩 뺑뺑이 돌리기용)
  try {
    const response = await api.getPost(id); // ② 서버 응답을 얌전히 기다림 (응답이 올 때까지 아래 코드는 실행 안 됨)
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data, // ③ 성공했으니 서버가 준 진짜 데이터(response.data)를 리덕스 주머니에 넣어줌
    }); 
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE, 
      payload: e,             // 실패 원인(에러 내용)을 담아둠
      error: true,            // 에러가 발생했다는 표시 기증
    }); 
    throw e; 
  }
};


export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // ① 리덕스에 "유저 목록 요청 시작했어!"라고 알림
  try {
    const response = await api.getUsers(); 
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data, // ② 성공했으니 유저 데이터를 리덕스 주머니에 골인
    }); 
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE, // 
      payload: e,
      error: true,
    }); 
    throw e; 
  }
};



//  4. 기본 주머니(초기 상태) 설정
const initialState = {
  loading: {
    GET_POST: false,  // 지금 글 가져오는 중인가? -> 아님(false)
    GET_USERS: false, // 지금 유저 가져오는 중인가? -> 아님(false)
  },
  post: null,  // 받아올 글 데이터가 들어갈 빈 자리
  users: null, // 받아올 유저 목록이 들어갈 빈 자리
};


/* 
  5. 상황별 주머니 정리 기계 (리듀서)
  - 행동 대장(thunk)이 보낸 신호등 이름표를 보고 실제로 주머니(상태)를 교체하는 곳입니다.
*/
const Sample = handleActions(
  {
    // [글 요청 시작] 신호를 받으면?
    [GET_POST]: (state) => ({
      ...state, // 기존 데이터들은 그대로 유지하고
      loading: {
        ...state.loading,
        GET_POST: true, // 🔄 글 로딩 상태만 "상태 중(true)"으로 바꾼다!
      },
    }),

    // [글 요청 성공] 신호를 받으면?
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //  완료되었으니 로딩을 끝내야(false) 합니다! 
      },
      post: action.payload, //  행동 대장이 배달해 준 서버 데이터를 post 자리에 채워넣는다!
    }),

    // [글 요청 실패] 신호를 받으면?
    [GET_POST_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, // 실패해서 끝났으니 로딩을 끝내야(false) 합니다!
      },
    }),

    // [유저 요청 시작] 신호를 받으면?
    [GET_USERS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true, // 유저 로딩 상태만 "상태 중(true)"으로 바꾼다!
      },
    }),

    // [유저 요청 성공] 신호를 받으면?
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, //  완료되었으니 로딩 종료(false)!
      },
      users: action.payload, 
    }),

    // [유저 요청 실패] 신호를 받으면?
    [GET_USERS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, //완료되었으니 로딩 종료(false)!
      },
    }),
  },
  initialState, // 위에서 만든 기본 주머니 모양을 시작점으로 사용
);

export default Sample; // 이 정리 기계를 다른 파일에서 쓸 수 있게 보냄
