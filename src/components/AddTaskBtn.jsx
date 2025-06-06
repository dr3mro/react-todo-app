import { useContext } from "react";
import { TodoContext } from "../Todo";

function AddTaskBtn(){
    const {handleAddTask} = useContext(TodoContext);
    return (
            <input onClick={handleAddTask} className="add-task-button" type="button" value="Add"/>
    )
}
export default AddTaskBtn;