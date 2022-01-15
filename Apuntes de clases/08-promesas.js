// 08-promesas.js
const fs = require('fs');
function promesaEspar(numero){

    const miPrimeraPromesa = new Promise( // definición de la promesa
        (resolve,reject)=>{
            if(numero%2 === 0){
                resolve(numero)
            }else{
                reject('No es par = (');
            }

        }

    )
    return miPrimeraPromesa;
}

function  promesaElevarAlcuadrado(numero){

    const  miPrimeraPromesa = new  Promise( // Definición de la promesa
        (resolve,reject) =>{
            const numeroElevadoAlCuadrado = Math.pow(numero,2)
            resolve(numeroElevadoAlCuadrado)
        }
     );

    return miPrimeraPromesa;
}

promesaEspar(6)
.then(
    (datosPromesa)=>{
        console.log(datosPromesa);
    }
) //try

.then(
    (datosElevarAlCuadrado) =>{
        return promesaElevarAlcuadrado(datosElevarAlCuadrado)
        console.log(datosElevarAlCuadrado)
    }
)
.catch(
    (error)=> {
        console.log(error)
    }
)
.finally() //finally