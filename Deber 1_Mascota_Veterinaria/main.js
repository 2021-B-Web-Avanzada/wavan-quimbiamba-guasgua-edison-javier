const inquirer = require('inquirer');
const crudR = require('./crud-veterinaria.js')
const crudM = require('./crud-mascota.js')

async function menuPrincipal() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Gestión de veterinarias', 'Gestionar Mascotas', 'Salir'],
            },
        ])
        .then(async answers => {
            if (answers['opcion'] === 'Gestión de veterinarias') {
                await menuVeterinaria()
            }
            if (answers['opcion'] === 'Gestionar Mascotas') {
                await menuMascota()
            }
        });

}

async function menuVeterinaria() {
    await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Añadir veterinaria',
                    'Listar Todos las veterinarias',
                    'Actualizar veterinaria',
                    'Eliminar veterinaria',
                    'Regresar', 'Salir']
            },
        ])
        .then(async answers => {
            switch (answers['opcion']) {
                case 'Añadir veterinaria':
                    await crudR.crearVeterinaria().then(r => '')
                    await menuVeterinaria()
                    break
                case 'Listar Todos las veterinarias':
                    await crudR.listarVeterinaria()
                    await menuVeterinaria()
                    break
                case 'Actualizar veterinaria':
                    await crudR.actualizarVeterinaria()
                    await menuVeterinaria()
                case 'Eliminar veterinaria':
                    await crudR.eliminarVeterinaria()
                    await menuVeterinaria()
                    break
                case 'Regresar':
                    await menuPrincipal()
                    break
                case 'Salir':
                    console.log('weno bai!')
                    break
            }

        });
}
async function menuMascota() {
    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'opcion',
                message: 'Seleccione la accion a realizar',
                choices: ['Añadir Mascota',
                    'Listar Todas las Mascota',
                    'Actualizar Mascota',
                    'Eliminar Mascota',
                    'Regresar','Salir']
            },
        ])
        .then(async answers => {
            switch (answers['opcion']) {
                case 'Añadir Mascota':
                    await crudM.crearMascota().then(r => '')
                    await  menuMascota()
                    break
                case 'Listar Todas las Mascota':
                    await crudM.listarMascota().then(r => '')
                    await menuMascota()
                    break
                case 'Actualizar Mascota':
                    await crudM.actualizarMascota().then(r => '')
                    await menuMascota()
                    break
                case 'Eliminar Mascota':
                    await crudM.eliminarMascotas().then(r => '')
                    await menuMascota()
                    break
                case 'Regresar':
                    await menuPrincipal().then(r => '')
                    await menuMascota()
                    break
                case 'Salir':
                    console.log('Hasta pronto!')
                    await menuMascota()
                    break
            }

        });
}

menuPrincipal().then(r => '')

module.exports ={menuPrincipal,menuMascota,menuVeterinaria}