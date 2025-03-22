import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

    const username = useContext(DataContext)

  return (
    <div>Footer {username.city} </div>
  )
}

export default Footer