import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import { Link, Route, Redirect } from "react-router-dom";
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Todo list in react-redux</h1>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/todos">See what i have to do!</Link>
              </li>
              <li>
                <Link to="/todos/new">Add a todo</Link>
              </li>
            </ul>
          </nav>
          <Route path="/todos" component={TodoList} />
          <Route exact path="/" render={() => <Redirect to="/todos" /> } />
        </div>
      </div>
    );
  }
}


export default App;