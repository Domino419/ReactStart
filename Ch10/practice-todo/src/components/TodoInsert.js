import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    console.log ('onChange 함수 동작 확인 ')
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
        onInsert(value) ; 
        setValue('') ; // value값 초기화 

        // submit 이벤트는 브라우저에서 새로고침을 발생 시키기 때문에 
        // 방지하기 위해서 이 함수를 호출해야함

        e.preventDefault();
    }, 
    [onInsert, value] ,
  ); 

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요 "
        value={value}
        onChange={onChange}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

TodoInsert.propTypes = {};

export default TodoInsert;
