import  { React } from 'react'
import './App.css'
import InfoCustom from "./InfoCustom";



const App = () => {
  console.log("::::::::::::::::::::::::: Ch08.Hooks - 실행 환경 : ", process.env.NODE_ENV) 
 
  return (
    <div> 
     <InfoCustom />
     </div>

  )  
};

export default App;

