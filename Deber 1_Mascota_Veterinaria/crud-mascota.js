const fs = require("fs");
const inquirer = require("inquirer");
const ga = require('./gestion-archivos.js')

async function seleccionVeterinarias() {
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    let veterinarias = [];
    jsonFile.forEach(element => {
        veterinarias.push(element.nombre);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja veterinaria: ',
            choices: veterinarias,
        },
    ])
    let i = -1
    jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre === seleccion.option) {
                i = index
                return index
            }
        }
    )
    return i

}

const ingresoMascota = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'nombre_mascota',
                message: 'Ingrese el nombre de la mascota',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'descripcion',
                message: 'Ingresa la descricpion de la mascota',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'precio',
                message: 'Ingrese el costo de la consulta:',
                defaultValue: null
            },
            {
                type: 'input',
                name: 'tipo',
                message: 'Ingresa el tipo de la mascota',
                defaultValue: null
            },
            {
                type: 'list',
                name: 'esterilizado',
                message: 'Indique si es Estirilizado o no ',
                choices: ['true', 'false']
            }
        ]
    )
}

async function crearMascota() {
    let id_res = await seleccionVeterinarias()
    const mascota = await ingresoMascota();
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)
    jsonFile[id_res].mascota.push(mascota)
//jsonFile[id_res].mascota.push(mascota)
    await ga.escribirArchivo(jsonFile)
}

async function listarMascota() {
    let id_res = await seleccionVeterinarias()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let jsonFile = JSON.parse(fileContent)[id_res].mascota
    console.log(jsonFile)
}

async function actualizarMascota() {
    let id_res = await seleccionVeterinarias()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let veterinarias = JSON.parse(fileContent)
    let jsonFile = JSON.parse(fileContent)[id_res].mascota
    let mascotas = [];
    jsonFile.forEach(element => {
        mascotas.push(element.nombre_mascota);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un Mascota: ',
            choices: mascotas,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (mascota_actual, i) {
            if (mascota_actual.nombre_mascota === seleccion.option) {
                return i
            }
        }
    )
    veterinarias[id_res].mascota[indexUpdate] = await ingresoMascota()
    await ga.escribirArchivo(veterinarias)
}

async function eliminarMascotas() {
    let id_res = await seleccionVeterinarias()
    let fileContent = fs.readFileSync('./ejem.txt', 'utf-8')
    let veterinarias = JSON.parse(fileContent)
    let jsonFile = JSON.parse(fileContent)[id_res].mascota
    let mascotas = [];
    jsonFile.forEach(element => {
        mascotas.push(element.nombre_mascota);
    })
    const seleccion = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Escoja un mascota: ',
            choices: mascotas,
        },
    ])
    let indexUpdate = jsonFile.findIndex(
        function (actual, index) {
            if (actual.nombre_mascota === seleccion.option) {
                return index
            }
        }
    )
    jsonFile.splice(indexUpdate, 1)
    veterinarias[id_res].mascota = jsonFile
    await ga.escribirArchivo(veterinarias)
}

module.exports = {crearMascota, listarMascota, actualizarMascota, eliminarMascotas};