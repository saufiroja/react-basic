import React, { useState } from 'react';

// IMPORT COMPONENTS
import TodoCreate from '../Todo-create/TodoCreate';
import TodoList from '../Todo-List/TodoList';

// IMPORT CSS
import './Todo.css';

const Todo = () => {
  // DATA DUMMY
  const [todos, setTodos] = useState([
    { id: '1', title: 'eat' },
    { id: '2', title: 'code' },
    { id: '3', title: 'ball' },
  ]);

  // Dari components TodoCreate
  const onCreateTodo = (todo) => {
    setTodos(todos.concat(todo));
  };

  return (
    <>
      <h1>Todo App</h1>
      <TodoCreate onCreateTodo={onCreateTodo} />
      <TodoList dataTodos={todos} />
    </>
  );
};

export default Todo;
