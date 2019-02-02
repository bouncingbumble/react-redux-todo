import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux"
import Todo from './Todo';
import { removeTodo, addTodo } from './actionCreators';
import { Route } from 'react-router-dom';
import Form from './Form';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleAdd =  this.handleAdd.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleAdd(val){
        this.props.addTodo(val);
    }

    removeTodo(id){
        this.props.removeTodo(id);
    }

  render() {
    let todoList = this.props.todos.map(todo => {
        return <Todo 
            text={todo.text} 
            key={todo.id}
            removeTodo={this.removeTodo.bind(this, todo.id)}
        />
    })
    return (
        <div>
            <Route path="/todos/new" component={props => (
                <Form {...props} handleSubmit={this.handleAdd} />
            )}/>
            <Route exact path="/todos" component = {() => <div>{todoList}</div>} />
        </div>

        );
    }
}

    function mapStateToProps(reduxState){
        return {
            todos: reduxState.todos,
        }
    }

export default connect(mapStateToProps, {removeTodo, addTodo})(TodoList);