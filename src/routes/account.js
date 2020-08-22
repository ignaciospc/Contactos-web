var express = require('express');
var router = express.Router();
let controllerAccount = require('../controller/controllerAccount');

router.get('/login', controllerAccount.login)
router.post('/login', controllerAccount.processLogin)

router.get('/register', controllerAccount.registerForm)
router.post('/register', controllerAccount.createUser)

router.get('/profile', controllerAccount.profile)


module.exports = router;
