let moduloUser = require('../modules/users');
let path =require('path');
let fs = require('fs');
let userJson = path.join(__dirname, "../data-json/users.json"); 
let bcrypt = require ("bcrypt");

 

module.exports ={

    registerForm: (req, res) =>{
       res.render("users/register");
    },
    profile: (req, res) =>{
        res.render("users/profile")
    },
    createUser : (req, res) => {

        let sal = 10;

        let infoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, sal) ,
            c_password:req.body.c_password,
        }; 
      
       let newUser = moduloUser.createUser(infoUsuario);
        
        res.redirect('/account/profile'); 
    },
    login: (req, res) =>{
        res.render("users/login")
    },
   

}