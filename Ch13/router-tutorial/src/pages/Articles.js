import {  NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({id}) => {
  const activeStyle = {
    color : 'green', 
    fontSize : 21,
  } ;
  return(
    <li>
     <NavLink to={`/articles/${id}`} 
     style={({ isActive }) => (isActive ? activeStyle : undefined)}
     > 게시글 {id} 
     </NavLink>
  </li>
  )
}

export default Articles;

// Outlet을 넣으면 중첩된 라우트의 자식 요소를 렌더링하는 역할로
// 게시글 1 밑에 게시글 목록이 나오도록 함.
// Outlet을 넣지 않았을 때에는 게시글 본문만 덜렁 나오게 되었었음.
