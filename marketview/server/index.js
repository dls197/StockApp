/*
npm installs required:
express, body-parser, mysql, nodemon, cors
*/

const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Exexxexex2*",
    database: "marketview"
})

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    database.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password], 
        (err, result) => {
            console.log(err)
        }
    )
})

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    database.query(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password], 
        (err, result) => {
            if (err) {
            res.send({err: err})
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({message: "You entered the wrong username/password combination!"})
            }
        }
    )
})

app.post('/searchUser', (req, res) => {
    const searchedUsername = req.body.searchedUsername

    database.query(
        "SELECT username FROM users WHERE username = ?",
        searchedUsername, 
        (err, result) => {
            if (err) {
            res.send({err: err})
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({message: "We don't have this username in our records."})
            }
        }
    )
})

app.post('/addStock', (req, res) => {
    const username = req.body.username
    const tickerSymbol = req.body.tickerSymbol

    database.query("INSERT INTO stocks_followed (username, stock_ticker) VALUES (?, ?)",
    [username, tickerSymbol],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted");
        }
    } 
    )
})

app.post('/insertNewComment', (req, res) => {
    const yourUsername = req.body.username
    const searchedUsername = req.body.searchedUsername
    const comment = req.body.comment
    const dateTime = req.body.dateTime

    database.query("INSERT INTO comments (username, comment, date_time, commenter_username) VALUES (?, ?, ?, ?)",
    [searchedUsername, comment, dateTime, yourUsername],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted");
        }
    } 
    )
})

app.delete('/deleteStock/:username/:tickerSymbol', (req, res) => {
    const username = req.params.username
    const tickerSymbol = req.params.tickerSymbol

    database.query("DELETE FROM stocks_followed WHERE username = ? AND stock_ticker = ?",
    [username, tickerSymbol], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.get('/getStockInfo', (req, res) => {
    const username = req.query.username

    database.query("SELECT stock_ticker FROM stocks_followed WHERE username = ?",
    username, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.get('/getCommentsInfo', (req, res) => {
    const username = req.query.username

    database.query("SELECT * FROM comments WHERE username = ?",
    username, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.get('/getSearchedUserCommentsInfo', (req, res) => {
    const searchedUsername = req.query.searchedUsername

    database.query("SELECT * FROM comments WHERE username = ?",
    searchedUsername, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.get('/getFullName', (req, res) => {
    const username = req.query.username
    
    database.query("SELECT full_name FROM users WHERE username = ?",
    username, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.get('/getBio', (req, res) => {
    const username = req.query.username
    
    database.query("SELECT bio FROM users WHERE username = ?",
    username, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.put('/updateFullName', (req, res) => {
    const username = req.body.username
    const fullName = req.body.fullName

    database.query("UPDATE users SET full_name = ? WHERE username = ?",
    [fullName, username],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.put('/updateBio', (req, res) => {
    const username = req.body.username
    const bio = req.body.bio

    database.query("UPDATE users SET bio = ? WHERE username = ?",
    [bio, username],
    (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
    )
})

app.listen(3001, () => {
    console.log("running on port 3001")
})
