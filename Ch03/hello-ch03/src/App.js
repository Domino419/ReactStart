//import MyComponent from "./MyComponent";
//import Counter from "./Counter";
import Counter from "./Say";


const App =() => {
    console.log("::::::::::::::::::::::::: 실행 환경 : " ,  process.env.NODE_ENV);
    console.log("::::::::::::::::::::::::::::::::::::::::: App.js ");
    return <Counter />
}



/* 
const App =() => {
//  return <MyComponent name ="홍길동" test =" 테스트" /> ;
    console.log("::::::::::::::::::::::::: 실행 환경 : " ,  process.env.NODE_ENV);
    console.log("::::::::::::::::::::::::::::::::::::::::: App.js ");
    return <MyComponent> 리액트 </MyComponent>
};
*/

export default App ;
