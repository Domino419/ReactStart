import { useState, useMemo, useCallback } from "react";

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

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성

  
  const onInsert = useCallback( () => {
    const nextList = list.concat(parseInt(number)); 
    setList(nextList) ; 
    setNumber('') ; 
  }, [number, list]) // number 혹은 list가 바뀌었을 때에만 함수 생성 

  const avg = useMemo(() => getAverage(list), [list]);

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

/* 8.5 useCallback 
useMemo와 비슷한 함수, 주로 렌더링 성능을 최적화해야 하는 상황에서 사용 
이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있다.

useCallback의 첫번째 파라미터에는 생성하고 싶은 함수를 넣고, 
두번째 파라미터에는 배열을 넣으면 됨. 
이 배열에는 어떤 값이 바뀌엇을 때 함수를 새로 생성해야 하는지를 명시해야함. 

onChange 처엄 비어 있는 배열을 넣게 되면 렌더링 될 때 만들었던 함수를 계속해서 재사용하게 되며 
onInsert 처럼 배열 안에 number와 list를 넣게 되면 인풋 내용이 바뀌거나 새로운 항목이 추가될 때 새로 만들어진 함수를 사용하게 됨. 

함수 내부에서 상태값에 의존해야 할 때는 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주어야 함. 


*/
