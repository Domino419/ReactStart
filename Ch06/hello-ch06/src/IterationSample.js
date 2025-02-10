import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  
  // 6.4.2 데이터 추가 기능 구현하기 .165p
  const onChange = (e) => {
    setInputText(e.target.value);
}

  // onClick 화살표함수 추가 
  const onClick = () => {
    const nextNames = names.concat({
        id: nextId, 
        text : inputText
    }) ; 
    setNextId(nextId+1) ; 
    setNames(nextNames) ; 
    setInputText(''); // inputText 박스 비우기 
    console.log('::::::::::::::::::::::::: IterationSample.js -- onClick after ! ' + JSON.stringify(nextNames));
  }

  const nameList = names.map((name) => <li key={name.id}>{name.text} </li>);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}> 추가 </button>
      <ul> {nameList} </ul>
    </>
  );
};

export default IterationSample;
