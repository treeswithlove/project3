const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const choicesSchema = new Schema({
    name: String,
    oldPerspective: String
})

const choicesModel = mongoose.model("choices", choicesSchema)

module.exports = choicesModel