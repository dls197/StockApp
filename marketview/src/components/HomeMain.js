import React from 'react'

function HomeMain() {
    return(
        <div className="home-content">
            <div className="guide">
                <ul>
                    <li><span className="list-header">News: </span>Check out the latest stock news!</li>
                    <li><span className="list-header">Stocks: </span>Search for stock tickers, view them and add them to your stock folder</li>
                    <li><span className="list-header">MyProfile: </span>View and edit your profile</li>
                    <li><span className="list-header">Social: </span>Search for other users and comment on their profile</li>
                </ul>
            </div>
            <div className="stock-container">
                <h2>Today's Dow Jones</h2>
            </div>
            <div className="stock-container">
                <h2>Today's Nasdaq</h2>
            </div>
        </div>
    )
}

export default HomeMain