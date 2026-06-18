import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  console.log('글쓰기');
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default WritePage;
