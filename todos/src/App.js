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
      todos: [],
      


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
      


    })

  
 this.handleItemStatusToggle=(item)=>(
 console.log(item)
 )

 this.handleItemRemove=(item)=>(
console.log()
 )}

render(){


  return (
    <div className="container">
      <h1>Our awesome TODO</h1>
      <span>value:{this.state.input}</span>
      <div className="todo-component">
        <div className="todo-component__control">
          <div className="todo-component__input-group">
            <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder="Add todo" />
            {this.state.input.length ? (
              <span id="input-count">Count: {this.state.input.length}</span>
            ) : null}

            <span id="total"></span>
            <span id="total-done"></span>
          </div>
          <Button onClick={this.handleAddItem} id="todo-add" >Add</Button>

        </div>
        <TodoList  handleItemStatusToggle={this.handleItemStatusToggle} todos={this.state.todos}  
                   handleItemRemove={this.handleItemRemove}todos={this.state.todos} 
        />

      </div>
    </div>
  );
}}

export default App;
