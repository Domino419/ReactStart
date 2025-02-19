import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss'
import { useCallback, useState } from 'react';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [] ) ;

  const onSumit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value값 초기화

      e.preventDefault();  // sumit 할 때 브라우저 새로고침이 되지 않도록 하기 위한 함수 호출
    },
    [onInsert,value] ,
  ) ;

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSumit}>
        <input placeholder="할 일을 입력하세요 "
        value={value}
        onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>

    </div>
  );
};

export default TodoInsert;

/*
react-icons 확인
https://react-icons.github.io/react-icons/icons/md/
 */