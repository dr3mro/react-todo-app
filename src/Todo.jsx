import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Title from './components/Title';


function Todo(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if(tasks){
            setTasks(tasks);
        }
    }, []);

    function handleTaskInput(e){
        setTask(e.target.value);
    }

    function handleAddTask(e){
        e.preventDefault();
        if (!task.trim()) return;
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        setTask("");
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    function handleRemoveTask(index){
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    function handleMoveUp(index){
        if(index === 0) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
        setTasks(newTasks);
    }
    function handleMoveDown(index){
        if(index === tasks.length - 1) return;
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        setTasks(newTasks);
    }

    return (
        <div className="todo">
            <Title/>
            <TaskList tasks={tasks} handleRemoveTask={handleRemoveTask} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown}/>
            <TaskInput task={task} handleTaskInput={handleTaskInput} handleAddTask={handleAddTask}/>
        </div>
    )
}

export default Todo;