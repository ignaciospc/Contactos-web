function session (req, res, next){
   
    res.locals.logueado = false;
    let validacion = ""

    if(req.session.usuarioLogueado){
        res.locals.logueado = {
            validacion : true,
            nombre:req.session.usuarioLogueado.nombre,
            apellido: req.session.usuarioLogueado.apellido,
            email:req.session.usuarioLogueado.email,
            id:req.session.usuarioLogueado.id
        }
    }
    next()
}

module.exports = session;