import Navbars from "./navbar";
import Display from "./display";
import items from "./buttonsItem";
import Buttons from "./buttons";
const calculator = () => {
    return (
        <>
        <div className="bg-gray-300 text-black rounded-2xl flex justify-center items-center flex-col p-3 dark:bg-gray-800 dark:text-white w-80">
            <Navbars></Navbars>
            <Display></Display>
            <Buttons pera={items}></Buttons>
        </div>
        </>
    )
}

export default calculator;