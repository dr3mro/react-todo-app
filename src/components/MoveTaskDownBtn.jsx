function MoveTaskDownBtn({moveDown}){
    return (
        <div>
            <input onClick={moveDown} className="mv-button card-button" type="button" value="👇🏻"/>
        </div>
    )
}
export default MoveTaskDownBtn;