import AddTaskBtn from "./AddTaskBtn";

function TaskInput({task,handleTaskInput,handleAddTask}){


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