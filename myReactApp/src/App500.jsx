import React, { useState } from "react";

const App = () => {

    const [a , setA] = useState(10); // 'a' is readable element and 'setA' is writable element

    const changeA = () => {
        setA(20); //to change value use the writable element
    }
    return <div>
        <h1>Value of a is {a}</h1>
        <button onClick={changeA}>ChangeA</button>
    </div>

}

export default App;
// // useState is a hook which is used to make a variable in React
// // useState is a function which takes one argument and that is initial value of the variable