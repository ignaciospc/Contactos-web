const fs = require('fs');
const path =require('path');
const moduloContacto = require('../modules/contacts.js');
const contactsJson = path.join(__dirname, "../data-json/contacts.json"); 
const {validationResult} = require("express-validator")

const db = require("../database/models/index")



module.exports = {

    allContacts : (req, res) => {

        let contactos = moduloContacto.findAll();

        res.render("contacts/contacts", {contactos:contactos});
    },
    createForm : (req,res) => {
        res.render("contacts/createContact");
    },
    createContact : (req, res) => {

        let errores = validationResult(req)

        if( errores.isEmpty()){
            let contacto = {
                nombreCompleto:req.body.nombreContacto,
                telefono: req.body.telContacto,
                email:req.body.emailContacto,
            };
            moduloContacto.createContact(contacto);

            res.redirect("/contact");
        }else{
            res.render("contacts/createContact", {errors : errores.errors})
        }
        
        
    },
    editForm : (req, res) => {  

        let infoContacto = moduloContacto.findAll();

        let posicionJson = req.params.id - 1;

        res.render("contacts/editContact",{contacto:infoContacto[posicionJson]});


    },
    editContact : (req, res) =>{

        //busco contacto

        let contenidoJson = moduloContacto.findAll();

        let contactoPosicion = contenidoJson.find( x => x.id == req.params.id);

        //cambio los atributos

        contactoPosicion.nombreCompleto = req.body.nombreContacto;
        contactoPosicion.telefono = req.body.telContacto;
        contactoPosicion.email = req.body.emailContacto;

        moduloContacto.update(contactoPosicion);

        res.redirect("/contact")
    },
    deleteContact : (req,res) => {
        
        let contenidoJson = moduloContacto.findAll();

        let nuevoArray = contenidoJson.filter( x => x.id != req.params.id );

        let nuevo = JSON.stringify(nuevoArray, null, " ");

        fs.writeFileSync(contactsJson, nuevo)

        res.redirect("/contact")

    },
    prueba : (req, res, next) =>{

         db.contacts.findAll()  
            .then((contacto)=>{
                 return res.send(contacto)
             })       
    }
 }