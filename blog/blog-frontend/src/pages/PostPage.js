import HeaderContainer from '../containers/common/HeaderContainer';
//import PostViewer from '../components/post/PostViewer';
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  console.log('포스트 읽기');
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
