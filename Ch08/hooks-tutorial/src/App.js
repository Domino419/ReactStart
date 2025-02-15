import React from 'react'
import './App.css'
import Counter from "./Counter";
import Info from "./Info";


const App = () => {
  console.log("::::::::::::::::::::::::: Ch08.Hooks - 실행 환경 : ", process.env.NODE_ENV) 
  return (
    <div>
    <Counter />
    <div className="separator" />
    <Info />
    </div>
  )
};

export default App;
