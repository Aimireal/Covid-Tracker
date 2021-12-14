import { Routes, Route, Navigate } from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './screens/Dashboard'
import Cases from './screens/Cases'
import Deaths from './screens/Deaths'
import Region from './screens/Region'

function App() {
    return (
        <div className='font-source-sans'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/uk/cases' element={<Cases/>} exact/>
                <Route path='/uk/deaths' element={<Deaths/>} exact/>
                <Route path='/region/:id' element={<Region/>}/>
                <Route path="/" render={() => <Navigate to={<Dashboard/>} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App