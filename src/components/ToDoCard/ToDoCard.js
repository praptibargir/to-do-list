import React from 'react'
import "./ToDoCard.css"

function ToDoCard({todoitem}) {
  return (
    <div className='todo-card'>
        {todoitem}
    </div>
  )
}

export default ToDoCard