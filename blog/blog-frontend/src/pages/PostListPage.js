//import Header from '../components/common/Header';
import HeaderContainer from '../containers/common/HeaderContainer';
//import PostList from '../components/post/PostList';
import PostListContainer from "../containers/posts/PostListContainer";

const PostListPage = () => {
  console.log('포스트 리스트 화면');
  return (
    <div>
      <HeaderContainer />
      <PostListContainer />
    </div>
  );
};
export default PostListPage;
