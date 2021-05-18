const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')
const corsMiddleware = require('./middleware/cors.middleware')

const PORT = config.get('port') || 5000
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

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/user', require('./routes/user.routes'))

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

async function start() {
    try{
        await mongoose.connect(config.get('mongoUri'), connectionParams)

        app.listen(PORT, () => console.log(`App has been started ob port ${PORT}...`))
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

start()

