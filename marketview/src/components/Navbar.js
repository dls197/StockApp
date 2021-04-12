import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
    const navStyle = {
        color: 'black'
    }


    return (
        <nav className = {"navContainer"}>
            <ul className = {"navElements"}>
                <Link style = {navStyle} to = "/">
                    <li>Home</li>
                </Link>
                <Link style = {navStyle} to = "/news">
                    <li>News</li>
                </Link>
                <Link style = {navStyle} to = "/stocks">
                    <li>Stocks</li>
                </Link>
                <Link style = {navStyle} to = "/myprofile">
                    <li>My Profile</li>
                </Link>
                <Link style = {navStyle} to = "/social">
                    <li>Social</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar