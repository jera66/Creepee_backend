//////////////////////////////////
// Dependencies
/////////////////////////////////
//Getting .env variables
require('dotenv').config()
//Pulling PORT from .env, giving it a default of 3002 (object destructuring)
const { PORT = 3002, DATABASE_URL } = process.env
//Importing express
const express = require('express')
//Creating  the application object
const app = express()
//Importing mongoose
const mongoose = require('mongoose')
//Importing middleware
const cors = require('cors')
const morgan = require('morgan')

/////////////////////////////////
// Database Connection
////////////////////////////////
//Establishing connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

//Connection Events
mongoose.connection
  .on('open', () => console.log('You are connected to Mongo'))
  .on('close', () => console.log('You are disconnected from Mongo'))
  .on('error', error => console.log(error))

//////////////////////////////
// Models
//////////////////////////////



////////////////////////////////
// Routes
////////////////////////////////
//Setting up a test route
app.get('/', (req, res) => {
  res.send('Hello World!')
})


/////////////////////////////////
// Server Listener
/////////////////////////////////
app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`)
})
