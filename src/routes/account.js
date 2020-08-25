var express = require('express');
var router = express.Router();
let controllerAccount = require('../controller/controllerAccount');
const multer = require("multer");

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
router.post('/login', controllerAccount.processLogin);

router.get('/register', controllerAccount.registerForm);
router.post('/register', controllerAccount.createUser);

router.get('/profile',  controllerAccount.profile);
//router.post('/profile', upload.any(), controllerAccount.loadAvatar)



module.exports = router;
