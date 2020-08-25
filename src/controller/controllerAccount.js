let moduloUser = require('../modules/users');
let bcrypt = require ("bcrypt");

 

module.exports ={

    registerForm: (req, res) =>{
       res.render("users/register");
    },
    profile: (req, res) =>{
        
        res.render("users/profile");
    },
    createUser : (req, res) => {

        let sal = 10;

        let infoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, sal) ,
        }; 
      
        moduloUser.createUser(infoUsuario);
        
        res.redirect('/account/profile'); 
    },
    login: (req, res) =>{
        res.render("users/login");
    },
    processLogin: (req, res) => {

          let contenidoJson = moduloUser.findAll();
          

        for (let i = 0; i < contenidoJson.length; i++ ){

            if(req.body.email === contenidoJson[i].email && bcrypt.compareSync(req.body.password, contenidoJson[i].password )){
               res.redirect("/account/profile/")
            }
        }
        
        res.send("Credenciales Incorrectas")
    },
    loadAvatar: (req, res) => {

        //logica cargar avatar


    }
   

}