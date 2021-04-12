import React from 'react'
import Header from './Header'


function MyProfile({ logOut, username }) {
    return (
        <div>
            <Header title = "My Profile" username = {username} logOut = {logOut} />
            <h1>MyProfile Page</h1>
        </div>
    )
}

export default MyProfile