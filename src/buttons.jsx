const buttons = ({ pera }) => {
    return (
        <div className="grid grid-cols-4 gap-2 justify-center items-center mt-5">
            {
                pera.map((item, idx) => (
                    <button key={idx} className="h-18 w-22 bg-gray-400 shadow-gray-600 border-2 rounded-2xl font-bold text-3xl hover:scale-105 transition-all transform duration-300 active:scale-95 active:bg-blue-500 dark:bg-gray-900">
                        {item.icon ? <i className={item.icon}></i> : item.name}
                    </button>
                ))
            }
        </div>
    )
}

export default buttons;