import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./App.css";

// 2.4.6. 인라인 스타일링
function App246() {
  const name = "리액트";

  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <Fragment>
      <h1>-----------------------------------------------------------</h1>
      <div>2.4.6. 인라인 스타일링</div>
      <h1 style={style}>{name}</h1>
      <h1>-----------------------------------------------------------</h1>
      {/* 홈으로 돌아가기 버튼 */}
      <Link to="/">
        <button>홈으로 돌아가기</button>
      </Link>
    </Fragment>
  );
}

export default App246;
