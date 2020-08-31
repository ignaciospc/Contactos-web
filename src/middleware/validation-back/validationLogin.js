const {check, validationResult, body} = require("express-validator");
 
module.exports= [
    //check("email").notEmpty().withMessage("Este campo no debe estar vacion").bail(),
    check("email").isEmail().withMessage("ingrese un Email valido"),

    //check("password").notEmpty().withMessage("Este campo no debe estar vacion").bail(),
    check("password").isLength({min:6}).withMessage("la contraseña no  debe estar vacio"),
]