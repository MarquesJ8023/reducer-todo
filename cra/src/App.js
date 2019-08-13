import React, {useReducer} from 'react';
import './App.css';
import {initialState, Reducer} from './reducers/Reducer';
import TodoReducerList from './components/TodoReducerList';
import TodoReducerForm from './components/TodoReducerForm';


function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const toggle = id => dispatch({ type: "TOGGLE_TODO", payload: id});
  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item});
  const clearCompleted = () => dispatch({type: "CLEAR_COMPLETED"});
  const handleItem = event => dispatch({ type: "INPUT_ITEM", payload: event.target.value });

  return (
    <div className="todo">
      <h2>Todos</h2>
      <div className="todo-body">
        <TodoReducerForm addTodo={addTodo}
                  clearCompleted={clearCompleted}
                  handleItem={handleItem}
                  item={state.item} />
        <TodoReducerList todos={state.todos} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
