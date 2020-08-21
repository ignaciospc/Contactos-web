let moduloUser = require('../modules/users');
let path =require('path');
let fs = require('fs');
let userJson = path.join(__dirname, "../data-json/users.json"); 

 

module.exports ={

    registerForm: (req, res) =>{
       res.render("users/register");
    },
    profile: (req, res) =>{
        res.render("users/profile")
    },
    createUser : (req, res) => {

        let infoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password,
            c_password:req.body.c_password,
        }; 
      
       let newUser = moduloUser.createUser(infoUsuario);
        
        res.send(newUser); //redirect vista User
    },
    login: (req, res) =>{
        res.render("users/login")
    }

}