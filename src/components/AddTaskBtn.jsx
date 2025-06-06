function AddTaskBtn({handleAddTask}){
    return (
            <input onClick={handleAddTask} className="add-task-button" type="button" value="Add"/>
    )
}
export default AddTaskBtn;