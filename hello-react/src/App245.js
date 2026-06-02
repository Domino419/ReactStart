import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// 2.4.5. undefined를 렌더링하지 않기
function App245() {
  const name = undefined;

  return (
    <Fragment>
      <h1>-----------------------------------------------------------</h1>
      2.4.5. undefined를 렌더링하지 않기
      {name || "값이 undefined입니다!"}
      <h1>-----------------------------------------------------------</h1>

      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App245;