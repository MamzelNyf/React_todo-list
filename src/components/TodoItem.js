
import React from 'react';

// function TodoItem(props){
    
//     return(
//         <div className="todo-item">
//             <input type="checkbox" checked={props.todoItem.completed} onChange={ ()=> props.todoItem.completed === true ? props.todoItem.completed === false : props.todoItem.completed === true}/>
//             <p>{props.todoItem.text}</p>
//         </div>
//     )
// }


class TodoItem extends React.Component{
    constructor(){
        super()
        this.state = {
            completed : this.props.todoItem.completed
        }
    }
    render(){
        return(
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todoItem.completed} onChange={ () => console.log("change")}/>
                <p>{this.props.todoItem.text}</p>
            </div>
        )
    }
}
export default TodoItem