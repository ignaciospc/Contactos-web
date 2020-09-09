function authMiddleware (req, res, next){
    if (req.session.usuarioLogueado != undefined){ 
        res.redirect("/contact")
    }else{
        next();
    }
}

module.exports = authMiddleware;