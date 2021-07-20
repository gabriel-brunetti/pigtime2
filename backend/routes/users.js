var express = require('express')
const userController = require('../controller/usersController')
var router = express.Router()
const usersController = require('../controller/usersController')

/* GET users listing. */
router.get('/', usersController.index)
router.post('/create', usersController.store)

module.exports = router
