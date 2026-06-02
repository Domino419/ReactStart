import { Fragment } from 'react';
import { Link } from 'react-router-dom';

// 2.4.8. CSS 클래스 사용
function App248() {
  const name = "리액트";

  return (
    <Fragment>
      <div>
      <hi>  2.4.8. CSS 클래스 사용</hi>
        <div className="react">{name}</div>
      </div>



      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App248;