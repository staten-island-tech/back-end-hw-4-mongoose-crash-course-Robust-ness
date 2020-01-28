const express = require('express')

const app = express()

const mongoose = require('mongoose')

const postsRoute = require('./routes/posts')

const bodyParser = require('body-parser')

const cors = require('cors')

require('dotenv/config')

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected')
})


//Middleware
// app.use('/posts', () => {
//     console.log('middleware')
// })
app.use('/posts', postsRoute)


app.use(bodyParser.json())
   .use(cors())
//ROUTES
// app.get('/', (req, res) => {
//     res.send('hello')
// })

// app.post('/', (req, res) => {
//     res.send('posts')
// })


//Listening

app.listen(3000)