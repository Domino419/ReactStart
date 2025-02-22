import React from 'react';
import './TodoListItem.scss';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';

const TodoListItem = ({todo,onRemove, onToggle,style }) => {
  const {id, text, checked} = todo ;
  return (
    <div className="TodoListItem" style={style} >
      <div className={cn('checkbox', {checked})} onClick={()=>onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);

/*
## 11.4 React.memo를 사용하여 컴포넌트 성능 최적화
- shouldComponentUpdate 라는 라이프사이클을 이용하여 리랜더링 방지 가능
- 함수 컴포넌트에서는 라이프사이클 메서드를 사용 할 수 없으므로 React.memo를 사용.
- 컴포넌트의 props가 바뀌지 않았다면 리랜더링 하지 않도록 설정하여 함수의 리랜더링 성능을 최적화해줄 수 있음.
  */