import React, { useState } from "react";

function App(){
  //Everything is to be written inside this App function 
  //Everything to show on screen is to be written inside return 

  // function abc(){
  //   console.log("Hello");
  // }

  // const changeUser = () => {
  //   user = "Kannu";
  // }

  // const age = 20;
  // let name = "Sartik";

  // Variables of React , called State and are made and manipulated by useState Hook

  // Two way Binding
  
  const submitHandler = (e)=>{
    e.preventDefault(); //Prevent the default behaviour of form submission i.e. page reload

    console.log(username)

    setusername(''); //To clear the input field after submission
  }

    const [username , setusername] = useState('')

    return <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <input value={username} onChange={(e)=>{
            setusername(e.target.value);
          }} type="text" className="input" placeholder="Enter your name"/>
          <button className="btn">Submit</button>
          
        </form>
    </div>

}

export default App;

// Hooks -> Hooks are special type of functions 