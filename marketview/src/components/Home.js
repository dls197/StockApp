import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeMain from './HomeMain'
import '../css/Home.css'
import WelcomeModal from './WelcomeModal'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'



function Home({ loginStatus, setLoginStatus, logOut, username, password, setUsername, setPassword, showWelcomeModal, setShowWelcomeModal }) {
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignupModal, setShowSignupModal] = useState(false)

    return (
        <div className="home-container">
            <WelcomeModal 
                showWelcomeModal = {showWelcomeModal}
                setShowWelcomeModal = {setShowWelcomeModal}
                setShowLoginModal = {setShowLoginModal}
                setShowSignupModal = {setShowSignupModal}
            />
            <LoginModal
                showLoginModal = {showLoginModal}
                setShowLoginModal = {setShowLoginModal}
                setShowSignupModal = {setShowSignupModal}
                username = {username}
                password = {password}
                setUsername = {setUsername}
                setPassword = {setPassword}
                loginStatus = {loginStatus}
                setLoginStatus = {setLoginStatus}
            />
            <SignupModal
                showSignupModal = {showSignupModal}
                setShowLoginModal = {setShowLoginModal}
                setShowSignupModal = {setShowSignupModal}
                username = {username}
                password = {password}
                setUsername = {setUsername}
                setPassword = {setPassword}
            />
            <Header 
                title = "Home" 
                username = {username} 
                logOut = {logOut} 
                showWelcomeModal = {showWelcomeModal} 
                setShowWelcomeModal = {setShowWelcomeModal} 
            />
            <Navbar />
                {/* <Modal isOpen={true}>
                    <h1 className = "title">Welcome to MarketView</h1>
                    <h2>Modal title</h2>
                    <p>Modal Body</p>
                </Modal> */}
                <HomeMain />
            <Footer />
        </div>
    )
}

export default Home