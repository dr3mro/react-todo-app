
import MoveTaskDownBtn from "./MoveTaskDownBtn";
import MoveTaskUpBtn from "./MoveTaskUpBtn";
import RemoveTaskBtn from "./RemoveTaskBtn";
import TaskDetail from "./TaskDetail";
function TaskCard({index,task,handleMoveUp,handleMoveDown,handleRemoveTask}){

    function moveUp(){
        handleMoveUp(index);
    }

    function moveDown(){
        handleMoveDown(index);
    }

    function removeTask(){
        handleRemoveTask(index);
    }

    return (
        <div className="task-card">
            <TaskDetail task={task}/>
            <RemoveTaskBtn removeTask={removeTask}/> 
            <MoveTaskUpBtn moveUp={moveUp}  /> 
            <MoveTaskDownBtn moveDown={moveDown}/>
        </div>
    )

}export default TaskCard;