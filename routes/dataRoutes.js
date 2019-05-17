const express = require('express')
const router = express.Router()

//imports greenWays controllers
const dataController = require('../controllers/dataController.js')

//greenWays controller Routes
router.get('/', dataController.index)
router.post('/', dataController.create)
router.get('/new', dataController.new)
router.get('/:dataId', dataController.show)
router.put('/:dataId', dataController.update)
router.delete('/:dataId', dataController.delete)


//exports routes
module.exports = router