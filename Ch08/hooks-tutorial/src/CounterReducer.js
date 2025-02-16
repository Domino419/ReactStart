/*
 8.3 useReducer 
  useReducer는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수로 항상 불변성을 지켜주어야함.
  useReducer는 보통 상태(state), 상태를 업데이트하는 함수(dispatch), 그리고 리듀서 함수(reducer)로  세가지로 구성됨.
  
  reducer 함수에서는 상태 업데이트 로직을 정의하고,  actiuon.type에 따라서 value값을 변경함
  reducer 함수는 dispatch 함수에 의해 호출되며 새로운 상태를 반환함.
  >> useReducer의 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다!!
*/ 

import { useReducer,useEffect  } from "react";


function reducer(state, action) {
  // actiuon.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      console.log("::::::::::::::::::::::  INCREMENT ! "); 
      return { value: state.value + 1 };
    case "DECREMENT":
      console.log("::::::::::::::::::::::  DECREMENT ! "); 
      return { value: state.value - 1 };
    default: 
      console.log("::::::::::::::::::::::  default ! "); 
      return state;
  }
}

const CounterReducer = () => {
    const [state,dispatch] = useReducer(reducer, {value:0});

    useEffect(() => {
        console.log("::::::::::::::::::::::::: CounterReducer.js  현재 value 값:", state.value);
      }, [state.value]); // state.value가 변경될 때마다 실행


  return (
  <div>
    <p> 현재 카운터 값은 <b> {state.value} </b>입니다 
    </p>
    <button onClick={() => dispatch({type:'INCREMENT'})}> +1 </button>
    <button onClick={() => dispatch({type:'DECREMENT'})}> -1 </button>
  </div>
  );
};

export default CounterReducer;
