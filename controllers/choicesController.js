const Dilema = require("../models/dilemaModel.js");
const Choices = require("../models/choicesModel.js");


const choicesController = {
    index: function (req, res) {
        Dilema.findById(req.params.dilemaId)
            .then(dilema => {
                Choices.find({ dilemaId: req.params.choicesId })
                    .then(choices => {
                        res.send({ dilema: dilema, choices: choices });
                    });
            });
    },
    new: function (req, res) {
        dilema.findById(req.params.dilemaId)
            .then(dilema => {
                res.send({ dilema: dilema });
            })
    },
    create: function (req, res) {
        choices.create({

            dilemaId: req.params.dilemaId
        })
            .then(() => {
                res.redirect("choices");
            });
    },
    show: function (req, res) {
        dilema.findById(req.params.dilemaId)
            .then(dilema => {
                choices.findById(req.params.choicesId)
                    .then(choices => {
                        res.send({ dilema: dilema, choices: choices });
                    });
            });
    },
    edit: function (req, res) {
        dilema.findById(req.params.dilemaId)
            .then(dilema => {
                choices.findById(req.params.choicesId)
                    .then(choices => {
                        res.send({ dilema: dilema, choices: choices });
                    });
            });
    },
    update: function (req, res) {
        choices.findByIdAndUpdate(req.params.choicesId, req.body, { new: true })
            .then(() => {
                res.redirect("/dilema/" + req.params.dilemaId + "/choices/" + req.params.choicesId);
            });
        
    },
    delete: function (req, res) {
        choices.findByIdAndRemove(req.params.choicesId)
            .then(() => {
                res.redirect("/dilema/" + req.params.dilemaId + "/choices/");
            });
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = choicesController;
