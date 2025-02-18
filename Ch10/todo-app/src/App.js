import { useState } from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';


const App = () => {
  console.log("::::::::::::::::::::::::: Ch10.일정관리 웹 어플리케이션 만들기 : ", process.env.NODE_ENV)

  const [todos, setTodos] = useState([
    {
      id : 1 ,
      text : '리액트의 기초 알아보기',
      checked : true,
    },
    {
      id : 2 ,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id : 3 ,
      text:'일정관리 앱 만들어보기',
      checked: false
    },
  ]) ;

  return (
    <div>
      <TodoTemplate>
       <TodoInsert />
        <TodoList todos={todos}/>
      </TodoTemplate>
    </div>
  )
}

export default App;