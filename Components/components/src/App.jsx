import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// If you are making a component the file name sho

const App = () => {
    // Fragements(empty tags) instead of using div use <> </>
    return (
        <>
            <Navbar />
            <Header />
            <Footer />
        </>
    )
}

export default App