const promesasLeerArchivo = () => {

    return new Promise(
        (res, rej) => {
            res('Contenido leer Archivo');
        }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('CONTENIDO ESCRIBIR ARCHIVO')
        }
    );
}

// const  ejemplo1 = async function (){}
// const ejemplo1 = async () => {}

async  function ejercicio(){
    console.log('1')
    let nuevoContenido = '';
    try{
        console.log('2');
        const  contenidoArchivoActual = await  promesasLeerArchivo();
        console.log(contenidoArchivoActual)
        console.log(3);
        nuevoContenido = await promesasLeerArchivo();
        console.log(nuevoContenido)
        console.log('5')
    }catch (error){
        console.error(error)
    }
    console.log('6');
    console.log('7');
    return nuevoContenido
}

ejercicio(
).then(
    (data) =>{
        console.log("Esta es la respuesata del Async", data);
    }
).catch().finally();