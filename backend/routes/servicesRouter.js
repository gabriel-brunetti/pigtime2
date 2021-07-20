var express = require('express')
var router = express.Router()
const servicesController = require('../controller/servicesController')

/* GET users listing. */
router.get('/', servicesController.index)
router.post('/create', servicesController.store)
router.put('/edit/?:id', servicesController.update)
router.delete('/?:id', servicesController.delete)
router.get('/?:id', servicesController.read)

module.exports = router
