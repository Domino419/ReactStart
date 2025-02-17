import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';

const App = () => {
  console.log("::::::::::::::::::::::::: Ch10.일정관리 웹 어플리케이션 만들기 : ", process.env.NODE_ENV)
  return (
    <div>
      <TodoTemplate>
       <TodoInsert />
      </TodoTemplate>
    </div>
  )
}

export default App;