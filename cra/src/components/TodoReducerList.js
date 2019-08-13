import React from 'react';
import TodoReducer from './TodoReducer';

const TodoReducerList = ({ todos, toggle }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => <todo key={todo.id} {...todo} toggle={toggle} />)}
    </div>
  );
};

export default TodoReducerList;
