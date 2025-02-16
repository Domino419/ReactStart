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


state를 사용할 때 주의 사항 
클래스형 컴포넌트든 함수 컴포넌트든 state를 사용할 떄는
setState 혹은 useState를 통해 전달 받은 세터 함수를 사용해야 함.

| 잘못된 방법 | 올바른 방법 |
|------------|------------|
| `this.state.number += 1;` | `this.setState({ number: this.state.number + 1 });` |
| `count += 1;` | `setCount(count + 1);` |

 React의 state는 불변성을 유지해야 하며, setState 또는 useState의 세터 함수를 사용해야 리렌더링이 정상적으로 동작함


 
 chap03 컴포넌트 정리 
 - 컴포넌트 만들어서 내보내는 방법 
 - props 및 state를 사용하는 방법 
 - props는 부모 컴포넌트가 설정하고 , state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트 할 수 있음.
 - props를 사용한다고 해서 값이 무조건 고정적이지는 않음, 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있음.


check 헷갈리지 말자!
setState는 React 클래스 컴포넌트에서 상태(state)를 업데이트하는 메서드입니다. 
setState를 호출하면 React가 상태를 병합하고, 컴포넌트가 다시 렌더링됩니다. 이는 비동기적으로 동작하며, 상태가 변경될 때마다 UI가 업데이트되도록 합니다.
state는 클래스 컴포넌트에서 컴포넌트의 상태를 저장하는 객체입니다. 
이 상태는 컴포넌트의 데이터와 UI를 동적으로 관리하고 업데이트하는 데 사용됩니다. state는 컴포넌트 내에서 직접 접근하여 읽을 수 있습니다.
setState는 비동기, state는 동기.





chap04 이벤트 핸들링
-hello-ch03 을 Ch04로 복붙 - yarn install 진행함.
 
 4.1 리액트의 이벤트 시스템 
 - 이벤트 이름은 카멜 표기법으로 작성한다.  HTML의 onclick은 리액트에서는 onClick 으로 작성해야함. 
 - 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달한다.
 - DOM 요소(div, butoon, input, form, span 등)에만 이벤트 설정 가능. 우리가 직접 만든 컴포넌트에서는 자체적으로 설정 불가  
   예를 들어 Mycomponent에 onClick값을 설정한다면 Mycomponent를 클릭할 때 doSomething 함수를 실행하는 것이 아니라 이름이 onClick인 props를 MyComponent에 전달해주는 것 
   <MyComponent onClick = {doSomething} /> 
   컴포넌트 자체적으로 이벤트를 설정할 수 없으므로 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정하여 사용 
   <div onClick = {this.props.onClick}>
   { /*.... */ }
   </div> 이런 식으루..

4.2 이벤트 종류 
 - 리액트에서 지원하는 이벤트 종류 

| 이벤트 유형 | 이벤트 | 설명 |
|------------|--------|------|
| **포커스 이벤트** | `onFocus` | 요소가 포커스를 받을 때 실행 |
|  | `onBlur` | 요소가 포커스를 잃을 때 실행 |
| **클립보드 이벤트** | `onCopy` | 사용자가 요소의 내용을 복사할 때 실행 |
|  | `onCut` | 사용자가 요소의 내용을 잘라낼 때 실행 |
|  | `onPaste` | 사용자가 요소에 내용을 붙여넣을 때 실행 |
| **터치 이벤트 (모바일)** | `onTouchStart` | 사용자가 화면을 터치할 때 실행 |
|  | `onTouchMove` | 터치한 상태에서 손가락을 움직일 때 실행 |
|  | `onTouchEnd` | 터치 후 손가락을 뗄 때 실행 |
|  | `onTouchCancel` | 터치가 취소될 때 실행 (ex. 화면 전환 등) |
| **마우스 이벤트** | `onClick` | 요소를 클릭할 때 실행 |
|  | `onDoubleClick` | 요소를 더블 클릭할 때 실행 |
|  | `onMouseDown` | 마우스 버튼을 누르는 순간 실행 |
|  | `onMouseUp` | 마우스 버튼을 뗄 때 실행 |
|  | `onMouseEnter` | 마우스가 요소 위로 올라갈 때 실행 |
|  | `onMouseLeave` | 마우스가 요소에서 벗어날 때 실행 |
|  | `onMouseMove` | 마우스를 움직일 때 실행 |
| **키보드 이벤트** | `onKeyDown` | 키보드를 누를 때 실행 |
|  | `onKeyUp` | 키보드를 눌렀다가 뗄 때 실행 |
| **휠 이벤트** | `onWheel` | 마우스 휠을 스크롤할 때 실행 |
| **입력 및 변경 이벤트** | `onChange` | 입력값이 변경될 때 실행 (`input`, `textarea`, `select` 등) |
|  | `onInput` | 입력 필드에 값이 입력될 때 실행 (`onChange`와 유사) |
|  | `onSubmit` | 폼이 제출될 때 실행 (`<form>` 태그에서 주로 사용) |


