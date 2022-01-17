const inquired = require("inquirer");
const fs = require("fs") // para leer el archivo
const historial = require('./historial-veterinario.js')

 const  ingresoVeterinaria =()=> {
    return inquired.prompt(
        [
            {
                type : 'input',
                name: 'nombre',
                message: 'Ingrese el nombre del restaurant'
            },
            {
                type : 'input',
                name: 'Fecha_de_registro',
                message: 'Ingrese la fecha de registro de la veterinaria'

            },

            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la direccion de la veterinaria '
            },
            {
                type: 'input',
                name: 'estrellas',
                message: 'Ingrese el número de estrellas de la veterinaria'
            },
            {
                type: 'input',
                name: 'categoria',
                message: 'Ingrese la categoría de la veterinaria, publica o privada'
            }
        ]
    )
}

async function crearVeterinaria() {
    const  veterinaria = await  ingresoVeterinaria();
    veterinaria.menu = []
    let fileContent  = fs.readFileSync('./datos.txt', 'utf-8')
    let jsonFile;
    jsonFile = JSON.parse(fileContent)
    jsonFile.push(veterinaria)
    await historial.escribirArchivo(jsonFile)
}

async function actualizarVeterinaria() {
    let fileContent = fs.readFileSync("./datos.text", "utf-8")
    let jsonFile = JSON.parse(fileContent)
    let  veterinarias = [];
    jsonFile.forEach( element => {
        veterinarias.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja una veterinaria: ',
            choices: veterinarias,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre === seleccion.option) {
                return index
            }
        }
    )
    const veterinaria = await ingresoVeterinaria();
    let menuAux = jsonFile[indexUpdate].menu
    jsonFile[indexUpdate] = veterinaria
    jsonFile[indexUpdate].menu = menuAux
    await historial.escribirArchivo(jsonFile)
}

async function eliminarVeterinaria() {
    let fileContent = fs.readFileSync("./datos.txt", "utf-8")
    let jsonFile = JSON.parse(fileContent)
    let veterinarias = [];
    jsonFile.forEach( element => {
        veterinarias.push(element.nombre)
    })
    const seleccion = await  inquired.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja una veterinaria: ',
            choices: veterinarias, },
        ])

    let indexUpdate = jsonFile.findIndex(
        function (res_actual, index){
            if(res_actual.nombre === seleccion.option){
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate,1)
    await  historial.escribirArchivo(jsonFile)
}

async function listarVeterinarias(){
    let  fileContent = fs.readFileSync("./datos.txt", "utf-8")
    let  jasonFile = JSON.stringify(JSON.parse(fileContent), null, ' ')
    console.log(jasonFile)
}



module.exports = {crearVeterinaria, listarVeterinarias, actualizarVeterinaria, eliminarVeterinaria}