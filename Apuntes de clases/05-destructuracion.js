//05-destructuracion.js
//Destructuración de objetos
const edison ={

    nombre: "Edison ",
    apellido: "Quimbiamba"
};

const  leonel ={
    nombre: "Leonel",
    apellido: "Yepez"
}

const edisonLeonel = { // Crean una nueva referencia
    ... edison, // 1 el orden es importante para propiedades que se repiten
    ... leonel // 2 el último reemplaza a los anteriores
}
console.log("adrianCarolina",edisonLeonel)

const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];

const superArreglo = [
    ...arregloUno,
    ...arregloDos

];
console.log("superArreglo", superArreglo)

