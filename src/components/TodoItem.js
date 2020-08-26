
import React from 'react';

function TodoItem(props){
    const completedStyle =  {
        textDecoration: "line-through",
        color: "#cdcdcd",
        fontStyle: "italic"
    }
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.todoItem.completed} 
                onChange={() => props.handleChange(props.todoItem.id)}
            />
            <p style={props.todoItem.completed ? completedStyle : null}>{props.todoItem.text}</p>
        </div>
    )
}
export default TodoItem