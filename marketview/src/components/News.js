import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import '../css/News.css'


function News({ logOut, username, newsData }) {
    // components of elements in newsData include:
    //.category .datetime .headline .id .image .related .source .summary .url
    const article1 = newsData[0];
    const article2 = newsData[1];
    const article3 = newsData[2];
    const article4 = newsData[3];
    const article5 = newsData[4];
    const article6 = newsData[5];
    const article1Time = convert(article1.datetime);
    const article2Time = convert(article2.datetime);
    const article3Time = convert(article3.datetime);
    const article4Time = convert(article4.datetime);
    const article5Time = convert(article5.datetime);
    const article6Time = convert(article6.datetime);

    return (
        <div>
            <Header 
            title = "News" 
            username = {username} 
            logOut = {logOut}
            />
            <Navbar />
            <div className="articles">
                    <section className="articleContent">
                        <div className="articleContent-body">
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article1.headline}</h1>
                                    <p>{article1.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article1.source}</p>
                                        <p className="cardTime">{article1Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article1.url}> 
                                        <img src={article1.image} alt="Article 1 Photograph" />
                                    </a>
                                </div>
                            </div>
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article2.headline}</h1>
                                    <p>{article2.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article2.source}</p>
                                        <p className="cardTime">{article2Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article2.url}> 
                                        <img src={article2.image} alt="Article 2 Photograph" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="articleContent">
                        <div className="articleContent-body">
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article3.headline}</h1>
                                    <p>{article3.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article3.source}</p>
                                        <p className="cardTime">{article3Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article3.url}> 
                                        <img src={article3.image} alt="Article 3 Photograph" />
                                    </a>
                                </div>
                            </div>
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article4.headline}</h1>
                                    <p>{article4.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article4.source}</p>
                                        <p className="cardTime">{article4Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article4.url}> 
                                        <img src={article4.image} alt="Article 4 Photograph" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="articleContent">
                        <div className="articleContent-body">
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article5.headline}</h1>
                                    <p>{article5.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article5.source}</p>
                                        <p className="cardTime">{article5Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article5.url}> 
                                        <img src={article5.image} alt="Article 5 Photograph" />
                                    </a>
                                </div>
                            </div>
                            <div className="articleCard">
                                <div className="cardText">
                                    <h1>{article6.headline}</h1>
                                    <p>{article6.summary}</p>
                                    <div className = "cardSource">
                                        <p>{article6.source}</p>
                                        <p className="cardTime">{article6Time}</p>
                                    </div>
                                </div>
                                <div className="cardImage">
                                    <a href={article6.url}> 
                                        <img src={article6.image} alt="Article 6 Photograph" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        </div>
    )
}

function convert(timeStamp) {
    // Convert timestamp to milliseconds
    var date = new Date(timeStamp*1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = date.getMonth()+1;

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime;
    if (hours > 12) {
        hours -= 12;
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'pm';
    }
    else if (hours === 12) {
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'pm';
    }
    else {
        convdataTime = month+'/'+day+'/'+year+' '+hours + ':' + minutes.substr(-2) + 'am';
    }
    return convdataTime;
}

export default News