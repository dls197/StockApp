import React from 'react'
import Header from './Header'


function Social({ logOut, username }) {
    return (
        <div>
            <Header title = "Social" username = {username} logOut = {logOut} />
            <h1>Social Page</h1>
        </div>
    )
}

export default Social