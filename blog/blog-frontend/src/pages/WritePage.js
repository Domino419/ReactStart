import Editor from '../components/write/Editor';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  console.log('글쓰기');
  return (
    <Responsive>
      <Editor />
    </Responsive>
  );
};

export default WritePage;
