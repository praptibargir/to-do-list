import React from 'react'
import "./ToDoCard.css"
import deleteImg from "./bin.png"

function ToDoCard({index, task, category, deleteItem}) {

    const CATEGORY_EMOGI_MAP = {
        Learning: "📚",
        Work: "💻",
        Personal: "🔐",
        Shopping: "🛍️",
        Health: "🏥",
        Others: "📁"
    }

    const CATEGORY_COLOURS = {
        Learning: "#eb4034",
        Work: "#86b300",
        Personal: "#0099ff",
        Shopping: "#ff1ab3",
        Health: "#00cc00",
        Others: "#ffad33"
    }    

  return (
    <div className='todo-card'>
        <img 
        src={deleteImg} 
        className='delete-icon'
        alt='deleteicon'
        onClick={()=>{
            deleteItem(index)
        }}/>
        {task} 
        <span className='category' style={{
            backgroundColor: CATEGORY_COLOURS[category]
        }}>
            {CATEGORY_EMOGI_MAP[category]} {category}
        </span>
        
    </div>
  )
}

export default ToDoCard