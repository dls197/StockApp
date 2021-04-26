import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function Social({ username, setUsername, setPassword, setShowWelcomeModal, setLoginStatus }) {
    return (
        <div>
            <Header 
            title = "Social" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus}
            />
            <Navbar />
            <body>
                <h1>Social Page</h1>
            </body>
        </div>
    )
}

export default Social