import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function App242() {
  const name = '리액트';

  var varValue = "나는 var!";
  let letValue = "나는 let!";
  const constValue = "나는 const!";

  varValue = "var은 재할당 가능!";
  letValue = "let도 재할당 가능!";
  const arr = [1, 2, 3];
  arr.push(4);

  return (
    <Fragment>
      <h1>{name} 안녕 ~</h1>
      <p>var 값: {varValue}</p>
      <p>let 값: {letValue}</p>
      <p>const 값: {constValue}</p>
      <p>const 배열: {arr.join(", ")}</p>

      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App242;