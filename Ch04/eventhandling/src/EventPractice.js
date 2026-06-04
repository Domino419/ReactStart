import { useState } from "react";

const EventPractice = () =>  {
console.log("EventPractice 호출 ---")

 const  [ form, setForm ]   = useState({
  username : '', 
  message : '' , 
 }) ;

 const { username , message  } = form ; 

 const onChange = e => {
  console.log("현재 form 값:", form);
 //console.log("onChange 호출 ---")
  const nextForm = {
    ...form,                          // 기존의 form 내용을 이 자리에 복사한 뒤 
    [e.target.name ] : e.target.value // 원하는 값을 덮어 씌우기 
  } ; 
  setForm (nextForm) ; 
 } ; 


 const onClick = () => {
console.log("onClick 호출 ---")
  alert ( username + ' : ' + message ) ; 
  setForm ({
    username: '', 
    message: '' 
  });
 };

 const onKeyPress = e =>{
  console.log("onKeyPress 호출 ---")
  if (e.key === 'Enter') {
    onClick( ) ; 
  }
 } ; 

    return (
      <div>
        <h1> 이벤트 연습 </h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명 "
          value={username}
          onChange={onChange} 
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={message}
          onChange={onChange} 
          onKeyPress={onKeyPress}
        />

        <button onClick={onClick}> 확인 </button>
      </div>
    );
} ;

export default EventPractice;


/* 
 대괄호, 중괄호 헷갈릴 때는 데이터가 배열인지 객체인지를 먼저 확인. 
 
 베열 : const [a, b] = [1, 2];	배열은 순서(index) 기반으로 값을 꺼냄
 객체 :	const {x, y} = {x: 1, y: 2};	객체는 키(key) 이름 기반으로 값을 꺼냄
 */ 