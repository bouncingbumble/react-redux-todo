import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Form from './Form';
import Todo from './Todo';
import { REMOVE_TODO, removeTodo } from './actionCreators';


class App extends Component {
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
      <div className="App">
        <div>
          <Form />
        </div>
        {todoList}
      </div>
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

export default connect(mapStateToProps, {removeTodo})(App);