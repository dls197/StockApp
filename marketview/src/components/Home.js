import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import HomeMain from './HomeMain'
import '../css/Home.css'
import '../css/HomeModal.css'
import WelcomeModal from './WelcomeModal'
import LoginModal from './LoginModal'



function Home({ loginStatus, logOut, username, password, setUsername, setPassword }) {
    const [showWelcomeModal, setShowWelcomeModal] = useState(true)
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [showSignUpModal, setShowSignUpModal] = useState(false)

    return (
        <div className="home-container">
            <WelcomeModal 
                showWelcomeModal = {showWelcomeModal}
                setShowWelcomeModal = {setShowWelcomeModal}
                setShowLoginModal = {setShowLoginModal}
                setShowSignUpModal = {setShowSignUpModal}
            />
            <LoginModal
                showLoginModal = {showLoginModal}
                setShowLoginModal = {setShowLoginModal}
                setShowSignUpModal = {setShowSignUpModal}
                username = {username}
                password = {password}
                setUsername = {setUsername}
                setPassword = {setPassword}
                loginStatus = {loginStatus}
            />
            <Header title = "Home" username = {username} logOut = {logOut} />
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