let fs = require('fs');
let path =require('path');
let userJson = path.join(__dirname, "../data-json/users.json"); 

let moduleUser =  {

    findAll : () =>{

        // logica de leer json, en caso de no existir crearlo y leerlo

         let leerJson = fs.readFileSync(userJson, {encoding:"utf-8"});
        
         let contenidoJson = leerJson.length == 0 ? [] : JSON.parse(leerJson);

         return contenidoJson;

    },
    createUser : (infoUsuario) => {

        //logica para agregar Usuarios

        let contenidoJson = moduleUser.findAll()

        contenidoJson.push(infoUsuario)

        let nuevoContenido = JSON.stringify(contenidoJson, null, " ");

        fs.writeFileSync(userJson, nuevoContenido);

        return nuevoContenido;

    }

}

module.exports = moduleUser;