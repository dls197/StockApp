import React from 'react'
import Modal from 'react-modal'
import '../css/LoginModal.css'
import Axios from 'axios'


Modal.setAppElement('#root')

function LoginModal({ username, password, loginStatus, setLoginStatus, showLoginModal, setShowLoginModal, setShowSignUpModal }) {

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
    
    const logIn = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message)
          } else {
            setLoginStatus(response.data[0].username)
          }
        })
    }

    return (
        <div className = {"loginModalContainer"}>
        <Modal
                isOpen = {showLoginModal}
                shouldCloseOnOverlayClick = {false}
                style = {customStyles}>
            <h1>Log In</h1>
            <label>Username</label>
            <input type = "text" />
            <label>Password</label>
            <input type = "text" />
            <button onClick = {() => {
                logIn()
            }
            }>Log In
            </button>
            <button onClick = {() => {
                    setShowLoginModal(false)
                    setShowSignUpModal(true)
                    }}> To Sign Up
            </button> 
        </Modal>
        </div>
    )
}

export default LoginModal