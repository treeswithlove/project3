const express = require('express')
const logger = require('morgan')
const app = express()

//imports routes
const routesIndex = require('./routes/index.js')
const routesMain = require('./routes/main.js')


app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//model routes
app.use('/', routesIndex)
app.use('/main', routesMain)

//local host of heroku listners
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})