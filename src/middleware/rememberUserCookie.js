var moduleUser = require("../modules/users")

function rememberUser (req, res, next){

    if(req.cookies.recordarUser && req.session.usuarioLogueado == "undefined"){

        let contenidoJson = moduleUser.findAll();

            for (let i = 0; i < contenidoJson.length; i++ ){

                if(req.cookies.recordarUser === contenidoJson[i].email){                   
                          usuarioALoguearse = contenidoJson[i];
                          break;
                }
            }
              req.session.usuarioLogueado = usuarioALoguearse
    }


    
        next();
}

module.exports = rememberUser;