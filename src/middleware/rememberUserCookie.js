var moduleUser = require("../modules/users")
function rememberUser (req, res, next){
    if(req.cookies.recordarUser && req.session.usuarioLogueado == undefined){
        let contenidoJson = moduleUser.findAll();
        let infoUser = contenidoJson.find(x => req.cookies.recordarUserId == x.id)
        req.session.usuarioLogueado = infoUser
    }  
        next();
}
module.exports = rememberUser;