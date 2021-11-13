import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-charcoal p-4 text-center font-source-sans text-gray-50'>
            <Link to='/'>
                <h3 className='text-3xl font-normal'>
                    <span className='font-semibold'>
                        COVID-Tracker
                    </span>ata{" "}
                    <i className='fas fa-viruses'/>
                </h3>
            </Link>

            <p className='text-sm font-light mt-1'>
                All in one dashboard for statistics
            </p>
        </div>
    )
}

export default Navbar
