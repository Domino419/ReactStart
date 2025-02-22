import React , {useCallback} from 'react';
import {list} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss' ;

const TodoList = ({todos, onRemove, onToggle}) => {

  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  )

  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove = {onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);