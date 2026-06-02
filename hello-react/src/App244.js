import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
function App244() {
  const name = "리액트";
  return (
    <Fragment>
      <h1>-----------------------------------------------------------</h1>
      
      2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
      {name === "리액트" && <h1>리액트입니다!</h1>}

      <h1>-----------------------------------------------------------</h1>

      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App244;