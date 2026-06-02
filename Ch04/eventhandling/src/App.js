import EventPractice from "./EventPractice";

const App = () => {
return <EventPractice /> 
}

export default App;



/*4.1.1 이벤트 사용 주의검 
1. 이벤트 이름은 카멜 표기법 사용 
2.이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달. 
3. DOM 요소에만 이벤트를 설정 가능 
 div. button, iptut, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 
 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.
 -- 이건 불가 
< Mycomponent onClick = {dosomtihng} />   
-- 이건 가능 
<ㅇ div onClick = {this.props.onClick}>
 { ........ } 
  </div> 


  4.1.2 이벤트 종류 
 onClick -- 요소를 클릭했을 때 실행
 onDoubleClick -- 요소를 더블 클릭했을 때 실행
 onChange -- <input>, <textarea>, <select> 값이 변경될 때 실행
 onSubmit -- <form>이 제출될 때 실행
 onFocus -- 요소가 포커스를 얻을 때 실행
 onBlur -- 요소가 포커스를 잃을 때 실행
 onKeyDown -- 키보드를 누르는 순간 실행
 onKeyUp -- 키보드를 뗐을 때 실행
 onMouseEnter -- 마우스가 요소 안으로 들어올 때 실행
 onMouseLeave -- 마우스가 요소 밖으로 나갈 때 실행
 onTouchStart -- 모바일/터치 화면에서 손가락이 닿을 때 실행
 onTouchEnd -- 손가락이 화면에서 떨어질 때 실행
 
 
 4.2 예제 이벤트 핸들링 
  1. 컴포넌트 생성 및 불러오기 
  2. onChange 이벤트 핸들링하기 
  3. 임의 메서드 만들기 
  4. input 여러개 다루기 
  5. onKeyPress 이벤트 핸들링하기 
 */