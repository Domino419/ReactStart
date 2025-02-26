import { Link } from  'react-router-dom' ;
import AboutQueryString from './AboutQueryString';

const Home = () => {
  return (
    <div>
      <h1> 홈 ! </h1>
      <p> 제일 먼저 보여지는 페이지 </p>
      <ul>
        <li>
          <Link to="/aboutQueryString"> 소개 </Link> {/* Link 컴포넌트를 이용하여 다른 페이지로 이동하는 링크 보여주기 */}
        </li>
        <li>
          <Link to="/profiles/velopert"> velopert의 프로필 </Link>
        </li>
        <li>
          <Link to="/profiles/gildong"> gildong의 프로필 </Link>
        </li>
        <li>
          <Link to="/profiles/void"> 존재하지 않는 프로필 </Link>
        </li>

        <li>
          <Link to="/articles"> 게시글 목록 </Link>
        </li>


      </ul>

    </div>
  )

}

export default Home;
