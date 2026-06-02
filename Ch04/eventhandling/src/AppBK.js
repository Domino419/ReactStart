/* 함수 컴포넌트 방식 선언 
 선언하기가 훨씬 편함. 
 메모리 자원을 덜 사용함.
 빌드 후 배포할 때 결과물의 파일 크기가 더 작다. 

 단 state와 라이프사이클 API 사용이 불가능했으나 리액트 v16.8 업데이트 이후 Hooks 기능 도입되면서 해결됨. 
*/

import "./App.css";

function App() {
  const name = "리액트 함수 컴포넌트 방식";
  return <div className="react">{name}</div>;
}

export default App; 


/* 클래스 컴포넌트 방식 선언 */
/*
import { Component } from "react";

class App extends Component {
  render() {
    const name = "리액트 클래스 컴포넌트";
    return <div className="react">{name}</div>;
  }
}

export default App;
*/