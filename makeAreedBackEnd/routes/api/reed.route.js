var express = require('express')

var router = express.Router()

// Getting the Reed Controller that we just created

var ReedController = require('../../controllers/reed.js');


// Map each API to the Controller FUnctions

router.get('/', ReedController.getReeds)

router.post('/', ReedController.createReed)

router.put('/', ReedController.updateReed)

router.delete('/:id',ReedController.removeReed)


// Export the Router

module.exports = router;