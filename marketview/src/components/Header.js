import React from 'react'
import Navbar from './Navbar'


function Header({ title, username, logOut }) {

    return (
        <div className = {"headerContainer"}>
            <h1 className = {"headerTitle"}>{title}</h1>
            <button className = {"logOutButton"} onClick = {logOut}>Log Out</button>
            <h5 className ={"loggedInMessage"}>Logged In: {username}</h5>
            <Navbar />
        </div>
    )
}

export default Header