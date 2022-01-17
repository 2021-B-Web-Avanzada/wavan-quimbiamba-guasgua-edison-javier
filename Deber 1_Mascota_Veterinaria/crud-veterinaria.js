const inquirer = require("inquirer");
const fs = require("fs");
const ga = require('./gestion-archivos.js')
const ingresoVeterinaria = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre de la veterinaria'
            },
            {
                type: 'input',
                name: 'fecha_apertura',
                message: 'Ingresa la fecha de apertura de la veterinaria'
            },
            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la dirección de la veterinaria'
            },
            {
                type: 'input',
                name: 'estrellas',
                message: 'Ingresa el numero de estrellas del veterinaria'
            },
            {
                type: 'input',
                name: 'categoria',
                message: 'Ingresa la categoria del veterianaria'
            }
        ]
    )
}

async function crearVeterinaria() {
    const veterinaria = await ingresoVeterinaria();
    veterinaria.mascota = []
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    jsonFile.push(veterinaria)
    await ga.escribirArchivo(jsonFile)
}

async function listarVeterinaria() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.stringify(JSON.parse(fileContent), null, '    ')
    console.log(jsonFile)
}

async function actualizarVeterinaria() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    let veterinaria = [];
    jsonFile.forEach(element => {
        veterinaria.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un veterinaria: ',
            choices: veterinaria,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre === seleccion.option) {
                return index
            }
        }
    )
    const veterinariaIn = await ingresoVeterinaria();
    let menuAux = jsonFile[indexUpdate].mascota
    jsonFile[indexUpdate] = veterinariaIn
    jsonFile[indexUpdate].mascota = menuAux
    await ga.escribirArchivo(jsonFile)
}

async function eliminarVeterinaria() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    let veterinaria = [];
    jsonFile.forEach(element => {
        veterinaria.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un veterinaria',
            choices: veterinaria,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (res_actual, index) {
            if (res_actual.nombre === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    await ga.escribirArchivo(jsonFile)

}

module.exports = {crearVeterinaria, listarVeterinaria , actualizarVeterinaria, eliminarVeterinaria}