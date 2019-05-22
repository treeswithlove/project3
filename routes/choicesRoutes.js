const express = require('express')
const router = express.Router()

//imports choices controllers
const choicesController = require('../controllers/choicesController.js')

//choices controller Routes
router.get('/', choicesController.index)
router.post('/', choicesController.create)
router.get('/new', choicesController.new)
router.get('/:choicesId', choicesController.show)
router.put('/:choicesId', choicesController.update)
router.delete('/:choicesId', choicesController.delete)


//exports routes
module.exports = router