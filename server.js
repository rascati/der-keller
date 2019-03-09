const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(error => console.log(error))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
