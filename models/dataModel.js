const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId;


const dataSchema = new Schema({
    proCon: String,
    name: String,
    joy: Number,
    pain: Number,
    importance: Number,
    choicesId: ObjectId
})

const dataModel = mongoose.model("data", dataSchema)

module.exports = dataModel