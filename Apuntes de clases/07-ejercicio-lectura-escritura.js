

/*
hacer una función que me acepte como parametro una variable con el path
del archivo y el contenido a agregar al contenido del archivo la función
debe tomar estos dos parametros y leer el archivo y añadir el texto al final
del archivo
 */

const fs = require('fs'); // file system
console.log('PRIMERO')
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido) => {
        if (error){
        }else{
            console.log(contenido)
            fs.readFile(
                './06-callbacks.js',
                'utf-8',
                (error,contenido)=>{
                    if(error){
                        //console.error({mensaje: 'error leyendo el contenido', error:error});
                    }else{
                        console.log(contenido)
                    }
                }
            )
        }
    }
);


function  escribirArchivo(path, contenidoNuevo){
    fs.appendFile(path,contenidoNuevo,(error)=>{
        if (error){
            throw error;
        }
        console.log('El archivo ha sido guardado satisfactoriamento')

    });
}

escribirArchivo('./06-ejemplo.txt','ola k ac')