import React from 'react'
import logo from "../Images/logo.png"
import "./style.css"

const Navbar = () => {
  return (
    <nav>
        <div className='left'>
            <img src={logo} alt="LoGo" />
        </div>
        <div className='right'></div>
    </nav>
  )
}

export default Navbar