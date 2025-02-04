// 2.4.5 undefined 를 렌더링 하기

import './App.css' ;

function App() {
  const name = undefined ;
  //const name = null ;
  return name ;
}

export default App;






// // 2.4.3 if 문 대신 조건부 연산자
// function App() {
//   const name ='리액트' ;
//   return (
//   <div>
//       {name === '리액트' ? (
//           <h1>리액트 입니다. </h1> ) :
//           (
//               <h1> 리액트가 아닙니다. </h1>
//           )
//       }
//   </div>
//   );
// }
//
// export default App;
//

// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
// null 을 렌더링하면 아무것도 보이지 않음.
// function App() {
//   const name ='뤼왝트' ;
//   return (
//       <div>
//         {name === '리액트' ? (
//                 <h1>리액트 입니다. </h1> ) :
//             null
//         }
//       </div>
//   );
// }
//
// export default App;
