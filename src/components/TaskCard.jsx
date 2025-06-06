
import MoveTaskDownBtn from "./MoveTaskDownBtn";
import MoveTaskUpBtn from "./MoveTaskUpBtn";
import RemoveTaskBtn from "./RemoveTaskBtn";
import TaskDetail from "./TaskDetail";

function TaskCard({task,index}){
    return (
        <div className="task-card">
            <TaskDetail task={task}/>
            <RemoveTaskBtn index={index}/> 
            <MoveTaskUpBtn index={index}/> 
            <MoveTaskDownBtn index={index}/>
        </div>
    )

}export default TaskCard;