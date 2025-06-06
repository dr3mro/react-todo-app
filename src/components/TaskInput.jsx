import AddTaskBtn from "./AddTaskBtn";

function TaskInput({handleTaskInput,handleAddTask}){


    return (
        <div className="task-input-container">
            <input className="task-input" type="text" placeholder="Enter Task"
            onChange={handleTaskInput}
            />
            <AddTaskBtn handleAddTask={handleAddTask} />
        </div>
    )
}export default TaskInput;