import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import StockFolder from './StockFolder'
import CommentsDisplay from './CommentsDisplay'
import Personal from './Personal'
import '../css/MyProfile.css'


function MyProfile({ username, setUsername, setPassword, 
                    setShowWelcomeModal, setLoginStatus, fetchStock,
                    xValues, yValues, showStockModal,
                    setShowStockModal }) {
    return (
        <div>
            <Header 
                title = "My Profile" 
                username = {username} 
                setUsername = {setUsername}
                setPassword = {setPassword}
                setShowWelcomeModal = {setShowWelcomeModal}
                setLoginStatus = {setLoginStatus} 
            />
            <Navbar />
            <div className = "profileContainer">
                <StockFolder
                    username = {username}
                    fetchStock = {fetchStock}
                    xValues = {xValues}
                    yValues = {yValues}
                    showStockModal = {showStockModal}
                    setShowStockModal = {setShowStockModal}
                    purpose = "myProfile"
                />
                <CommentsDisplay username = {username} />
                <Personal username = {username} />
            </div>
        </div>
    )
}

export default MyProfile