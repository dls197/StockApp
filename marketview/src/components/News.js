import React from 'react'
import Header from './Header'


function News({ logOut, username }) {
    return (
        <div>
            <Header title = "News" username = {username} logOut = {logOut} />
            <h1>News Page</h1>
        </div>
    )
}

export default News