4.2 예제로 이벤트 핸들링 익히기

4.3 함수컴포넌트로 구현해보기
4.4 정리 



5장 ref : DOM에 이름 달기 

5.1 ref는 어떤 상황에서 사용해야 할까? DOM을 직접적으로 건드려야 할 때 
5.2 ref 사용 
 5.2.1 콜백함수를 통한 ref 설정 
 5.2.2 createRef를 통한 ref 설정 
5.3 컴포넌트에 ref 달기 
 5.3.1 사용법 - <Mycomponent ref ={ (ref) => {this.myComponent=ref} } />
 onClick = {this.ScrollBox.ScrollToBottom()} 같은 형식으로 작성 하여도 틀린 것은 아니지만,  
 컴포넌트가 처음 렌더링될 때는 this.scrollbox값이 undefined 이므로 this.ScrollBox.ScrollToBottom 값을 읽어오는 과정에서 오류가 발생함. 
 화살표 함수 문법을 사용하여 아예 새로운 함수를 만들고 그 내부에서 this.ScrollBox.ScrollToBottom 메서드를 실행하면  
 버튼을 누를 때 (이미 한번 렌더링을 해서 this.scrollbox)를 설정한 시점) 의 this.ScrollBox.ScrollToBottom 를 읽어와서 실행하므로
 오류가 발생하지 않음.
5.4 정리 
 컴포넌트 내부에서 DOM에 직접 접근할 때는 ref를 사용한다. 먼저 ref를 사용하지 않고도 원하는 기능을 사용할 수 있는지를 먼저 고민해야함.
 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용한다면 ref의 ref의 ref가 이어지게 되어 추후에 유지보수가 어려워짐. 리액트 사상에 어긋나므로 
 데이터 교류는 언제나 부모 ↔ 자식 흐름으로 교류해야 한다. 

6장 컴포넌트 반복 
 6.1 자바스크립트 배열의 map() 함수 
 6.2 데이터 배열을 컴포넌트 배열로 변환하기
 6.3 key 
 6.4 응용 
 6.5 정리 

