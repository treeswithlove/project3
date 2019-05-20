const Dilemma = require("../models/dilemmaModel.js");
const Choices = require("../models/choicesModel.js");


const choicesController = {
    index: function (req, res) {
        Dilemma.findById(req.params.dilemmaId)
            .then(dilemma => {
                Choices.find({ dilemmaId: req.params.choicesId })
                    .then(choices => {
                        res.send({ dilemma: dilemma, choices: choices });
                    });
            });
    },
    new: function (req, res) {
        Dilemma.findById(req.params.dilemmaId)
            .then(dilemma => {
                res.send({ dilemma: dilemma });
            })
    },
    create: function (req, res) {
        Choices.create({
            name: req.body.name,
            dilemmaId: req.params.dilemmaId
        })
            .then((choices) => {
                res.redirect(choices);
            });
    },
    show: function (req, res) {
        Dilemma.findById(req.params.dilemmaId)
            .then(dilemma => {
                Choices.findById(req.params.choicesId)
                    .then(choices => {
                        res.send({ dilemma: dilemma, choices: choices });
                    });
            });
    },
    edit: function (req, res) {
        Dilemma.findById(req.params.dilemmaId)
            .then(dilemma => {
                Choices.findById(req.params.choicesId)
                    .then(choices => {
                        res.send({ dilemma: dilemma, choices: choices });
                    });
            });
    },
    update: function (req, res) {
        Choices.findByIdAndUpdate(req.params.choicesId, req.body, { new: true })
            .then(() => {
                res.redirect("/dilemma/" + req.params.dilemmaId + "/choices/" + req.params.choicesId);
            });
        
    },
    delete: function (req, res) {
        Choices.findByIdAndRemove(req.params.choicesId)
            .then(() => {
                res.redirect("/dilemma/" + req.params.dilemmaId + "/choices/");
            });
    }
}

//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = choicesController;
