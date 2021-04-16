import React from 'react'


function Header({ title, username, logOut }) {

    return (
        <div className = {"headerContainer"}>
            <h1 className = {"headerTitle"}>{title}</h1>
            <button className = {"logOutButton"} onClick = {logOut}>Log Out</button>
            <h5 className ={"loggedInMessage"}>Logged In: {username}</h5>
        </div>
    )
}

export default Header