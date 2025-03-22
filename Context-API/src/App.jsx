import React, {useContext} from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { DataContext } from './context/UserContext'

const App = () => {
  // Context API is used to centralize the data.
  // It is used to pass the data to the component tree without passing the props down manually at every level.

  //first wrap the app in <UserContext> in main.jsx
  //then import useContext from react
  //then import the UserContext from wherever u made it
  //then use the useContext hook to access the data from the UserContext
  //then use the data in the component

  //Now <App /> is child of UserContext, so the data written on UserContext will be visible on screen not the 
  //data written on App component
  //To reneder App, we pass an object or props in the UserContext and as App is child of UserContext, 
  // we can access the data of App by that prop or object.


  //to use the context data provided by DataProvider  , also import it 
  const data = useContext(DataContext) // receiving data ,  from DataContext made by createContext
  console.log(data); //you will get the data on console
  return (
    <div>
      <h1>This is App {data.username} </h1>

      <Header />
      <Section />
      <Footer />
    </div>
  )
}

export default App