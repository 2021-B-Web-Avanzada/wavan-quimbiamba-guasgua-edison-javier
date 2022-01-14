//Variables que existen dentro de js

// Mutable  e inmutable
// Reasignar es igualar

var numeroUno = 1;
let numeroDos = 2;

//los tipos de  variables no se necesitan poner
numeroDos = true;
numeroUno = false;
///** Variables inmutables *//
const  conguraciónArchivos  = "PDF"
//CONFIGURACIONES DE ARCHIVOS  = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR
const number = 1; //  numero
const sueldo = 1.2; // numero
const nombre = "Edison"; // String
const apellido = 'Quimbiamba'; // String
const booleano = false; // boleando
const hijo =  null;  // null
const zapatos = undefined; // idenfinido
console.log(typeof numeroDos)
console.log(typeof  Number("asd")) // NaN

if(-1){
    console.log("Negativos es truty")
}else{
    console.log("Negativos es falso")
}

if (0){
    console.log("Certo es truty")
}else {
    console.log("Cero es falso")
}


if(1){
    console.log("Positivos es truty")
} else{
    console.log("Positivos es falso")
}

if(null){
    console.log("Null es truty")
}else{
    console.log("Null es falso")
}
if(undefined){
    console.log("undefined es truty")
}else{
    console.log("undefined es falso")
}

const edison = {
    nombre: "Edison",
    apellido: 'Quimbiamba',
    edad: 32,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{ // objeto
        color: 'Plomo',
        talla: '40',
    },
    mascotas: ['Wilson','Chaulafan', 'Gasper'] // un arreglo
}

// Acceder a propiedades de un objeto

edison.nombre; //Edison
edison.apellido;//
edison["nombre"];
console.log(edison["nombre"])

//edison.nombre="Javier"
//edison["nombre"]= "wilson"
//console.log(edison.nombre)
//console.log(edison["sueldo"])
//edison.sueldo = 120
//console.log(edison.sueldo)

//edison.nombre  = undefined
//console.log(edison.nombre)

//console.log(Object.keys(edison))
//console.log(Object.values(edison))

// delete  edison.nombre; // elimina la llave "nombre"
// console.log(edison.nombre)
//
// let edadEdison = 32
// let edadJavier = edadEdison
//
// edadEdison= edadEdison +1
// console.log(edadEdison)
// console.log(edadJavier)
//
//
// //////Variables por referencia: OBJECT ({} [])
// let rafael = {
//     nombre: "Rafael"
//
// }
//
// let lenin = rafael
// delete rafael.nombre
// console.log(rafael)
// console.log(lenin)

/*
let  rafael ={
    nombre: "Rafael"

}
let lenin = Object.assign({},rafael)
console.log(rafael);
console.log(lenin);++

lenin.nombre ="Lenin"
delete rafael.nombre

console.log(rafael);
console.log(lenin);
*/

let arregloNumeros = [1,2,3,4,5];
let arregloClonado = Object.assign([], arregloNumeros)
console.log(arregloNumeros)
console.log(arregloClonado)
arregloNumeros[0]=200
arregloClonado[0]=100
console.log(arregloNumeros)
console.log(arregloClonado)

