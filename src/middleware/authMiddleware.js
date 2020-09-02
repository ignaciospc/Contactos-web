function authMiddleware (req, res, next){
    if (req.session.usuarioLogueado == undefined){
        res.redirect("/account/login")
    }else{
        next()
    }
}

module.exports = authMiddleware;