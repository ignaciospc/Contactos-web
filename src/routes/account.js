const express = require('express');
const router = express.Router();
const controllerAccount = require('../controller/controllerAccount');
const path = require("path");
const multer = require("multer");

const validationLogin = require(path.join(__dirname,"../middleware/validation-back/validationLogin"));
const validationRegister = require(path.join(__dirname,"../middleware/validation-back/validationRegister"));
const authLog = require(path.join(__dirname, "../middleware/authMiddleware.js"));

router.get('/login', controllerAccount.login);
router.post('/login', validationLogin,  controllerAccount.processLogin);
router.post('/login-home', validationLogin, controllerAccount.processLoginHome);

router.get('/register', controllerAccount.registerForm);
router.post('/register', validationRegister, controllerAccount.createUser);

router.get('/profile/', authLog,  controllerAccount.profile);














//router.post('/profile', upload.any(), controllerAccount.loadAvatar)

/***** Test para ver si funciona session *****/
/*router.get("/check", function(req, res){
  if (req.session.usuarioLogueado == undefined){
    res.send("no estas logueado")
  }else{
    console.log(req.session.usuarioLogueado);
    res.send("el usuario logueado es " + req.session.usuarioLogueado.nombre)
  }
})*/

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



module.exports = router;
