// dilema model
const dilemaModel = require('../models/dilemaModels.js')


//Dilema controller

const dilemaController = {
    //finds all dilemas
    index: function(req, res){
        dilemaModel.find().then(dilema => {
            res.send({dilema})
        })
    },
//come back to this
    // user will be directed to create a dilema form
    new: function(req, res){
        res.send()
    },
    // shows one dilema
    show: function(req,res){
        dilemaModel.findById(req.params.dilemaId).then(dilema => {
            res.send({dilema})
        })
    },
    // creates a new dilema
    create: function(req,res) {
        newdilema = (req.body)
        dilemaModel.create(newdilema).then(() => res.redirect("/dilemas"))
    },
    //updates and returns to index.hbs
    update: function(req,res){
        dilemaModel.findByIdAndUpdate(req.params.dilemaId, req.body).then(() => {
            res.redirect("/dilemas")
        })
    },
    //deletes and returns to index.hbs
    delete: function(req,res){
        dilemaModel.findByIdAndRemove(req.params.dilemaId).then(() => {
            res.redirect("/dilemas")
            })
        }
    }

module.exports = dilemaController