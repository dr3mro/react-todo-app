
import { useContext } from "react";
import { TodoContext } from "../Todo";

function MoveTaskDownBtn({index}){
    
    const {handleMoveDown} = useContext(TodoContext);
    
    function moveDown(){
        handleMoveDown(index);
    }

    return (
            <input onClick={moveDown} className="mv-button card-button" type="button" value="👇🏻"/>
    )
}
export default MoveTaskDownBtn;