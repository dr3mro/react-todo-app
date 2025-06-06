import TaskCard from "./TaskCard";


function TaskList({tasks,handleMoveUp,handleMoveDown,handleRemoveTask}){
    return (
        <div className="task-list">
            {tasks.map((task,index) => 
            <TaskCard 
                key={index}
                index={index} 
                task={task} 
                handleMoveUp={handleMoveUp} 
                handleMoveDown={handleMoveDown} 
                handleRemoveTask={handleRemoveTask}/>)}
        </div>
    )
}
export default TaskList;