// dilemma model
const DilemmaModel = require('../models/dilemmaModel.js')


//dilemma controller

const DilemmaController = {
    //finds all dilemmas
    index: function(req, res){
        DilemmaModel.find().then(dilemmas => {
            res.send({dilemmas})
        })
    },
    
    // user will be directed to create a dilemma form
    new: function(req, res){
        res.send()
    },
    // shows one dilemma
    show: function(req,res){
        DilemmaModel.findById(req.params.dilemmaId).then(dilemma => {
            res.send({dilemma})
        })
    },
    // creates a new dilemma
    create: function(req,res) {
        newDilemma = (req.body)
        DilemmaModel.create(newDilemma).then((newDelimma) => res.send(newDelimma))
    },
    //updates
    update: function(req,res){
        DilemmaModel.findByIdAndUpdate(req.params.dilemmaId, req.body).then(() => {
            res.send("/dilemma")
        })
    },
    //deletes
    delete: function(req,res){
        DilemmaModel.findByIdAndRemove(req.params.dilemmaId).then(() => {
            res.send("/dilemma")
            })
        }
    }

module.exports = DilemmaController