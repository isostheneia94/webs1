const Router = require('express')
const router  = new Router()
const OfficesController = require('../controller/offices.controller')

router.delete('/offices/:id', OfficesController.deleteOffices)
router.get('/offices/', OfficesController.getOffices)
router.post('/offices/', OfficesController.createOffices)
router.put('/offices/', OfficesController.updateOffices)


module.exports = router