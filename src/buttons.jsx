const buttons = ({ pera, input, setInput }) => {
    let result= (event)=>{
        const value=event.currentTarget.dataset.value;
        if(value==='AC' || value==='C'){
            setInput("");
        }
        else if(value==='delete'){
            setInput(input.slice(0,-1));
        }
        else if(value==='='){
            try{
                let sum= eval(...input);
                setInput(sum);
            }
            catch{
                setInput("Error");
            }
        }
        else{
            setInput(input+value);
        }
    }
    return (
        <div className="grid grid-cols-4 gap-2 justify-center items-center mt-5">
            {
                pera.map((item, idx) => (
                    <button key={idx} data-value={item.value} className="h-15 w-18 bg-gray-400 shadow-gray-600 border-2 rounded-2xl font-bold text-3xl hover:scale-105 transition-all transform duration-300 active:scale-95 active:bg-blue-500 dark:bg-gray-900" onClick={result}>
                        {item.icon ? <i className={item.icon}></i> : item.name}
                    </button>
                ))
            }
        </div>
    )
}
export default buttons;