const express = require('express')
const router = express.Router()

//imports greenWays controllers
const dilemaController = require('../controllers/dilemaController.js')

//greenWays controller Routes
router.get('/', dilemaController.index)
router.post('/', dilemaController.create)
router.get('/new', dilemaController.new)
router.get('/:dilemaId', dilemaController.show)
router.put('/:dilemaId', dilemaController.update)
router.delete('/:dilemaId', dilemaController.delete)


//exports routes
module.exports = router