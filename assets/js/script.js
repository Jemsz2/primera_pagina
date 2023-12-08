let myVariable = 7

let tipoNumero = 45
let tipoCadena = "45"
let tipoBooleano = false

let tipoIndefinido = undefined
let tipoVacío = null

let tipoLista = [
50,
77,
29,
100,
47,
"jose",
"hp",
"philips",


]

let tipoObjeto = {
name: "jose",
email: "jmes470@gmail.com",
pass: "1234",


}


let usuario = [
"jose",
"jmes479@gmail.com",
"1234",

]


/** 
 *  OPERADORES MATEMATICOS
 * 
 * + SUMA O ADICION
 * - MENOS O SUSTRACCION
 * * MULTIPLICACIÓN
 * / DIVISION
 * % SE UTILIZA PARA SACAR EL RESIDUO DE LA DIVISON (EL RESTO DE LA DIVISION ENTRE)
 * 
 *  OPERADORES LOGICOS
 * 
 * = (NO ES UN IGUAL) OPERADOR DE ASIGNACIÓN
 * == ESTO SI ES IGUALDAD
 * === IGUALDAD CON TIPADO ES PARA COMPARAR LOS TIPOS DE DATOS
 * != NEGACION (NO ES IGUAL)
 * !== NEGACION CON TIPADO
 * > MAYOR QUE
 * < MENOR QUE 
 * >= MAYOR O IGUAL QUE 
 * <= MENOR O GIUAL QUE
 * 
*/

let variable1 = 5
let variable2 = undefined
let variable3 = 8
let variable4 = 2
let variable5 = false
let variable6 = 0



console.log()


if(true) console.log("Se cumplió")
else console.log("No se cumple")

/**
 * Operador ternario 
 */

/* 
true ? 
    console.log("Se cumple")
    :console.log("No se cumple")
*/

/**
 * cree una funcion que valide si un numero es par o impar. De ser par, retorne "Par": string, de ser impar, retorne "Impar": string
 * 
 */

/*
function MyFuncion (num1, num2, validacion) {

return validacion 
     ? num1 + num2 
     : num1 - num2

}

console.log( MyFuncion(3, 8, true) )
*/








/*
let Callback = () => {
  console.log('Se ejecutó el callback')

}





setTimeout( Callback , 5000 )

*/




console.log(axios.get("https://leonardoapi.onrender.com/music"))

axios.get("https://leonardoapi.onrender.com/music") 
    .then((res) => {
    console.log(res.data)

})