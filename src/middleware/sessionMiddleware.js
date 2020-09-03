function session (req, res, next){
   
    res.locals.logueado = false;

    if(req.session.usuarioLogueado){
        res.locals.logueado = true;
    }
    next()
}

module.exports = session;