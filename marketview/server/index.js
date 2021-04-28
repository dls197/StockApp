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

app.listen(3001, () => {
    console.log("running on port 3001")
})
