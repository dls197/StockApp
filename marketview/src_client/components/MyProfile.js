import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function MyProfile({ logOut, username }) {
    return (
        <div>
            <Header title = "My Profile" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
                <h1>MyProfile Page</h1>
            </body>
        </div>
    )
}

export default MyProfile