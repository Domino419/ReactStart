http://localhost:3000/ 

PS C:\VSC_React\Ch02\hello-react> yarn start

2025.02.04 071page 

// 2.4.3 if 문 대신 조건부 연산자
function App() {
const name ='리액트' ;
return (
  <div>
      {name === '리액트' ? (
          <h1>리액트 입니다. </h1> ) :
          (
              <h1> 리액트가 아닙니다. </h1>
          )
      }
  </div>
  );
}

export default App;


2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
null 을 렌더링하면 아무것도 보이지 않음.
function App() {
const name ='뤼왝트' ;
return (
<div>
{name === '리액트' ? (
<h1>리액트 입니다. </h1> ) :
null
}
</div>
);
}

export default App;

2.4.5 undefined 를 렌더링 하기
교재에서는 undefined 하면 브라우저에서 에러가 뜬다고 하는데 실제로 해본 경우  null을 주는 거랑 똑같은 결과가 나옴.
import './App.css' ;

function App() {
const name = undefined ;
//const name = null ;
return name ;
}

export default App;

2.4.6 인라인 스타일링
1) 스타일 객체를 미리 선언하고 div의 style 값으로 지정해주는 방법
   function App() {
   const name = '리액트' ;
   const style = {
   //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성함.
   backgroundColor: 'black',
   color: 'aqua',
   fontSize: '48px',   // font-size →fontSize
   fontWeight: 'bold',   // font-weight → fontWeight
   padding: '16',   // 단위를 생략하면 px로 지정됨.
   }
   return <div style={style}>{name}</div>;
   }

export default App;


2) 스타일 객체를 미리 선언하지 않고 바로 style 값을 지정하는 방법
   function App() {
   const name = '리액트??' ;

return <div style={{
backgroundColor: 'black',
color: 'aqua',
fontSize: '48px',   // font-size →fontSize
fontWeight: 'bold',   // font-weight → fontWeight
padding: '16',   // 단위를 생략하면 px로 지정됨.
}}
>
    {name}</div>;
}

export default App;

2.4.7 class 대신 className
import './App.css' ;

function App() {
const name = '리액트! 072page??' ;
return <div className="react"> {name}</div>;
}

export default App;


자바 스크립트의 경우 잘바꿈을 세미콜론으로 간주할 수 있으므로 return문 뒤에 <div를 바로 붙이거나, ()로 묶어주거나 해야 함.
그러지 않으면 undefined 에러가 발생한다.

// 2.4.8 꼭 닫아야 하는 태그
import './App.css' ;

function App() {
const name = '리액트! 073page?' ;
return (
<>
<div className="App">{name}</div>
<input />
</>
);
}

export default App;


2025.02.05 01:12 
code fommat은 F1 누르고 format 입력 후 엔터 !
.prettierr에서 사용하고 싶은 코드 스타일 지정


