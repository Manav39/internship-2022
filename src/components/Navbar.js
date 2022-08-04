import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.png'
import search from '../assets/images/search-icon.png'
const Navbar = () => {
  return (
    <>
    <div className="topbar">
      <ul className='topbar-container'>
      <li><Link to="/" className='nav-item-1 logo-with-text'><img src={logo} alt="Navbar"/>PET WEBSITE</Link></li> 
      <li><Link to="/" className='item-2 '>HOME</Link></li>
      <li><Link to="/service" className='item-2'>SERVICE</Link></li>
      <li><Link to="/gallery" className='item-2'>PET'S GALLERY</Link></li>
      <li><Link to="/clinic" className='item-2'>CLINIC</Link></li>
      <li><Link to="/contact" className='item-2'>CONTACT</Link></li>
      <li><Link to="/buy" className='item-2'>BUY NOW</Link></li>
      <li><Link to="/" className='item-2'><img src={search} className='search-img' alt="Navbar-img"/></Link></li>
      <li><Link to="/buy" className='item-2'>CALL: +91 9999999999</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar