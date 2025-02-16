import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("::::::::::::::useMemo에서 getAverage 함수 호출  ! ");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};


const AverageUseCallback = () => {
    // 숫자 리스트와 입력값을 관리하는 상태 변수 선언
    const [ list , setList] = useState([]) ;
    const [number, setNumber] = useState('') ;

    // 컴포넌트가 처음 랜더링 될 때만 함수 생성 
    const onChange = useCallback( e=> {
        setNumber(e.target.value) ; 
    }, []) ; 

    // number 혹은 list가 바뀌었을 때만 함수 생성 
    const onInsert = useCallback( () => {
        const nextList = list.concat(parseInt(number)) ; 
        setList(nextList) ; 
        setNumber('') ;
    console.log("::::::::::::::onInsert !  입력 받은 값 리스트 :: ", nextList);
    }, [number, list]) 

    const avg = useMemo(()=> getAverage(list), [list]);

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
             <b> 8.5 useCallback </b>
            <b> 평균값 :</b> {avg}
        </div>
    </div>
    );
};

export default AverageUseCallback;
