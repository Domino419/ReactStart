import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import App242 from "./App242";
import App243 from "./App243";
import App244 from "./App244";
import App245 from "./App245";
import App246 from "./App246";
import App247 from "./App247";
import App248 from "./App248";

function Home() {
  return (
    <Fragment>
      <h1> 리액트 메인 페이지 </h1>
      {/* 버튼들을 세로로 배치 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <Link to="/app242">
          <button>2.4.2 자바스크립트 표현</button>
        </Link>
        <Link to="/app243">
          <button>2.4.3 if 문 대신 조건부 연산자</button>
        </Link>
        <Link to="/app244">
          <button>2.4.4 AND 연산자(&&)을 사용한 조건부 렌더링</button>
        </Link>
        <Link to="/app245">
          <button>2.4.5 undefined를 렌더링 하지 않기</button>
        </Link>
        <Link to="/app246">
          <button>2.4.6 인라인 스타일링</button>
        </Link>
        <Link to="/app247">
          <button>2.4.7 class 대신 className</button>
        </Link>
        <Link to="/app248">
          <button>2.4.8 꼭 닫아야 하는 태그</button>
        </Link>
      </div>
    </Fragment>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app242" element={<App242 />} />
      <Route path="/app243" element={<App243 />} />
      <Route path="/app244" element={<App244 />} />
      <Route path="/app245" element={<App245 />} />
      <Route path="/app246" element={<App246 />} />
      <Route path="/app247" element={<App247 />} />
      <Route path="/app248" element={<App248 />} />
    </Routes>
  );
}

export default App;
