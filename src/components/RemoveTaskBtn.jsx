function RemoveTaskBtn({removeTask}){
    return (
        <div>
            <input onClick={removeTask} className="rm-button card-button" type="button" value="🗑️"/>
        </div>
    )
}

export default RemoveTaskBtn;