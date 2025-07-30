import Navbars from "./navbar";
import Display from "./display";

const calculator = () => {
    return (
        <>
        <div className="bg-gray-300 text-black rounded-2xl flex justify-center items-center flex-col p-3 dark:bg-gray-800 dark:text-white min-w-sm">
            <Navbars></Navbars>
            <Display></Display>
            {/* <Buttons></Buttons> */}
        </div>
        </>
    )
}

export default calculator;