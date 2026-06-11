import React, { useState, Suspense } from "react"; 
import logo from "./logo.svg";
import "./App.css";
import loadable from '@loadable/component' ; 

const SplitMe = loadable(() => import("./SplitMe"), {
  fallback : <div> Loading... 로딩 중.....! </div>
});

function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
    console.log( '클릭  ') ;
  };

  const onMouseOver = () => {
    SplitMe.preload() ; 
    console.log( '마우스오버' ) ;
  } ; 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo" alt="logo"></img>
        <p onClick={onClick} onMouseOver={onMouseOver}> Hello React ! </p>
        <Suspense fallback={<div> loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;
