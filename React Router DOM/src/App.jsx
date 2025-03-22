import React from 'react'
import {Route , Routes} from 'react-router-dom' //importing Routes from react-router-dom
import About from './pages/About.jsx' 
import Contact from './pages/Contact.jsx' 
import Product from './pages/Product.jsx'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

//to intall react-router-dom , in terminal write , npm i react-router-dom

const App = () => {
  //React Router DOM is a library that provides routing features to React
  //In terminal write , npm i react-router-dom
  //Wrap <App /> with <BrowserRouter> in main.jsx
  //Import Routes from react-router-dom
  //make Routes using <Routes> inside App.jsx
  return (
    <div>
      <Header />
      {/* while changing Routes only written below will change and reload , while what written above above will not get reload when changing routes */}
      <Routes> {/* <Routes> is container of all the Route */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />}/>
      </Routes>
    </div>
  )
}

export default App