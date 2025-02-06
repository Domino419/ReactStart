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


2025.02.05 01:36
ch03 프로젝트 생성 
VSC에서는 권한 문제로 생성이 안되길래 웹스톰에서 샐성하고 VSC로 왔음.

1.리액트 프로젝트 생성 :  yarn create react-app 프로젝트이름 
(단 프로젝트 이름에는 영어 대문자가 들어가면 안됨) 

2.해당 프로젝트 경로로 이동하기 :  cd 프로젝트 이름

3. 프로젝트 기동하기 : yarn start 


ch03 에서 일정관리 애플리케이션 작성 진행 하기 



3.1 클래스형 컴포넌트 
 과거에 사용하던 방식이 클래스형 컴포넌트, 지금은 함수 컴포넌트 위주로 사용 
 함수형 컴포넌트에서는 this를 사용할 필요가 없고, Hooks(useState, useEffect)를 사용하여 더 유연한 상태 관리 가능
 성능 최적화가 용이 (React.memo, useCallback, useMemo 활용 가능) 하다.

3.2 첫 컴포넌트 생성 

Reactjs Code Snippet 플러그인 설치하면 단축키 사용 가능 
rsc	함수형 컴포넌트 (React Stateless Component)
rfc	함수형 컴포넌트 (React Functional Component)
rcc	클래스형 컴포넌트 (React Class Component)
rce	클래스형 컴포넌트 (export 포함)
rpc	PureComponent 기반 클래스형 컴포넌트


3.3 props 에서 작동 안됨 .. 다시하자.. 
3.3 props에서 작동 안됨. defaultProps 는 최신 리액트 버전에서 작동하지 않는 경우가 있음. 
디스트럭처링 방식으로 변경 후 진행 가능 

 - 리액트 프로젝트 복붙할 때는 node_module을 빼고 복붙하고, yarn install을 해당 디렉토리 에서 진행해주어야함.
 node_moduled 통째로 넣으면 호환성 어쩌고 ~ 블라블라 하면서 작동 안됨.

 
 25.02.06 
 3.4 state 
 컴포넌트 내부에서 바뀌 수 있는 값 = state 
 props 는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며 
 컴포넌트 자신은 해당  props를 읽기 전용으로만 사용할 수 있음.
 props를 바꾸려면 부모 컴포넌트에서 바꿔야 함.

리액트에서는 두가지 state가 있음.
클래스형 컴포넌트가 가지고 있는 state랑 함수 컴포넌트에서 useState 함수를 통해 사용하는 state 


