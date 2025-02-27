import {  NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  const activeStyle = {
    color : 'green', 
    fontSize : 21,
  } ;

  return (
    <div>
      <Outlet />
      <ul>
      <li>
        <NavLink to='/articles/1' style={({ isActive }) => (isActive ? activeStyle : undefined)}> 게시글 1 </NavLink>
      </li>

      <li>
        <NavLink to='/articles/2' style={({ isActive }) => (isActive ? activeStyle : undefined)}> 게시글 2 </NavLink>
      </li>

      <li>
        <NavLink to='/articles/3' style={({ isActive }) => (isActive ? activeStyle : undefined)}> 게시글 3 </NavLink>
      </li>
      </ul>
    </div>
  );
};

export default Articles;

// Outlet을 넣으면 중첩된 라우트의 자식 요소를 렌더링하는 역할로
// 게시글 1 밑에 게시글 목록이 나오도록 함.
// Outlet을 넣지 않았을 때에는 게시글 본문만 덜렁 나오게 되었었음.
