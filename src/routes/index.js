var express = require('express');
var router = express.Router();
let controllerIndex = require('../controller/controllerIndex')

router.get('/', controllerIndex.home)


module.exports = router;
