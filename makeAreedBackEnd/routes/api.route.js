var express = require('express')

var router = express.Router()
var reeds = require('./api/reed.route')


router.use('/reeds', reeds);


module.exports = router;