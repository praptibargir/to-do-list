import React from 'react'
import "./ToDoCard.css"

function ToDoCard({task, category}) {
  return (
    <div className='todo-card'>
        {task} 
        <span className='category'>
            {category}
        </span>
        
    </div>
  )
}

export default ToDoCard