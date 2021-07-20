var express = require('express')
var router = express.Router()
const usersController = require('../controller/usersController')

/* GET users listing. */
router.get('/', usersController.index)
router.post('/create', usersController.store)
router.get('/edit/?:id', usersController.edit)
router.put('/edit/?:id', usersController.update)
router.delete('/delete/?:id', usersController.delete)
router.get('/?:id', usersController.read)

module.exports = router
