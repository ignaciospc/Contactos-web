const express = require('express');
const router = express.Router();
const controllerAccount = require('../controller/controllerAccount');
const path = require("path");
const multer = require("multer");

const validationLogin = require(path.join(__dirname,"../middleware/validation-back/validationLogin"));
const validationRegister = require(path.join(__dirname,"../middleware/validation-back/validationRegister"));

/****** carga archio  *******/

/* var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })*/

/*******--------------******/

router.get('/login', controllerAccount.login);
router.post('/login', validationLogin,  controllerAccount.processLogin);
router.post('/login-home', validationLogin, controllerAccount.processLoginHome);

router.get('/register', controllerAccount.registerForm);
router.post('/register', validationRegister, controllerAccount.createUser);

router.get('/profile/',  controllerAccount.profile);
//router.post('/profile', upload.any(), controllerAccount.loadAvatar)



module.exports = router;
