import { useState } from 'react';


/**
 * component     : Say
 * date          : 2025-02-06
 * description   : 버튼 클릭 시 메시지를 변경하는 React 함수형 컴포넌트 (112p)
 */
const Say = () => {
    const [message, setMessage] = useState('') ;   // useState를 사용하여 상태 변수 message를 선언 (초기값은 빈 문자열) 
    const onClickEnter =() => setMessage('안녕하세요! ') ;   
    const onClickLeave =() => setMessage('안녕히 가세요! ') ;   

    return (
        <div>
            <button onClick={onClickEnter}> 입장 </button>
            <button onClick={onClickLeave}> 퇴장 </button>
            <h1> {message} </h1>
        </div>
    );
};

export default Say;