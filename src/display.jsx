import { useState } from "react";

const Display=()=>{
    let [input,setInput]=useState("");
    const result=(event)=>{
        if(event.key==='Enter'){
            try{
                let equal=eval(event.target.value);
                setInput(equal);
            }
            catch{
                setInput("Error");
            }
        }
    }
    return (
        <div className="w-full">
            <input type="text" className="bg-white w-full h-14 p-3 text-3xl border-3 border-blue-700 focus:outline-none rounded-2xl dark:bg-gray-900" value={input} onKeyDown={result} onChange={(e)=>setInput(e.target.value)}/>
        </div>
    )
}

export default Display;