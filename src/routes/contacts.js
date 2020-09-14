const express = require('express');
const router = express.Router();
const path = require("path");
const controllerContacts = require('../controller/controllerContacts')

const validationCreateContact = require("../middleware/validation-back/validationContacts")
const validationEditContact = require("../middleware/validation-back/validationEdit")
const authLog = require(path.join(__dirname, "../middleware/authMiddleware.js"));

router.get('/',authLog,controllerContacts.allContacts)

router.get('/create',controllerContacts.createForm)
router.post('/create', validationCreateContact, controllerContacts.createContact)

router.get('/edit/:id', controllerContacts.editForm)
router.put('/edit/:id', validationEditContact, controllerContacts.editContact)
router.delete('/delete/:id',controllerContacts.deleteContact)


/*** prueba mysql***/
//router.get('/prueba', controllerContacts.prueba)

module.exports = router;
