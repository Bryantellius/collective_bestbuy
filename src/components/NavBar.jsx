import React from 'react'
import { NavLink } from "react-router-dom";
import "../client/scss/App.scss"

const navBar = () => {
    return (
        <nav className="navBar">
        
        <NavLink to = "/"
        activeClassName="activeNav"
        className="navLink">
            Home
        </NavLink>
    
        <NavLink to = "/Employees"
        activeClassName="activeNav"
        className="navLink">
        Employees
        </NavLink>
    
        <NavLink to = "/Products"
        activeClassName="activeNav"
        className="navLink">
        Products
        </NavLink>

        <NavLink to = "/Sales"
        activeClassName="activeNav"
        className="navLink">
        Sales
        </NavLink>
        
        
        
        
        </nav>
    )
}

export default navBar