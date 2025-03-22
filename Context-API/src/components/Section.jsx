import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

const lolo = useContext(DataContext)

  return (
    <div>Section {lolo.age} </div>
  )
}

export default Section