function RemoveTaskBtn({removeTask}){
    return (
            <input onClick={removeTask} className="rm-button card-button" type="button" value="🗑️"/>
    )
}

export default RemoveTaskBtn;