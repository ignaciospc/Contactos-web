var express = require('express');
var router = express.Router();
let controllerContacts = require('../controller/controllerContacts')

router.get('/',controllerContacts.allContacts)

router.get('/create',controllerContacts.createForm)
router.post('/create', controllerContacts.createContact)

router.get('/edit/:id', controllerContacts.editContact)


module.exports = router;
