var express = require('express');
var router = express.Router();
let controllerAccount = require('../controller/controllerAccount')

router.get('/register', controllerAccount.register)
router.get('/login', controllerAccount.login)


module.exports = router;
