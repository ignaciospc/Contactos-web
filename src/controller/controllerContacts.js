let fs = require('fs');
let path =require('path');
let moduloContacto = require('../modules/contacts.js')
let contactsJson = path.join(__dirname, "../data-json/contacts.json"); 


module.exports = {

    allContacts : (req, res) => {

        let contactos = moduloContacto.findAll()

        res.render("contacts/contacts", {contactos:contactos});
    },
    createForm : (req,res) => {
        res.render("contacts/createContact")
    },
    createContact : (req, res) => {
        let contacto = {
            nombreCompleto:req.body.nombreContacto,
            telefono: req.body.telContacto,
            email:req.body.emailContacto,
        }

        let newContact = moduloContacto.createContact(contacto);
        
        res.redirect("/contact");
    },
    editContact : (req, res) => {  

        res.render("contacts/editContact")

    }
    

}