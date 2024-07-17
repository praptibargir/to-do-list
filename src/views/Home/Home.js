import "./Home.css"
import addIcon from "./add.png"

function Home() {
  return (
    <div>
        <h1 className="app-title">To-Do-List</h1>
        <div className="to-do-list-container">
            <h2>List will go here...</h2>
        </div>
        <div className="add-todo-item-container">
            <input type="text" className="add-input" placeholder="Add New Task"/>
            <img src={addIcon} alt="add" className="add-icon"/>
        </div>
    </div>
  )
}

export default Home