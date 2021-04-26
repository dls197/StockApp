import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function MyProfile({ username, setUsername, setPassword, setShowWelcomeModal, setLoginStatus }) {
    return (
        <div>
            <Header 
            title = "My Profile" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus} 
            />
            <Navbar />
            <body>
                <h1>MyProfile Page</h1>
            </body>
        </div>
    )
}

export default MyProfile