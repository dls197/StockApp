import React from 'react'
import Modal from 'react-modal'
import '../css/SignupModal.css'
import Axios from 'axios'


Modal.setAppElement('#root')

function SignupModal({ showSignupModal, setShowLoginModal, setShowSignupModal, username, password, setUsername, setPassword}) {

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

    const signUp = () => {
        Axios.post("http://localhost:3001/signup", {
            username: username,
            password: password
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className = {"signupModalContainer"}>
        <Modal
                isOpen = {showSignupModal}
                shouldCloseOnOverlayClick = {false}
                style = {customStyles}>
            <label>Username</label>
            <h1>Sign Up</h1>
            <input 
                type = "text"
                value = {username}
                onChange = {(event) => {
                    setUsername(event.target.value)
                }} 
            />
            <label>Password</label>
            <input 
                type = "text"
                value = {password}
                onChange = {(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button onClick = {() => {signUp()}}>Sign Up</button>
            <button onClick = {() => {
                    setShowSignupModal(false)
                    setShowLoginModal(true)
                    }}> Go To Login
            </button> 
        </Modal>
        </div>
    )
}

export default SignupModal