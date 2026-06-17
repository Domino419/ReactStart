import { createAction, handleActions } from 'redux-actions';

// 1. 액션 타입 정의
const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

//  2. 액션 생성 함수 (Action Creators) 정의
export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

// 3. 초기 상태(Initial State) 정의
const initialState = {}; //초기화

//  4. 리듀서(Reducer) 정의
const loading = handleActions(
  {
    // 로딩이 시작되었을 때 처리하는 리듀서
    [START_LOADING]: (state, action) => ({
      ...state, // 기존의 다른 로딩 상태들을 그대로 복사 (불변성 유지)
      [action.payload]: true, // 현재 요청된 액션 타입을 키로 하여 로딩 상태를 true로 설정
    }),

    // 로딩이 끝났을 때 처리하는 리듀서
    [FINISH_LOADING]: (state, action) => ({
      ...state, // 기존의 다른 로딩 상태들을 그대로 복사 (불변성 유지)
      [action.payload]: false, // 현재 요청된 액션 타입을 키로 하여 로딩 상태를 false로 전환
    }),
  },
  initialState, // 초기 상태 주입
);

export default loading;
