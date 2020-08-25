import React from 'react';

import TodoItem from './components/TodoItem'

import todoData from './data/todoData'





function App() {
  const todoDataList = todoData.map(item => <TodoItem key={item.id} todoItem={item} />)

  return (

        <div className="todo-list">
          {todoDataList}
        </div>
  )
}

export default App
