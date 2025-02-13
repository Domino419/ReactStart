import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM에서 최신 방식의 렌더링을 지원하는 createRoot를 import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // 웹 성능을 측정하는 도구 , 리액트와는 관련 없는 기능이니 당장은 신경 X

const root = ReactDOM.createRoot(document.getElementById('root')); // 'root'라는 id를 가진 DOM 요소를 찾아 React의 렌더링 루트를 생성한다.

root.render(
  // 개발 환경에서 사용하는 디버깅용 컴포넌트 StrictMode
 // <React.StrictMode>
    <App />
 // </React.StrictMode>
);

reportWebVitals();
