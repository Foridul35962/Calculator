import Navbars from "./navbar";
import Display from "./display";
import items from "./buttonsItem";
import Buttons from "./buttons";
import { useState } from "react";
const App = () => {
  const [input, setInput] = useState("");
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="bg-gray-300 text-black rounded-2xl flex justify-center items-center flex-col p-3 dark:bg-gray-800 dark:text-white w-80">
        <Navbars></Navbars>
        <Display input={input} setInput={setInput}></Display>
        <Buttons pera={items} input={input} setInput={setInput}></Buttons>
      </div>
    </div>
  )
}

export default App;