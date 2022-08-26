import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <div className='homepage'>
                <Link className='text' to="/login">Login</Link>
                <Link className='text' to="/register">Register</Link>
                {/* <Link className='text' to="/dashboard" >Dashboard</Link> */}
            </div>
        </div>

    )
}

export default Navbar