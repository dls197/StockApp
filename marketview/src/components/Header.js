import React from 'react'


function Header({ title, username, isLoggedIn, logIn, logOut }) {

    let logInOrOut = isLoggedIn ? "Log Out" : "Log In"

    return (
        <div className = {"headerContainer"}>
            <h1 className = {"headerTitle"}>{title}</h1>
            <button className = {"log"} onClick = {isLoggedIn ? logOut : logIn}>{logInOrOut}</button>
            <h4 className ={"loggedInMessage"}>Logged In: {username}</h4>
        </div>
    )
}

export default Header