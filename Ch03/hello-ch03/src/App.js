import MyComponent from "./MyComponent";

const App =() => {
//  return <MyComponent name ="홍길동" test =" 테스트" /> ; 
console.log("::::::::::::::::::::::::::::::::::::::::: App.js ");
  return <MyComponent /> ; 
}; 

export default App ; 

/*

1.함수 컴포넌트 방식 
import './App.css';

function App() {
 const name = '리액트' ; 
 return <div className="react"> {name} </div>
}

export default App;

 2. 클래스형 컴포넌트 방식 
import { Component } from 'react' ; 

class App extends Component {
  render() {
    const name = 'react'  ;
    
    console.log("::::::::::::::::::::::::::::::::::::::::: App.js ");

    return <div className='react'> { name} </div>
  }
}

export default App;

 과거에 사용하던 방식이 클래스형 컴포넌트, 지금은 함수 컴포넌트 위주로 사용 
 함수형 컴포넌트에서는 this를 사용할 필요가 없고, Hooks(useState, useEffect)를 사용하여 더 유연한 상태 관리 가능
 성능 최적화가 용이 (React.memo, useCallback, useMemo 활용 가능) 하다.
*/