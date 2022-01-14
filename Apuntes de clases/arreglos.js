// //02-arreglos.js
//
// let  arreglo = [ 6,7,8,9,10];
// // arreglo=1;
// // arreglo = true;
// // arreglo = undefined;
// // arreglo = null;
// // arreglo = {};
// arreglo = [true, 1,1.1,"Edison", "Quimbiamba", undefined, null, {},[1,2]]  //  tambien  dentro de el puede  tener cualquier  cosa
//
// for (let numero of arreglo){    // aki tenemos valores
//     console.log('numero', numero )
// }
//
// //for in tenemos los indices
// for (let indice in arreglo){
//     arreglo[indice];
//     console.log("indice",indice)
// }
//
// let objetoPrueba ={ a: '1',
//     b:'2', c:'3'}; // aqui tenemos un objeto
// for (let llave in objetoPrueba) {
//     console.log('llave',llave)
// }
//
 let  arreglo = [5,6,8,9,10]
// console.log(arreglo)
// arreglo.push(11)
// console.log(arreglo)
// arreglo.pop(); // Eliminamos al final de un elemento
// console.log(arreglo)
//
// arreglo.unshift(5);// añadimos al inicio del arreglo
// console.log(arreglo)
//arreglo.splice(3,1,1515)
console.log(arreglo)
const indiceNueve = arreglo.indexOf(9)// encuentra el primer elemento  y devuelve el indice
console.log(indiceNueve)
console.log(arreglo.splice(indiceNueve,2))