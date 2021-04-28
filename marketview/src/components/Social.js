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
            
            <h1>Social Page</h1>
        </div>
    )
}

export default Social