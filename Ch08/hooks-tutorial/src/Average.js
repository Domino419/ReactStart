import { useState } from "react";

const getAverage = (numbers) => {
  console.log("::::::::::::::getAverage ! ");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};


const Average = () => {
    // 숫자 리스트와 입력값을 관리하는 상태 변수 선언
    const [ list , setList] = useState([]) ;
    const [number, setNumber] = useState('') ;

    // 입력값이 변경될 때 호출되는 함수
    const onChange = e => {
        console.log("::::::::::::::onChange ! :: ",e.target.value);
        setNumber(e.target.value) ; 
    }; 

    // 리스트에 새로운 숫자를 추가하는 함수
    const onInsert = e => {
        const nextList = list.concat(parseInt(number)) ; 
        setList(nextList);  // 리스트 상태 업데이트한 다음에 
        setNumber('');      // 입력값 초기화 
        console.log("::::::::::::::onInsert !  입력 받은 값 리스트 :: ", nextList);
    };

    return (
    <div>
        {/* 입력 필드와 버튼 */}
        <input value={number} onChange={onChange}/>
        <button onClick={onInsert}> 등록 </button>
        <ul>
             {/* 리스트 아이템을 렌더링 */}
            {list.map((value,index) => (
                <li key={index}> {value} </li>
            ))}
        </ul>
        <div>
             {/* 평균값 계산 및 표시 */}
            <b> 평균값 :</b> {getAverage(list)}
        </div>
    </div>
    );
};

export default Average;
