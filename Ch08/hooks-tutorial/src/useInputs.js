/*
 8.7 커스텀 Hooks 만들기 
  여러 컴포넌트에서 비슷한 기능을 공유할 경우 커스텀 Hook으로 작성하여 로직을 재사용할 수 있다!
*/

import { useReducer } from 'react';

// 리듀서 함수: 상태(state)와 액션(action)에 따라 새로운 상태 반환
function reducer ( state, action){
    return {
        ...state, 
        [action.name]: action.value 
    } ; 
}

// 커스텀 Hook: 여러 컴포넌트에서 재사용할 수 있는 입력 폼 로직 제공 
export default function useInputs(initialForm) {
    // useReducer 훅을 사용하여 상태와 디스패치 함수를 초기화 
    const [state, dispatch] = useReducer(reducer,initialForm) ;   

    //입력값이 변경될 때마다 이벤트 객체를 디스패치하여 상태를 업데이트
    const onChange = e => {
        dispatch(e.target) ;                                      
    } ;

    // 현재 상태와 onChange 함수를 반환 
    return [state,onChange] ; 
}

// 평소와 다른 부분은 export default 를 funtion으로 했음.
