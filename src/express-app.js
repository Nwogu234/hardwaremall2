const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const basicRoutes = require('./routes/basicRoutes')

module.exports = async (app) => {
    app.use(cors())

    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('', basicRoutes)
    
}