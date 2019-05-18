const express = require('express')
const logger = require('morgan')
const app = express()

//imports routes
const routesChoices = require('./routes/choicesRoutes.js')
const routesDilemma = require('./routes/dilemmaRoutes.js')


app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//model routes
app.use('/dilemma', routesDilemma)
app.use('/dilemma/:dilemmaId/choices', routesChoices)

app.use(express.static(`${__dirname}/client/build`))
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

//local host of heroku listners
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('App is up and running on port ' + PORT)
})