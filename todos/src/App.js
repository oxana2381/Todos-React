import React, { Component } from 'react';

import { TodoList } from './TodoComponents/TodoList';
import { Button } from './uielements/Button';
import {TodoListItem} from './uielements/TodoListItemStyle';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos:JSON.parse(localStorage.getItem('todos')) || [],
      


    }

  }





  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ input: value })


  }
  handleAddItem = () => {
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }



    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem),
      
 },()=>{
  localStorage.setItem('todos', JSON.stringify(this.state.todos))
 }
    )
  }
  handleItemStatusToggle = (itemId) => {
    const tempState = this.state.todos.map(todo => {
      if(todo.id === itemId) {
        todo.status = !todo.status
      }
      return todo;      
    })
    this.setState({
      todos:tempState
    },()=>{
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
     })
  }
  
  handleItemRemove = (itemId) => {
    const tempState = this.state.todos.filter(todo => {
      if(todo.id !== itemId) {
        return todo
      }
    })
    this.setState({
      todos: tempState
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  TodoListStats =() =>{
   const ListStats= this.state.todos.filter(todo=>
     (todo.status)).length
     
           
     return ListStats;

  };
  ResetAllStatuses=() =>{
    const  ResetAll=this.state.todos.map(todo =>{
   
       todo.status=false
       return todo
    
    })
     
      this.setState({
        todos:ResetAll
     
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }) 
  }

render(){


  return (
    <div className="container">
      <h1>Our awesome TODO</h1>
      {this.state.input ?(
      <span>value:{this.state.input}</span>
      ): null}
      <div className="todo-component">
        <div className="todo-component__control">
          <div className="todo-component__input-group">
            <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder="Add todo" />
            {this.state.input.length ? (
              <span id="input-count">Count: {this.state.input.length}</span>
            ) : null}
            {this.state.todos.length ? (
            <span id="ListStats"><h2>todos done: {this.state.todos.length}/{this.TodoListStats()}</h2></span>
            ): null}
           {this.state.todos.length ?(
            <Button  onClick={this.ResetAllStatuses} id="reset">Reset</Button>
            ) : null}
            <span id="total"></span>
            <span id="total-done"></span>

          </div>
          <Button onClick={this.handleAddItem} id="todo-add" >Add</Button>

        </div>
        <TodoList handleItemRemove={this.handleItemRemove} handleItemStatusToggle={this.handleItemStatusToggle} todos={this.state.todos}  
        />

      </div>
    </div>
  );
}}

export default App;
