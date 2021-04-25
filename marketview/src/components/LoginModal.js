import react from 'react'
import Modal from 'react-modal'
import '../css/LoginModal.css'


Modal.setAppElement('#root')

function LoginModal({ showLoginModal }) {

    const customStyles = {
        overlay : {
            backgroundColor: 'grey'
        },
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
        <div className = {"loginContainer"}>
            <div className = {"signup"}>
                <h1>Sign Up</h1>
            </div>
        </div>
    )
}