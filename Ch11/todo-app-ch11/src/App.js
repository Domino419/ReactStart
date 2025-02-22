import { useCallback, useRef, useState, useReducer } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos() {
  const array = [];
  for ( let i = 1 ; i < 10 ; i++ ) {
   array.push({
     id : i ,
     text : `할 일 ${i}`,
     checked : false,
   }) ;
  }
  return array;
}


function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT' : // 새로 추가
      return todos.concat(action.todo) ;
    case 'REMOVE' : // 제거
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' : // 토글
      return todos.map(todo =>
      todo.id === action.id ? { ...todo, checked : !todo.checked} : todo,
      ) ;
    default :
      return todos ;
  }
}

const App = () => {
  console.log("::::::::::::::::::::::::: Ch11.컴포넌트 성능 최적화 : ", process.env.NODE_ENV)
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos) ;

  // 고유값으로 사용될 id
  //ref 를 이용하여 변수담기
  const nextId = useRef(2501) ;

  const onInsert = useCallback(text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      } ;
      dispatch({type: 'INSERT',todo}) ;
      nextId.current += 1;
    }, []);

  // 삭제 기능
  const onRemove = useCallback(
    id => {
      dispatch({type: 'REMOVE',id}) ;
    },
    []);

  // 수정 기능 추가
  const onToggle = useCallback(
    id => {
      dispatch({type: 'TOGGLE',id}) ;
    },
    [] ,
  )

  return (
    <div>
      <TodoTemplate>
       <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove = {onRemove} onToggle = {onToggle} />
      </TodoTemplate>
    </div>
  )
}

export default App;