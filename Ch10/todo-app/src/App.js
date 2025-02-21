import { useCallback, useRef, useState } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';


const App = () => {
  console.log("::::::::::::::::::::::::: Ch10.일정관리 웹 어플리케이션 만들기 : ", process.env.NODE_ENV)

  const [todos, setTodos] = useState([
    {
      id : 1 ,
      text : '아침먹기',
      checked : true,
    },
    {
      id : 2 ,
      text: '점심먹기',
      checked: true,
    },
    {
      id : 3 ,
      text:'저녁먹기',
      checked: false
    },
  ]) ;

  // 고유값으로 사용될 id
  //ref 를 이용하여 변수담기
  const nextId = useRef(4) ;

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      } ;
      setTodos(todos.concat(todo)) ;
      nextId.current += 1;
    },
    [todos] ,
  ) ;

  // 삭제 기능
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id)) ;
    },
    [todos] ,
  );

  // 수정 기능 추가
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
        todo.id === id ? {...todo, checked : !todo.checked } : todo,
        ),
      );
    },
    [todos] ,
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