import { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// [1] 대량의 데이터(2,499개)를 자동으로 만들어주는 함수
function createBulkTodos() {
  const array = []; 
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,                    
      text: `할 일${i}`,         
      checked: false,        
    }); 
  }
  return array; 
}

const App = () => {
  // [2] useState의 초기값으로 함수 이름(createBulkTodos)을 넣으면 컴포넌트가 처음 렌더링될 때 딱 한 번만 함수를 실행합니다.
  const [todos, setTodos] = useState(createBulkTodos);

  // [3] 새로 추가될 할 일의 고유 ID 번호입니다. 
  // 값이 바뀌어도 컴포넌트가 불필요하게 리렌더링되지 않도록 useRef를 사용해 변수를 보관합니다.
  const nextId = useRef(2501);

  // [4] 새 할 일을 추가하는 함수입니다.
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current, 
      text,               
      checked: false,     
    };
    // setTodos 내부 콜백의 인자(todos)는 '가장 최신의 상태'를 리액트가 알아서 가져옵니다.
    // 덕분에 외부의 todos 배열을 직접 참조할 필요가 없어져서, 의존성 배열 [] 을 비울 수 있습니다.
    setTodos((todos) => todos.concat(todo)); // 기존 배열에 새 todo를 붙여서 새 배열을 만듭니다.
    
    nextId.current += 1; // 다음 추가될 아이템을 위해 ID 번호를 1 증가시킵니다.
  }, []); // 의존성 배열이 비어있으므로, 이 함수는 App이 처음 켜질 때 딱 한 번만 만들어지고 재사용됩니다.

  // [5] 특정 할 일을 삭제하는 함수입니다.
  const onRemove = useCallback((id) => {
    // 💡 함수형 업데이트 사용: 가장 최신 상태의 todos를 인자로 받아옵니다.
    // filter를 사용해 내가 클릭한 항목의 id와 '일치하지 않는' 항목들만 따로 모아 새 배열을 만듭니다. (일치하는 것은 제외됨 = 삭제)
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []); // 의존성 배열 [] 이므로 함수가 새로 생성되지 않아 성능이 최적화됩니다.

  // [6] 특정 할 일의 체크박스를 켜고 끄는(토글) 함수입니다.
  const onToggle = useCallback((id) => {
    // 함수형 업데이트 사용
    // map을 사용해 전체 배열을 순회하면서 내가 클릭한 id와 일치하는 데이터만 찾아서 checked 값을 반대로 바꿉니다.(!false -> true)
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []); // 의존성 배열 [] 이므로 함수가 새로 생성되지 않아 성능이 최적화됩니다.

  // [7] 현재 상태에 데이터가 몇 개 들어있는지 브라우저 개발자 도구(F12) 콘솔 창에 출력합니다.
  console.log(todos.length); 

  return (
    <TodoTemplate>
      {/* 할 일을 입력하는 컴포넌트에 등록 함수를 전달합니다 */}
      <TodoInsert onInsert={onInsert} />
      {/* 할 일 목록을 보여주는 컴포넌트에 데이터 배열과 삭제/토글 함수를 전달합니다 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;