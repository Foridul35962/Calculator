import { useState } from "react";

const navbar = () => {
    const changeTheme=()=>{
        document.documentElement.classList.toggle('dark');
    }
    return (
        <div className="m-4 w-full flex items-center justify-between">
            <div>Calc</div>
            <div>
                <i className="fa-solid fa-moon" onClick={changeTheme}></i>
                {/* <i className="fa-solid fa-sun"></i> */}
            </div>
        </div>
    )
}

export default navbar;