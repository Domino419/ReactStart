// 4.3 함수 컴포넌트로 구현해보기 

import {useState} from 'react';

const EvenPractice43 = () => {
    const [username, setUsername ] = useState('') ; 
    const [message,setMessage] = useState('') ; 
    const onChangeUsername = e => setUsername(e.target.value) ; 
    const onChangeMessage = e => setMessage(e.target.value) ; 
    const onClick =() => {
        alert(username + ':::' + message) ;
        setUsername(' ');
        setMessage(' ');
    } ; 

    const onKeyPress = e=> {
        if(e.key === 'Enter') {
            onClick() ;
        }
    } ; 


    return (
        <div>
            <h1> 이벤트 연습 4.3 함수 컴포넌트로 구현해보기 </h1>
            <input
            type="text"
            name="username"
            placeholder='사용자명'
            value={username} 
            onChange={onChangeUsername}
            />
            <input
            type="text"
            name="message"
            placeholder='메시지내용'
            value={message} 
            onChange={onChangeMessage}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}> 확인 </button>
        </div>
    );
};

export default EvenPractice43;



/*
onClick	입력 필드를 클릭할 때 실행
onFocus	입력 필드가 포커스를 받을 때 실행
onBlur	입력 필드가 포커스를 잃을 때 실행
onKeyDown	키보드를 누르는 순간 실행
onKeyUp	키보드를 눌렀다가 뗄 때 실행
onInput	입력 필드에 값이 입력될 때 실행 (거의 onChange와 유사)
onPaste	사용자가 Ctrl + V 또는 Command + V로 붙여넣기 할 때 실행


e.target	이벤트가 발생한 요소 (<input> 태그 자체)
e.target.value	사용자가 입력한 값
e.type	이벤트 타입 ("change")
e.nativeEvent	실제 브라우저 이벤트 객체 (InputEvent 등)
e.currentTarget	이벤트가 바인딩된 요소 (<input> 태그)
e.bubbles	이벤트가 버블링(상위 요소로 전파)되는지 여부

*/
