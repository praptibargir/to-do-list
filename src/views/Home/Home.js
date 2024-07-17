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

    const [todoList,setTodoList]=useState([
        {task:"Learn React", category: "learning"},
        {task:"Buy Groceries", category: "shopping"}
    ])
    
    const[newTask, setNewTask]=useState("")

    const [category, setCategory] =useState("")

  return (
    <div>
        <h1 className="app-title">To-Do-List</h1>
        <div className="to-do-list-container">
            {
                todoList.map((todoitem, i)=>{
                    const {task, category}=todoitem
                return <ToDoCard key={i} task={task} category={category}
                />})
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

            <select 
            className="category-select" 
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            >
                <option value="">Select a category</option>
                <option value="Learning">Learning</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Others">Others</option>
            </select>

            <img 
            src={addIcon} 
            alt="add" 
            className="add-icon"
            onClick={()=>{
                if(newTask===""){
                    toast.error("Task cannot be empty!")
                    return
                }
                if(category===""){
                    toast.error("Please select a category!")
                    return
                }
                setTodoList([...todoList,{task: newTask, category: category}])
                setNewTask("")
                setCategory("")
                toast.success("Task added successfully!")
            }}/>
        </div>
        <Toaster/>
    </div>
  )
}

export default Home