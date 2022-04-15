const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const bp = require('body-parser')
const authRoute = require('./routes/authRoute')
const postRoute = require('./routes/postRoute')

const app = express()

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
//routes
app.use('/api/auth',authRoute)
app.use('/api/post',postRoute)


const PORT = config.get('port') || 5000
const mongoURI = config.get('mongoURI')

async function start() {
    try {
        await mongoose.connect(mongoURI)
        app.listen(PORT,() => console.log('Server has been started on port: '+PORT))
    } catch(e) {
        console.log('Server error: '+e.message)
    }
}

start()

