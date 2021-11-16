import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './screens/Dashboard'
import Region from './screens/Region'

function App() {
    return (
        <div className='font-source-sans'>
            <Navbar/>
            <Dashboard/>
            

            <Footer/>
        </div>
    )
}

export default App