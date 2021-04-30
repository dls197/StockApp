import React from 'react'
import Modal from 'react-modal'
import StockFolder from './StockFolder'
import '../css/OtherUserModal.css'
import OtherUserCommentsDisplay from './OtherUserCommentsDisplay'
import OtherUserPersonal from './OtherUserPersonal'


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
                    width: '90%',
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
                <div className = "theBigDiv">
                    <div className = "searchedUserPersonal">
                    <OtherUserPersonal searchedUsername = {searchedUsername} />
                    </div>
                    <div className = "profileContainer">
                        <StockFolder
                            username = {searchedUsername}
                            fetchStock = {fetchStock}
                            xValues = {xValues}
                            yValues = {yValues}
                            showStockModal = {showStockModal}
                            setShowStockModal = {setShowStockModal}
                            purpose = "social"
                        />
                        <OtherUserCommentsDisplay
                            yourUsername = {username}
                            searchedUsername = {searchedUsername}
                        />
                    </div>
                </div>
                <button id = "stopLooking" onClick = {() => {
                        setShowOtherUserModal(false)
                    }}>Back to User Search
                </button>
            </Modal>
        )
    }

    export default OtherUserModal




















