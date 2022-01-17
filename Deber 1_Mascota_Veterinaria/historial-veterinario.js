const fs = require('fs')

const escribirArchivo = (datos) => {
    return new Promise(
        (resolve, reject) => {

            fs.writeFile('/.datos.txt',
                JSON.stringify(datos, null, '\t'), 'utf-8',

                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        console.log('Acción satisfactoria')
                        resolve();
                    }

                }
            )
        }
    )


}

module.exports = { escribirArchivo}