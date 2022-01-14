//06 -- callbacks.js
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
                        console.error({mensaje: 'error leyendo el contenido', error:error});
                    }else{
                        console.log(contenido)
                    }
                }
            )
        }
    }
);
console.log('TERCERO')