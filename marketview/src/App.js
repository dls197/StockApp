import './App.css'
import Home from './components/Home'
import News from './components/News'
import Stocks from './components/Stocks'
import MyProfile from './components/MyProfile'
import Social from './components/Social'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  const finnhubApiKey = process.env.REACT_APP_FINNHUB_API_KEY;
  const [loginStatus, setLoginStatus] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsData, setNewsData] = useState([]); //variable to store newsData
  const [showWelcomeModal, setShowWelcomeModal] = useState(true)
  const [searchTerm, setSearchTerm] = useState("") //the ticker symbol they search for
  const [xValues, setXValues] = useState([]) //dates fetched from api
  const [yValues, setYValues] = useState([]) //prices fetched from api
  const [showStockModal, setShowStockModal] = useState(false) //decide whether to show the stock graph modal or not


  //API Call for sending news article info
  const getNewsData = async () => {
    await fetch(`https://finnhub.io/api/v1/news?category=general&token=${finnhubApiKey}`)
            .then(Response => Response.json())
            .then(data => setNewsData(data));
  }
  
  //API Call for fetching stocks info

  function fetchStock(ticker) {
    const apiKey = "BFW1POG1RFAENYS8"
    let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
    let futureXVals = []
    let futureYVals = []

    fetch(apiCall)
        .then(response => response.json())
        .then(response => {
            for (const item in response['Time Series (Daily)']) {
                futureXVals.push(item);
                futureYVals.push(response['Time Series (Daily)'][item]['1. open']);
            }

            setXValues(futureXVals)
            setYValues(futureYVals)
        })
    }

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <Router>
      <div className = "app">
        <Switch>
          <Route 
          path = "/" exact
          render = {(props) => <Home 
                                  {...props} 
                                  username = {username}
                                  password = {password}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  loginStatus = {loginStatus}
                                  setLoginStatus = {setLoginStatus}
                                  showWelcomeModal = {showWelcomeModal}
                                  setShowWelcomeModal = {setShowWelcomeModal} 
                                />}
          />
          <Route 
          path = "/news"
          render = {(props) => <News 
                                  {...props}                        
                                  username = {username} 
                                  newsData = {newsData}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  setShowWelcomeModal = {setShowWelcomeModal}
                                  setLoginStatus = {setLoginStatus} 
                                />}
          />
          <Route 
          path = "/stocks"
          render = {(props) => <Stocks 
                                  {...props} 
                                  username = {username}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  setShowWelcomeModal = {setShowWelcomeModal}
                                  setLoginStatus = {setLoginStatus}
                                  searchTerm = {searchTerm}
                                  setSearchTerm = {setSearchTerm}
                                  xValues = {xValues}
                                  yValues = {yValues}
                                  showStockModal = {showStockModal}
                                  setShowStockModal = {setShowStockModal}
                                  fetchStock = {fetchStock} 
                                />}
          />
          <Route 
          path = "/myprofile"
          render = {(props) => <MyProfile 
                                  {...props} 
                                  username = {username}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  setShowWelcomeModal = {setShowWelcomeModal}
                                  setLoginStatus = {setLoginStatus}
                                  fetchStock = {fetchStock}
                                  xValues = {xValues}
                                  yValues = {yValues}
                                  showStockModal = {showStockModal}
                                  setShowStockModal = {setShowStockModal} 
                                />}
          />
          <Route 
          path = "/social"
          render = {(props) => <Social 
                                  {...props} 
                                  username = {username}
                                  setUsername = {setUsername}
                                  setPassword = {setPassword}
                                  setShowWelcomeModal = {setShowWelcomeModal}
                                  setLoginStatus = {setLoginStatus} 
                                />}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
