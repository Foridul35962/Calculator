import { useState } from "react";

const navbar = () => {
    let [isDark,setTheam]= useState(false);
    const changeTheme=()=>{
        document.documentElement.classList.toggle('dark');
        setTheam(!isDark);
    }
    return (
        <div className="m-4 w-full flex items-center justify-between">
            <div className="font-bold text-xl ">Forid Calc</div>
            <div>
                <i className={`fa-solid cursor-pointer transform transition-all duration-300 hover:text-lg active:text-sm ${isDark ? 'fa-sun' : 'fa-moon'}`} onClick={changeTheme}></i>
            </div>
        </div>
    )
}

export default navbar;