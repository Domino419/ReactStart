import { useState } from "react";

const Say2p = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요  ! ");
  const onClickLeave = () => setMessage("안녕히 가세요 ! ");
  
  const [ color, setColor] = useState('black') ; 

  return (
    <div>
      {/* 입장/퇴장 버튼 */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      {/* 현재 message 출력 */}
      <h1 style={{ color }}>{message}</h1>

      {/* 글자 색 변경 버튼 */}
      <button style={{ color: "red" }} onClick={() => setColor("red")}>red</button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>green</button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>blue</button>
    </div>
  );
};

export default Say2p;
