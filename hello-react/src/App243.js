import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// 2.4.3 IF문 대신 조건부 연산자
function App243() {
  const name = "리액트";

  return (
    <Fragment>
      <h1>-----------------------------------------------------------</h1>
      2.4.3 IF문 대신 조건부 연산자 
      {
        name === "리액트" ? (
          <h1>리액트입니다!</h1>
        ) : (
          <h1>리액트가 아닙니다!</h1>
        )
      }
      <h1>-----------------------------------------------------------</h1>

      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App243;