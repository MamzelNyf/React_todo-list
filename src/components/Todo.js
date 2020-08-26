import React from 'react';
import TodoItem from './TodoItem'
import todoData from '../data/todoData'

// function App() {
//   const todoItems = todoData.map(item => <TodoItem key={item.id} todoItem={item} />)
//   return (
//     <div className="todo-list">
//       <h3>Todo List</h3>
//       {todoItems}
//     </div>
//   )
// }

class Todo extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    //setState to save the previuous state
    this.setState(prevState => {
      //use .map togenerate a new array
      const updatedTodos = prevState.todos.map(todo => {
      // look at every todo is this array  and compare it with the ID given
        if( todo.id === id) {
          //return a new object 
          return{
            //object spread notation: give me all the properties from todo
            ...todo,
            //and overwrite the completed property
            completed: !todo.completed
          }
        }
        //whether it has been flipped or not put the todo item back in the new array at the same index
        return todo
        //setState needs to return a new object updated
        })
      return {
        todos: updatedTodos
      }
    }) 
    console.log("change", id)
  }
  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} todoItem={item} handleChange={this.handleChange}/>)
    return (
      <div>
        <div className="todo-list">
          <h3>Todo List</h3>
          {todoItems}
        </div>
      </div>
    )
  }
}

export default Todo
