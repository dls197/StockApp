import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeMain from './HomeMain'
import '../css/Home.css'
import WelcomeModal from './WelcomeModal'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'



function Home({ loginStatus, loginStatus2, setLoginStatus,
                setLoginStatus2, username, 
                password, setUsername, setPassword,
                showWelcomeModal, setShowWelcomeModal, dowX, 
                dowY, nasdaqX, nasdaqY }) {
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
                loginStatus2 = {loginStatus2}
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
                setLoginStatus = {setLoginStatus}
                setLoginStatus2 = {setLoginStatus2} 
                username = {username} 
                setUsername = {setUsername}
                setPassword = {setPassword} 
                showWelcomeModal = {showWelcomeModal} 
                setShowWelcomeModal = {setShowWelcomeModal} 
            />
            <Navbar />
            <HomeMain
                dowX = {dowX}
                dowY = {dowY}
                nasdaqX = {nasdaqX}
                nasdaqY = {nasdaqY}
            />
            <Footer />
        </div>
    )
}

export default Home