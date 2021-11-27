import React from "react"


const ToDoLists=(props)=>{
    return(
    <>
        <div>
        <i class="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id)
        }}
        />   
        <li>{props.text}</li>
        </div>
    </>
    )
}
export default ToDoLists;