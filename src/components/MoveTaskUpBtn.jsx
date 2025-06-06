import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function MoveTaskUpBtn({index}){
    const {handleMoveUp} = useContext(TodoContext);
    function moveUp(){
        handleMoveUp(index);
    }
    return (
            <input onClick={moveUp} className="mv-button card-button" type="button" value="👆🏻"/>
    )
}
export default MoveTaskUpBtn;