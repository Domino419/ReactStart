// 13.4.2 쿼리스트링
// sample url - http://localhost:3000/about?detail=ture&mode=1
// sample url - http://localhost:3000/AboutQueryString?detail=ture&mode=1
import {useLocation} from 'react-router-dom';

const AboutQueryString = () => {

  const location = useLocation();
  console.log(location) ;

  return (
    <div>
      <h1>소개 </h1>
    <p> 리액트 라우터를 사용해보는 프로젝트입니다.</p>
    <p> 쿼리스트링 : {location.search}</p>
    </div>
  ) ;
};
export default AboutQueryString;

/*

 useLocation이라는 Hook을 사용하여 location 객체를 반환
 이 객체는 현재 사용자가 보고 있는 페이지의 정보를 가지고 있음.

 pathname: 현재 URL의 경로
 search: URL의 쿼리 문자열
 hash: URL의 해시(fragment) 부분
 state: Link 또는 navigate 함수로 전달된 상태 정보를 포함
 key: 위치가 고유한 세션 식별자와 함께 제공되는 경우의 고유한 키

*/