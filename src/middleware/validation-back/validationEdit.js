const {check, validationResult, body} = require("express-validator");
const moduleContact = require("../../modules/contacts")
 
module.exports= [
   check("nombreContacto").isLength({min:2}).withMessage("El nombre debe contener al menos 2 caracterese").withMessage("el nombre debe ser unico"),
   check("telContacto").isInt().withMessage("los valores deben ser numericos").bail().
   isLength({min:6}).withMessage("El numero Telefonico debe contener al menos 6 numeros"),
   check("emailContacto").isEmail().withMessage("El Email debe ser valido"),
]