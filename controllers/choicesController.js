// choice model
const ChoiceModel = require('../models/choicesModel.js')


//choice controller

const ChoiceController = {
    //finds all choices
    index: function(req, res){
        ChoiceModel.find().then(choices => {
            res.send({choices})
        })
    },

    // user will be directed to create a choice form
    new: function(req, res){
        res.send()
    },
    // shows one choice
    show: function(req,res){
        ChoiceModel.findById(req.params.choicesId).then(choice => {
            res.send({choice})
        })
    },
    // creates a new choice
    create: function(req,res) {
        newChoice = (req.body)
        ChoiceModel.create(newChoice).then((newChoice) => res.send(newChoice))
    },
    //updates and returns to index.hbs
    update: function(req,res){
        ChoiceModel.findByIdAndUpdate(req.params.choicesId, req.body).then(() => {
            res.send("/choices")
        })
    },
    //deletes and returns to index.hbs
    delete: function(req,res){
        ChoiceModel.findByIdAndRemove(req.params.choicesId).then(() => {
            res.send("/choices")
            })
        }
    }

module.exports = ChoiceController


