import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search-icon.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="top-portion"></div>
      <div className=" navbar">
        <div className="nav-container">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="logo-with-text nav-item-1 topbar-container"
            onClick={handleClick}
          >
            <table>
              <tr>
                <td style={{ paddingLeft: "50px" }}>
                  <img src={logo} alt="Navbar" />
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: "21.5px" }}>PET WEBSITE</td>
              </tr>
            </table>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                SERVICE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                PET'S GALLERY
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/clinic"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                CLINIC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/buy"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                BUY NOW
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                <img src={search} className="search-img" alt="Navbar-img" />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/buy"
                activeClassName="active"
                className=" nav-links"
                onClick={handleClick}
              >
                CALL: +91 9999999999
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
