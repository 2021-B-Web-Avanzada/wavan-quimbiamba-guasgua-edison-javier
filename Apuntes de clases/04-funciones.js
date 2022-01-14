//04- funciones

function  soloNumeros (a,b,c){
    return a-b+c
}
// JS permite el uso de funciones sin validaciones
//  soloNumeros('v', true, [1,2,3,4]);

function soloLetras (a,b,c){ // esta es una función que no devuelva udefined
    console.log(a,b,c)
}

//TIPOS DE FUNCIONES

//FUNCIONES NOMBRADAS  -- named functions

function funcionNombrada(){

}
// una  función anonima las podemos igualar a una variable
const funcionSinNombre1 = function () { }; // esta es  una función anonima si permite el lenguaje pero no tiene sentid

var funcionSinNombre2 = function (){}; // llamamos como que fuera una función nombrada
let funcionSinNombre3 = function (){};
funcionSinNombre2()
funcionSinNombre3()
funcionSinNombre1()

// Funciones anónimas - Fat Arrow functions

const funcionFatArrow1 = () =>{ };
var funcionFatArrow2  = () =>{};
let funcionFatArrow3 = () =>{};
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionSinNombre3();

const  funcionFatArrow4 = () =>{}; // podemos tener una función sin parametros

const funcionFatArrow5 = (x) =>{ // funcion que le pasamos parámetro x y retorna una operación
    return x+1;
};

const funcionFatArrow6  = (x) => x+1; //  aqui solo podemos hacer operaciones sencillas.
// ademas puedo omitir el return y también puedo omitir las llaves  de ser necesarios

const funcionFatArrow7 = x => x+1;
const  funcionFatArrow8 =( x,y,z) => x+y +z;

/// FUNCIONES CON PARAMETROS INFINITOS

function sumarNumeros (...otrosNumeros){
    let total = 0;
     otrosNumeros.forEach(
         (valorActual) =>{
             total = total + valorActual;
         }
     );
     return total;
     //return otrosNumeros.reduce((a,v) => a+v,0)
}

sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)







