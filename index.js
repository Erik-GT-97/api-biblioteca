const express = require('express')

const app = express()

app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({extended: false , limit:'20mb'}))


app.listen(8080, () => console.log('Listening !'))