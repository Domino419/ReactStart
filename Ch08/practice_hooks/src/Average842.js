import { useState , useMemo } from "react";

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
  };

  const avg = useMemo(() => getAverage(list), [list]) ;

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
        <b> 평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;


/* UseMemo Hook을 사용하면 랜더링 하는 과정에서 특정 값이 바뀌엇을 때만 연산을 실행하고,
 원하는 값이 바뀌지 않았다면 이전에 연산한 결과를 다시 사용 하는 방식*/ 