import React from 'react';

const Todo = ({ text, removeTodo}) => (
    <div>{text}<span onClick={removeTodo}> X </span></div>
)
  
export default Todo;