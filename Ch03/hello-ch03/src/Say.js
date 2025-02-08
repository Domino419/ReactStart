import { useState } from 'react';


/**
 * component     : Say
 * date          : 2025-02-06
 * description   : 버튼 클릭 시 메시지를 변경하는 React 함수형 컴포넌트 (114p)
 */
const Say = () => {
    const [message, setMessage] = useState('') ;   // useState를 사용하여 상태 변수 message를 선언 (초기값은 빈 문자열) 
    const onClickEnter =() => setMessage('안녕하세요! ') ;   
    const onClickLeave =() => setMessage('안녕히 가세요! ') ;   

    const [color, setColor] = useState('black') ; 

    return (
        <div>
            <button onClick={onClickEnter}> 입장 </button>
            <button onClick={onClickLeave}> 퇴장 </button>
            <h1 style={{color}}> {message} </h1>

            <button style={{color : 'red'}} onClick={() => setColor('red')}> 빨간색 </button>
            <button style={{color : 'green'}} onClick={() => setColor('green')}> 초록색 </button>
            <button style={{color : 'blue'}} onClick={() => setColor('blue')}> 파란색  </button>
        </div>
    );
};

export default Say;