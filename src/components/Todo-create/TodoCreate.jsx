import React, { useState } from 'react';

import './TodoCreate.css';

const TodoCreate = (props) => {
  const [todo, setTodo] = useState('');

  // Dari Todo untuk create new Todo
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: todo,
    };

    props.onCreateTodo(newTodo);
    setTodo('');
  };

  // Input new todo
  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoCreate;
