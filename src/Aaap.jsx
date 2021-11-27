import React, { useState } from "react";
const ToDOList=()=>{
    const [num,setNum]=useState(0)
    const incNum=()=>{
        setNum(num+1)
    }
    const decNum=()=>{
        if(num>0){
            setNum(num-1)
        }else{
            alert("ABE SAALE")
            setNum(0)
        }
    }
    return(
        <>
            <div>
                <div>
                    <h1>{num}</h1>
                    <div>
                        <button onClick={incNum}>INC</button>
                        <button onClick={decNum}>DECS</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToDOList