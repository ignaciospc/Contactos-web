const express = require('express');
const router = express.Router();
const controllerContacts = require('../controller/controllerContacts')

const validationCreateContact = require("../middleware/validation-back/validationContacts")
const validationEditContact = require("../middleware/validation-back/validationEdit")

router.get('/',controllerContacts.allContacts)

router.get('/create',controllerContacts.createForm)
router.post('/create', validationCreateContact, controllerContacts.createContact)

router.get('/edit/:id', controllerContacts.editForm)
router.put('/edit/:id', validationEditContact, controllerContacts.editContact)
router.delete('/delete/:id',controllerContacts.deleteContact)


module.exports = router;
