import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import AddTaskBtn from "./AddTaskBtn";

function TaskInput(){

    const {task,handleTaskInput,handleAddTask} = useContext(TodoContext);

    return (
        <form className="task-input-container" onSubmit={handleAddTask}>
            <input 
            className="task-input" 
            type="text" 
            placeholder="Enter Task"
            onChange={handleTaskInput}
            autoFocus
            value={task}
            />
            <AddTaskBtn handleAddTask={handleAddTask} />
        </form>
    )
}export default TaskInput;