import React from 'react';
import Todo from './Todo'; // Make sure to import the Todo component

function TodoContainer({ todos , delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} delTodo={delTodo}/>
      ))}
    </div>
  );
}

export default TodoContainer;
