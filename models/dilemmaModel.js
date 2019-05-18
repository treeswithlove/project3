const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const DilemmaSchema = new Schema({
    name: String,
    notesThoughts: String
})

const DilemmaModel = mongoose.model("dilemma", DilemmaSchema)

module.exports = DilemmaModel