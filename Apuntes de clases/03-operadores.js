const arreglo = [
    {id:1,
    nombre: "Edison",
    nota:5},
    {
        id:2,
        nombre: 'Carolina',
        nota:14
    },
    {
        id:3,
        nombre: "Carolina",
        nota: 14,
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    }
];

//Funciones como parametros
//Enviamos ---> truty  Falsy
///Devuelve el primero que cumpla con esa condición

const  respuestaFind = arreglo.find(
    function (valorActual,indiceActual,arreglocompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual',indiceActual);
        console.log('ArregloCompleto', arreglocompleto);
        return valorActual.nombre=== "Edison";
    }
);

const respuestaIndex = arreglo.findIndex(

    function (valorActual, number, arregloCompleto){

        return  valorActual.nombre === "Edison"
    }
)
console.log('respuestaIndex', respuestaIndex);

const respuestaForEach = arreglo.forEach(

    function (valorActual, indiceActual,arreglocompleto){
        console.log('valorActual', valorActual)
    }

);

console.log(respuestaForEach)


const respuestaMap = arreglo
    .map(
       function (valorActual, indiceActual, arregloCompleto) {
            const nuevoElemento={
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: valorActual.nota +1,
            };
            return nuevoElemento
        }
    )

console.log(respuestaMap)

const respuestaFilter = arreglo.filter(
    function (valorActual, indiceActual, arregloCompleto){

        return valorActual.nota>= 14;

    }
)

console.log('Repuesta filter', respuestaFilter)


//some --> expresión
// Devuelve boleano
// si alguno cumple  devuelve  verdadero
// si una nota es menor a 9  devuelve si solo una devuelve  devuelve verdadero

const respuestaSome = arreglo.some(

    function (valorActual, indiceActual, arregloCompleto){
        return valorActual.nota <9;
    }
)
console.log('respuestaSome', respuestaSome );


//Every --> expresión

// devuelven booleano
// todos los elementos cumplen la condición entonces ahi devuelve un verdadero

const respuestaEvery = arreglo.every(
    function (valoractual, indiceActual, arregloCompleto){
        return valoractual.nota >14
    }
)
console.log("RespuestaEvery", respuestaEvery)


const respuestaReduce = arreglo.reduce(

    function (valorAcumulado,valorActual, indice, arregleo){
        return (valorAcumulado -valorActual.nota)
    },
    100
)
console.log('valorAcumulado', respuestaReduce)