import "./Home.css"
import addIcon from "./add.png"
import ToDoCard from "../../components/ToDoCard/ToDoCard"
import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"

function Home() {

    // const todoList=[
    //     "Go to gym",
    //     "Study React",
    //     "Read a book",
    //     "Study Backend",
    //     "Go for walk",
    //     "Study javascript",
    //     "Watch movies",
    //     "Study java",
    //     "Go to temple",
    //     "Read a novel",
    //     "Study Frontend",
    //     "Go for movie",
    //     "Watch webseries"   
    // ]

    const [todoList,setTodoList]=useState([])
    
    const[newTask, setNewTask]=useState("")

  return (
    <div>
        <h1 className="app-title">To-Do-List</h1>
        <div className="to-do-list-container">
            {
                todoList.map((todoitem, i)=><ToDoCard key={i} todoitem={todoitem}/>)
            }
            {
                todoList.length===0
                ?
                <p style={{textAlign:"center"}}>
                    No tasks to show, please add new tasks
                </p>
                :
                null
            }
        </div>
        <div className="add-todo-item-container">

            <input 
            type="text" 
            className="add-input" 
            placeholder="Add New Task"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}/>

            <img 
            src={addIcon} 
            alt="add" 
            className="add-icon"
            onClick={()=>{
                if(newTask===""){
                    toast.error("Task cannot be empty!")
                    return
                }
                setTodoList([...todoList,newTask])
                setNewTask("")
                toast.success("Task added successfully!")
            }}/>
        </div>
        <Toaster/>
    </div>
  )
}

export default Home