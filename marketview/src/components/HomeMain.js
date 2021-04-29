import React from 'react'
import Plot from 'react-plotly.js'

function HomeMain( { dowX, dowY, nasdaqX, nasdaqY } ) {
    const mostRecentDow = dowY[0];
    const mostRecentNasdaq = nasdaqY[0];
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
                <h2>Current Dow Jones</h2>
                <h3>${mostRecentDow} USD</h3>
                <Plot
                    data = {[
                        {
                            x: dowX,
                            y: dowY,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                        ]}
                        layout={ {width: 650, height: 397.222} }
                />
            </div>
            <div className="stock-container">
                <h2>Current Nasdaq</h2>
                <h3>${mostRecentNasdaq} USD</h3>
                <Plot
                    data = {[
                        {
                            x: nasdaqX,
                            y: nasdaqY,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                        ]}
                        layout={ {width: 650, height: 397.222} }
                />
            </div>
        </div>
    )
}

export default HomeMain