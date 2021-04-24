/*
npm installs required:
express, body-parser, mysql, nodemon, cors
*/

const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log("running on port 3001")
})