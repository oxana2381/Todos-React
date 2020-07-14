import React ,{ Component } from 'react';


class TodoList extends Component {
    constructor(props){
      super(props);
  
      this.state={}
      
    }
      
  removeButton = (event) =>{
    const deleteBtn =event.target.closest('li');
    this.setState({delete:deleteBtn.remove()});
    
   
  }

  handleChangeInput=(event)=>{
    const value = event.target.value;
    this.setState({input:value})
    
   
  }
    handleAddItem = () =>{
    const newItem ={
      id:new Date (),
      text: this.state.input,
      status: false
    }
    
      
   
    this.setState({
        input:'',
        todos: this.state.todos.concat(newItem),
        delete: this.state.todos.concat(newItem),
       
        
      })
    
      



      
        return (
            
            <ul className="todolist" id="todolist">
            {this.state.todos.length ? (
              this.state.todos.map((item)=>{
                return (<li className="todolist__item ">
                  <input type="checkbox" />
                  <span className={item.status ?  " complete" : ""  }>{item.text}</span>
                  <button  onClick={this.removeButton} id="remove-button">x</button>
                </li>)
              })
            ) : null}
          </ul>
       );
            
    }
}   







    export default TodoList;