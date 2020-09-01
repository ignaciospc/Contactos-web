const {check, body} = require("express-validator");
const moduleUser = require("../../modules/users");


 
module.exports= [
    //check("nombre").notEmpty().withMessage("Este campo no debe estar vacion").bail(),
    check("nombre").isLength({min:2}).withMessage("el nombre debe tener al menos 2 caracteres"),

    //check("apellido").notEmpty().withMessage("este campo no debe estar vacio").bail(),
    check("apellido").isLength({min:2}).withMessage("el apellido debe tener al menos 2 caracteres"),

    //check("email").notEmpty().withMessage("este campo no debe estar vacio").bail(),
    body("email").isEmail().withMessage("debe ingresar un email valido").custom(function(value){
        let userJson = moduleUser.findAll();
        for (let i=0 ; i < userJson.length; i++){

            if(userJson[i].email === value){
                return false
            }
        }
               return true
    }).withMessage("esta utilizando un mail existente"),

    //check("password").notEmpty().withMessage("este campo no debe estar vacio").bail(),
    body("password").isLength({min:6}).withMessage("la contraseña debe tener al menos 6 caracteres").custom(function(value, {req}){
        if (value != req.body.c_password){
            return false
        }else{
            return true
        }
    }).withMessage("las contraseñas no coinciden")

    
]