const inquirer = require("inquirer");
const crudMascota = require('./crud-mascota.js');
const crudVeterinaria = require('./crud-veterinaria.js');


async function menuPrincipal() {
    await inquirer
        .prompt(
            [
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'Seleccione el  modulo que desea ingresar',
                    choices: ['Veterinarias Disponibles', 'Gestión de mascotas', 'salir'],
                },
            ]).then(
            async answers => {

                if (answers['opcion'] === 'Veterinarias Disponibles') {
                    await menuVeterinaria();
                }
                if (answers['opcion'] === 'Gestión de mascotas') {
                    await menuMascotas();
                }
            }
        );

}

async function menuVeterinaria() {
    await inquirer
        .prompt(
            [
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: 'Seleccione la acción a realizar',
                    choices: [
                        'Registrar veterinaria',
                        'Lista de veterinarias',
                        'Actualizar veterinarias',
                        'Eliminar veterinarias',
                        'Regresar',
                        'Salir']
                },
            ]
        ).then(async answers => {

            switch (answers['opcion']) {
                case 'Registrar veterinaria':
                    await crudVeterinaria.crearVeterinaria().then(r => '')
                    await menuVeterinaria()
                    break

                case  'Lista de veterinarias':
                    await crudVeterinaria.listarVeterinarias()
                    await menuVeterinaria()
                    break

                case 'Actualizar veterinarias':
                    await crudVeterinaria.actualizarVeterinaria()
                    await menuVeterinaria()
                    break
                case 'Eliminar veterinarias':
                    await crudVeterinaria.eliminarVeterinaria();
                    await menuVeterinaria();
                    break
                case 'Regresar':
                    await menuPrincipal()
                    break
                case 'Salir':
                    console.log('Weno bai')
                    break
            }
        }
    )
}



function  menuMascotas(){

}


menuPrincipal().then(r => '')

module.exports ={menuPrincipal,menuMascotas}