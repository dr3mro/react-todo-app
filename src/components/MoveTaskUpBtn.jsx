function MoveTaskUpBtn({moveUp}){
    return (
        <div>
            <input onClick={moveUp} className="mv-button card-button" type="button" value="👆🏻"/>
        </div>
    )
}
export default MoveTaskUpBtn;