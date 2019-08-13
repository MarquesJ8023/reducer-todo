import React from 'react';

const TodoReducer = ({ id, item, completed, toggle}) => {
  return (
    <div className={"todo-item" + (completed ? " todo-completed" : "")} onClick={() => toggle(id)}>
      {item}
    </div>
  );
};
export default TodoReducer;
