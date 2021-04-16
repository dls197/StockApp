import React from 'react'
import Header from './Header'
import Navbar from './Navbar'


function News({ logOut, username }) {
    return (
        <div>
            <Header title = "News" username = {username} logOut = {logOut} />
            <Navbar />
            <body>
                <h1>News Page</h1>
            </body>
        </div>
    )
}

export default News