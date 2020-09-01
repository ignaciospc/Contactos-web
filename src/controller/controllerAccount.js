let moduloUser = require('../modules/users');
let bcrypt = require ("bcrypt");
const {check, validationResult, body} = require("express-validator");
const moduleUser = require('../modules/users');

 

module.exports ={

    registerForm: (req, res) =>{
       res.render("users/register");
    },
    profile: (req, res) =>{

        let usuarios =  moduleUser.findAll();

        console.log(usuarios);
        
        res.render("users/profile");
    },
    createUser : (req, res) => {

        let errores = validationResult(req)

        if( errores.isEmpty()){

        let sal = 10;

        let infoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, sal) ,
        }; 
      
        moduloUser.createUser(infoUsuario);

        res.redirect('/account/profile'); 

        } else {

            res.render("users/register", { errores : errores.errors})

        }

      
    },
    login: (req, res) =>{
        res.render("users/login");
    },
    processLogin: (req, res) => {

          let errors = validationResult(req);

          if( errors.isEmpty() ){

            let contenidoJson = moduloUser.findAll();

            for (let i = 0; i < contenidoJson.length; i++ ){

                if(req.body.email === contenidoJson[i].email && bcrypt.compareSync(req.body.password, contenidoJson[i].password )){
                   let  usuarioALoguearse = contenidoJson[i];
                   break;
                }
            }

            /*if (usuarioALoguearse == undefined){

                res.render("users/login", {errores:[
                    {msg:"credenciales invalidas"}
                ]});
            }

            req.session.usuarioALoguearse = usuarioALoguearse */
            res.send("credencialesinvalidas")

          }else{
              
              return res.render("users/login",{errors : errors.errors});

          }


       
    },
    processLoginHome: (req,res) => {

        let errors = validationResult(req);

          if( errors.isEmpty() ){

            let contenidoJson = moduloUser.findAll();

            for (let i = 0; i < contenidoJson.length; i++ ){

                if(req.body.email === contenidoJson[i].email && bcrypt.compareSync(req.body.password, contenidoJson[i].password )){
                   res.redirect("/account/profile/")
                }
            }
            
            res.send("Credenciales Incorrectas")
              
          }else{
              
              return res.render("home/home",{errors : errors.errors});

          }

    },
    loadAvatar: (req, res) => {

        //logica cargar avatar


    }
   

}