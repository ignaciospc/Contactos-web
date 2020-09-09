const express = require('express');
const router = express.Router();
const controllerIndex = require('../controller/controllerIndex');
const path = require("path");
const guestMiddleware = require(path.join(__dirname,("../middleware/guestMiddleware")));

router.get('/', guestMiddleware, controllerIndex.home)


module.exports = router;
