import React from 'react'
import { Link } from 'react-router-dom'

function Header({ title, username, setUsername, setPassword, setShowWelcomeModal, setLoginStatus}) {

    const navStyle = {
        color: 'black'
    }

    const logOut = () => {
        setUsername("")
        setPassword("")
        setShowWelcomeModal(true)
        setLoginStatus("You are Logged Out")
      }

    return (
        <div className = {"headerContainer"}>
            <h1 className = {"headerTitle"}>{title}</h1>
            <Link style = {navStyle} to = "/">
            <button className = {"logOutButton"} onClick = {() => logOut()}>Log Out</button>
            </Link>
            <h5 className ={"loggedInMessage"}>Logged In: {username}</h5>
        </div>
    )
}

export default Header