/*
npm installs required:
express, body-parser, mysql, nodemon, cors
*/

const express = require('express')
const mysql = require('mysql')
const app = express()
const cors = require('cors')

app.use(express.json())

const database = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Exexxexex2*",
    database: "marketview"
})

app.listen(3001, () => {
    console.log("running on port 3001")
})