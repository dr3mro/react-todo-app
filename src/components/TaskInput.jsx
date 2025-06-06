import AddTaskBtn from "./AddTaskBtn";

function TaskInput({task,handleTaskInput,handleAddTask}){


    return (
        <div className="task-input-container">
            <input 
            className="task-input" 
            type="text" 
            placeholder="Enter Task"
            onChange={handleTaskInput}
            value={task}
            />
            <AddTaskBtn handleAddTask={handleAddTask} />
        </div>
    )
}export default TaskInput;