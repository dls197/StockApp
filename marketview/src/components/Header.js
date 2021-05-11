import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from './../images/marketviewlogo.png'

function Header({ title, username, setUsername, setPassword, setShowWelcomeModal, setLoginStatus}) {

    const navStyle = {
        color: 'black'
    }

    const headerTextStyle = {
        color: `aliceblue`
    }

    const logoStyle = {
        margin: `0`,
        position: `absolute`,
        top: `25%`
    }

    const logOut = () => {
        setUsername("")
        setPassword("")
        setShowWelcomeModal(true)
        setLoginStatus("You are Logged Out")
      }

    return (
        <div className = {"headerContainer"} title = "header">
            <Router>
                <Link style= {logoStyle} to = "/">
                    <img src={logo} alt="MarketViewLogo"/>
                </Link>
                <Link style = {headerTextStyle} to = "/">
                    <h1 className = {"headerTitle"}>{title}</h1>
                </Link>
                <Link style = {navStyle} to = "/">
                <button className = {"logOutButton"} title = "logoutButton" onClick = {() => logOut()}>Log Out</button>
                </Link>
                <Link style = {headerTextStyle} to = "/">
                <h5 className ={"loggedInMessage"} title = "currentUser">Logged In: {username}</h5>
                </Link>
            </Router>
        </div>
    )
}

export default Header