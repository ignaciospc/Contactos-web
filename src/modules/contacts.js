let fs = require('fs');
let path =require('path');
let contactsJson = path.join(__dirname, "../data-json/contacts.json"); 

let moduleContacts = {

    findAll : () => {

       let leerJson = fs.readFileSync(contactsJson, {encoding: "utf-8"});

       let contenidoJson = leerJson.length == 0 ? [] : JSON.parse(leerJson);

       return contenidoJson;

    },
    createContact : (infoContacto) => {

        let contenidoJson = moduleContacts.findAll();

        contenidoJson.push(infoContacto);

        let newContenido = JSON.stringify(contenidoJson, null, " ");

        fs.writeFileSync(contactsJson, newContenido);

        return newContenido; 

    }

}

module.exports = moduleContacts;