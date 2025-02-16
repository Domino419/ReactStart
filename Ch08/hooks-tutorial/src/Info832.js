/*
8.3.2 인풋 상태 관리하기 
   useReducer에서의 액션은 그 어떤 값도 사용이 가능하기 때문에 이벤트 객체가 지니고 있는 e.target값 자체를 액션 값으로 이용 가능 
   이런 경우에 인풋 갯수가 많아지더라도 코드를 짧게 유지할 수 있다!
*/

import { useReducer } from "react";

// 리듀서 함수: 상태(state)와 액션(action)에 따라 새로운 상태를 반환
function reducer(state, action) {
  console.log("리듀서 실행:", action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

// useReducer 훅을 사용하여 상태와 디스패치 함수를 초기화
const Info832 = () => {
  console.log('컴포넌트 렌더링'); // 컴포넌트 함수 내부에서 로그
  const [state, dispatch] = useReducer(reducer, {   
    name: "",
    nickname: "",
  });


  /*
  const state = { name: "", nickname: "" };
  const name = state.name;
  const nickname = state.nickname;
  */
 const { name, nickname } = state;

  // onChange 핸들러 함수: 입력 값이 변경될 때마다 디스패치 함수를 호출하여 상태를 업데이트
  const onChange = (e) => {
    console.log('입력 값 변경:', e.target.name, e.target.value); 
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b> 이름 : </b> {name}
        </div>
        <div>
          <b> 닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info832;
