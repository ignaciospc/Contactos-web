let moduloUser = require('../modules/users');
let bcrypt = require ("bcrypt");
const {check, validationResult, body} = require("express-validator");
const moduleUser = require('../modules/users');

 

module.exports ={

    registerForm: (req, res) =>{
       res.render("users/register");
    },
    profile: (req, res) =>{    
        let infoUserLog = req.session.usuarioLogueado;

        res.render("users/profile",{user:infoUserLog});
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
          let usuarioALoguearse = undefined;

          if( errors.isEmpty() ){

            let contenidoJson = moduloUser.findAll();

            for (let i = 0; i < contenidoJson.length; i++ ){

                if(req.body.email === contenidoJson[i].email){
                    if(bcrypt.compareSync(req.body.password, contenidoJson[i].password )){
                          usuarioALoguearse = contenidoJson[i];
                          break
                    }
                   
                }
            }

            if (usuarioALoguearse == undefined){
                res.render("users/login", {errors:[
                    {msg:"credenciales invalidas"}
                ]});
            }else{
                req.session.usuarioLogueado = usuarioALoguearse 
                //res.send("credencialesinvalidas")
    
                /****** COOKIE RECORDAR USUARIO ********/
    
                let btnRemember = req.body.remember;
                let emailUsuarioLogueado = usuarioALoguearse.email
                let idUsuarioLogueado = usuarioALoguearse.id
                let sal= 5 
    
                if(btnRemember == "on"){
                    res.cookie('recordarUser',bcrypt.hashSync(emailUsuarioLogueado,sal) , {maxAge: 1800000}) //30 min     cambiar mail por id
                    res.cookie('recordarUserId', idUsuarioLogueado, {maxAge:1800000});
                }
    
                res.redirect("/contact")
            }

           

          }else{
              
              return res.render("users/login",{errors : errors.errors});

          }


       
    },
    processLoginHome: (req,res) => {

       let errors = validationResult(req);
          let usuarioALoguearse = undefined;

          if( errors.isEmpty() ){

            let contenidoJson = moduloUser.findAll();

            for (let i = 0; i < contenidoJson.length; i++ ){

                if(req.body.email === contenidoJson[i].email){
                    if(bcrypt.compareSync(req.body.password, contenidoJson[i].password )){
                          usuarioALoguearse = contenidoJson[i];
                          break
                    }
                   
                }
            }

            if (usuarioALoguearse == undefined){
                res.render("users/login", {errors:[
                    {msg:"credenciales invalidas"}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse 
            //res.send("credencialesinvalidas")

            /****** COOKIE RECORDAR USUARIO ********/

            let btnRemember = req.body.remember;
            let emailUsuarioLogueado = usuarioALoguearse.email
            let idUsuarioLogueado = usuarioALoguearse.id
            let sal= 5 

            if(btnRemember == "on"){
                res.cookie('recordarUser',bcrypt.hashSync(emailUsuarioLogueado,sal) , {maxAge: 1800000}) //30 min     cambiar mail por id
                res.cookie('recordaruserId', idUsuarioLogueado, {maxAge:1800000});
            }
            res.redirect("/contact")

          }else{
              
              return res.render("home/home",{errors : errors.errors});

          }
    },
    loadAvatar: (req, res) => {

        //logica cargar avatar


    },
    logOut: (req, res) => {
        req.session.destroy();
        res.cookie('recordarUser',null, {maxAge: -1}) 
        res.cookie('recordarUserId',null, {maxAge: -1}) 

        res.redirect("/")
    }
   

}