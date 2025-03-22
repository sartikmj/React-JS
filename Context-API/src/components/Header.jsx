import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'


const Header = () => {

    const name = useContext(DataContext) //useContext is used to get the data from the DataContext


    return (
        <div>Header {name.username} </div>
    )
}

export default Header