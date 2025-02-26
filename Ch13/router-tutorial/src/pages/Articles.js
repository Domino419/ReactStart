import {  Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <li>
        <Link to='/articles/1'> 게시글 1 </Link>
      </li>

      <li>
        <Link to='/articles/2'> 게시글 2 </Link>
      </li>

      <li>
        <Link to='/articles/3'> 게시글 3 </Link>
      </li>

    </div>
  );
};

export default Articles;

// Outlet을 넣으면 중첩된 라우트의 자식 요소를 렌더링하는 역할로
// 게시글 1 밑에 게시글 목록이 나오도록 함.
// Outlet을 넣지 않았을 때에는 게시글 본문만 덜렁 나오게 되었었음.
