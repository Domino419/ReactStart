import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /* 렌더링마다 실행 → useEffect(() => { ... }); (의존성 배열 없음) 
  useEffect(() => {
    console.log("랜더링이 완료되었습니다...!");
    console.log({
      name,
      nickname,
    });
  });
 */

  /* 마운트 시 한 번만 실행 → useEffect(() => { ... }, []); 
   useEffect(() => {
    console.log("마운트 될 때만 실행됩니다. ");
  }, []); 
 */

  /*특정 값이 바뀔 때만 실행 → useEffect(() => { ... }, [name, nickname]); 
  useEffect(() => {
    console.log(' name 특정 값이 바뀔 때만 실행 !! ' + name) ;
  },[name]) ;
 */

  /* 4. 뒷정리(clean-up) 예시 */
  useEffect(() => {
    console.log("effect ! 이벤트 리스너 등록");
    console.log(name);

    // 뒷정리 함수
    return () => {
      console.log("이벤트 리스너 해제 (clean-up)");
      console.log(name);
    };
  }, [name]); // name이 바뀌기 직전 또는 컴포넌트가 언마운트될 때 clean-up 실행

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
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

export default Info;
