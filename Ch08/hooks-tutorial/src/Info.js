import { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

//  8.2.3 뒷정리 하기 
//  useEffect는 기본적으로 랜더링 되고 난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 변경됨.
//  컴포넌트가 언마운드 되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 
//  useEffect에서 뒷정리(cleanup) 함수를 retur 해야함.
  useEffect(() => {
    console.log("::::::::::::::::::::::  8.2.3. useEffect ! ");
    console.log(name) ; 
    return () => {
        console.log("::::::::::::::::::::::  컴포넌트가 언마운트 되었습니다!!   return cleanup ");
    }
  }, []
  ) ; 

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




  // 8.2 useEffect 추가 
  /*
  useEffect(() => {
    console.log("::::::::::::::::::::::8.2 랜더링이 완료되었습니다!!");
    console.log({
      name,
      nickname,
    });
  });
  */

 
    // 8.2.1 마운트 될 때만 실행하고 싶을 떄 
    //useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 랜더링 될 때만 실행하고, 
    // 업데이트 될 때에는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 됨.
    /*
    useEffect(() => {
        console.log("::::::::::::::::::::::  8.2.1  마운드 될 때에만 실행됩니다! ");
        console.log({
          name,
          nickname,
        });
      }, []);
*/

// 8.2.2 특정 값이 업데이트 될 때만 실행하고 싶을 떄 
// useEffect의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됨. 
// 배열 안에는 useState를 통해 관리하고 있는 상태를 넣어도 되고, props로 전달받은 값을 넣어도 됨.
/*
  useEffect(() => {
    console.log("::::::::::::::::::::::  8.2.2 [name]이 업데이트 될 때만 실행하고 싶을 떄에만 실행됩니다! ");
    console.log(name) ; 
  }, [name]
  ) ; 
*/