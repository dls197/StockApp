import React from 'react'
import Modal from 'react-modal'
import '../css/WelcomeModal.css'


Modal.setAppElement('#root')

function WelcomeModal({ showWelcomeModal, setShowWelcomeModal, setShowLoginModal, setShowSignUpModal }) {

    const customStyles = {
        content : {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
    }
    
    return (
        <div className = {"welcomeModalContainer"}>
        <Modal
                isOpen = {showWelcomeModal}
                shouldCloseOnOverlayClick = {false}
                style = {customStyles}>
            <div className = {"welcomeSign"}>
                <h1>Welcome to MarketView!</h1>
            </div>
            <div className = {"button"}>
                <button onClick = {() => {
                    setShowWelcomeModal(false)
                    setShowLoginModal(true)
                    }}>Log In
                </button>
                <button onClick = {() => {
                    setShowWelcomeModal(false)
                    setShowSignUpModal(true)
                    }}>Sign Up
                </button> 
            </div>
        </Modal>
        </div>
    )
}

export default WelcomeModal