const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const choicesSchema = new Schema({
    name: String,
    dilemmaId: ObjectId
})

const choicesModel = mongoose.model("choices", choicesSchema)

module.exports = choicesModel