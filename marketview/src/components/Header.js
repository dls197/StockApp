import React from 'react'
import logo from './../images/marketviewlogo.png'

function Header({ title, username, setUsername, 
                  setPassword, setShowWelcomeModal, setLoginStatus,
                  setLoginStatus2}) {

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
        setLoginStatus("")
        setLoginStatus2("You are Logged Out")
      }

    return (
        <div className = {"headerContainer"} title = "header">
            <img src={logo} style= {logoStyle} alt="MarketViewLogo"/>
            <h1 className = {"headerTitle"} style = {headerTextStyle}>{title}</h1>
            <a href = "/" ><button style = {navStyle} className = {"logOutButton"} title = "logoutButton" onClick = {logOut}>Log Out</button></a>     
            <h5 className ={"loggedInMessage"} style = {headerTextStyle} title = "currentUser">Logged In: {username}</h5>
        </div>
    )
}

export default Header