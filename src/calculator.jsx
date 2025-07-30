import Navbars from "./navbar";

const calculator = () => {
    return (
        <>
        <div className="bg-gray-300 text-black rounded-sm flex justify-center items-center flex-row dark:bg-gray-800 dark:text-white min-w-sm">
            <Navbars></Navbars>
            {/* <Display></Display>
            <Buttons></Buttons> */}
        </div>
        </>
    )
}

export default calculator;