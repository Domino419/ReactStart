import { useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중 -------1-");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  console.log("Average 진입 -------1-");
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    console.log("onChange 진입 -------2-");
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    console.log("onInsert 진입 -------1-");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    console.log("onInsert 진입 -------2-");
  };

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, index) => (
          <li key={index}> {value}</li>
        ))}
      </ul>
      <div>
        <b> 평균값 : </b> {getAverage(list)}
      </div>
    </div>
  );
};

export default Average;


/* 
useMemo 를 사용하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있다.*/