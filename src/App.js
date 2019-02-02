import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Form from './Form';
import Todo from './Todo';
import { removeTodo } from './actionCreators';
import { Link, Route, Redirect } from "react-router-dom";
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Form />
          <TodoList />
      </div>
    );
  }
}


export default App;