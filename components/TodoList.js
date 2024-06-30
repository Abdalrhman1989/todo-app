"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { todo: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Header>My To-Do List</Header>
      <InputContainer>
        <Input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <AddButton onClick={addTodo}>Add</AddButton>
      </InputContainer>
      <TodoItems>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo.todo}
            completed={todo.completed}
            onToggle={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </TodoItems>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
