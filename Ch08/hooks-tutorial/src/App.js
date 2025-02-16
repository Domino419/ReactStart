import  { React } from 'react'
import './App.css'
import CounterReducer from "./CounterReducer";
import Average from "./Average";



const App = () => {
  console.log("::::::::::::::::::::::::: Ch08.Hooks - 실행 환경 : ", process.env.NODE_ENV) 
 
  return (
    <div> 
     <CounterReducer />
     <div className="separator" />
     <Average />
     </div>

  )  
};

export default App;

