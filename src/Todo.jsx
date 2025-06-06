import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Title from './components/Title';


function Todo(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function handleTaskInput(e){
        setTask(e.target.value);
        console.log(task);  
    }

    function handleAddTask(e){
        e.preventDefault();
        if (!task.trim()) return;
        setTasks((tasks) => {return [...tasks, task]});
        setTask("");
    }
    function handleRemoveTask(index){
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
    function handleMoveUp(index){
        if(index === 0) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
        setTasks(newTasks);
    }
    function handleMoveDown(index){
        console.log(index);
        if(index === tasks.length - 1) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        setTasks(newTasks);
    }

    return (
        <div className="todo">
            <Title/>
            <TaskInput task={task} handleTaskInput={handleTaskInput} handleAddTask={handleAddTask}/>
            <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown}/>
        </div>
    )
}

export default Todo;