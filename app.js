const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const corsMiddleware = require('./middleware/cors.middleware')
const path = require('path')

const PORT = process.env.PORT || config.get('port')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
        optionsSuccessStatus: 200
    })
);
app.use(corsMiddleware)

app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI, connectionParams)

        app.listen(PORT, () => console.log(`App has been started ob port ${PORT}...`))
    } catch (e) {
        console.log(e)
        process.exit(1)
    }
}

start()

