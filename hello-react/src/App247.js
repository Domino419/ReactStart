import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App2P.css'; 

// 2.4.7 class 대신 className 
function App247() {
  const name = " 리액트";

  return (
    <Fragment>
      <div className="react">{name}</div>

      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App247;