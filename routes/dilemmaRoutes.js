const express = require('express')
const router = express.Router()

//imports choices controllers
const dilemmaController = require('../controllers/dilemmaController.js')

//choices controller Routes
router.get('/', dilemmaController.index)
router.post('/', dilemmaController.create)
router.get('/new', dilemmaController.new)
router.get('/:dilemmaId', dilemmaController.show)
router.put('/:dilemmaId', dilemmaController.update)
router.delete('/:dilemmaId', dilemmaController.delete)


//exports routes
module.exports = router