7장 컴포넌트의 라이프사이클 메서드 
 7.1 라이프사이클 메서드의 이해 
  7.1.1) 마운트 단계  : 컴포넌트가 처음으로 DOM에 삽입되는 단계
    - constructor : 컴포넌트를 초기화하기 위해 호출됨.. 초기 상태(state)와 인스턴스 메서드를 설정할 수 있음.
    - componentWillMount : 컴포넌트가 마운트되기 직전에 호출. 현재는 주로 constructor에서 초기 설정을 처리함.
    - render : 필수 메서드로, 컴포넌트의 UI를 정의하는 JSX를 반환.
    - componentDidMount : 컴포넌트가 마운트된 직후에 호출. 네트워크 요청, DOM 조작 등을 처리할 수 있음.
  7.1.2) 업데이트 단계 : 컴포넌트가 리렌더링될 때 호출. 주로 새로운 props를 받거나 상태(state)가 변경될 때 발생
    - componentWillReceiveProps : 컴포넌트가 새로운 props를 받기 직전에 호출됩니다. 이 메서드에서 새로운 props에 따른 상태 업데이트를 처리
    - shouldComponentUpdate : 리렌더링 여부를 결정하는 메서드입니다. 성능 최적화를 위해 사용됩니다. true 또는 false를 반환합니다
    - componentWillUpdate : 컴포넌트가 업데이트되기 직전에 호출됩니다. 여기서 DOM을 조작하지 말아야 함.
    - render : 컴포넌트의 UI를 업데이트하기 위해 호출됩니다.
    - componentDidUpdate : 컴포넌트가 업데이트된 직후에 호출됩니다. 이곳에서 DOM 조작 등을 처리할 수 있습니다.
  7.1.3) 언마운트 단계 : 컴포넌트가 DOM에서 제거되는 단계
    - componentWillUnmount : 컴포넌트가 DOM에서 제거되기 직전에 호출됩니다. 여기서 타이머 제거, 네트워크 요청 취소 등 정리 작업을 수행합니다.

 7.2 라이프사이클 메서드 살펴보기
  7.2.1 render() 함수 : 
     컴포넌트에서 가장 중요한 메서드이며 필수 메서드 . this.props와 this.state에 접근 가능하며 리액트 요소를 반환한다. 
     요소는 div 같은 태그가 될 수도 있고, 따로 선언한 컴포넌트가 될 수 있으며, 아무것도 보여주고 싶지 않다면 null 이나 false값을 반환하도록 한다. 
     단, 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 하거나, DOM에 접근해서는 안된다. (필요시 componentDidMount 에서 DOM정보를 가져오거나, state에 변화를 주도록 해야함.)
  7.2.2 constructor 메서드 : 
      컴포넌트의 생성자 메서드로 컴포넌트를 만들때 처음으로 실행, 초기 state를 정할 수 있다.
  7.2.3 getDerivedStateFromProps 메서드  :
     리액트 v16.3 이후에 새로 만든 라이프 사이클 메서드로 
     props로 받아온 값을 state에 동기화 시키는 용도로 사용하며, 컴포넌트가 마운드 될 때와 업데이트 될 때 호출됨.
  7.2.4 componentDidMount 메서드 :
     컴포넌트를 만들고, 첫 렌더링을 마친 후 실행한다. 이 안에서 다른 자바스크립트 라이브버리 또는 프레임워크의 함수를 호출하거나
     이벤트 등록, setTimeout , setInterval 네트워크 요청 같은 비동기 작업을 처리한다.
  7.2.5 shouldComponentUpdate 메서드 :
      props 또는 state를 변경했을 때 리렌더링을 시작할지 여부를 결정하는 메서드 
      이 메서드에서는 반드시 true 또는 false 값을 반환하여야 한다. 컴포넌트를 만들때 이 메서드를 따로 생성하지 않으면 기본적으로 true를 반환한다. 
      이 메서드 안에서 현재 props와 state는 this,props와 this.state로 접근하고 새로 설정된 props와 state는 nextProps와 nextState로 접근할 수 있다. 
  7.2.6 getSnapshotBeforeUpdate 메서드 :
     리액트 16.3 이후 만든 메서드로 render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨.
     이 메서드에서 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달받을 수 있으며 주로 업데이트 하기 직전의 값을 
     참고할 일이 있을 때 사용한다 ( 예 : 스크롤바 유지 )
  7.2.7 componentDidUpdate 메서드 :
     리랜더링을 완료한 후 실행한다. 업데이트가 끝난 직후이므로 DOM 관련 처리를 해도 무방하다. 
     prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있다. 
  7.2.8 componentWillUnmount 메서드 :
     컴포넌트를 DOM에서 제거할 때 실행한다. componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거 작업을 한다. 
  7.2.9 componentDidCatch 메서드 :
     리액트 v16에서 도입됨, 컴포넌트 랜더링 도중에 에러가 발생했을 때 애플리케이션이 먹통이 되지 않고 오류 UI를 볼 수 있게 해준다. 
    

 >> 개발모드에서 로그가 두줄로 나오는 거 불편해서 index.js 파일의 </React.StrictMode> 부분 주석 처리 

 7.3 라이프사이클 메서드 사용하기
 7.4 정리 



