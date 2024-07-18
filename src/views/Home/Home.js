import "./Home.css"
import addIcon from "./add.png"
import ToDoCard from "../../components/ToDoCard/ToDoCard"
import { useEffect, useState } from "react"
import toast,{Toaster} from "react-hot-toast"
import Swal from 'sweetalert2'

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

    const [category, setCategory] =useState("")

    useEffect(()=>{
        const savedToDolist=localStorage.getItem("todoList")

        if(savedToDolist){
            setTodoList(JSON.parse(savedToDolist))
        }
    },[])

    useEffect(()=>{
        if(todoList.length===0){
            return
        }
        localStorage.setItem("todoList",JSON.stringify(todoList))
    },[todoList])

    function deleteItem(index) {
        Swal.fire({
          title: "Are you sure ?",
          text: "You want to delete this task!",
          icon: "warning",
          showCancelButton: true,
        }).then((result) => {
          if (!result.isConfirmed) {
            return
          }
          const newToDoList = todoList.filter((item, i) => {
            if (i !== index) {
              return true
            }
            else {
              return false
            }
          })
          setTodoList(newToDoList)
        })
      }

  return (
    <div>
        <h1 className="app-title">To-Do-List</h1>
        <div className="to-do-list-container">
            {
                todoList.map((todoitem, i)=>{
                    const {task, category}=todoitem
                    return <ToDoCard key={i} index={i} task={task} category={category} 
                    deleteItem={deleteItem} />})
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