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

        // se agrega el campo ID

        infoUsuario.id = moduleUser.addId()

        contenidoJson.push(infoUsuario)

        console.log(contenidoJson);

        let nuevoContenido = JSON.stringify(contenidoJson, null, " ");

        fs.writeFileSync(userJson, nuevoContenido);

        return nuevoContenido;

    },
    addId : () => {

        // se pude remplazar por npm install uuid   

        let contenidoJson = moduleUser.findAll();

        let nroId = 0;

        contenidoJson.forEach( x => {
            if (nroId <= x.id) {
                nroId = x.id;
            }
           
        })

        return nroId + 1

    },
    uptdate : (userToEdit)=>{

        let json = moduleUser.findAll();

        let nuevoArray = json.filter( x => x.id != userToEdit.id );

        nuevoArray.push(userToEdit)

        let nuevo = JSON.stringify(nuevoArray, null, " ");

        fs.writeFileSync(userJson, nuevo) 
    }

}

module.exports = moduleUser;