// sample url - http://localhost:3000/AboutQueryString?detail=ture&mode=1

import { useSearchParams } from 'react-router-dom';

const AboutQueryString = () => {
  const [ searchParams, setSerchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSerchParams({
      mode, detail: detail === 'true' ? false : true,
    });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSerchParams({
      mode: nextMode, detail,
    });
  };

  return (
    <div>
      <h1>소개 </h1>
      <p> 리액트 라우터를 사용해보는 프로젝트입니다.</p>
      <p> detail : {detail}</p>
      <p> mode : {mode}</p>
      <button onClick={onToggleDetail}> Toggle detail </button>
      <button onClick={onIncreaseMode}> mode + 1 </button>
    </div>
  );
};
export default AboutQueryString;

/*

 13.4.2 쿼리스트링

 useLocation이라는 Hook을 사용하여 location 객체를 반환
 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 가지고 있음.

 pathname: 현재 URL의 경로
 search: URL의 쿼리 문자열
 hash: URL의 해시(fragment) 부분
 state: Link 또는 navigate 함수로 전달된 상태 정보를 포함
 key: 위치가 고유한 세션 식별자와 함께 제공되는 경우의 고유한 키

 useSearchParams은 배열 타입의 값을 반환하여 첫번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환.
 get 메서드를 통하여 특정 쿼리 파라미터를 조회할 수 있고 set을 통해 특정 파라미터를 업데이트 할 수 있음.
 조회시 쿼리파라미터가 존재하지 않는다면 null로 조회됨. 두번쨰 원소는 쿼리파마티러를 객체 형태로 업데이트 할 수 있는 함수를 반환함.
 단, 쿼리파라미터를 조회할 때 값은 무조건 문자열 타입만 가능. 블리언 타입은 'true' 처럼 따옴표로 감싸서 비교를 해야 하고,
 숫자를 다루는 경우에는 parseInt를 사용하여 숫자 타입으로 변환 후 사용하여야 함.
 

*/