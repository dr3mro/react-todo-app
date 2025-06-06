import { useContext } from "react";
import { TodoContext } from "../Todo";


function RemoveTaskBtn({index}){

    const {handleRemoveTask} = useContext(TodoContext);
    function removeTask(){
        handleRemoveTask(index);
    }
    return (
            <input onClick={removeTask} className="rm-button card-button" type="button" value="🗑️"/>
    )
}

export default RemoveTaskBtn;