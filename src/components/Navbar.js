import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/logo.png"
import "./style.css"

const Navbar = () => {
    return (
        <nav>
            <div >
                <div className='left'>
                    <Link to="/">
                    <img src={logo} alt="LoGo" />
                    </Link>
                </div>
                <div className='right'>
                    <Link to="https://amarjeet-portfolio.netlify.app/" className='link'>
                        <h1>Developer Portfolio</h1>
                    </Link>
                    <Link to="https://github.com/amarjeetk123/Link-Shortner-App" className='link'>
                        <h1>Source Code</h1>
                    </Link>
                    <Link to="https://github.com/amarjeetk123/Link-Shortner-App" className='link'>
                        <h1>Github Profile</h1>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar