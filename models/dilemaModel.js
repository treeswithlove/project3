const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const dilemaSchema = new Schema({
    name: String,
    notesThoughts: String
})

const dilemaModel = mongoose.model("dilema", dilemaSchema)

module.exports = dilemaModel