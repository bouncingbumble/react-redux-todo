import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Todo from './Todo';
import { removeTodo } from './actionCreators';

class TodoList extends Component {
  constructor(props){
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(id){
    this.props.removeTodo(id);
  }

  render() {
    let todoList = this.props.todos.map(todo => {
      return <Todo text={todo.text} key={todo.id} removeTodo={this.removeTodo.bind(this, todo.id)}/>
    })
    return (
        todoList
    );
  }
}

function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos,
    id: reduxState.id,
    value: reduxState.value
  }
}

export default connect(mapStateToProps, {removeTodo})(TodoList);