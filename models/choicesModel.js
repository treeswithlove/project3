const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const choicesSchema = new Schema({
    name: String,
    dilemaId: ObjectId
})

const choicesModel = mongoose.model("choices", choicesSchema)

module.exports = choicesModel