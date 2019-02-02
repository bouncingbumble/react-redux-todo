import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addTodo } from './actionCreators';

class Form extends Component {

    constructor(props){
      super(props);
      this.state = {
        value: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo({id:this.props.id, text: this.state.value})

        this.setState({value: ''})
    }
  
    handleChange(e){
      e.preventDefault();
      this.setState({value: e.target.value})
    }
  
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
  
function mapStateToProps(reduxState){
    return {
      todos: reduxState.todos,
      id: reduxState.id,
      value: reduxState.value
    }
  }

export default connect(mapStateToProps, {addTodo})(Form);