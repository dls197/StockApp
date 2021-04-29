import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/Social.css'



function Social({ username, setUsername, setPassword, 
                setShowWelcomeModal, setLoginStatus, xValues,
                yValues, showStockModal, setShowStockModal,
                fetchStock }) {

    const [searchedUsername, setSearchedUsername] = useState("")
    const [showOtherUserModal, setShowOtherUserModal] = useState(false)
    const [searchStatus, setSearchStatus] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        

    }
    
    return (
        <div>
            <Header 
            title = "Social" 
            username = {username} 
            setUsername = {setUsername}
            setPassword = {setPassword}
            setShowWelcomeModal = {setShowWelcomeModal}
            setLoginStatus = {setLoginStatus}
            />
            <Navbar />
            <div className = {"searchContainer"}>
                    <form onSubmit = {handleSubmit}>
                        <div className = {"inputBox"}>
                        <input
                            type = "text"
                            value = {searchedUsername}
                            placeholder = "Search a Username"
                            onChange = {(event) => {
                                setSearchedUsername(event.target.value)
                            }}
                        />
                        <input type = "submit" className = {"submitButton"}/>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Social