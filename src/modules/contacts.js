let fs = require('fs');
let path =require('path');
const moduleUser = require('./users');
let contactsJson = path.join(__dirname, "../data-json/contacts.json"); 

let moduleContacts = {

    findAll : () => {

       let leerJson = fs.readFileSync(contactsJson, {encoding: "utf-8"});

       let contenidoJson = leerJson.length == 0 ? [] : JSON.parse(leerJson);

       return contenidoJson;

    },
    createContact : (infoContacto) => {

        let contenidoJson = moduleContacts.findAll();

        infoContacto.id = moduleContacts.addId();

        contenidoJson.push(infoContacto);

        let newContenido = JSON.stringify(contenidoJson, null, " ");

        fs.writeFileSync(contactsJson, newContenido);

        return newContenido; 

    },
    addId : () => {

        let contenidoJson = moduleContacts.findAll();

        let nroId = 0;

        contenidoJson.forEach( x => {
            if (nroId <= x.id) {
                nroId = x.id;
            }
           
        })

        return nroId + 1

    }

}

module.exports = moduleContacts;