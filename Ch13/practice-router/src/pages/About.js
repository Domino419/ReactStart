import {  useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
    console.log("::::::::::::::::onToggleDetail :detail  " , { mode });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
    console.log("::::::::::::::::onIncreaseMode :detail  " , { mode });
  };

  // const location = useLocation() ;

  return (
    <div>
      <h1> 소개 </h1>
      <p> 리액트 라우터 실습용 프로젝트! </p>
      <p> detail : {detail} </p>
      <p> mode : {mode} </p>
      <button onClick={onToggleDetail}>Toggle detail </button>
      <button onClick={onIncreaseMode}>mode + 1 </button>
    </div>
  );
};

export default About;

/* useLocation  HOOK 
pathname : 현재 주소의 경로 ( 쿼리스트링 제외) 
serach : 맨 앞의 ? 문자를 포함한 쿼리스트링 값 
hash : 주소의 # 문자열 뒤의 값 ( 주로 history API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용 )
state : 페이지로 이동할 때 임의로 넣을 수 있는 상태값 
key : location 객테의 고유값 , 초기에는 default 이며 페이지가 변경될 때마다 고유의 값이 생성됨. 
*/
