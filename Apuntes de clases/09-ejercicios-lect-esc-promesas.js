// 09- ejercicio -lec-esc-promesas

/*
Hacer una función que me acepte como parametro una variable con el path del archivo y el contenido
a agregar al contenido del archivo. la función debe tomar estos dos parametrso y leer el archivo como añadir el texto
al final del archivo.  Al final vamoa a leer nuevamente e imprimirlo en cosntola. todo esto debe ser realizado con promesas
promesa de lectura
promesa de escritura
 */

const fs = require('fs');

function promesaLeerArchivo(path) {
    const promesaLectura = new Promise( // definición de la promesa
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if (error) {
                        reject('Error de lectura, habla bien')
                    } else {
                        resolve(contenido, 'bacanisimo pue')
                    }
                }
            )
        }
    )
    return promesaLectura; // devolvemos el  valor de la lectura

}

function promesasEscribirArchivo(path, contenidoActual, nuevocontenido) {

    const promesaLectura = new Promise(   // Definción de la promesa
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + nuevocontenido,
                'utf-8', (error) => {

                    if (error) {
                        reject('Error de escritura')

                    } else {
                        resolve(contenidoActual + nuevocontenido)
                    }
                }
            )
        }
    )
    return promesaLectura
}


function ejercicio(path, nuevoContenido) {

    promesaLeerArchivo(path)
        .then(
            (promesacontenido) => {
                console.log("lectura", promesacontenido);
                return promesasEscribirArchivo(path, promesacontenido, nuevoContenido);

            }
        ).then(
        (promesaContenido) => {
            console.log("Escritura", promesaContenido)
            //return promesasEscribirArchivo(path, promesacontenido, nuevoContenido);
        }
    ).catch(
        (error) => {
            console.log("error v");
        }
    )
        .finally()
}

ejercicio('./06-ejemplo.txt', 'buenas mañanas')


