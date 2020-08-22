const fs = require('fs');
const path =require('path');
const moduloContacto = require('../modules/contacts.js');
const contactsJson = path.join(__dirname, "../data-json/contacts.json"); 



module.exports = {

    allContacts : (req, res) => {

        let contactos = moduloContacto.findAll();

        res.render("contacts/contacts", {contactos:contactos});
    },
    createForm : (req,res) => {
        res.render("contacts/createContact");
    },
    createContact : (req, res) => {
        let contacto = {
            nombreCompleto:req.body.nombreContacto,
            telefono: req.body.telContacto,
            email:req.body.emailContacto,
        };

        let newContact = moduloContacto.createContact(contacto);
        
        res.redirect("/contact");
    },
    editForm : (req, res) => {  

        let infoContacto = moduloContacto.findAll();

        let posicionJson = req.params.id - 1;

        res.render("contacts/editContact",{contacto:infoContacto[posicionJson]});


    },
    editContact : (req, res) =>{
        res.send("aca va logica papa de edit");
    },
    deleteContact : (req,res) => {
        
        let contenidoJson = moduloContacto.findAll();

        let nuevoArray = contenidoJson.filter( x => x.id != req.params.id );

        let nuevo = JSON.stringify(nuevoArray, null, " ");

        fs.writeFileSync(contactsJson, nuevo)

       res.redirect("/contact")


    }
    

}