8장 Hooks 
 8.1 useState 
  8.1.1 useState를 여러번 사용하기 
   - 자꾸 이벤트 핸들러 속성을 카멜케이스로 작성하지 않아서 에러내는 중.. 
     Invalid event handler property `onchange`. Did you mean `onChange`? Error Component Stack 
     하나의 useState 함수는 하나의 상태값만 관리할 수 있음. 컴포넌트에서 관리해야 할 상태가 여러개라면 useState를 여러 번 사용하면 됨. 
 8.2 useEffect 
  useEffect는 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook으로 
  클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 볼 수 있음. 
  8.2.1 마운트 될 때만 실행하고 싶을 떄 
   useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 랜더링 될 때만 실행하고, 
   업데이트 될 때에는 실행하지 않으려면 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 됨.
  8.2.2 특정 값이 업데이트 될 때만 실행하고 싶을 떄 
   useEffect의 두번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됨. 
  8.2.3 뒷정리 하기 
   useEffect는 기본적으로 랜더링 되고 난 직후마다 실행되며, 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 변경됨.
   컴포넌트가 언마운드 되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 
   useEffect에서 뒷정리(cleanup) 함수를 반환 해야함.

 8.3 useReducer 
  useReducer는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 반환하는 함수로 항상 불변성을 지켜주어야함.
  useReducer는 보통 세가지 요소로 구성됨.  상태(state), 상태를 업데이트하는 함수(dispatch), 그리고 리듀서 함수(reducer).
  8.3.1 카운터 구현하기 
   useReducer의 첫번쨰 파라미터에는 리듀서 함수를 넣고, 두번째 파라미터에는 해당 리듀서의 기본값을 넣어줌.
    > 이 Hook을 사용해서 state값과 dispatch 함수를 받아옴. 
  8.3.2 인풋 상태 관리하기 
   useReducer에서의 액션은 그 어떤 값도 사용이 가능하기 때문에 이벤트 객체가 지니고 있는 e.target값 자체를 액션 값으로 이용 가능 
   이런 경우에 인풋 갯수가 많아지더라도 코드를 짧게 유지할 수 있다!
 8.4 useMemo
  useMemo는 React의 훅(Hook) 중 하나로, 성능 최적화를 위해 사용함. 
  useMemo는 계산 비용이 높은 작업의 결과를 메모이제이션(memoization)하여, 
  의존성 배열에 포함된 값이 변경되지 않는 한 동일한 결과를 반환한다.
 8.5 useCallback 
  useCallback 훅은 React의 성능 최적화를 위해 사용되며, 함수의 참조를 메모이제이션한다.
  자식 컴포넌트에 콜백 함수를 전달할 때, 불필요한 렌더링을 방지하고자 할 때 사용한다.
 8.6 useRef 
  DOM요소에 접근하거나, 값의 변경을 추적할 때 사용한다. ( 예를 들면 등록버튼을 눌렀을 때 포커스가 인풋으로 넘어가도록 한다거나..)
 8.6.1 로컬 변수 사용하기 
  타이머 및 인터벌 관리, 컴포넌트의 상태 값이 업데이트 되기 전의 값을 저장하거나, 폼 상태를 관리할 때 사용 
  단 ref의 값이 바뀌어도 컴포넌트가 랜더링 되지 않으므로 랜더링과 관련되지 않은 값에 대해서만 해당 방식으로 사용 가능    
 8.7 커스텀 Hooks 만들기 
  여러 컴포넌트에서 비슷한 기능을 공유할 경우 커스텀 Hook으로 작성하여 로직을 재사용할 수 있음. 

 8.8 다른 Hooks 
 8.9 정리 
  리액트에서 Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있음. 
  기존에 클래스형 컴포넌트로 작성되어 있다고 해서 굳이 함수형 컴포넌트로 변경할 필요는 없으나 
  새로 작성하는 컴포넌트는 함수형 작성을 우선으로 하고 꼭 필요한 상황에서만 클래스형 컴포넌트로 작성하기.



9장 컴포넌트 스타일링
__9.1 가장 흔한 방식, 일반 CSS
____9.1.1 이름 짓는 규칙
____9.1.2 CSS Selector
__9.2 Sass 사용하기
____9.2.1 utils 함수 분리하기
____9.2.2 sass-loader 설정 커스터마이징하기
____9.2.3 node_modules에서 라이브러리 불러오기
__9.3 CSS Module
____9.3.1 classnames
____9.3.2 Sass와 함께 사용하기
____9.3.3 CSS Module이 아닌 파일에서 CSS Module 사용하기
__9.4 styled-components
____9.4.1 Tagged 템플릿 리터럴
____9.4.2 스타일링된 엘리먼트 만들기
____9.4.3 스타일에서 props 조회하기
____9.4.4 props에 따른 조건부 스타일링
____9.4.5 반응형 디자인
__9.5 정리

