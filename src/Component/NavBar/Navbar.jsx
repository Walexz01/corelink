import React, { useState } from 'react'
import './Navbar.css'
import {VscThreeBars} from 'react-icons/vsc'
import {IoCloseSharp} from 'react-icons/io5'



const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    <nav className='nav-bar'>
      <div className="container nav__container">
        {/*=========================== Logo =========================== */}
          <div onClick={()=> setIsNavShowing(false)} className="logo">Wale<span>xz</span></div>
          <ul className={`links ${isNavShowing? 'show-nav':'hide-nav' }`}>
              <li onClick={()=> setIsNavShowing(prevState => !prevState)}> <a href="#">Home</a> </li>
              <li onClick={()=> setIsNavShowing(prevState => !prevState)}> <a href="#">Services</a> </li>
              <li onClick={()=> setIsNavShowing(prevState => !prevState)}> <a href="#">Courses</a> </li>
              <li onClick={()=> setIsNavShowing(prevState => !prevState)}> <a href="#">Contact</a> </li>
              <li onClick={()=> setIsNavShowing(prevState => !prevState)}> <a href="#">About</a></li>
          </ul>
          <div onClick={()=> setIsNavShowing(prevState => !prevState)} className="toggle-btn">
            {
              isNavShowing?  <IoCloseSharp/> : <VscThreeBars/>
            }
          </div>
          </div>

    </nav>
  )
}

export default Navbar