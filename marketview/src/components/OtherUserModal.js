import React from 'react'
import Modal from 'react-modal'
import '../css/showOtherUserModal.css'
import Axios from 'axios'

Modal.setAppElement('#root')

function OtherUserModal({ username, searchedUsername, fetchStock, 
                        xValues, yValues, showOtherUserModal, 
                        setShowOtherUserModal, showStockModal, setShowStockModal }) {

    const customStyles = {
        content : {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    padding: '150px',
                    border: '2px solid black',
                    transform: 'translate(-50%, -50%)'
        }
    }

        return (
            <Modal
                    isOpen = {showOtherUserModal}
                    style = {customStyles}>
                <button id = "stopLooking" onClick = {() => {
                        setShowOtherUserModal(false)
                    }}>Back to User Search
                </button>
            </Modal>
        )
    }

    export default OtherUserModal




















}