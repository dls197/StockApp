import React from 'react'


function Navbar() {
    return (
        <nav className = {"navContainer"}>
            <ul className = {"navElements"}>
                <li>Home</li>
                <li>News</li>
                <li>Stocks</li>
                <li>My Profile</li>
                <li>Social</li>
            </ul>
        </nav>
    )
}

export default Navbar