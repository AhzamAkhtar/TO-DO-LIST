import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
//import ToDoList from "./TODolists";

const App=()=>{
    const [inputList,setInputList]=useState("")
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }

//hello    
    const deleteItems=(id)=>{
         //console.log("deletes")
         setItems((oldItems)=>{
             return oldItems.filter((arrElem,index)=>{
                 return index!==id;
             })
         })
    }
    const[Items,setItems]=useState([])
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList]
        })
        setInputList("")
    }
    return(
        <>
            <div>
                <div>
                    <br/>
                    <h1>TO DO LIST</h1>
                    <br/>
                    <input type="text" placeholder="ADD A ITEM" onChange={itemEvent} value={inputList}/>
                    <button onClick={listOfItems}>+</button>
                    <ol>
                        {/*<li>{inputList}</li>*/}
                        {Items.map((itemval,index)=>{
                            //return <li>{itemval}</li>
                           return (<ToDoLists key={index} text={itemval} id={index}
                            onSelect={deleteItems}
                           />
                           );
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default App