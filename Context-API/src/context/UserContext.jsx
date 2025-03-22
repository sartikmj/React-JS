import React, { createContext } from 'react'


//to pass data to all the components, we use the CreateContext , also import it
//we make a Context named DataContext using createContext to pass data to all the components
//exporting it so anyone can use it
export const DataContext = createContext() //exporting data


const UserContext = ( {children} ) =>{
    
// const username = "Sartik"

const userData = {
    username:"Sartik Sharma",
    age:20,
    city:"Agra"
}

    return (
        <div>
            <DataContext.Provider value={userData} > {/* Provide data inside value to all the components written inside it, value={data to be passed}*/}
             {children} 
            </DataContext.Provider>
        </div>
    )
}

export default UserContext;