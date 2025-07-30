const display=()=>{
    const result=(event)=>{
        if(event.key==='Enter'){
            console.log("Enter prass");
        }
    }
    return (
        <div className="w-full">
            <input type="text" className="bg-white w-full h-14 p-3 text-3xl border-3 border-blue-700 focus:outline-none rounded-2xl dark:bg-gray-900" onKeyDown={result}/>
        </div>
    )
}

export default display;