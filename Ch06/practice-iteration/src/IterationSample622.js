const IterationSample = () => {
  
    const names = ['눈사람', '얼음', '눈', '바람'] ;
    const nameList = names.map( (name, index) => <li key ={index}>{name}</li>) ; 
 
  return (
    <ul>
    {nameList}
    </ul>
  );
};

export default IterationSample ; 

/* 
6.1 자바스크립트 배열의 map() 함수 
6.1.1 문법 
arr.map ( callback, [thisArg] ) 

callback : 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세가지임. 
 - currentValue : 현재 처리하고 있는 요소 
 - index : 현재 처리하고 있는 요소의 index 값 
 - array : 현재 처리하고 있는 원본 배열 

thisArg ( 선택항목 ) : callback 함수 내부에서 사용할 this 레퍼런스 

*/

/* 6. 3 key 
리액트에서 ket는 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있었는지를 알아내려고 사용함. 
유동적인 데이터를 다룰 때는 원소를 새로 생서할 수도, 제거할 수도, 수정할 수도 없음
key 가 없을 때는 virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지하지만
key가 있는 경우 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있음.

6.3.1 key 설정 
key 값을 설정할 때는 map 함수의 인자로 전달되는 함수 내부에서 커포넌트 props 를 설정하듯이 설정하면 됨. 
key값은 언제나 유일해야 한다. 
따라서 데이터가 가진 고윳값을 key값으로 설정해야함. 

*/