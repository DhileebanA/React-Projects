import { useState } from "react";
import { Menu } from "../../Menu";

export function AddSubReset(){
    const[count,setCount]=useState(0);
    return(
        <>
            <div className="text-center">
                <h1 className="text-primary">{count}</h1>
                <div>
                    <button className="btn btn-success" onClick={()=>{setCount(count+1)}}>Add</button>
                    <button className="btn btn-danger" onClick={()=>{setCount(count-1)}}>Sub</button>
                    <button className="btn btn-primary" onClick={()=>{setCount(count*0)}}>Reset</button>
                </div>
            </div>
        </>
    );
}