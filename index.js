const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const registerRouter = require('./routes/registerRouter')


dotenv.config()

const app = express()

app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({extended: false , limit:'20mb'}))

app.get('/', (request, response) => {
    response.send('Listening !')
})

const port = process.env.PORT || 5000

registerRouter(app)

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((error) => console.log(error.message))

