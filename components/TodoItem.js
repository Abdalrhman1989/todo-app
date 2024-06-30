"use client";

import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, completed, onToggle, onDelete }) => {
  return (
    <Item>
      <Checkbox type="checkbox" checked={completed} onChange={onToggle} />
      <Text completed={completed}>{todo}</Text>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Text = styled.span`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  flex: 1;
`;

const DeleteButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
