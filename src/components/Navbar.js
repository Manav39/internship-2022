import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/images/logo.png'
import search from '../assets/images/search-icon.png'
const Navbar = () => {
  return (
    <div className="nav">
      <ul className='nav-container'>
      <li><Link to="/" className='nav-item-1 logo-with-text'><img src={logo}/>PET WEBSITE</Link></li> 
      <li><Link to="/" className='nav-item'>HOME</Link></li>
      <li><Link to="/service" className='nav-item'>SERVICE</Link></li>
      <li><Link to="/gallery" className='nav-item'>PET'S GALLERY</Link></li>
      <li><Link to="/clinic" className='nav-item'>CLINIC</Link></li>
      <li><Link to="/contact" className='nav-item'>CONTACT</Link></li>
      <li><Link to="/buy" className='nav-item'>BUY NOW</Link></li>
      <li><Link to="/" className='nav-item'><img src={search} className='search-img'/></Link></li>
      <li><Link to="/buy" className='nav-item'>CALL: +91 9999999999</Link></li>
      </ul>
    </div>
  )
}

export default Navbar