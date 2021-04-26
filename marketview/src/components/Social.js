import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function Social({ logOut, username }) {
    return (
        <div>
            <Header 
            title = "Social" 
            username = {username} 
            logOut = {logOut}
            />
            <Navbar />
            <body>
                <h1>Social Page</h1>
            </body>
        </div>
    )
}

export default Social