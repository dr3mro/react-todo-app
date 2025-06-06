import { useContext } from "react";
import { TodoContext } from "../Todo";
import TaskCard from "./TaskCard";

function TaskList(){

    const {tasks} = useContext(TodoContext);
    
    return (
        <div className="task-list">
            {tasks.map((task,index) => 
            <TaskCard 
                key={index}
                index={index} 
                task={task}/>)}
        </div>
    )
}
export default TaskList;